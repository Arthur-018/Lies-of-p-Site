// ==================================================
// LIES OF P - script.js COMPLETO
// ✅ Menu hambúrguer
// ✅ Modal "Sobre" (fecha no botão e clicando fora)
// ✅ Viewer modal (imagem + descrição)
// ✅ Carousel Steam-like (loop real)
// ✅ Voltar (Prev) só até o que já passou (backBudget)
// ==================================================

// ===============================
// MENU HAMBURGUER
// ===============================
const menuToggle = document.querySelector("#menu-toggle");
const navLinks = document.querySelector("#nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

// ===============================
// MODAL SOBRE
// ===============================
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

// ===============================
// VIEWER MODAL (IMAGEM + DESCRIÇÃO)
// ===============================
const viewerModal = document.querySelector("#viewerModal");
const viewerImg = document.querySelector("#viewerImg");
const viewerTitle = document.querySelector("#viewerTitle");
const viewerDesc = document.querySelector("#viewerDesc");
const viewerClose = document.querySelector("#viewerClose");

function openViewerFromItem(item) {
  const img = item.dataset.img || "";
  const title = item.dataset.title || "";
  const desc = item.dataset.desc || "";

  if (viewerImg) {
    viewerImg.src = img;
    viewerImg.alt = title;
  }
  if (viewerTitle) viewerTitle.textContent = title;
  if (viewerDesc) viewerDesc.textContent = desc;

  viewerModal?.showModal();
}

viewerClose?.addEventListener("click", () => viewerModal?.close());

viewerModal?.addEventListener("click", (e) => {
  const rect = viewerModal.getBoundingClientRect();
  const inside =
    e.clientX >= rect.left && e.clientX <= rect.right &&
    e.clientY >= rect.top && e.clientY <= rect.bottom;
  if (!inside) viewerModal.close();
});

// ===============================
// CAROUSEL ELEMENTOS
// ===============================
const viewport = document.querySelector("#carouselViewport");
const track = document.querySelector("#carouselTrack");
const prevBtn = document.querySelector("#carouselPrev");
const nextBtn = document.querySelector("#carouselNext");

// ===============================
// LISTA DE LOCAIS + DESCRIÇÕES (Base Game)
// ===============================
const LOCATIONS = [
  { c: 1, name: "Krat Central Station", desc: "Área inicial do jogo. Corredores e plataformas servem como tutorial de combate e exploração." },
  { c: 1, name: "Krat Central Station Plaza", desc: "Praça em frente à estação — espaço mais aberto, com rotas e primeiros atalhos importantes." },
  { c: 1, name: "Cerasani Alley", desc: "Becos estreitos e sombrios. Ótimo para loot e emboscadas em espaços apertados." },
  { c: 1, name: "Hotel Krat", desc: "Hub principal. NPCs, upgrades, side quests e progressão de sistemas do jogo." },

  { c: 2, name: "Elysion Boulevard Entrance", desc: "Entrada do boulevard. Ruas destruídas, perigo constante e muita exploração vertical." },
  { c: 2, name: "Inside the House on Elysion Boulevard", desc: "Interior de casas/ambientes fechados. Combate mais técnico e corredores com surpresa." },
  { c: 2, name: "Krat City Hall", desc: "Prefeitura de Krat. Área urbana com patrulhas e rotas conectando regiões." },
  { c: 2, name: "Krat City Hall Courtyard", desc: "Pátio da prefeitura. Espaço aberto com pressão de inimigos e visão ampla do cenário." },
  { c: 2, name: "Hotel Krat", desc: "Retorno ao hub para avançar quests, vender/comprar e evoluir equipamentos." },

  { c: 3, name: "Workshop Union Entrance (Part 1)", desc: "Entrada do complexo industrial. Começa a vibe ‘fábrica’ com caminhos múltiplos." },
  { c: 3, name: "Workshop Union Culvert", desc: "Dutos/esgoto industrial. Rotas estreitas, armadilhas e posicionamento." },
  { c: 3, name: "Workshop Union Entrance (Part 2)", desc: "Continuação do complexo. Mais verticalidade e interligações para atalhos." },
  { c: 3, name: "Venigni Works Control Room", desc: "Sala de controle. Progressão guiada com itens e informações importantes." },
  { c: 3, name: "Centre of Venigni Works", desc: "Coração da fábrica. Combates mais pesados e sensação de escala industrial." },
  { c: 3, name: "Hotel Krat", desc: "Hub — preparar build e ajustar equipamentos." },

  { c: 4, name: "Moonlight Town", desc: "Vila abandonada no caminho da catedral. Atmosfera tensa e exploração cuidadosa." },
  { c: 4, name: "Path of Misery", desc: "Estrada sombria até a catedral. Travessia perigosa com bons recursos." },
  { c: 4, name: "St. Frangelico Cathedral Chapel", desc: "Entrada da catedral. Interiores altos e rotas elevadas." },
  { c: 4, name: "St. Frangelico Cathedral Library", desc: "Biblioteca vertical, com caminhos em andares e sensação de labirinto." },
  { c: 4, name: "Archbishop’s Altar", desc: "Trecho final do capítulo. Clima de clímax e confrontos decisivos." },
  { c: 4, name: "Hotel Krat", desc: "Hub — novas interações e progressões após a catedral." },
];

// ===============================
// GERADOR DE CARDS (img/locations/)
// ===============================
function slugify(name) {
  return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[’']/g, "")
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "");
}

function buildItem(loc) {
  const ch = String(loc.c).padStart(2, "0");
  const slug = slugify(loc.name);
  const imgPath = `img/locations/ch${ch}_${slug}.jpg`;

  const el = document.createElement("article");
  el.className = "carousel-item";
  el.dataset.title = loc.name;
  el.dataset.desc = loc.desc;
  el.dataset.img = imgPath;

  el.innerHTML = `
    <img src="${imgPath}" alt="${loc.name}">
    <p>Cap. ${loc.c} — ${loc.name}</p>
  `;
  return el;
}

// ✅ POPULA O TRACK (se você usa <article> fixo no HTML, comente esse bloco)
if (track) {
  track.innerHTML = "";
  LOCATIONS.forEach((loc) => track.appendChild(buildItem(loc)));
}

// ===============================
// CLIQUES NOS CARDS (inclui clones)
// ===============================
function bindItemClicks() {
  if (!track) return;
  track.querySelectorAll(".carousel-item").forEach((item) => {
    if (item.dataset.bound === "1") return;
    item.dataset.bound = "1";
    item.addEventListener("click", () => openViewerFromItem(item));
  });
}
bindItemClicks();

// ===============================
// CAROUSEL - LOOP REAL + LIMITADOR DE VOLTA
// ===============================
let running = true;
let x = 0;

// velocidade base (autoplay)
let baseSpeed = 1.15; // mais rápido

// velocidade extra (impulso de clique)
let vx = 0;

// limites/decay
const VX_MAX = 42;
const DECAY = 0.90;

// gap (tem que bater com o CSS)
const GAP = 14;

let rafId = null;

// ✅ CRÉDITO: quantos cards já passaram (logo, quantos você pode voltar)
let backBudget = 0;

function setPrevLocked(isLocked) {
  if (!prevBtn) return;
  prevBtn.style.opacity = isLocked ? "0.55" : "1";
  prevBtn.style.cursor = isLocked ? "not-allowed" : "pointer";
}

function bumpPrevLocked() {
  if (!track) return;
  track.style.transition = "transform 120ms ease";
  const oldX = x;
  x = oldX - 10;
  track.style.transform = `translateX(${x}px)`;
  setTimeout(() => {
    x = oldX;
    track.style.transform = `translateX(${x}px)`;
    setTimeout(() => (track.style.transition = ""), 140);
  }, 90);
}

function setupInfinite() {
  if (!track || !viewport) return;

  // remove clones antigos
  track.querySelectorAll("[data-clone='1']").forEach((n) => n.remove());

  const baseItems = Array.from(track.children);
  if (baseItems.length < 2) return;

  const viewportW = viewport.clientWidth || 1000;
  let totalW = track.scrollWidth;
  let safety = 0;

  // duplica até ter sobra suficiente pros dois lados
  while (totalW < viewportW * 2.6 && safety < 30) {
    baseItems.forEach((it) => {
      const clone = it.cloneNode(true);
      clone.dataset.clone = "1";
      track.appendChild(clone);
    });
    totalW = track.scrollWidth;
    safety++;
  }

  // reset
  x = 0;
  vx = 0;
  backBudget = 0;
  setPrevLocked(true);

  bindItemClicks();
}

function step() {
  if (!track) return;

  // decay do impulso
  vx *= DECAY;

  // dx: base sempre empurra pra esquerda
  // vx pode ser + (mais rápido pra esquerda) ou - (voltar pra direita)
  let dx = baseSpeed + vx;

  // ✅ se dx quer ir pra direita (dx < 0), só permite se backBudget > 0
  if (dx < 0 && backBudget <= 0) {
    dx = 0; // trava total, não volta
  }

  // aplica deslocamento
  x -= dx;

  // ===== RECICLAR PRA ESQUERDA (avançando) =====
  // quando o primeiro item some à esquerda, joga pro final
  // e ganha 1 crédito de volta
  let first = track.firstElementChild;
  while (first) {
    const w = first.getBoundingClientRect().width;
    if (-x >= w + GAP) {
      x += (w + GAP);
      track.appendChild(first);
      first = track.firstElementChild;

      backBudget++;
      if (backBudget > 0) setPrevLocked(false);
      continue;
    }
    break;
  }

  // ===== RECICLAR PRA DIREITA (voltando) =====
  // se x ficou positivo, significa que você puxou demais pra direita:
  // vamos trazer itens do fim pro começo, mas APENAS enquanto houver crédito.
  while (x > 0.001) {
    if (backBudget <= 0) {
      x = 0; // trava no limite do "nada antes"
      break;
    }

    const last = track.lastElementChild;
    if (!last) break;

    const w = last.getBoundingClientRect().width;

    // move 1 card do fim pro começo
    track.prepend(last);
    x -= (w + GAP);

    // consumiu 1 "volta"
    backBudget--;
  }

  // trava visual do prev
  if (backBudget <= 0) setPrevLocked(true);

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

// init
if (viewport && track) {
  setupInfinite();
  rafId = requestAnimationFrame(step);

  // pausa no hover (opcional)
  viewport.addEventListener("mouseenter", stop);
  viewport.addEventListener("mouseleave", start);

  window.addEventListener("resize", setupInfinite);
}

// Botões
nextBtn?.addEventListener("click", () => {
  // impulso pra esquerda
  vx = Math.min(vx + 18, VX_MAX);
});

prevBtn?.addEventListener("click", () => {
  // só volta se tiver crédito
  if (backBudget <= 0) {
    setPrevLocked(true);
    bumpPrevLocked();
    return;
  }

  // impulso pra direita forte o suficiente pra vencer baseSpeed
  vx = Math.max(vx - 22, -VX_MAX);
});
