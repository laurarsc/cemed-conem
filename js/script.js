/* =====================================================================
   XII CEMED — script.js
   Toda a configuração que precisa ser trocada fica no objeto CONFIG
   e no array PROGRAM_DATA logo abaixo. O resto do arquivo não precisa
   ser mexido.
   ===================================================================== */

// ======================= CONFIGURAÇÃO (EDITE AQUI) =======================
const CONFIG = {
  // Link oficial de inscrições (Sympla, Even3, Eventbrite, etc.)
  // SUBSTITUA AQUI pelo link real da plataforma de inscrição/pagamento.
  REGISTRATION_URL: "https://cheers.com.br/evento/xii-cemed-conem-2026-33876",

  // Endpoint de envio do formulário de trabalhos científicos.
  // Usa o serviço gratuito FormSubmit (https://formsubmit.co) — sem backend.
  // No primeiro envio, FormSubmit manda um e-mail de confirmação para o
  // endereço abaixo; é preciso clicar no link de ativação para começar
  // a receber os envios seguintes automaticamente.
  SUBMISSION_ENDPOINT: "https://formsubmit.co/ajax/cientifico.conem@gmail.com",
};

// ======================= DADOS DA PROGRAMAÇÃO (EDITE AQUI) =======================
// Adicione, remova ou edite cards livremente — o grid e os popups são
// gerados automaticamente a partir desta lista.
const PROGRAM_DATA = [
  {
    numeral: "I",
    tag: "Abertura",
    title: "Cerimônia de Abertura",
    teaser: "Recepção oficial dos congressistas com a diretoria da AEMED-BR e do CAMMA, além de autoridades da PUCPR.",
    meta: "Dia 1 · Auditório Principal · 19h",
    body: "Recepção oficial dos congressistas com a diretoria da Associação dos Estudantes de Medicina do Brasil (AEMED-BR) e do Centro Acadêmico de Medicina Mário de Abreu (CAMMA), além de autoridades da PUC-PR."
  },
  {
    numeral: "II",
    tag: "Palestra Magna",
    title: "Palestras Magnas",
    teaser: "Grandes nomes da Medicina brasileira discutindo os temas mais atuais da prática clínica: <strong>Celmo Porto</strong> e <strong> Paulo Muzy</strong>.",
    meta: "Dias 1 a 3 · Auditório Principal",
    body: "."
  },
  {
    numeral: "III",
    tag: "Mesa-redonda",
    title: "Mesas-Redondas",
    teaser: "Debates com múltiplos especialistas sobre temas controversos e multidisciplinares da área.",
    meta: "Dia 2 · Salas temáticas",
    body: "As mesas-redondas reúnem profissionais de diferentes especialidades para debater, sob mediação, temas que atravessam mais de uma área da Medicina."
  },
  {
    numeral: "IV",
    tag: "Conversas",
    title: " Rodas de Conversa & Atualizações",
    teaser: "Aprenda com a vivência e se atualize com o conhecimento de residentes e especialistas de diversas áreas da medicina.",
    meta: "Dias 1 a 3 · Laboratórios de habilidades",
    body: "."
  },
  {
    numeral: "V",
    tag: "Workshop",
    title: "Workshops de Simulação Realística",
    teaser: "Simule cenários reais da prática médica no maior centro de simulação de Curitiba com a ajuda de tecnologias, professores e profissionais qualificados.",
    meta: "Dia 3 · Centro de Simulação",
    body: " ."
  },
  {
    numeral: "VI",
    tag: "Sessões Científicas",
    title: "Sessões Científicas",
    teaser: "Apresente seu trabalho científico em uma sessão própria, dentro de uma arena tecnológica, com direito a prêmios e certificação nacional.",
    meta: "Dia 3 · Salas de apresentação",
    body: "Nesta sessão, os trabalhos científicos submetidos por acadêmicos de todo o país."
  },
];

// ======================= EVENTOS DO CALENDÁRIO (EDITE AQUI) =======================
// Chave no formato "AAAA-MM-DD". Cada dia pode ter uma lista de eventos.
// Adicione, remova ou edite livremente — o calendário é gerado automaticamente.
const CALENDAR_EVENTS = {
  "2026-10-14": [
    {
      time: "13h00 – 21h00",
      title: "Workshops",
      tag: "Workshop",
      location: "Laboratórios de Habilidades",
      description: "Dia de pré-congresso dedicado aos workshops práticos, com vagas limitadas. SUBSTITUA AQUI com a lista de workshops oferecidos, pré-requisitos e forma de inscrição em cada um."
    }
  ],
  "2026-10-15": [
    {
      time: "13h00 – 13h30",
      title: "Check-in",
      tag: "Abertura",
      location: "Hall Principal",
      description: "Retirada de crachá, material do congresso e boas-vindas à equipe organizadora."
    },
    {
      time: "13h30 – 14h10",
      title: "Cerimônia de Abertura",
      tag: "Abertura",
      location: "Auditório Principal",
      description: "Abertura oficial do XII CEMED e IV  CONEM, com a diretoria do centro acadêmico e convidados da PUCPR."
    },
    {
      time: "14h10 – 15h10",
      title: "Palestra 1 (Magna)",
      tag: "Palestra Magna",
      location: "Auditório Principal",
      description: "SUBSTITUA AQUI com o nome do palestrante, instituição de origem e título oficial da palestra."
    },
    {
      time: "15h10 – 15h45",
      title: "Fotos e Autógrafos",
      tag: "Interação",
      location: "Hall Principal",
      description: "Momento aberto para fotos e autógrafos com os palestrantes do dia."
    },
    {
      time: "16h45 – 17h35",
      title: "Palestra 2 & Mesa-Redonda 1",
      tag: "Palestra & Mesa-redonda",
      location: "Auditório Principal",
      description: "SUBSTITUA AQUI com o tema da palestra, os debatedores da mesa-redonda e o mediador."
    },
    {
      time: "17h35 – 18h15",
      title: "Coffee Break",
      tag: "Intervalo",
      location: "Hall Principal",
      description: "Intervalo para networking e coffee break entre os congressistas."
    },
    {
      time: "18h15 – 19h05",
      title: "Palestra 3 & Mesa-Redonda 2",
      tag: "Palestra & Mesa-redonda",
      location: "Auditório Principal",
      description: "SUBSTITUA AQUI com o tema da palestra, os debatedores da mesa-redonda e o mediador."
    },
    {
      time: "19h15 – 20h05",
      title: "Palestra 4 & Mesa-Redonda 3",
      tag: "Palestra &amp Mesa-redonda",
      location: "Auditório Principal",
      description: "SUBSTITUA AQUI com o tema da palestra, os debatedores da mesa-redonda e o mediador."
    },
    {
      time: "20h15 – 21h05",
      title: "Conversas com Residentes",
      tag: "Networking",
      location: "Salas temáticas",
      description: "Roda de conversa aberta entre congressistas e médicos residentes convidados sobre a rotina de residência."
    }
  ],
  "2026-10-16": [
    {
      time: "13h00 – 13h30",
      title: "Check-in",
      tag: "Abertura",
      location: "Hall Principal",
      description: "Retirada de crachá para quem chega no segundo dia e boas-vindas à equipe organizadora."
    },
    {
      time: "13h30 – 14h30",
      title: "Palestra 5 (Magna)",
      tag: "Palestra Magna",
      location: "Auditório Principal",
      description: "SUBSTITUA AQUI com o nome do palestrante, instituição de origem e título oficial da palestra."
    },
    {
      time: "14h30 – 15h15",
      title: "Fotos e Autógrafos",
      tag: "Interação",
      location: "Hall Principal",
      description: "Momento aberto para fotos e autógrafos com os palestrantes do dia."
    },
    {
      time: "16h15 – 17h05",
      title: "Palestra 6 & Mesa-Redonda 4",
      tag: "Palestra & Mesa-redonda",
      location: "Auditório Principal",
      description: "SUBSTITUA AQUI com o tema da palestra, os debatedores da mesa-redonda e o mediador."
    },
    {
      time: "17h15 – 18h05",
      title: "Atualização de Guidelines",
      tag: "Palestra",
      location: "Auditório Principal",
      description: "SUBSTITUA AQUI com o tema e o palestrante responsável pela atualização de diretrizes clínicas."
    },
    {
      time: "18h05 – 18h45",
      title: "Coffee Break",
      tag: "Intervalo",
      location: "Hall Principal",
      description: "Intervalo para networking e coffee break entre os congressistas."
    },
    {
      time: "18h45 – 19h35",
      title: "Palestra 7 & Mesa-Redonda 5",
      tag: "Palestra & Mesa-redonda",
      location: "Auditório Principal",
      description: "SUBSTITUA AQUI com o tema da palestra, os debatedores da mesa-redonda e o mediador."
    },
    {
      time: "19h45 – 20h35",
      title: "Palestra 8 & Encerramento",
      tag: "Encerramento",
      location: "Auditório Principal",
      description: "Última palestra do congresso seguida da cerimônia de encerramento do XII CEMED."
    }
  ]
};

// ======================= LOGOS DE PARCEIROS (EDITE AQUI) =======================
// Coloque os arquivos de logo dentro de assets/partners/ e referencie o nome do
// arquivo aqui. Enquanto não houver arquivo, um espaço reservado é exibido no lugar.
// "description" é o texto que aparece abaixo da logo — substitua pelo texto real de cada instituição.
const PARTNERS = [
  {
    name: "Parceiro Acadêmico",
    file: "partner-verde.png",
    url: "https://www.instagram.com/camma.medpuc",
    description: "O Centro Acadêmico de Medicina Mário de Abreu (CAMMA), vinculado à Escola de Medicina e Ciências da Vida da Pontifícia Universidade Católica do Paraná (PUCPR), inspira-se no lema da Universidade — Scientia, Vita et Fides (Ciência, Vida e Fé) — para promover a integração, a representatividade e o desenvolvimento da comunidade acadêmica.\n" +
        "Com 30 anos de tradição, o CAMMA compromete-se com as necessidades dos alunos e busca promover conhecimento, bem-estar e oportunidades de forma ampla e irrestrita.\n" +
        "Dirigido por estudantes e para estudantes, o CAMMA tem como essência a construção de um corpo estudantil que, embora diverso, permanece leal e unido em prol dos interesses da comunidade acadêmica."
  },
  {
    name: "ALMED-BR",
    file: "partner-almed.png",
    url: "https://www.aemedbr.com.br/",
    description: "A AEMED-BR estabelece um compromisso sério em representar os estudantes de Medicina do Brasil, garantindo que os acadêmicos tenham voz ativa dentro dos ambientes de discussão e deliberação no ambiente nacional. Nossa diretriz é a defesa da excelência do ensino médico em sua totalidade, preservando e estimulando o resgate aos princípios e valores que norteiam a boa medicina desde os seus primórdios. A associação visa a integração dos estudantes das diferentes regiões do país, em busca da formação médica de qualidade, intermediando os interesses da classe estudantil junto aos agentes públicos e privados. Acreditamos que o estabelecimento de um elo de cooperação entre os estudantes, entidades médicas, sociedades de especialidades e autoridades governamentais constituídas seja fundamental para que a voz acadêmica seja ouvida, de forma séria, responsável e com intenção de construção de um futuro melhor."
  },
];
// ======================= CARDS: geração e modal =======================
const cardGrid = document.getElementById("cardGrid");
const modalOverlay = document.getElementById("modalOverlay");
const modalTag = document.getElementById("modalTag");
const modalTitle = document.getElementById("modalTitle");
const modalMeta = document.getElementById("modalMeta");
const modalBody = document.getElementById("modalBody");
const modalClose = document.getElementById("modalClose");
const modalCtaBtn = document.getElementById("modalCtaBtn");

function buildCards(){
  PROGRAM_DATA.forEach((item, index) => {
    const card = document.createElement("article");
    card.className = "prog-card";
    card.dataset.index = index; // <-- adiciona o index no card também
    card.innerHTML = `
      <span class="prog-card-numeral">${item.numeral}</span>
      <span class="prog-card-tag">${item.tag}</span>
      <h3>${item.title}</h3>
      <p>${item.teaser}</p>
      <button class="card-more" type="button" data-index="${index}">
        Ver mais
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
      </button>
    `;
    cardGrid.appendChild(card);
  });
}
buildCards();

function openModal({ tag, title, meta, body }){
  modalTag.textContent = tag;
  modalTitle.textContent = title;
  modalMeta.textContent = meta;
  modalBody.textContent = body;
  modalCtaBtn.href = CONFIG.REGISTRATION_URL;
  modalOverlay.classList.add("is-open");
  document.body.style.overflow = "hidden";
  modalClose.focus();
}
function openProgramModal(index){
  const item = PROGRAM_DATA[index];
  openModal({ tag: item.tag, title: item.title, meta: item.meta, body: item.body });
}
function closeModal(){
  modalOverlay.classList.remove("is-open");
  document.body.style.overflow = "";
}

cardGrid.addEventListener("click", (e) => {
  const card = e.target.closest(".prog-card");
  if(!card) return;
  openProgramModal(Number(card.dataset.index));
});
modalClose.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", (e) => { if(e.target === modalOverlay) closeModal(); });
document.addEventListener("keydown", (e) => { if(e.key === "Escape") closeModal(); });

// ======================= Calendário =======================
const calendarGrid = document.getElementById("calendarGrid");
const calMonthLabel = document.getElementById("calMonthLabel");
const calPrev = document.getElementById("calPrev");
const calNext = document.getElementById("calNext");
const dayPanel = document.getElementById("dayPanel");
const dayPanelTitle = document.getElementById("dayPanelTitle");
const dayEventsList = document.getElementById("dayEventsList");

const MONTH_NAMES = ["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"];
const WEEKDAY_SHORT = ["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"];
const WEEKDAY_NAMES = ["domingo","segunda-feira","terça-feira","quarta-feira","quinta-feira","sexta-feira","sábado"];

// Semana inicial exibida ao carregar a página — ajuste aqui se as datas do evento mudarem.
// Aponta para o domingo da semana que contém os dias do congresso (15 e 16/10/2026).
const calState = { weekStart: new Date(2026, 9, 11), selectedDate: null }; // mês 9 = Outubro (0-indexado)

function pad2(n){ return String(n).padStart(2, "0"); }
function dateKey(d){ return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`; }
function addDays(date, days){ const d = new Date(date); d.setDate(d.getDate() + days); return d; }

function renderCalendar(){
  calendarGrid.innerHTML = "";

  const days = [];
  for(let i = 0; i < 7; i++) days.push(addDays(calState.weekStart, i));

  const start = days[0], end = days[6];
  calMonthLabel.textContent = (start.getMonth() === end.getMonth())
      ? `${start.getDate()} a ${end.getDate()} de ${MONTH_NAMES[start.getMonth()]}, ${end.getFullYear()}`
      : `${start.getDate()} de ${MONTH_NAMES[start.getMonth()]} a ${end.getDate()} de ${MONTH_NAMES[end.getMonth()]}, ${end.getFullYear()}`;

  days.forEach((date) => {
    const key = dateKey(date);
    const events = CALENDAR_EVENTS[key] || [];
    const cell = document.createElement("button");
    cell.type = "button";
    cell.className = "calendar-cell" + (events.length ? " has-events" : "");
    if(key === calState.selectedDate) cell.classList.add("is-selected");
    cell.dataset.date = key;
    cell.setAttribute("aria-label", `${WEEKDAY_NAMES[date.getDay()]}, ${date.getDate()} de ${MONTH_NAMES[date.getMonth()]}${events.length ? `, ${events.length} atividade(s)` : ""}`);
    cell.innerHTML = `
      <span class="cell-weekday">${WEEKDAY_SHORT[date.getDay()]}</span>
      <span class="cell-day">${date.getDate()}</span>
      ${events.length ? `<span class="cell-dots">${events.slice(0, 3).map(() => "<i></i>").join("")}</span>` : ""}
    `;
    calendarGrid.appendChild(cell);
  });
}

function showDayPanel(key){
  const events = CALENDAR_EVENTS[key] || [];
  const [y, m, d] = key.split("-").map(Number);
  const weekday = WEEKDAY_NAMES[new Date(y, m - 1, d).getDay()];
  dayPanelTitle.textContent = `${d} de ${MONTH_NAMES[m - 1]} · ${weekday}`;
  dayEventsList.innerHTML = "";

  if(!events.length){
    dayEventsList.innerHTML = `<li class="day-panel-empty">Nenhuma atividade programada neste dia.</li>`;
  } else {
    events.forEach((ev, index) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <button class="day-event-btn" type="button" data-date="${key}" data-index="${index}">
          <span class="day-event-time">${ev.time}</span>
          <span>
            <span class="day-event-title">${ev.title}</span><br>
            <span class="day-event-tag">${ev.tag} · ${ev.location}</span>
          </span>
        </button>`;
      dayEventsList.appendChild(li);
    });
  }
  dayPanel.hidden = false;
  dayPanel.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

calendarGrid.addEventListener("click", (e) => {
  const cell = e.target.closest(".calendar-cell");
  if(!cell || cell.classList.contains("is-empty")) return;

  const clickedKey = cell.dataset.date;
  const isSameDayOpen = calState.selectedDate === clickedKey && !dayPanel.hidden;

  if(isSameDayOpen){
    calState.selectedDate = null;
    dayPanel.hidden = true;
    renderCalendar();
    return;
  }
  calState.selectedDate = clickedKey;
  renderCalendar();
  showDayPanel(clickedKey);
});

dayEventsList.addEventListener("click", (e) => {
  const btn = e.target.closest(".day-event-btn");
  if(!btn) return;
  const ev = CALENDAR_EVENTS[btn.dataset.date][Number(btn.dataset.index)];
  openModal({
    tag: ev.tag,
    title: ev.title,
    meta: `${ev.time} · ${ev.location}`,
    body: ev.description
  });
});

calPrev.addEventListener("click", () => {
  calState.weekStart = addDays(calState.weekStart, -7);
  dayPanel.hidden = true;
  renderCalendar();
});
calNext.addEventListener("click", () => {
  calState.weekStart = addDays(calState.weekStart, 7);
  dayPanel.hidden = true;
  renderCalendar();
});

renderCalendar();


// ======================= Parceiros =======================

const partnersGrid = document.getElementById("partnersGrid");
function buildPartners(){
  partnersGrid.innerHTML = "";
  PARTNERS.forEach((p) => {
    const card = document.createElement("div");
    card.className = "partner-card";

    // Logo (clicável se houver link)
    const logoInner = p.file
        ? `<img src="assets/partners/${p.file}" alt="${p.name}">`
        : `<span class="partner-logo-placeholder">${p.name}</span>`;

    const logoEl = document.createElement(p.url ? "a" : "div");
    if(p.url){
      logoEl.href = p.url;
      logoEl.target = "_blank";
      logoEl.rel = "noopener";
      logoEl.setAttribute("aria-label", `Visitar site de ${p.name}`);
    }
    logoEl.className = "partner-logo";
    logoEl.innerHTML = logoInner;
    card.appendChild(logoEl);

    // Parágrafo descritivo
    if(p.description){
      const desc = document.createElement("p");
      desc.className = "partner-desc";
      desc.textContent = p.description;
      card.appendChild(desc);
    }

    // Link "Ver página"
    if(p.url){
      const link = document.createElement("a");
      link.className = "partner-link";
      link.href = p.url;
      link.target = "_blank";
      link.rel = "noopener";
      link.textContent = "Ver página →";
      card.appendChild(link);
    }

    partnersGrid.appendChild(card);
  });
}
buildPartners();
// ======================= Tema claro/escuro =======================
const themeToggle = document.getElementById("themeToggle");
const htmlEl = document.documentElement;
const THEME_KEY = "cemed-theme";

function applyTheme(theme){
  htmlEl.setAttribute("data-theme", theme);
  if(themeToggle) themeToggle.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
  try { localStorage.setItem(THEME_KEY, theme); } catch(err) { /* localStorage indisponível — segue no padrão escuro */ }
}

(function initTheme(){
  // Botão de alternância removido — tema sempre inicia escuro,
  // independente de preferência salva ou do sistema.
  applyTheme("dark");
})();

if(themeToggle){
  themeToggle.addEventListener("click", () => {
    const current = htmlEl.getAttribute("data-theme") === "dark" ? "dark" : "light";
    applyTheme(current === "dark" ? "light" : "dark");
  });
}

// ======================= Cabeçalho e menu mobile =======================
const siteHeader = document.getElementById("siteHeader");
window.addEventListener("scroll", () => {
  siteHeader.classList.toggle("is-scrolled", window.scrollY > 12);
}, { passive: true });

const navToggle = document.getElementById("navToggle");
const mainNav = document.getElementById("mainNav");
navToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("is-open");
  navToggle.classList.toggle("is-open", isOpen);
  navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
});
mainNav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("is-open");
    navToggle.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

// ======================= Botão de inscrição =======================
document.getElementById("registrationBtn").setAttribute("href", CONFIG.REGISTRATION_URL);


// ======================= Formulário de trabalhos científicos =======================
const DRAFT_KEY = "cemed-submissao-rascunho";
const form = document.getElementById("submissionForm");
const submitBtn = document.getElementById("submitBtn");
const formStatus = document.getElementById("formStatus");
const toast = document.getElementById("toast");
function showToast(message, type){
  toast.textContent = message;
  toast.classList.remove("is-success", "is-error");
  if (type === "success") toast.classList.add("is-success");
  if (type === "error") toast.classList.add("is-error");
  toast.classList.add("is-visible");
  setTimeout(() => toast.classList.remove("is-visible"), 4200);
}

const termsCheckbox   = document.getElementById("aceite-termos");
const termsToggleBtn  = document.getElementById("terms-toggle-btn");
const termsTextExtra  = document.getElementById("terms-text-extra");
const termsField      = document.getElementById("terms-field");

// Guarda de segurança: se o HTML do termo ainda não foi inserido na página,
// esses elementos vêm como null. Sem essa checagem, o addEventListener
// abaixo quebraria e pararia a execução do resto do arquivo (inclusive
// o listener do addAuthorBtn, mais abaixo).
if (termsCheckbox && termsToggleBtn && termsTextExtra && termsField) {
  termsToggleBtn.addEventListener("click", () => {
    const expanded = termsTextExtra.classList.toggle("is-expanded");
    termsToggleBtn.classList.toggle("is-expanded", expanded);
    termsToggleBtn.firstChild.textContent = expanded ? "Ler menos " : "Ler mais ";
  });

  termsCheckbox.addEventListener("change", () => {
    if (termsCheckbox.checked){
      termsField.classList.remove("has-error");
    }
  });
} else {
  console.warn("Bloco de termos de submissão não encontrado no HTML (verifique os IDs: aceite-termos, terms-toggle-btn, terms-text-extra, terms-field).");
}

function validarTermoSubmissao() {
  // Se o bloco de termos não existir na página, não bloqueia o envio.
  if (!termsCheckbox) return true;

  if (!termsCheckbox.checked) {
    showToast("Você precisa confirmar os termos de submissão antes de enviar.", "error");
    termsField.classList.add("has-error");
    termsField.scrollIntoView({ behavior: "smooth", block: "center" });
    return false;
  }
  return true;
}

// Iframe oculto que recebe a resposta do FormSubmit sem navegar a página.
let formSubmitTargetIframe = document.querySelector('iframe[name="formsubmit-target"]');
if (!formSubmitTargetIframe) {
  formSubmitTargetIframe = document.createElement("iframe");
  formSubmitTargetIframe.name = "formsubmit-target";
  formSubmitTargetIframe.style.display = "none";
  document.body.appendChild(formSubmitTargetIframe);
}

let formSubmitted = false;

form.addEventListener("submit", (e) => {
  formStatus.textContent = "";
  formStatus.className = "form-status";

  // Validação: o anexo precisa ser .docx
  const fileInput = document.getElementById("fArquivo");
  const file = fileInput.files[0];
  const isDocx = file && /\.docx$/i.test(file.name);

  if(!file || !isDocx){
    e.preventDefault();
    formStatus.textContent = "O arquivo precisa estar no formato .docx. Selecione o arquivo correto e tente novamente.";
    formStatus.classList.add("is-error");
    showToast("Envio não realizado: o arquivo precisa ser .docx.", "error");
    fileInput.focus();
    return;
  }

  // Validação: termo de submissão precisa estar confirmado
  if (!validarTermoSubmissao()) {
    e.preventDefault();
    return;
  }

  // A partir daqui, deixamos o navegador enviar o formulário de verdade
  // (submit nativo, sem fetch) para o endpoint SEM /ajax/, porque o
  // endpoint AJAX do FormSubmit não processa uploads de arquivo de
  // forma confiável. Miramos um iframe oculto para a página não navegar.
  submitBtn.disabled = true;
  submitBtn.querySelector(".btn-label").textContent = "Enviando...";

  form.action = CONFIG.SUBMISSION_ENDPOINT.replace("/ajax", "");
  form.method = "POST";
  form.enctype = "multipart/form-data";
  form.target = "formsubmit-target";

  // Campos auxiliares para o e-mail chegar organizado no FormSubmit
  addHiddenField(form, "_subject", `Novo trabalho científico — XII CEMED: ${form.titulo?.value || ""}`);
  addHiddenField(form, "_captcha", "false");
  addHiddenField(form, "_template", "table");

  formSubmitted = true;
  // Sem e.preventDefault() aqui: o form.submit() nativo acontece,
  // mas a resposta cai dentro do iframe oculto, sem navegar a página.
});

// Quando o iframe termina de carregar a resposta do FormSubmit,
// tratamos como envio concluído.
formSubmitTargetIframe.addEventListener("load", () => {
  if (!formSubmitted) return; // ignora o load inicial (about:blank)

  formSubmitted = false;
  formStatus.textContent = "Seu trabalho foi enviado com sucesso!";
  formStatus.classList.add("is-success");
  showToast("Trabalho enviado! Você receberá a confirmação por e-mail em breve.", "success");
  form.reset();
  clearDraft();
  extraAuthorsContainer.innerHTML = "";
  updateAddButtonState();
  syncAuthorSelects();
  submitBtn.disabled = false;
  submitBtn.querySelector(".btn-label").textContent = "Enviar trabalho";
});

function addHiddenField(form, name, value) {
  let input = form.querySelector(`input[name="${name}"]`);
  if (!input) {
    input = document.createElement("input");
    input.type = "hidden";
    input.name = name;
    form.appendChild(input);
  }
  input.value = value;
}

const addAuthorBtn = document.getElementById("addAuthorBtn");
const extraAuthorsContainer = document.getElementById("extraAuthors");
const MAX_EXTRA_AUTHORS = 7;
let extraAuthorCount = 0;

addAuthorBtn.addEventListener("click", () => {
  const currentRows = extraAuthorsContainer.querySelectorAll(".author-input-row").length;
  if (currentRows >= MAX_EXTRA_AUTHORS) {
    showToast(`Você pode adicionar no máximo ${MAX_EXTRA_AUTHORS} autores adicionais.`, "error");
    return;
  }

  const row = document.createElement("div");
  row.className = "author-input-row";

  const input = document.createElement("input");
  input.type = "text";
  input.autocomplete = "name";

  const removeBtn = document.createElement("button");
  removeBtn.type = "button";
  removeBtn.className = "btn-remove-author";
  removeBtn.setAttribute("aria-label", "Remover autor");
  removeBtn.textContent = "×";
  removeBtn.addEventListener("click", () => {
    row.remove();
    renumberAuthorRows();
    updateAddButtonState();
    syncAuthorSelects();
  });

  row.appendChild(input);
  row.appendChild(removeBtn);
  extraAuthorsContainer.appendChild(row);

  renumberAuthorRows();
  updateAddButtonState();
  syncAuthorSelects();
});

function renumberAuthorRows() {
  const rows = extraAuthorsContainer.querySelectorAll(".author-input-row");
  rows.forEach((row, i) => {
    const authorNumber = i + 2; // autor 1 é o campo "Nome completo"
    const input = row.querySelector("input");
    input.name = `autor_${authorNumber}`;
    input.placeholder = `Nome do autor ${authorNumber}`;
  });
}

function updateAddButtonState() {
  const currentRows = extraAuthorsContainer.querySelectorAll(".author-input-row").length;
  addAuthorBtn.disabled = currentRows >= MAX_EXTRA_AUTHORS;
}

const fApresentador = document.getElementById("fApresentador");
const fCorrespondente = document.getElementById("fCorrespondente");

function getAllAuthorNames() {
  const names = [];
  const mainName = document.getElementById("fName").value.trim();
  if (mainName) names.push(mainName);

  extraAuthorsContainer.querySelectorAll("input").forEach((input) => {
    const val = input.value.trim();
    if (val) names.push(val);
  });

  return names;
}

function syncAuthorSelects() {
  const names = getAllAuthorNames();

  [fApresentador, fCorrespondente].forEach((select) => {
    const previousValue = select.value;

    // remove tudo, exceto o placeholder
    select.innerHTML = '<option value="" disabled>Selecione</option>';

    names.forEach((name) => {
      const opt = document.createElement("option");
      opt.value = name;
      opt.textContent = name;
      select.appendChild(opt);
    });

    // mantém a seleção anterior se o nome ainda existir na lista
    if (names.includes(previousValue)) {
      select.value = previousValue;
    } else {
      select.value = "";
      select.querySelector('option[value=""]').selected = true;
    }
  });
}

// atualiza sempre que o nome principal for digitado
document.getElementById("fName").addEventListener("input", syncAuthorSelects);

// atualiza sempre que um autor extra for digitado (delegação de evento)
extraAuthorsContainer.addEventListener("input", syncAuthorSelects);
/* =====================================================================
   Rascunho automático — salva os campos no localStorage para não perder
   nada se o envio falhar, a página recarregar ou fechar sem querer.
   Obs.: o arquivo anexado (.docx) NÃO pode ser salvo por segurança do
   navegador — se a página recarregar, é preciso reanexar o arquivo.
   ===================================================================== */
function coletarRascunho() {
  const autoresExtras = Array.from(
      extraAuthorsContainer.querySelectorAll(".author-input-row input")
  ).map((input) => input.value);

  return {
    nome: document.getElementById("fName").value,
    email: document.getElementById("fEmail").value,
    instituicao: document.getElementById("fInstituicao").value,
    tipoEstudo: document.getElementById("fTipoEstudo").value,
    titulo: document.getElementById("fTitulo").value,
    resumo: document.getElementById("fResumo").value,
    apresentador: fApresentador.value,
    correspondente: fCorrespondente.value,
    aceiteTermos: termsCheckbox ? termsCheckbox.checked : false,
    autoresExtras,
  };
}

function salvarRascunho() {
  try {
    localStorage.setItem(DRAFT_KEY, JSON.stringify(coletarRascunho()));
  } catch (e) {
    // localStorage indisponível (modo privado, cookies bloqueados etc.) — ignora
  }
}

function clearDraft() {
  try {
    localStorage.removeItem(DRAFT_KEY);
  } catch (e) {
    // ignora
  }
}

let salvarRascunhoTimeout;
function agendarSalvarRascunho() {
  clearTimeout(salvarRascunhoTimeout);
  salvarRascunhoTimeout = setTimeout(salvarRascunho, 400);
}

// salva a cada alteração em qualquer campo do formulário (exceto o arquivo)
form.addEventListener("input", agendarSalvarRascunho);
form.addEventListener("change", agendarSalvarRascunho);

function restaurarRascunho() {
  let raw;
  try {
    raw = localStorage.getItem(DRAFT_KEY);
  } catch (e) {
    return;
  }
  if (!raw) return;

  let dados;
  try {
    dados = JSON.parse(raw);
  } catch (e) {
    return;
  }

  document.getElementById("fName").value = dados.nome || "";
  document.getElementById("fEmail").value = dados.email || "";
  document.getElementById("fInstituicao").value = dados.instituicao || "";
  document.getElementById("fTitulo").value = dados.titulo || "";
  document.getElementById("fResumo").value = dados.resumo || "";
  if (dados.tipoEstudo) document.getElementById("fTipoEstudo").value = dados.tipoEstudo;
  if (termsCheckbox) termsCheckbox.checked = !!dados.aceiteTermos;

  // recria as linhas de autores extras necessárias antes de preenchê-las
  const autoresExtras = Array.isArray(dados.autoresExtras) ? dados.autoresExtras : [];
  autoresExtras.forEach((_, i) => {
    if (i < MAX_EXTRA_AUTHORS) addAuthorBtn.click();
  });
  const linhas = extraAuthorsContainer.querySelectorAll(".author-input-row input");
  linhas.forEach((input, i) => {
    input.value = autoresExtras[i] || "";
  });

  // recalcula as opções dos selects de apresentador/correspondente com os nomes restaurados
  syncAuthorSelects();
  if (dados.apresentador) fApresentador.value = dados.apresentador;
  if (dados.correspondente) fCorrespondente.value = dados.correspondente;

  const temConteudo = dados.nome || dados.email || dados.titulo || dados.resumo || autoresExtras.some(Boolean);
  if (temConteudo) {
    showToast("Continuamos de onde você parou — não esqueça de reanexar o arquivo .docx.", "success");
  }
}

restaurarRascunho();