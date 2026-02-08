// ===== MENU HAMBURGUER =====
const menuToggle = document.querySelector("#menu-toggle");
const navLinks = document.querySelector("#nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

// ===== MODAL SOBRE =====
const aboutModal = document.querySelector("#aboutModal");
const openAbout = document.querySelector("#openAbout");
const closeAbout = document.querySelector("#closeAbout");

if (aboutModal && openAbout && closeAbout) {
  openAbout.addEventListener("click", () => {
    navLinks?.classList.remove("active");
    aboutModal.showModal();
  });

  closeAbout.addEventListener("click", () => aboutModal.close());

  aboutModal.addEventListener("click", (e) => {
    const rect = aboutModal.getBoundingClientRect();
    const inside =
      e.clientX >= rect.left && e.clientX <= rect.right &&
      e.clientY >= rect.top && e.clientY <= rect.bottom;
    if (!inside) aboutModal.close();
  });
}

// ===== VIEWER MODAL (IMAGEM + DESCRIÇÃO) =====
const viewerModal = document.querySelector("#viewerModal");
const viewerImg = document.querySelector("#viewerImg");
const viewerTitle = document.querySelector("#viewerTitle");
const viewerDesc = document.querySelector("#viewerDesc");
const viewerClose = document.querySelector("#viewerClose");

function openViewerFromItem(item) {
  const img = item.dataset.img;
  const title = item.dataset.title;
  const desc = item.dataset.desc;

  viewerImg.src = img;
  viewerImg.alt = title;
  viewerTitle.textContent = title;
  viewerDesc.textContent = desc;

  viewerModal.showModal();
}

viewerClose?.addEventListener("click", () => viewerModal.close());

viewerModal?.addEventListener("click", (e) => {
  const rect = viewerModal.getBoundingClientRect();
  const inside =
    e.clientX >= rect.left && e.clientX <= rect.right &&
    e.clientY >= rect.top && e.clientY <= rect.bottom;
  if (!inside) viewerModal.close();
});

// ===== CAROUSEL LOOP REAL (STEAM-LIKE) =====
const viewport = document.querySelector("#carouselViewport");
const track = document.querySelector("#carouselTrack");
const prevBtn = document.querySelector("#carouselPrev");
const nextBtn = document.querySelector("#carouselNext");

let running = true;
let x = 0;                 // deslocamento atual do track (px)
let speed = 0.65;          // velocidade base (px por frame)
let push = 0;              // “empurrão” temporário dos botões
let rafId = null;

function setupInfinite() {
  if (!track) return;

  // Duplicar itens até preencher bem o viewport (evita buracos)
  const baseItems = Array.from(track.children);
  if (baseItems.length < 2) return;

  // remove duplicados antigos (se recarregar)
  track.querySelectorAll("[data-clone='1']").forEach(n => n.remove());

  // calcula quantas cópias precisa
  const viewportW = viewport.clientWidth || 1000;
  let totalW = track.scrollWidth;
  let safety = 0;

  while (totalW < viewportW * 2.2 && safety < 10) {
    baseItems.forEach((it) => {
      const clone = it.cloneNode(true);
      clone.dataset.clone = "1";
      track.appendChild(clone);
    });
    totalW = track.scrollWidth;
    safety++;
  }

  // Bind click em todos (originais e clones)
  bindItemClicks();
}

function bindItemClicks() {
  track.querySelectorAll(".carousel-item").forEach((item) => {
    if (item.dataset.bound === "1") return;
    item.dataset.bound = "1";
    item.addEventListener("click", () => openViewerFromItem(item));
  });
}

function step() {
  if (!track) return;

  // aplica empurrão com “decay” (parece Steam, suave)
  push *= 0.90;

  // anda para esquerda (itens indo para a esquerda)
  x -= (speed + push);

  // reciclagem real: se o primeiro item saiu totalmente da tela, manda pro final
  // regra: enquanto o primeiro + gap estiver fora, move.
  let first = track.firstElementChild;
  while (first) {
    const firstW = first.getBoundingClientRect().width;
    // gap entre cards (precisa bater com o CSS: 14px)
    const gap = 14;
    if (-x >= firstW + gap) {
      x += (firstW + gap);
      track.appendChild(first);
      first = track.firstElementChild;
      continue;
    }
    break;
  }

  track.style.transform = `translateX(${x}px)`;

  if (running) rafId = requestAnimationFrame(step);
}

function start() {
  if (running) return;
  running = true;
  rafId = requestAnimationFrame(step);
}

function stop() {
  running = false;
  if (rafId) cancelAnimationFrame(rafId);
  rafId = null;
}

// inicia
if (viewport && track) {
  setupInfinite();
  running = true;
  rafId = requestAnimationFrame(step);

  // pausa no hover (Steam-like)
  viewport.addEventListener("mouseenter", () => {
    // mantém a posição, só pausa a animação
    stop();
  });

  viewport.addEventListener("mouseleave", () => {
    start();
  });

  // reajusta ao redimensionar
  window.addEventListener("resize", () => {
    setupInfinite();
  });
}

// botões: empurram o carrossel (suave, sem “pulo”)
prevBtn?.addEventListener("click", () => {
  // empurra pra direita (voltar)
  push -= 16;
});

nextBtn?.addEventListener("click", () => {
  // empurra pra esquerda (avançar)
  push += 16;
});
