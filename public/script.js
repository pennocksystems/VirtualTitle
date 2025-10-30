// --- DOM Elements ---
const chatBody = document.getElementById('chat-body');
const chatInput = document.getElementById('chat-input');
const sendBtn = document.getElementById('send-btn');
const statePill = document.getElementById('state-pill');

// --- Allow Enter key to trigger send ---
chatInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    handleUserResponse();
  }
});

// --- Existing send button listener ---
sendBtn.addEventListener('click', handleUserResponse);

// --- State ---
const questions = [
  "What's your Name?",
  "What's your Phone Number?",
  "Great! Now, please select your state of residence.",
];

let answers = {};
let currentQuestionIndex = 0;
let saidNiceToMeetYou = false;
let aiMode = false;
let recordCheckMode = false;
let verificationMode = false;
let pendingClientData = null;

// 🔹 Active per-state module (populated after state selection)
let currentStateModule = null;

// --- Typing indicator (singleton-safe) ---
let activeTypingTimeout = null;
let activeTypingDiv = null;

function showTypingIndicator(callback, delay = 800) {
  if (activeTypingTimeout) clearTimeout(activeTypingTimeout);
  if (activeTypingDiv && activeTypingDiv.parentNode) {
    activeTypingDiv.remove();
  }

  const typingDiv = document.createElement('div');
  typingDiv.classList.add('bot-message', 'typing');
  typingDiv.innerHTML = `<span class="dot"></span><span class="dot"></span><span class="dot"></span>`;
  chatBody.appendChild(typingDiv);
  chatBody.scrollTop = chatBody.scrollHeight;
  activeTypingDiv = typingDiv;

  activeTypingTimeout = setTimeout(() => {
    if (typingDiv.parentNode) typingDiv.remove();
    activeTypingTimeout = null;
    activeTypingDiv = null;
    if (typeof callback === "function") callback();
  }, delay);
}

// --- Initial messages ---
addMessage("Hey there! I'm <strong>Title Tom</strong>.", 'bot', true);
setTimeout(() => addMessage("I'm here to help you navigate the confusing world of titles.", 'bot', true), 1200);
setTimeout(() => addMessage("Are you looking for general title information/instructions, or do you have a vehicle title issue with one of our services like SHiFT, Car Donation Wizard, or You Call We Haul?", 'bot', true), 2500);
setTimeout(() => addIntroOptions(), 4000);

// --- State Normalization ---
const stateMap = {
  "AL": "Alabama", "AK": "Alaska", "AZ": "Arizona", "AR": "Arkansas",
  "CA": "California", "CO": "Colorado", "CT": "Connecticut", "DE": "Delaware",
  "FL": "Florida", "GA": "Georgia", "HI": "Hawaii", "ID": "Idaho",
  "IL": "Illinois", "IN": "Indiana", "IA": "Iowa", "KS": "Kansas",
  "KY": "Kentucky", "LA": "Louisiana", "ME": "Maine", "MD": "Maryland",
  "MA": "Massachusetts", "MI": "Michigan", "MN": "Minnesota", "MS": "Mississippi",
  "MO": "Missouri", "MT": "Montana", "NE": "Nebraska", "NV": "Nevada",
  "NH": "New Hampshire", "NJ": "New Jersey", "NM": "New Mexico", "NY": "New York",
  "NC": "North Carolina", "ND": "North Dakota", "OH": "Ohio", "OK": "Oklahoma",
  "OR": "Oregon", "PA": "Pennsylvania", "RI": "Rhode Island", "SC": "South Carolina",
  "SD": "South Dakota", "TN": "Tennessee", "TX": "Texas", "UT": "Utah",
  "VT": "Vermont", "VA": "Virginia", "WA": "Washington", "WV": "West Virginia",
  "WI": "Wisconsin", "WY": "Wyoming"
};

function normalizeState(input) {
  if (!input) return '';
  const cleaned = input.trim().toUpperCase();

  if (stateMap[cleaned]) return stateMap[cleaned];

  const match = Object.values(stateMap).find(
    name => name.toUpperCase().startsWith(cleaned)
  );
  return match || input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
}

// --- Helpers shared with modules ---
function normalizeForMatch(s) {
  if (!s) return '';
  return s
    .toLowerCase()
    .replace(/[\u2010\u2011\u2012\u2013\u2014\u2015\u2212\uFE58\uFE63\uFF0D\u2043\u002D]/g, '-')
    .replace(/[\s_]+/g, '-')
    .replace(/[()]/g, '')
    .replace(/-{2,}/g, '-')
    .trim();
}

function getFormsFromText(remedyText, formLibrary) {
  const normalized = normalizeForMatch(remedyText);
  const found = [];

  for (const code of Object.keys(formLibrary || {})) {
    const codeNorm = normalizeForMatch(code);
    const codeNoDash = codeNorm.replace(/-/g, '');
    if (
      normalized.includes(codeNorm) ||
      normalized.replace(/-/g, '').includes(codeNoDash) ||
      normalized.includes(codeNoDash) ||
      normalized.includes(codeNorm.replace('mvt-', 'mvt'))
    ) {
      found.push(code);
    }
  }
  return [...new Set(found)];
}

// --- Global DEBUG ---
const DEBUG = true;
const dbg = (...args) => DEBUG && console.log(...args);

/* ============================================================
   🔁 Per-state dynamic loader (absolute paths)
============================================================ */
function buildStateModuleCandidates(stateName) {
  const raw = (stateName || '').trim();
  if (!raw) return [];
  const full = stateMap[raw.toUpperCase()] || raw;
  const fullSlug = full.toLowerCase().replace(/\s+/g, '-');
  const abbr = Object.entries(stateMap).find(([, v]) => v === full)?.[0]?.toLowerCase() || '';

  return [
    `/states/${fullSlug}.js`,
    `/states/${fullSlug}/index.js`,
    abbr ? `/states/${abbr}.js` : null,
    abbr ? `/states/${abbr}/index.js` : null,
  ].filter(Boolean);
}

async function loadStateModule(stateName) {
  const candidates = buildStateModuleCandidates(stateName);
  let lastErr = null;
  for (const p of candidates) {
    try {
      const mod = await import(p);
      currentStateModule = typeof mod.default === 'function' ? mod.default() : mod;
      console.log(`✅ Loaded state module: ${p}`, currentStateModule);
      return;
    } catch (e) {
      lastErr = e;
      console.debug(`Tried ${p} -> ${e?.message || e}`);
    }
  }
  console.error(`⚠️ No state module found for "${stateName}". Tried:\n${candidates.join('\n')}\n`, lastErr);
  currentStateModule = null;
}

/* ============================================================
   🔌 Record check helpers
   1) Try server route /check-client (best for Render)
   2) Fallback to client CSV parser at /data/db.js if needed
============================================================ */
function normalizePhone(raw) { return (raw || '').replace(/[^\d]/g, ''); }
function looksLikeEmail(v) { return /@/.test(v); }

async function fetchRecordViaServer(identifier) {
  const body = looksLikeEmail(identifier)
    ? { email: identifier }
    : { phone: normalizePhone(identifier) };

  const resp = await fetch('/check-client', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });
  if (!resp.ok) throw new Error(`Server /check-client ${resp.status}`);
  const data = await resp.json();
  return data.match ? data.data : null;
}

async function fetchRecordViaCSV(identifier) {
  try {
    const mod = await import('/data/db.js'); // served statically by Express
    const fn = mod.fetchClientRecord || mod.default;
    if (typeof fn !== 'function') return null;
    return await fn(identifier);
  } catch (e) {
    console.warn('CSV fallback import failed:', e);
    return null;
  }
}

async function fetchClientRecordSmart(identifier) {
  try {
    const rec = await fetchRecordViaServer(identifier);
    if (rec) return rec;
  } catch (e) {
    console.warn('Server record check failed, trying CSV fallback…', e);
  }
  return await fetchRecordViaCSV(identifier);
}

// --- Core flow handlers ---
async function handleUserResponse() {
  const userText = chatInput.value.trim();
  if (!userText) return;

  // --- 2FA Step ---
  if (verificationMode) {
    addMessage(userText, 'user');
    chatInput.value = '';
    if (userText === '0000') {
      verificationMode = false;
      const c = pendingClientData;
      const summary = `✅ It looks like your <strong>${c["vehicle year"]} ${c["vehicle make"]} ${c["vehicle model"]}</strong> is registered in <strong>${c["state"]}</strong>. Is this still accurate?`;
      await addMessage(summary, 'bot', true);
      setTimeout(() => showConfirmButtons(c), 800);
    } else {
      addMessage("❌ That code is incorrect. Please try entering the 4-digit code again.", 'bot', true);
    }
    return;
  }

  // --- Record Check Mode ---
  if (recordCheckMode) {
    recordCheckMode = false;
    addMessage(userText, 'user');
    chatInput.value = '';

    const record = await fetchClientRecordSmart(userText); // email or phone
    if (record) {
      pendingClientData = record;
      verificationMode = true;
      addMessage(
        "📧 We've sent a 4-digit code to the email address you provided. Please type that code here to verify access (DEMO CODE:<strong>0000</strong>).",
        'bot',
        true
      );
    } else {
      addMessage("❌ No record found for that contact. No worries — let's continue manually.", 'bot');
      currentQuestionIndex = 2;
      setTimeout(() => addStateInput(), 1000);
    }
    return;
  }

  // --- AI mode ---
  if (aiMode) {
    addMessage(userText, 'user');
    chatInput.value = '';

    const formResponse = checkForFormDownload(userText);
    if (formResponse) {
      addMessage(formResponse, 'bot', true);
    } else {
      callOpenAI(userText);
    }
    return;
  }

  // --- State collection step ---
  if (currentQuestionIndex === 2) {
    const stateInput = document.getElementById('state-input');
    const rawInput = stateInput ? stateInput.value.trim() : chatInput.value.trim();

    if (!rawInput) {
      alert('Please enter your state before continuing.');
      return;
    }

    const normalizedState = normalizeState(rawInput);
    answers['state'] = normalizedState;

    if (stateInput && stateInput.parentNode) stateInput.parentNode.remove();
    chatInput.value = '';

    addMessage(normalizedState, 'user');

    // 🔹 Load per-state module dynamically
    await loadStateModule(normalizedState);

    // 🔹 Update header pill
    if (statePill) {
      statePill.textContent = normalizedState;
      statePill.classList.remove('hidden');
    }

    // 🔹 Tell the user we're switching to their state context
    setTimeout(async () => {
      await addMessage(
        `Perfect. I'll pull all the information I can regarding <strong>${normalizedState} Title Information</strong>. Here are some of the routes we can take:`,
        'bot',
        true
      );
      setTimeout(() => addOptionsGrid(), 900);
    }, 500);

    currentQuestionIndex++;
    return;
  }

  // --- Default flow (name/phone) ---
  addMessage(userText, 'user');
  const keys = ['name', 'phone', 'state'];
  answers[keys[currentQuestionIndex]] = userText;
  currentQuestionIndex++;
  chatInput.value = '';

  if (currentQuestionIndex < questions.length) {
    if (questions[currentQuestionIndex].toLowerCase().includes('state')) {
      setTimeout(() => addStateInput(), 800);
    } else {
      setTimeout(() => addMessage(getPersonalizedMessage(questions[currentQuestionIndex]), 'bot'), 800);
    }
  }
}

// --- UI Builders ---
async function addIntroOptions() {
  const html = `
    <div class="intro-options" style="display: flex; justify-content: center; gap: 12px; flex-wrap: wrap;">
      <button class="intro-btn" data-type="general">📘 General Title Help</button>
      <button class="intro-btn" data-type="issue">🚨 Problem with Vehicle Service Title Issue</button>
    </div>`;
  await addMessage(html, 'bot', true);

  document.querySelectorAll('.intro-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const choice = btn.getAttribute('data-type');
      addMessage(btn.textContent, 'user');
      handleIntroSelection(choice);
    });
  });
}

function handleIntroSelection(choice) {
  if (choice === 'general') {
    currentQuestionIndex = 2;
    addMessage("Great! Let's figure out your state of residence to get started.", 'bot');
    setTimeout(() => addStateInput(), 800);
  } else if (choice === 'issue') {
    addMessage("Got it! Before we dive in, would you like me to check if we already have a record of your vehicle?", 'bot');
    setTimeout(async () => await addRecordCheckOptions(), 800);
  }
}

async function addRecordCheckOptions() {
  const html = `
    <div class="intro-options" style="display: flex; justify-content: center; gap: 12px;">
      <button class="intro-btn" data-record="check">📋 Record Check</button>
      <button class="intro-btn" data-record="skip">⏭️ Skip For Now</button>
    </div>`;

  await addMessage(html, 'bot', true);

  document.querySelectorAll('[data-record]').forEach(btn => {
    btn.addEventListener('click', () => {
      addMessage(btn.textContent, 'user');
      const choice = btn.getAttribute('data-record');
      handleRecordCheckSelection(choice);
    });
  });
}

function handleRecordCheckSelection(choice) {
  if (choice === 'check') {
    recordCheckMode = true;
    addMessage("Please enter your email or phone number so I can check for a record on file.", 'bot');
  } else {
    currentQuestionIndex = 2;
    addMessage("No problem! Let's figure out your state of residence.", 'bot');
    setTimeout(() => addStateInput(), 800);
  }
}

function addStateInput() {
  addMessage("Please type your state of residence (e.g., Alabama, CA, etc.):", 'bot');
}

async function addOptionsGrid() {
  // Fallback generic options if no module (or module didn't define)
  const fallbackOptions = [
    "Ask Me Anything",
    "General Information"
  ];

  const orderedOptions = currentStateModule?.orderedOptions?.length
    ? currentStateModule.orderedOptions
    : fallbackOptions;

  const buttonsHTML = `
    <div class="options-grid">
      ${orderedOptions.map(option =>
        `<button class="option-btn${option === "Ask Me Anything" ? ' ai-btn' : ''}" data-option="${option}">${option}</button>`
      ).join('')}
    </div>`;

  await addMessage(buttonsHTML, 'bot', true);

  document.querySelectorAll('.option-btn').forEach(btn => {
    const selectedOption = btn.getAttribute('data-option');
    btn.addEventListener('click', () => {
      addMessage(btn.textContent, 'user');

      if (selectedOption === "Ask Me Anything") {
        aiMode = true;
        addMessage("Sure! What would you like to ask me about titles?", 'bot', true);
        return;
      }

      const responseHTML =
        currentStateModule?.optionResponses?.[selectedOption] ||
        "This section is coming soon for your state. Try another option or ask me anything about titles.";

      setTimeout(() => addMessage(responseHTML, 'bot', true), 500);
    });
  });
}

function addMessage(text, sender, isHTML = false) {
  return new Promise((resolve) => {
    if (sender === 'bot') {
      showTypingIndicator(() => {
        const div = document.createElement('div');
        div.classList.add('bot-message');
        div[isHTML ? 'innerHTML' : 'innerText'] = text;
        chatBody.appendChild(div);
        chatBody.scrollTop = chatBody.scrollHeight;
        resolve();
      });
    } else {
      const div = document.createElement('div');
      div.classList.add('user-message');
      div[isHTML ? 'innerHTML' : 'innerText'] = text;
      chatBody.appendChild(div);
      chatBody.scrollTop = chatBody.scrollHeight;
      resolve();
    }
  });
}

function getPersonalizedMessage(text) {
  if (!saidNiceToMeetYou && answers.name) {
    saidNiceToMeetYou = true;
    return `Nice to meet you, ${answers.name}. ${text}`;
  }
  return text;
}

function checkForFormDownload(message) {
  const msg = message.toLowerCase().replace(/\s|_/g, '-');
  const formLibrary = currentStateModule?.formLibrary || {};
  for (const [formId, meta] of Object.entries(formLibrary)) {
    if (msg.includes(formId)) {
      return `📥 You can download the <strong>${meta.label}</strong> below:<br><br><a href="${meta.path}" target="_blank" style="color: #3b82f6; text-decoration: underline;">📄 Open ${meta.label}</a>`;
    }
  }
  return null;
}

async function callOpenAI(userMessage) {
  addMessage("Thinking...", 'bot');
  try {
    const res = await fetch('/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userMessage })
    });
    const data = await res.json();
    chatBody.lastChild.remove();
    addMessage(data.reply || "Sorry, I couldn't get a response.", 'bot', true);
  } catch (err) {
    chatBody.lastChild.remove();
    addMessage("Error contacting AI service.", 'bot');
  }
}

// --- Delegated click handlers (bind once) ---
if (!window._delegatesBound) {
  // 1) Handle state confirm (Yes/No) after 2FA summary
  chatBody.addEventListener('click', async (e) => {
    const btn = e.target.closest('[data-confirm]');
    if (!btn) return;

    const choice = btn.getAttribute('data-confirm');
    addMessage(btn.textContent, 'user');

    if (choice === 'yes') {
      if (!pendingClientData) {
        await addMessage("Sorry—your record isn’t available. Let’s proceed manually.", 'bot');
        setTimeout(() => addOptionsGrid(), 600);
        return;
      }

      const stateName = pendingClientData["state"];
      answers['state'] = stateName;

      await addMessage(
        `Awesome. I'll use your state of <strong>${stateName}</strong> to pull relevant info.`,
        'bot',
        true
      );

      await new Promise(r => setTimeout(r, 500));

      // ensure module is loaded for record-based flow too
      await loadStateModule(stateName);
      if (statePill) {
        statePill.textContent = stateName;
        statePill.classList.remove('hidden');
      }

      const status = pendingClientData["internal title status"];
      await addMessage(
        `Based on our records regarding your profile, your current title status shows <strong>${status}</strong>.`,
        'bot',
        true
      );

      await runRemedyFlow(pendingClientData);

    } else {
      currentQuestionIndex = 2;
      await addMessage("No worries — let's update your state of residence.", 'bot');
      setTimeout(() => addStateInput(), 600);
    }
  });

  // 2) Handle form Y/N prompt from remedy flow
  chatBody.addEventListener('click', async (e) => {
    const btn = e.target.closest('[data-formconfirm]');
    if (!btn) return;

    const yn = btn.getAttribute('data-formconfirm');
    addMessage(btn.textContent, 'user');

    const forms = Array.isArray(window._pendingForms) ? window._pendingForms : [];
    delete window._pendingForms;

    if (yn === 'yes' && forms.length) {
      for (const code of forms) {
        const meta = (currentStateModule?.formLibrary || {})[code];
        if (!meta) continue;
        const link = meta.path || meta.url;
        if (link) {
          await addMessage(
            `📄 <strong>${meta.label}</strong><br><a href="${link}" target="_blank" style="color:#3b82f6;text-decoration:underline;">Open Form</a>`,
            'bot',
            true
          );
        }
      }
    } else {
      await addMessage("No problem. We can continue without the forms for now.", 'bot');
    }

    setTimeout(() => addOptionsGrid(), 800);
  });

  window._delegatesBound = true;
}

// --- Small UI helpers ---
function showConfirmButtons(clientData) {
  const html = `
    <div class="intro-options" style="display: flex; justify-content: center; gap: 12px;">
      <button class="intro-btn" data-confirm="yes">✅ Yes, that's correct</button>
      <button class="intro-btn" data-confirm="no">❌ No, that's outdated</button>
    </div>`;
  addMessage(html, 'bot', true);
}

// --- Remedy flow (uses current state's forms/remedy text) ---
async function runRemedyFlow(clientData) {
  if (!clientData) {
    setTimeout(() => addOptionsGrid(), 600);
    return;
  }

  const remedyText = clientData["title remedy"];
  if (!remedyText) {
    await addMessage("I don’t have a specific remedy on file. Let’s continue.", 'bot', true);
    setTimeout(() => addOptionsGrid(), 600);
    return;
  }

  await addMessage(`🛠️ To address this, here's what I recommend: <strong>${remedyText}</strong>`, 'bot', true);

  const matchedForms = getFormsFromText(remedyText, currentStateModule?.formLibrary || {});
  if (!Array.isArray(matchedForms) || matchedForms.length === 0) {
    setTimeout(() => addOptionsGrid(), 700);
    return;
  }

  window._pendingForms = matchedForms;

  const formList = matchedForms
    .map(code => {
      const f = (currentStateModule?.formLibrary || {})[code];
      return f ? `<li><strong>${f.label}</strong></li>` : "";
    })
    .join('');

  await addMessage(
    `I noticed your remedy mentions the following form(s):<br><ul>${formList}</ul>Would you like me to provide links to these forms?`,
    'bot',
    true
  );

  await addMessage(`
    <div class="intro-options" style="display:flex;justify-content:center;gap:12px;">
      <button class="intro-btn" data-formconfirm="yes">✅ Yes</button>
      <button class="intro-btn" data-formconfirm="no">❌ No</button>
    </div>`,
    'bot',
    true
  );
}

// === Dark Mode Toggle ===
const darkToggle = document.getElementById('dark-toggle');
if (darkToggle) {
  darkToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
  });
}