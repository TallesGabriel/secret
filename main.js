(function () {
  "use strict";

  const cardGrid   = document.getElementById("cardGrid");
  const creatorGrid = document.getElementById("creatorGrid");
  const factionBtns = document.querySelectorAll(".faction-btn");

  const overlay   = document.getElementById("detailOverlay");
  const closeBtn  = document.getElementById("detailClose");
  const elFaction = document.getElementById("detailFaction");
  const elName    = document.getElementById("detailName");
  const elTagline = document.getElementById("detailTagline");
  const elPassives  = document.getElementById("detailPassives");
  const elAbilities = document.getElementById("detailAbilities");
  const elStrategy  = document.getElementById("detailStrategy");
  const elPros = document.getElementById("detailPros");
  const elCons = document.getElementById("detailCons");

  let currentFaction = "survivors";

  /* ---------- helpers ---------- */

  // Transforma "Nome — resto do texto" em <strong>Nome</strong> — resto
  function formatListItem(text) {
    const li = document.createElement("li");
    const dashIndex = text.indexOf(" — ");
    if (dashIndex > -1) {
      const strong = document.createElement("strong");
      strong.textContent = text.slice(0, dashIndex);
      li.appendChild(strong);
      li.appendChild(document.createTextNode(" — " + text.slice(dashIndex + 3)));
    } else {
      li.textContent = text;
    }
    return li;
  }

  function fillList(ul, items) {
    ul.innerHTML = "";
    items.forEach(item => ul.appendChild(formatListItem(item)));
  }

  /* ---------- render character cards ---------- */

  function renderCards(faction) {
    cardGrid.innerHTML = "";
    const list = CHARACTERS.filter(c => c.faction === faction);

    list.forEach(c => {
      const card = document.createElement("article");
      card.className = "char-card faction-" + c.faction;
      card.tabIndex = 0;
      card.setAttribute("role", "button");
      card.setAttribute("aria-label", "Ver detalhes de " + c.name);

      card.innerHTML = `
        <div class="char-portrait">${c.icon}</div>
        <span class="char-role">${c.role}</span>
        <h3 class="char-name">${c.name}</h3>
        <p class="char-blurb">${c.blurb}</p>
        <div class="char-tags">${c.tags.map(t => `<span class="tag">${t}</span>`).join("")}</div>
      `;

      card.addEventListener("click", () => openDetail(c));
      card.addEventListener("keydown", e => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openDetail(c); }
      });

      cardGrid.appendChild(card);
    });
  }

  function openDetail(c) {
    elFaction.textContent = c.faction === "survivors" ? "SOBREVIVENTE · " + c.role : "EXECUTOR · " + c.role;
    elName.textContent = c.name;
    elTagline.textContent = c.blurb;

    fillList(elPassives, c.passives);
    fillList(elAbilities, c.abilities);
    fillList(elStrategy, c.strategy);
    fillList(elPros, c.pros);
    fillList(elCons, c.cons);

    overlay.hidden = false;
    document.body.style.overflow = "hidden";
    closeBtn.focus();
  }

  function closeDetail() {
    overlay.hidden = true;
    document.body.style.overflow = "";
  }

  closeBtn.addEventListener("click", closeDetail);
  overlay.addEventListener("click", e => { if (e.target === overlay) closeDetail(); });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && !overlay.hidden) closeDetail();
  });

  /* ---------- faction toggle ---------- */

  factionBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      factionBtns.forEach(b => { b.classList.remove("is-active"); b.setAttribute("aria-selected", "false"); });
      btn.classList.add("is-active");
      btn.setAttribute("aria-selected", "true");
      currentFaction = btn.dataset.faction;
      renderCards(currentFaction);
    });
  });

  /* ---------- render creators ---------- */

  function renderCreators() {
    creatorGrid.innerHTML = "";
    CREATORS.forEach(cr => {
      const initials = cr.name.replace(/["]/g, "").trim().slice(0, 2).toUpperCase();
      const card = document.createElement("article");
      card.className = "creator-card";
      card.innerHTML = `
        <div class="creator-top">
          <div class="creator-avatar">${initials}</div>
          <div>
            <div class="creator-name">${cr.name}</div>
            <div class="creator-handle">${cr.handle}</div>
          </div>
        </div>
        <p class="creator-desc">${cr.desc}</p>
        <div class="creator-meta">
          <span class="creator-badge">${cr.badge}</span>
          <a class="creator-link" href="${cr.url}" target="_blank" rel="noopener noreferrer">Ver no YouTube ↗</a>
        </div>
      `;
      creatorGrid.appendChild(card);
    });
  }

  /* ---------- ring timer (ambient, non-critical) ---------- */

  function startRingTimer() {
    const el = document.getElementById("ringTimer");
    if (!el) return;
    let totalSeconds = 79; // 1:19
    setInterval(() => {
      totalSeconds = totalSeconds <= 0 ? 79 : totalSeconds - 1;
      const m = Math.floor(totalSeconds / 60);
      const s = String(totalSeconds % 60).padStart(2, "0");
      el.textContent = `${m}:${s}`;
    }, 1000);
  }

  /* ---------- init ---------- */

  renderCards(currentFaction);
  renderCreators();
  startRingTimer();
})();
