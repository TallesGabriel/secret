/* =========================================================
   OUTCOME MEMORIES — BASE DE DADOS DOS PERSONAGENS
   Conteúdo compilado e parafraseado a partir de wikis de fãs
   (the-unofficial-outcome-memories.fandom.com, TV Tropes, NamuWiki)
   e vídeos de jogadores. O jogo foi descontinuado em jan/2026 e
   passou por várias versões — trate valores e detalhes como
   aproximados, não como dados oficiais e definitivos.
========================================================= */

const CHARACTERS = [

  /* ===================== SOBREVIVENTES ===================== */
  {
    id: "sonic",
    faction: "survivors",
    name: "Sonic",
    role: "Velocista / mobilidade de equipe",
    icon: "SN",
    blurb: "O sobrevivente mais rápido do jogo. Vive de tirar a atenção do Executor e reposicionar o time.",
    tags: ["Velocidade máxima", "Hit & run", "Risco quando sozinho"],
    passives: [
      "Esquiva — sua passiva básica de sobrevivência; é um dos motivos pelos quais, mesmo sendo um dos personagens mais visados, ele aguenta perseguições longas.",
      "Culpa — quando Sonic é o último sobrevivente vivo da partida, ele passa a levar mais dano do Executor, refletindo a culpa por não ter conseguido salvar o resto do time."
    ],
    abilities: [
      "Drop Dash — investida rápida que serve tanto para atordoar/afastar o Executor quanto como ferramenta de deslocamento em cima da hora.",
      "Peel Out — explosão de velocidade (referência a Sonic CD) usada para fugir de perto ou reengajar rapidamente uma disputa.",
      "Limite de aceleração — acima de certa velocidade o personagem fica mais difícil de controlar; ao atingir o teto, ele desacelera até a velocidade de caminhada, inclusive durante o Peel Out."
    ],
    strategy: [
      "Jogado como \"chamariz\": Sonic puxa a atenção do Executor para longe de aliados feridos ou encurralados, usando sua velocidade máxima no jogo.",
      "Times organizados evitam deixar Sonic como último sobrevivente sempre que possível, já que a passiva Culpa o torna o personagem que morre com menos golpes nessa situação.",
      "Drop Dash é usado tanto ofensivamente (interromper o Executor) quanto defensivamente, para ganhar distância no meio de uma perseguição."
    ],
    pros: ["Maior velocidade de movimento do elenco", "Excelente para desviar aggro do time"],
    cons: ["Punido com mais dano quando é o último vivo (Culpa)", "Velocidade alta pode ficar difícil de controlar"]
  },

  {
    id: "metalsonic",
    faction: "survivors",
    name: "Metal Sonic",
    role: "Tanque agressivo",
    icon: "MS",
    blurb: "Segundo mais rápido do jogo e o que melhor absorve dano, distraindo o Executor por mais tempo que qualquer outro sobrevivente.",
    tags: ["Tanque", "Autorreparo", "Depende de Eggman"],
    passives: [
      "Autorreparo — regenera vida sozinho com o tempo, mas tem um teto de regeneração natural abaixo do seu HP máximo (segundo a comunidade, ele não recupera sozinho acima de certo limite sem bônus de ser o último sobrevivente)."
    ],
    abilities: [
      "Destructive Charge — investida destrutiva usada para pressionar e atordoar o Executor.",
      "Habilidade especial de último sobrevivente (\"DEAD OR ALIVE\") — um poder extra liberado quando Metal Sonic é o único restante na partida."
    ],
    strategy: [
      "Usado como o principal \"tank\" do time: joga-se agressivamente para segurar o Executor enquanto os outros sobreviventes cuidam de objetivos ou se curam.",
      "Jogadores tentam manter Metal Sonic perto do Eggman em campo, já que Eggman pode acelerar o reparo dele.",
      "Por sobreviver a mais hits, costuma ser deixado para trás de propósito pelo time em situações de risco — o que, segundo a comunidade, pode ser uma armadilha para o Executor se ele demorar demais tentando abatê-lo."
    ],
    pros: ["Maior resistência a dano do elenco", "Segunda maior velocidade do jogo"],
    cons: ["Depende de suporte do Eggman para reparo mais rápido", "Historicamente sofreu bugs em sua investida principal"]
  },

  {
    id: "eggman",
    faction: "survivors",
    name: "Dr. Eggman",
    role: "Suporte defensivo",
    icon: "EG",
    blurb: "Fraco para resgatar aliados agarrados, mas com um escudo confiável e pulo duplo para escapar sozinho.",
    tags: ["Escudo", "Suporte a Metal Sonic", "Fraco em resgate"],
    passives: [
      "Sem ferramentas diretas de resgate — diferente de Amy ou Tails, Eggman não tem um jeito rápido de socorrer um aliado agarrado ou derrubado."
    ],
    abilities: [
      "Shield — escudo de longa duração que evita dano por um bom tempo antes de se desfazer.",
      "Pulo duplo — usado para despistar o Executor ou alcançar áreas altas rapidamente.",
      "Suporte a reparo — permanecer perto de Metal Sonic acelera a autorregeneração dele."
    ],
    strategy: [
      "A recomendação mais comum entre jogadores é só ativar o Shield quando não há ninguém por perto que possa atordoar o Executor no seu lugar — já que o escudo não tem o elemento surpresa das habilidades de Amy ou Tails.",
      "Usado como uma forma de \"comprar tempo\" garantido numa perseguição individual, mesmo sem conseguir ajudar o resto do time nesse momento.",
      "Jogadores tendem a manter Eggman perto de Metal Sonic o tempo todo, tanto para se proteger quanto para acelerar o reparo dele."
    ],
    pros: ["Escudo confiável e duradouro", "Pulo duplo dá boas opções de fuga vertical"],
    cons: ["Quase nenhuma forma de socorrer aliados agarrados ou derrubados", "Dependente de ficar perto de Metal Sonic"]
  },

  {
    id: "tails",
    faction: "survivors",
    name: "Tails",
    role: "Suporte à distância",
    icon: "TL",
    blurb: "Prefere ajudar o time de longe a se meter em confronto direto com o Executor.",
    tags: ["Baixo risco", "Retaguarda", "Suporte"],
    passives: [
      "Perfil de suporte — construído para contribuir com o time sem precisar se expor tanto quanto sobreviventes de combate direto."
    ],
    abilities: [
      "Kit de suporte à distância — conjunto de ferramentas voltado a ajudar aliados sem a necessidade de estar próximo do Executor."
    ],
    strategy: [
      "Jogadores usam Tails mais como \"utilidade de retaguarda\": ele acompanha o grupo a uma distância segura e entra em ação em momentos pontuais, ao invés de se meter direto na perseguição.",
      "Costuma ser combinado com Eggman: enquanto um foca em reparar Metal Sonic, o outro dá suporte à distância ao restante do time."
    ],
    pros: ["Baixa exposição direta ao Executor", "Bom valor de utilidade para o grupo"],
    cons: ["Pouca capacidade de enfrentar o Executor cara a cara"]
  },

  {
    id: "knuckles",
    faction: "survivors",
    name: "Knuckles",
    role: "Combate corpo a corpo",
    icon: "KX",
    blurb: "Um dos sobreviventes com maior poder de fogo em confronto direto, junto de Sonic.",
    tags: ["Confronto direto", "Agressivo"],
    passives: [
      "Inabalável — assim como Sonic, resiste a certos efeitos de interrupção durante o uso de suas próprias habilidades, segundo comparações feitas pela comunidade entre os dois personagens."
    ],
    abilities: [
      "Golpes de curto alcance de alto impacto, priorizando dano direto em cima do Executor em vez de mobilidade ou suporte."
    ],
    strategy: [
      "Jogado de forma mais agressiva que a média do elenco: em vez de fugir, Knuckles é usado para engajar o Executor de frente e ganhar tempo e espaço para o resto do time.",
      "Costuma ser recomendado apenas ativar suas habilidades quando o confronto direto compensa, já que ficar perto do Executor por engano custa caro."
    ],
    pros: ["Entre os sobreviventes mais fortes em combate direto"],
    cons: ["Precisa se expor mais perto do Executor do que a média do elenco"]
  },

  {
    id: "amy",
    faction: "survivors",
    name: "Amy",
    role: "Resgate / interrupção",
    icon: "AM",
    blurb: "Usa o martelo para interromper o Executor no momento certo e salvar aliados prestes a serem agarrados.",
    tags: ["Resgate", "Stun", "Timing"],
    passives: [
      "As fontes públicas disponíveis sobre Amy são mais escassas do que as de outros sobreviventes; a comunidade a descreve principalmente pelo papel do martelo abaixo."
    ],
    abilities: [
      "Golpes de martelo usados para atordoar o Executor e abrir uma brecha para o time escapar."
    ],
    strategy: [
      "Jogadores usam Amy reativamente: guardam a habilidade do martelo para o momento em que um aliado está prestes a ser agarrado, em vez de gastá-la cedo demais.",
      "Funciona melhor em dupla com sobreviventes de suporte (como Tails), aproveitando a brecha aberta pelo stun para curar ou reposicionar o time."
    ],
    pros: ["Boa ferramenta de resgate e interrupção de perseguições"],
    cons: ["Precisa se arriscar perto do Executor para agir"]
  },

  {
    id: "cream",
    faction: "survivors",
    name: "Cream",
    role: "Suporte / cura",
    icon: "CR",
    blurb: "A curandeira do grupo — e, por isso mesmo, um dos alvos favoritos dos Executores para eliminar cedo.",
    tags: ["Cura", "Frágil", "Alvo prioritário"],
    passives: [
      "Suporte frágil — é descrita pela comunidade como uma das sobreviventes mais fracas em confronto direto, o que a torna um alvo tentador para Executores eliminarem logo no início."
    ],
    abilities: [
      "Habilidades de cura voltadas a manter o time saudável ao longo de partidas mais longas."
    ],
    strategy: [
      "Justamente por curar o grupo, jogadores de Executor costumam priorizar eliminar Cream rapidamente para cortar o fôlego do time a longo prazo.",
      "Por isso, quem joga de Cream tende a ficar mais recuada, perto do grupo mas fora da linha de frente, tentando maximizar a cura antes de ser focada."
    ],
    pros: ["Cura essencial para sustentar o time em partidas longas"],
    cons: ["Muito frágil em confronto direto", "Alvo prioritário dos Executores"]
  },

  {
    id: "shadow",
    faction: "survivors",
    name: "Shadow",
    role: "Combate agressivo",
    icon: "SH",
    blurb: "Aparece nos renders mais recentes do elenco de Sobreviventes, com um kit voltado a combate mais direto.",
    tags: ["Combate direto", "Kit pouco documentado"],
    passives: [
      "As wikis de fãs ainda documentam pouco sobre a passiva específica de Shadow em Outcome Memories — trate esta seção como a mais incerta do site."
    ],
    abilities: [
      "Kit orientado a confronto agressivo com o Executor, na linha dos demais sobreviventes de combate direto como Knuckles e Sonic."
    ],
    strategy: [
      "Como há pouca documentação pública detalhada, jogadores relatam usá-lo de forma parecida com Knuckles: engajando o Executor de frente para abrir espaço para o time."
    ],
    pros: ["Perfil de combate direto"],
    cons: ["Informação pública detalhada sobre seu kit ainda é limitada"]
  },

  {
    id: "fang",
    faction: "survivors",
    name: "Fang",
    role: "À distância / armadilhas",
    icon: "FG",
    blurb: "Também presente nos renders mais recentes do elenco, com um perfil mais afastado do confronto direto.",
    tags: ["À distância", "Kit pouco documentado"],
    passives: [
      "Assim como Shadow, o kit detalhado de Fang é pouco documentado nas fontes públicas disponíveis no momento em que este site foi montado."
    ],
    abilities: [
      "Perfil voltado a manter distância do Executor, de forma parecida com Tails."
    ],
    strategy: [
      "Jogadores relatam usá-lo mais como utilidade de retaguarda, evitando o confronto corpo a corpo sempre que possível."
    ],
    pros: ["Baixa exposição direta ao Executor"],
    cons: ["Informação pública detalhada sobre seu kit ainda é limitada"]
  },

  /* ===================== EXECUTORES ===================== */
  {
    id: "2011x",
    faction: "executioners",
    name: "2011X",
    role: "Executor padrão",
    icon: "2X",
    blurb: "O Executor \"base\" do jogo — se ninguém escolher um Executor na seleção de personagens, a partida cai automaticamente para ele.",
    tags: ["Baseline", "Clássico do EXE"],
    passives: [
      "Funciona como referência de equilíbrio para os demais Executores do jogo."
    ],
    abilities: [
      "Kit clássico de perseguição e eliminação, no estilo tradicional dos vilões inspirados em Sonic.exe."
    ],
    strategy: [
      "Por ser o Executor padrão, costuma ser o primeiro contato de jogadores novos tanto no papel de Executor quanto de Sobrevivente, servindo de referência para aprender os fundamentos do jogo antes de enfrentar Executores com mecânicas mais específicas, como Kolossos ou Sonic Has Passed."
    ],
    pros: ["Kit direto, bom para aprender os fundamentos do papel de Executor"],
    cons: ["Menos ferramentas únicas do que Executores mais recentes"]
  },

  {
    id: "kolossos",
    faction: "executioners",
    name: "Kolossos",
    role: "Combatente de curto alcance",
    icon: "KO",
    blurb: "Chegou ao Outcome Memories vindo de The Disaster e foi aprimorando suas habilidades depois de ser derrotado com facilidade nas primeiras partidas.",
    tags: ["Anti-stun", "Contra-ataque", "Curto alcance"],
    passives: [
      "Seu corpo tem o braço direito substituído por um tentáculo carnudo com ossos pontiagudos para fora."
    ],
    abilities: [
      "Block — em vez de simplesmente bloquear dano, essa habilidade impede que Kolossos seja atordoado pelos ataques dos sobreviventes enquanto está ativa.",
      "Boulder Bludgeon — bloquear um ataque à distância permite arremessar uma pedra grande de volta em quem atacou, sendo essa a única forma de Kolossos responder a ataques de longo alcance."
    ],
    strategy: [
      "Times de sobreviventes evitam atacá-lo de forma imprudente à distância, já que o Block converte esse tipo de ataque em contra-golpe.",
      "A recomendação mais comum é forçar o confronto corpo a corpo com Kolossos, já que é ali que ele não tem uma resposta automática pronta."
    ],
    pros: ["Imune a stun durante o Block", "Pode punir ataques à distância descuidados"],
    cons: ["Sem resposta automática a ataques corpo a corpo bem cronometrados"]
  },

  {
    id: "starved",
    faction: "executioners",
    name: "Starved",
    role: "Perseguição constante",
    icon: "ST",
    blurb: "Uma variante alternativa do Dr. Robotnik, com o corpo e a personalidade distorcidos por uma fome primitiva sem fim.",
    tags: ["Lore alternativa", "Pressão constante"],
    passives: [
      "Segundo a lore do jogo, após os eventos do primeiro Sonic, essa versão faminta do Doutor comeu um Flicky queimado encontrado em seu laboratório, o que teria desencadeado a mudança em seu corpo e comportamento."
    ],
    abilities: [
      "Kit construído em torno do tema da fome, entrando no Outcome Memories voluntariamente junto de sua criação para retomar uma caçada sem fim."
    ],
    strategy: [
      "A comunidade descreve Starved como um Executor de pressão constante — a fome que move o personagem se traduz, na prática, em perseguições pouco pausadas."
    ],
    pros: ["Perfil de pressão contínua sobre o time de sobreviventes"],
    cons: ["Kit técnico detalhado é pouco documentado publicamente"]
  },

  {
    id: "alucard",
    faction: "executioners",
    name: "Alucard",
    role: "Magia de sangue",
    icon: "AL",
    blurb: "Um Bloodfiend que observa os jogos em constante mudança dentro do Vazio de Outcome Memories.",
    tags: ["Rivalidade com Blaze", "Lore pesada"],
    passives: [
      "Possui uma rivalidade narrativa direta com Blaze, com quem compartilha mundo e passado, e algum tipo de rixa com outro Executor, Suture."
    ],
    abilities: [
      "Manipula uma forma de magia de sangue, sendo capaz de coagular sangue em armas poderosas para o combate."
    ],
    strategy: [
      "Partidas em que Alucard enfrenta Blaze são frequentemente citadas pela comunidade como confrontos mais tensos, justamente por causa dessa rivalidade construída na lore do jogo."
    ],
    pros: ["Kit temático de magia de sangue com armas improvisadas"],
    cons: ["Kit técnico detalhado é pouco documentado publicamente"]
  },

  {
    id: "loony",
    faction: "executioners",
    name: "Loony",
    role: "Variação temática de 2011X",
    icon: "LN",
    blurb: "Chegou a ser planejado apenas como uma skin de 2011X antes de virar um Executor separado e jogável.",
    tags: ["Origem como skin", "Promovido a jogável"],
    passives: [
      "Foi originalmente concebido como uma skin do tipo \"Feels the Rabbit\" para 2011X, até os planos da equipe de desenvolvimento mudarem."
    ],
    abilities: [
      "Kit derivado da base de 2011X, com sua própria identidade temática dentro do jogo."
    ],
    strategy: [
      "Por compartilhar raízes com 2011X, jogadores que já conhecem esse Executor costumam se adaptar relativamente rápido ao enfrentar ou jogar de Loony."
    ],
    pros: ["Kit familiar para quem já joga contra 2011X"],
    cons: ["Kit técnico detalhado é pouco documentado publicamente"]
  },

  {
    id: "sonichaspassed",
    faction: "executioners",
    name: "Sonic Has Passed",
    role: "Executor de duas formas",
    icon: "?!",
    blurb: "O Executor mais imprevisível do elenco: alterna entre duas formas jogáveis, cada uma com seu próprio par de habilidades.",
    tags: ["Duas formas", "Glitch", "Imprevisível"],
    passives: [
      "Possui duas formas jogáveis dentro do mesmo Executor — Pixel Sonic e Pixel Eggman — cada uma com duas habilidades próprias, uma referência a personagens de um RP anterior do mesmo desenvolvedor.",
      "Pode \"glitchar\" ou se transformar ao ser atingido ou eliminado, entrando em um Estado Glitched."
    ],
    abilities: [
      "No Estado Glitched, o Pixel Sonic glitchado usa Spindash como parte do seu kit.",
      "Wrecking Ball — habilidade associada ao Pixel Sonic glitchado nesse estado alterado."
    ],
    strategy: [
      "Por ter duas formas distintas e uma mecânica de transformação ao tomar dano, a comunidade trata esse Executor como o mais difícil de \"ler\" durante a partida.",
      "Sobreviventes experientes tentam identificar rapidamente qual forma está ativa (Pixel Sonic ou Pixel Eggman) para adaptar a estratégia no meio do confronto, em vez de tratá-lo como um Executor de kit fixo."
    ],
    pros: ["Kit variado, difícil de prever com apenas um confronto"],
    cons: ["Também é mais complexo de jogar bem, por exigir domínio de duas formas diferentes"]
  }
];

/* =========================================================
   CRIADORES BRASILEIROS
   Apenas canais com evidência real de conteúdo sobre o jogo
   encontrada em buscas públicas. Números de inscritos não
   foram incluídos como valores exatos — ver aviso na página.
========================================================= */
const CREATORS = [
  {
    name: "gabsyt",
    handle: "@gabsyt",
    desc: "Canal de lives focado em Roblox que jogou Sonic.exe: Outcome Memories em transmissão ao vivo com a comunidade de inscritos, incluindo modo membro no canal.",
    badge: "Live de Roblox",
    url: "https://www.youtube.com/results?search_query=gabsyt+outcome+memories"
  },
  {
    name: '"O Outcome Memories morreu por sua culpa"',
    handle: "vídeo-retrospectiva",
    desc: "Vídeo em português sobre o fim do desenvolvimento de Outcome Memories, cobrindo como o jogo se destacou entre os jogos assimétricos de terror no Roblox.",
    badge: "Retrospectiva",
    url: "https://www.youtube.com/watch?v=DO5GiUolVzw"
  },
  {
    name: "Canais de Roblox / terror BR",
    handle: "vários criadores",
    desc: "Diversos canais brasileiros de Roblox e jogos de terror gravaram vídeos avulsos e lives sobre Outcome Memories sem serem dedicados exclusivamente ao jogo — típico de títulos de nicho dentro da cena de fangames de Sonic.exe.",
    badge: "Conteúdo avulso",
    url: "https://www.youtube.com/results?search_query=outcome+memories+roblox+pt+br"
  }
];
