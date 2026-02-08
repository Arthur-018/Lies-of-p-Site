// Enciclopédia de Inimigos — Lies of P
// Categorias clicáveis -> lista aparece apenas após clicar na categoria
// Clique no inimigo -> mostra descrição + imagem do inimigo + local (capítulo) + imagem do local

const BASE_ENEMIES = [
  // 1) Marionetes (Puppets)
  {
    id: "marionete-basica",
    name: "Marionete Básica",
    category: "Marionetes (Puppets)",
    description:
      "Autômatos comuns da cidade de Krat. Atacam com golpes simples e servem como o padrão de combate: pressionam em sequência curta e punem distrações.",
    img: "../img/enemies/marionete_treino.jpg",
    location: {
      name: "Krat Central Station Lobby",
      chapter: "Capítulo 1",
      img: "../img/locations/krat_central_station_lobby.jpg",
    },
  },
  {
    id: "marionete-policial",
    name: "Marionete Policial (Police Puppet)",
    category: "Marionetes (Puppets)",
    description:
      "Versão mais agressiva, com investidas e golpes mais firmes. Costuma punir cura e avanços mal calculados.",
    img: "../img/enemies/marionete_policial.jpg",
    location: {
      name: "Krat Central Station Lobby",
      chapter: "Capítulo 1",
      img: "../img/locations/krat_central_station_lobby.jpg",
    },
  },
  {
    id: "marionete-choque",
    name: "Marionete de Choque",
    category: "Marionetes (Puppets)",
    description:
      "Modelos com eletrificação: podem aplicar Choque (Shock) e atrapalhar sua recuperação de stamina. Evite trocar golpes em sequência.",
    img: "../img/enemies/marionete_choque.jpg",
    location: {
      name: "Center of Venigni Works",
      chapter: "Capítulo 3",
      img: "../img/locations/center_of_venigni_works.jpg",
    },
  },
  {
    id: "marionete-lancadora",
    name: "Marionete Lançadora (Thrower)",
    category: "Marionetes (Puppets)",
    description:
      "Ataca à distância com arremessos (bombas/itens). Pressione com cuidado e quebre a linha de ataque usando ângulos e cobertura.",
    img: "../img/enemies/marionete_arremesso.jpg",
    location: {
      name: "Rosa Isabelle Street Entrance",
      chapter: "Capítulo 6",
      img: "../img/locations/rosa_isabelle_street_entrance.jpg",
    },
  },
  {
    id: "marionete-criada",
    name: "Marionete Criada (Maid Puppet)",
    category: "Marionetes (Puppets)",
    description:
      "Rápida e insistente, com sequências curtas. Cuidado com ataques em diagonal e com contra-ataques após esquivas.",
    img: "../img/enemies/marionete_maid.jpg",
    location: {
      name: "Estella Opera House Stage",
      chapter: "Capítulo 6",
      img: "../img/locations/estella_opera_house_stage.jpg",
    },
  },
  {
    id: "marionete-mordomo",
    name: "Marionete Mordomo (Butler Puppet)",
    category: "Marionetes (Puppets)",
    description:
      "Mais resistente e com alcance maior. Normalmente tem golpes com atraso (timing) para punir esquiva cedo.",
    img: "../img/enemies/marionete_butler.jpg",
    location: {
      name: "Lorenzini Arcade",
      chapter: "Capítulo 5",
      img: "../img/locations/lorenzini_arcade.jpg",
    },
  },
  {
    id: "cao-marionete",
    name: "Cão-Marionete",
    category: "Marionetes (Puppets)",
    description:
      "Quadrúpede veloz. Costuma pular e morder em sequência. Mantenha a distância controlada e finalize após a investida.",
    img: "../img/enemies/marionete_cao.jpg",
    location: {
      name: "Krat Central Station Lobby",
      chapter: "Capítulo 1",
      img: "../img/locations/krat_central_station_lobby.jpg",
    },
  },
  {
    id: "marionete-atiradora",
    name: "Marionete Atiradora (Shooter Puppet)",
    category: "Marionetes (Puppets)",
    description:
      "Atira de longe e força você a se mover sob pressão. Use cobertura e avance após o disparo para punir a recuperação.",
    img: "../img/enemies/marionete_atiradora.jpg",
    location: {
      name: "Krat Central Station Lobby",
      chapter: "Capítulo 1",
      img: "../img/locations/krat_central_station_lobby.jpg",
    },
  },
  {
    id: "marionete-aranha",
    name: "Marionete de Aranha (Opera House)",
    category: "Marionetes (Puppets)",
    description:
      "Marionete com movimentos irregulares e alcance estranho. Espere o avanço e puna quando ela terminar a sequência.",
    img: "../img/enemies/marionete_aranha.jpg",
    location: {
      name: "Estella Opera House Stage",
      chapter: "Capítulo 6",
      img: "../img/locations/estella_opera_house_stage.jpg",
    },
  },
  {
    id: "marionete-carroca",
    name: "Marionete Gigante de Carroça",
    category: "Marionetes (Puppets)",
    description:
      "Brutamontes que bate com peças grandes. Ataques pesados e lentos — jogue no 'bate e sai' e puna o recovery.",
    img: "../img/enemies/marionete_carroca.jpg",
    location: {
      name: "Krat Central Station Lobby",
      chapter: "Capítulo 1",
      img: "../img/locations/krat_central_station_lobby.jpg",
    },
  },

  // 2) Carcaças e Mutantes (Carcasses)
  {
    id: "carcaca-basica",
    name: "Carcaça Básica",
    category: "Carcaças e Mutantes (Carcasses)",
    description:
      "Humanos transformados que atacam com as mãos ou armas improvisadas. Padrões mais orgânicos e agressivos.",
    img: "../img/enemies/carcaca_basica.jpg",
    location: {
      name: "St. Frangelico Cathedral Chapel",
      chapter: "Capítulo 4",
      img: "../img/locations/st_frangelico_cathedral_chapel.png",
    },
  },
  {
    id: "carcaca-acida",
    name: "Carcaça Ácida",
    category: "Carcaças e Mutantes (Carcasses)",
    description:
      "Explodem ou cospem ácido ao morrer. Evite ficar colado e finalize com cuidado para não tomar respingos.",
    img: "../img/enemies/carcaca_acida.jpg",
    location: {
      name: "St. Frangelico Cathedral Chapel",
      chapter: "Capítulo 4",
      img: "../img/locations/st_frangelico_cathedral_chapel.png",
    },
  },
  {
    id: "carcaca-tentaculos",
    name: "Carcaça de Tentáculos",
    category: "Carcaças e Mutantes (Carcasses)",
    description:
      "Mutações nos braços aumentam bastante o alcance. Mantenha mais espaço do que parece necessário e puna o fim dos golpes.",
    img: "../img/enemies/carcaca_tentaculos.jpg",
    location: {
      name: "St. Frangelico Cathedral Chapel",
      chapter: "Capítulo 4",
      img: "../img/locations/st_frangelico_cathedral_chapel.png",
    },
  },
  {
    id: "cao-mutante",
    name: "Cão Mutante",
    category: "Carcaças e Mutantes (Carcasses)",
    description:
      "Versão orgânica e deformada dos cães. Muito agressivo e rápido — controle câmera e não deixe encurralar.",
    img: "../img/enemies/cao_mutante.jpg",
    location: {
      name: "Barren Swamp",
      chapter: "Capítulo 8",
      img: "../img/locations/barren_swamp.jpg",
    },
  },
  {
    id: "carcaca-urso",
    name: 'Carcaça "Urso"',
    category: "Carcaças e Mutantes (Carcasses)",
    description:
      "Um urso gigante e mutante encontrado no Pântano. Golpes pesados e alcance alto — jogue no 'hit & run'.",
    img: "../img/enemies/carcaca_urso.jpg",
    location: {
      name: "Barren Swamp",
      chapter: "Capítulo 8",
      img: "../img/locations/barren_swamp.jpg",
    },
  },
  {
    id: "carcaca-cristal-cura",
    name: "Carcaça de Cristal de Cura",
    category: "Carcaças e Mutantes (Carcasses)",
    description:
      "Regenera vida ou dá buffs aos inimigos próximos. Prioridade alta: elimine cedo para não prolongar a luta.",
    img: "../img/enemies/carcaca_cristal_cura.jpg",
    location: {
      name: "Barren Swamp",
      chapter: "Capítulo 8",
      img: "../img/locations/barren_swamp.jpg",
    },
  },
  {
    id: "mutante-touro",
    name: "Mutante Touro/Grande",
    category: "Carcaças e Mutantes (Carcasses)",
    description:
      "Criatura massiva com marretadas pesadas. Respeite o timing e castigue apenas após ataques comprometidos.",
    img: "../img/enemies/mutante_touro.jpg",
    location: {
      name: "Barren Swamp",
      chapter: "Capítulo 8",
      img: "../img/locations/barren_swamp.jpg",
    },
  },

  // 3) Humanos e Alquimistas
  {
    id: "stalkers-minion",
    name: "Rastreadores (Stalkers)",
    category: "Humanos e Alquimistas",
    description:
      'Humanos mascarados com estilo de luta parecido com o do P. Existem "minions" (máscaras de animais) espalhados pelo mapa.',
    img: "../img/enemies/stalker_minion.jpg",
    location: {
      name: "Black Seaside",
      chapter: "Capítulo 9",
      img: "../img/locations/black_seaside.jpg",
    },
  },
  {
    id: "soldados-alquimistas",
    name: "Soldados Alquimistas",
    category: "Humanos e Alquimistas",
    description:
      "Guardas de elite encontrados na Abadia de Arche. Combate mais técnico e pressão maior em combos.",
    img: "../img/enemies/soldado_alquimista.jpg",
    location: {
      name: "Arche Abbey Entrance",
      chapter: "Capítulo 10",
      img: "../img/locations/arche_abbey_entrance.jpg",
    },
  },
  {
    id: "atiradores-elite-alquimistas",
    name: "Atiradores de Elite Alquimistas",
    category: "Humanos e Alquimistas",
    description:
      "Usam bestas de repetição e dardos com efeitos de status (Choque ou Perturbação). Corte a linha de visão e avance após o disparo.",
    img: "../img/enemies/atirador_alquimista.jpg",
    location: {
      name: "Arche Abbey Entrance",
      chapter: "Capítulo 10",
      img: "../img/locations/arche_abbey_entrance.jpg",
    },
  },
  {
    id: "experimentos-alquimistas",
    name: "Experimentos Alquimistas",
    category: "Humanos e Alquimistas",
    description:
      'Criaturas tipo "Frankenstein" com braços de metal ou armas pesadas. Ataques amplos e fortes — jogue no stagger e fatal.',
    img: "../img/enemies/experimento_alquimista.jpg",
    location: {
      name: "Arche Abbey Entrance",
      chapter: "Capítulo 10",
      img: "../img/locations/arche_abbey_entrance.jpg",
    },
  },

  // Elite (Mini-bosses)
  {
    id: "marionete-do-futuro",
    name: "Marionete do Futuro",
    category: "Inimigos de Elite (Mini-bosses)",
    description:
      "Robôs gigantes que patrulham áreas perigosas (muitas vezes em pântanos venenosos). Muito resistentes e com golpes devastadores.",
    img: "../img/enemies/marionete_do_futuro.jpg",
    location: {
      name: "Barren Swamp",
      chapter: "Capítulo 8",
      img: "../img/locations/barren_swamp.jpg",
    },
  },
  {
    id: "boxeadores-metal",
    name: "Boxeadores de Metal",
    category: "Inimigos de Elite (Mini-bosses)",
    description:
      "Marionetes grandes com luvas de boxe que dão combos rápidos. Respeite o ritmo e puna as pausas.",
    img: "../img/enemies/boxeador_metal.jpg",
    location: {
      name: "Lorenzini Arcade",
      chapter: "Capítulo 5",
      img: "../img/locations/lorenzini_arcade.jpg",
    },
  },
  {
    id: "mad-clown",
    name: "Palhaço Maluco (Mad Clown)",
    category: "Inimigos de Elite (Mini-bosses)",
    description:
      "Versão recorrente e perigosa. Ataques de alcance alto e pressão. Espere o timing real antes de esquivar.",
    img: "../img/enemies/mad_clown.jpg",
    location: {
      name: "Rosa Isabelle Street Entrance",
      chapter: "Capítulo 6",
      img: "../img/locations/rosa_isabelle_street_entrance.jpg",
    },
  },
  {
    id: "guardioes-porta",
    name: "Guardiões de Porta",
    category: "Inimigos de Elite (Mini-bosses)",
    description:
      "Gigantes blindados que protegem entradas importantes. Alta defesa e ataques pesados — busque stagger e fatal attack.",
    img: "../img/enemies/guardian_porta.jpg",
    location: {
      name: "Arche Abbey Entrance",
      chapter: "Capítulo 10",
      img: "../img/locations/arche_abbey_entrance.jpg",
    },
  },
];


const DLC_ENEMIES = [
  {
    "id": "dlc-marionette-puppet",
    "name": "Marionette Puppet",
    "category": "Marionetes (Puppets)",
    "description": "Puppets coloridos com cabeça pontuda, comuns no DLC.",
    "img": "../img/dlc/enemies/marionette-puppet.png",
    "location": {
      "name": "Carnival Garden",
      "chapter": "DLC Overture",
      "img": "../img/dlc/locations/carnival-garden.png"
    }
  },
  {
    "id": "dlc-miner-puppet",
    "name": "Miner Puppet",
    "category": "Marionetes (Puppets)",
    "description": "Puppet minerador com duas picaretas, agressivo em curto alcance.",
    "img": "../img/dlc/enemies/miner-puppet.png",
    "location": {
      "name": "Ergo Mining Site",
      "chapter": "DLC Overture",
      "img": "../img/dlc/locations/ergo-mining-site.png"
    }
  },
  {
    "id": "dlc-flying-miner-puppet",
    "name": "Flying Miner Puppet",
    "category": "Marionetes (Puppets)",
    "description": "Versão voadora do minerador; ataca de ângulos altos e surpreende.",
    "img": "../img/dlc/enemies/flying-miner-puppet.png",
    "location": {
      "name": "Ergo Mining Site",
      "chapter": "DLC Overture",
      "img": "../img/dlc/locations/ergo-mining-site.png"
    }
  },
  {
    "id": "dlc-mining-machine-carrier-puppet",
    "name": "Mining Machine (Carrier Puppet)",
    "category": "Marionetes (Puppets)",
    "description": "Máquina/puppet que arremessa rochas e causa pressão à distância.",
    "img": "../img/dlc/enemies/mining-machine-carrier-puppet.png",
    "location": {
      "name": "Ergo Mining Site",
      "chapter": "DLC Overture",
      "img": "../img/dlc/locations/ergo-mining-site.png"
    }
  },
  {
    "id": "dlc-grand-mining-machine",
    "name": "Grand Mining Machine",
    "category": "Marionetes (Puppets)",
    "description": "Máquina grande de mineração; golpes pesados e alcance alto.",
    "img": "../img/dlc/enemies/grand-mining-machine.png",
    "location": {
      "name": "Ergo Mining Site",
      "chapter": "DLC Overture",
      "img": "../img/dlc/locations/ergo-mining-site.png"
    }
  },
  {
    "id": "dlc-carnival-sweeper-puppet",
    "name": "Carnival Sweeper Puppet",
    "category": "Marionetes (Puppets)",
    "description": "Puppet do carnaval com vassoura; ataques em arco e empurrões.",
    "img": "../img/dlc/enemies/carnival-sweeper-puppet.png",
    "location": {
      "name": "Carnival Garden",
      "chapter": "DLC Overture",
      "img": "../img/dlc/locations/carnival-garden.png"
    }
  },
  {
    "id": "dlc-crowned-puppet-crowned-carcass",
    "name": "Crowned Puppet (Crowned Carcass)",
    "category": "Marionetes (Puppets)",
    "description": "Criatura com ‘coroa’ congelada; padrão de ataques mais insistente.",
    "img": "../img/dlc/enemies/crowned-puppet-crowned-carcass.png",
    "location": {
      "name": "Frozen Coast",
      "chapter": "DLC Overture",
      "img": "../img/dlc/locations/frozen-coast.png"
    }
  },
  {
    "id": "dlc-arche-puppet",
    "name": "Arche Puppet",
    "category": "Marionetes (Puppets)",
    "description": "Puppet prateada veloz; foca em combos rápidos.",
    "img": "../img/dlc/enemies/arche-puppet.png",
    "location": {
      "name": "Ancient Ruins Excavation Site",
      "chapter": "DLC Overture",
      "img": "../img/dlc/locations/ancient-ruins-excavation-site.png"
    }
  },
  {
    "id": "dlc-arche-puppet-caster",
    "name": "Arche Puppet Caster",
    "category": "Marionetes (Puppets)",
    "description": "Versão conjuradora; ataques à distância com mãos brilhando.",
    "img": "../img/dlc/enemies/arche-puppet-caster.png",
    "location": {
      "name": "Ancient Ruins Excavation Site",
      "chapter": "DLC Overture",
      "img": "../img/dlc/locations/ancient-ruins-excavation-site.png"
    }
  },
  {
    "id": "dlc-kangaroo-carcass",
    "name": "Kangaroo Carcass",
    "category": "Carcaças e Mutantes (Carcasses)",
    "description": "Carcaça ágil que salta e pressiona com investidas rápidas.",
    "img": "../img/dlc/enemies/kangaroo-carcass.png",
    "location": {
      "name": "Hall of Adventure",
      "chapter": "DLC Overture",
      "img": "../img/dlc/locations/hall-of-adventure.png"
    }
  },
  {
    "id": "dlc-fish-carcass",
    "name": "Fish Carcass",
    "category": "Carcaças e Mutantes (Carcasses)",
    "description": "Salta de áreas com água/frio para emboscadas curtas.",
    "img": "../img/dlc/enemies/fish-carcass.png",
    "location": {
      "name": "Sea Cliffs",
      "chapter": "DLC Overture",
      "img": "../img/dlc/locations/sea-cliffs.png"
    }
  },
  {
    "id": "dlc-wolf-carcass",
    "name": "Wolf Carcass",
    "category": "Carcaças e Mutantes (Carcasses)",
    "description": "Carcaça canina rápida; costuma atacar em sequências e flancos.",
    "img": "../img/dlc/enemies/wolf-carcass.png",
    "location": {
      "name": "Strange Forest",
      "chapter": "DLC Overture",
      "img": "../img/dlc/locations/strange-forest.png"
    }
  },
  {
    "id": "dlc-polar-bear-carcass",
    "name": "Polar Bear Carcass",
    "category": "Carcaças e Mutantes (Carcasses)",
    "description": "Inimigo grande e resistente; pressão com agarrões/avanços.",
    "img": "../img/dlc/enemies/polar-bear-carcass.png",
    "location": {
      "name": "Strange Forest",
      "chapter": "DLC Overture",
      "img": "../img/dlc/locations/strange-forest.png"
    }
  },
  {
    "id": "dlc-ape-carcass",
    "name": "Ape Carcass",
    "category": "Carcaças e Mutantes (Carcasses)",
    "description": "Primate corrompido; força e mobilidade médias com pancadas fortes.",
    "img": "../img/dlc/enemies/ape-carcass.png",
    "location": {
      "name": "Zoo Tram Station",
      "chapter": "DLC Overture",
      "img": "../img/dlc/locations/zoo-tram-station.png"
    }
  },
  {
    "id": "dlc-gorilla-carcass",
    "name": "Gorilla Carcass",
    "category": "Carcaças e Mutantes (Carcasses)",
    "description": "Versão maior do primata; golpes pesados e alcance maior.",
    "img": "../img/dlc/enemies/gorilla-carcass.png",
    "location": {
      "name": "Savanna Experience Center",
      "chapter": "DLC Overture",
      "img": "../img/dlc/locations/savanna-experience-center.png"
    }
  },
  {
    "id": "dlc-elephant-carcass",
    "name": "Elephant Carcass",
    "category": "Carcaças e Mutantes (Carcasses)",
    "description": "Carcaça enorme com carga e impacto; costuma guardar rotas.",
    "img": "../img/dlc/enemies/elephant-carcass.png",
    "location": {
      "name": "Savanna Experience Center",
      "chapter": "DLC Overture",
      "img": "../img/dlc/locations/savanna-experience-center.png"
    }
  },
  {
    "id": "dlc-advanced-elephant-carcass",
    "name": "Advanced Elephant Carcass",
    "category": "Carcaças e Mutantes (Carcasses)",
    "description": "Variante mais rápida e agressiva do Elephant Carcass.",
    "img": "../img/dlc/enemies/advanced-elephant-carcass.png",
    "location": {
      "name": "Savanna Experience Center",
      "chapter": "DLC Overture",
      "img": "../img/dlc/locations/savanna-experience-center.png"
    }
  },
  {
    "id": "dlc-rolling-carcass",
    "name": "Rolling Carcass",
    "category": "Carcaças e Mutantes (Carcasses)",
    "description": "Carcaça que rola e atropela; perigosa em corredores.",
    "img": "../img/dlc/enemies/rolling-carcass.png",
    "location": {
      "name": "Greenhouse Outdoor Garden",
      "chapter": "DLC Overture",
      "img": "../img/dlc/locations/greenhouse-outdoor-garden.png"
    }
  },
  {
    "id": "dlc-slinging-carcass",
    "name": "Slinging Carcass",
    "category": "Carcaças e Mutantes (Carcasses)",
    "description": "Variante de longo alcance que arremessa projéteis.",
    "img": "../img/dlc/enemies/slinging-carcass.png",
    "location": {
      "name": "Greenhouse Interior",
      "chapter": "DLC Overture",
      "img": "../img/dlc/locations/greenhouse-interior.png"
    }
  },
  {
    "id": "dlc-carcass-shooter",
    "name": "Carcass Shooter",
    "category": "Carcaças e Mutantes (Carcasses)",
    "description": "Atirador à distância; aplica status (ex.: Frost/Decay) dependendo da área.",
    "img": "../img/dlc/enemies/carcass-shooter.png",
    "location": {
      "name": "Zelator Underground Facility (First Visit)",
      "chapter": "DLC Overture",
      "img": "../img/dlc/locations/zelator-underground-facility-first-visit.png"
    }
  },
  {
    "id": "dlc-giant-carcass",
    "name": "Giant Carcass",
    "category": "Carcaças e Mutantes (Carcasses)",
    "description": "Carcaça grande com múltiplos membros; alcance amplo.",
    "img": "../img/dlc/enemies/giant-carcass.png",
    "location": {
      "name": "Ancient Ruins Excavation Site",
      "chapter": "DLC Overture",
      "img": "../img/dlc/locations/ancient-ruins-excavation-site.png"
    }
  },
  {
    "id": "dlc-shark-carcass",
    "name": "Shark Carcass",
    "category": "Inimigos de Elite (Mini-bosses)",
    "description": "Mini-boss carcaça de tubarão; alto dano e pressão em área.",
    "img": "../img/dlc/enemies/shark-carcass.png",
    "location": {
      "name": "Krat Lighthouse",
      "chapter": "DLC Overture",
      "img": "../img/dlc/locations/krat-lighthouse.png"
    }
  },
  {
    "id": "dlc-facility-patient",
    "name": "Facility Patient",
    "category": "Humanos e Alquimistas",
    "description": "Paciente hostil; movimentos erráticos e ataques curtos.",
    "img": "../img/dlc/enemies/facility-patient.png",
    "location": {
      "name": "Zelator Underground Facility (First Visit)",
      "chapter": "DLC Overture",
      "img": "../img/dlc/locations/zelator-underground-facility-first-visit.png"
    }
  },
  {
    "id": "dlc-facility-prisoner",
    "name": "Facility Prisoner",
    "category": "Humanos e Alquimistas",
    "description": "Prisioneiro da instalação; agressivo e resistente.",
    "img": "../img/dlc/enemies/facility-prisoner.png",
    "location": {
      "name": "Zelator Underground Facility (First Visit)",
      "chapter": "DLC Overture",
      "img": "../img/dlc/locations/zelator-underground-facility-first-visit.png"
    }
  },
  {
    "id": "dlc-advanced-facility-prisoner",
    "name": "Advanced Facility Prisoner",
    "category": "Inimigos de Elite (Mini-bosses)",
    "description": "Variante mais forte do prisioneiro; combos e dano maiores.",
    "img": "../img/dlc/enemies/advanced-facility-prisoner.png",
    "location": {
      "name": "Zelator Underground Facility (Second Visit)",
      "chapter": "DLC Overture",
      "img": "../img/dlc/locations/zelator-underground-facility-second-visit.png"
    }
  },
  {
    "id": "dlc-facility-doctor",
    "name": "Facility Doctor",
    "category": "Humanos e Alquimistas",
    "description": "Inimigo humano com arma de gelo; controle de espaço à distância.",
    "img": "../img/dlc/enemies/facility-doctor.png",
    "location": {
      "name": "Coolant Control Room",
      "chapter": "DLC Overture",
      "img": "../img/dlc/locations/coolant-control-room.png"
    }
  },
  {
    "id": "dlc-robed-swordsman-silent-evangelist",
    "name": "Robed Swordsman (Silent Evangelist)",
    "category": "Humanos e Alquimistas",
    "description": "Espadachim veloz; ataques rápidos e pressão constante.",
    "img": "../img/dlc/enemies/robed-swordsman-silent-evangelist.png",
    "location": {
      "name": "Monad Charity House",
      "chapter": "DLC Overture",
      "img": "../img/dlc/locations/monad-charity-house.png"
    }
  }
];



function normalize(s) {
  return String(s)
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "");
}

function uniqueCategories(enemies) {
  const seen = new Set();
  const out = [];
  enemies.forEach((e) => {
    if (!seen.has(e.category)) {
      seen.add(e.category);
      out.push(e.category);
    }
  });
  return out;
}

document.addEventListener("DOMContentLoaded", () => {
  const sectionListEl = document.getElementById("sectionList");
  const categoryListEl = document.getElementById("categoryList");
  const enemyPanelEl = document.getElementById("enemyPanel");
  const activeCategoryBadgeEl = document.getElementById("activeCategoryBadge");
  const enemyListEl = document.getElementById("enemyList");
  const searchInput = document.getElementById("searchInput");

  const emptyState = document.getElementById("emptyState");
  const details = document.getElementById("details");
  const closeBtn = document.getElementById("closeBtn");

  const enemyName = document.getElementById("enemyName");
  const enemyCategory = document.getElementById("enemyCategory");
  const enemyDescription = document.getElementById("enemyDescription");
  const enemyImage = document.getElementById("enemyImage");

  const enemyLocation = document.getElementById("enemyLocation");
  const enemyChapter = document.getElementById("enemyChapter");
  const locationImage = document.getElementById("locationImage");

  let activeSection = "JOGO BASE";
  let activeCategory = null;
  let activeEnemyId = null;

  function getActiveEnemies() {
    return activeSection === "DLC" ? DLC_ENEMIES : BASE_ENEMIES;
  }

  function setEnemyPanelVisible(visible) {
    enemyPanelEl.dataset.hidden = visible ? "false" : "true";
  }

  function clearDetails() {
    activeEnemyId = null;
    emptyState.classList.remove("hidden");
    details.classList.add("hidden");

    enemyName.textContent = "—";
    enemyCategory.textContent = "—";
    enemyDescription.textContent = "—";
    enemyImage.removeAttribute("src");
    enemyImage.alt = "";

    enemyLocation.textContent = "—";
    enemyChapter.textContent = "—";
    locationImage.removeAttribute("src");
    locationImage.alt = "";
  }


  function renderSections() {
    if (!sectionListEl) return;

    sectionListEl.innerHTML = "";
    const sections = ["JOGO BASE", "DLC"];

    sections.forEach((sec) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "cat-btn" + (sec === activeSection ? " is-active" : "");
      btn.textContent = sec;

      btn.addEventListener("click", () => {
        if (activeSection === sec) return;

        activeSection = sec;
        activeCategory = null;
        activeEnemyId = null;

        // limpa busca e UI
        searchInput.value = "";
        setEnemyPanelVisible(false);
        clearDetails();

        // re-render
        renderSections();
        renderCategories("");
      });

      sectionListEl.appendChild(btn);
    });
  }

  function renderCategories(filterText = "") {
    const q = normalize(filterText.trim());
    const cats = uniqueCategories(getActiveEnemies());

    // se estiver pesquisando, filtra categorias que tenham algum inimigo batendo
    const filteredCats = !q
      ? cats
      : cats.filter((c) =>
          getActiveEnemies().some(
            (e) =>
              e.category === c &&
              (normalize(e.name).includes(q) || normalize(e.category).includes(q))
          )
        );

    categoryListEl.innerHTML = "";
    filteredCats.forEach((cat) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "cat-btn" + (cat === activeCategory ? " is-active" : "");
      btn.textContent = cat;

      btn.addEventListener("click", () => {
        // toggle: clicou na mesma categoria => fecha lista
        if (activeCategory === cat) {
          activeCategory = null;
          activeCategoryBadgeEl.textContent = "—";
          enemyListEl.innerHTML = "";
          setEnemyPanelVisible(false);
          clearDetails();
          renderCategories(searchInput.value);
          return;
        }

        activeCategory = cat;
        activeCategoryBadgeEl.textContent = cat;
        setEnemyPanelVisible(true);
        activeEnemyId = null;
        clearDetails();
        renderEnemyList(searchInput.value);
        renderCategories(searchInput.value);
      });

      categoryListEl.appendChild(btn);
    });
  }

  function renderEnemyList(filterText = "") {
    enemyListEl.innerHTML = "";

    if (!activeCategory) return;

    const q = normalize(filterText.trim());
    const list = getActiveEnemies().filter((e) => e.category === activeCategory).filter((e) => {
      if (!q) return true;
      return normalize(e.name).includes(q) || normalize(e.category).includes(q);
    });

    if (!list.length) {
      const div = document.createElement("div");
      div.className = "empty-mini";
      div.textContent = "Nenhum inimigo encontrado nessa categoria.";
      enemyListEl.appendChild(div);
      return;
    }

    list.forEach((e) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "enemy-btn" + (e.id === activeEnemyId ? " is-active" : "");
      btn.dataset.id = e.id;
      btn.innerHTML = `<span>${e.name}</span><small>${e.location.name} • ${e.location.chapter}</small>`;

      btn.addEventListener("click", () => {
        if (activeEnemyId === e.id) {
          // toggle close
          activeEnemyId = null;
          clearDetails();
          // update button states
          document.querySelectorAll(".enemy-btn").forEach((b) =>
            b.classList.remove("is-active")
          );
          return;
        }
        selectEnemy(e.id);
      });

      enemyListEl.appendChild(btn);
    });
  }

  function selectEnemy(id) {
    const e = getActiveEnemies().find((x) => x.id === id);
    if (!e) return;

    activeEnemyId = id;

    document.querySelectorAll(".enemy-btn").forEach((b) => {
      b.classList.toggle("is-active", b.dataset.id === id);
    });

    emptyState.classList.add("hidden");
    details.classList.remove("hidden");

    enemyName.textContent = e.name;
    enemyCategory.textContent = e.category;
    enemyDescription.textContent = e.description;

    enemyImage.src = e.img;
    enemyImage.alt = `Imagem de ${e.name}`;

    enemyLocation.textContent = e.location.name;
    enemyChapter.textContent = e.location.chapter;

    locationImage.src = e.location.img;
    locationImage.alt = `Local: ${e.location.name}`;
  }

  closeBtn.addEventListener("click", () => {
    activeEnemyId = null;
    clearDetails();
    // limpa seleção visual
    document.querySelectorAll(".enemy-btn").forEach((b) => b.classList.remove("is-active"));
  });

  // init: só categorias visíveis
  setEnemyPanelVisible(false);
  clearDetails();
  renderSections();
  renderCategories("");

  // pesquisa: filtra categorias e (se categoria ativa) lista
  searchInput.addEventListener("input", (ev) => {
    const value = ev.target.value || "";
    renderCategories(value);
    renderEnemyList(value);
  });
});
