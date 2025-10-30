// /data/db.js

// --- CSV parser (handles BOM, CRLF, quotes, embedded commas) ---
function parseCSV(text) {
  if (text && text.charCodeAt(0) === 0xFEFF) text = text.slice(1);
  text = text.replace(/\r\n/g, '\n').replace(/\r/g, '\n');

  const rows = [];
  let i = 0, field = '', row = [], inQuotes = false;

  while (i < text.length) {
    const ch = text[i];

    if (inQuotes) {
      if (ch === '"') {
        if (text[i + 1] === '"') { field += '"'; i += 2; continue; }
        inQuotes = false; i++; continue;
      }
      field += ch; i++; continue;
    } else {
      if (ch === '"') { inQuotes = true; i++; continue; }
      if (ch === ',') { row.push(field.trim()); field = ''; i++; continue; }
      if (ch === '\n') { row.push(field.trim()); rows.push(row); row = []; field = ''; i++; continue; }
      field += ch; i++;
    }
  }
  row.push(field.trim());
  rows.push(row);

  while (rows.length && rows[rows.length - 1].every(c => c === '')) rows.pop();
  if (!rows.length) return [];

  const headers = rows[0].map(h => h.trim().toLowerCase());
  const out = [];
  for (let r = 1; r < rows.length; r++) {
    const rec = {};
    for (let c = 0; c < headers.length; c++) rec[headers[c]] = rows[r][c] ?? '';
    out.push(rec);
  }
  return out;
}

function normalizePhone(v) {
  return (v || '').replace(/[^\d]/g, '');
}

async function loadClientCSV() {
  const url = '/data/client_data.csv'; // absolute path from site root
  const resp = await fetch(url, { cache: 'no-store' });
  if (!resp.ok) throw new Error(`Failed to fetch ${url}: ${resp.status} ${resp.statusText}`);
  return parseCSV(await resp.text());
}

export async function fetchClientRecord(identifier) {
  const idRaw = (identifier || '').trim();
  if (!idRaw) return null;

  const isEmailQuery = idRaw.includes('@');
  const idPhone = normalizePhone(idRaw);

  const rows = await loadClientCSV();

  for (const rec of rows) {
    // Fuzzy-match header names (works with "client email", "client phone", etc.)
    const keys = Object.keys(rec);
    const emailKey = keys.find(k => k.includes('email'));
    const phoneKey = keys.find(k => k.includes('phone'));

    const recEmail = (emailKey ? rec[emailKey] : '').toLowerCase();
    const recPhone = normalizePhone(phoneKey ? rec[phoneKey] : '');

    if (isEmailQuery) {
      if (recEmail && recEmail === idRaw.toLowerCase()) return rec;
    } else {
      if (recPhone && recPhone === idPhone) return rec;
    }
  }
  return null;
}

// Optional: expose for console debugging
try { if (typeof window !== 'undefined') window.fetchClientRecord = fetchClientRecord; } catch {}