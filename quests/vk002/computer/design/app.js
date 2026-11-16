/* Local design reference. Quest read facts remain the native game's responsibility. */
'use strict';
let content;
let activePage;
const page = document.getElementById('page');
const escapeHtml = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const emblem = `<svg class="orbit" viewBox="0 0 440 440" aria-hidden="true"><circle class="thin" cx="220" cy="220" r="172"/><circle class="thin" cx="220" cy="220" r="141"/><ellipse class="thin" cx="220" cy="220" rx="213" ry="65" transform="rotate(-32 220 220)"/><ellipse class="thin" cx="220" cy="220" rx="185" ry="85" transform="rotate(35 220 220)"/><path class="petal" d="M220 316C80 225 116 110 183 145c22 11 32 32 37 50 5-18 15-39 37-50 67-35 103 80-37 171Z"/><path class="petal" d="M220 286c-89-61-66-130-25-106 13 7 20 20 25 32 5-12 12-25 25-32 41-24 64 45-25 106Z"/><circle class="solid" cx="52" cy="262" r="5"/><circle class="solid" cx="354" cy="115" r="3"/><path class="solid" d="m319 308 4 10 10 4-10 4-4 10-4-10-10-4 10-4Z"/><path class="thin" d="M220 23v30m0 334v30M23 220h30m334 0h30"/></svg>`;
const anonymousPortrait = `<svg viewBox="0 0 200 230" aria-label="Anonymous profile portrait" role="img"><path fill="#c79383" d="M100 25c-28 0-43 22-43 50 0 26 13 51 30 59v19c-35 6-63 26-68 62h162c-5-36-33-56-68-62v-19c17-8 30-33 30-59 0-28-15-50-43-50Z"/><path fill="#45313e" d="M50 70h100v35H50z"/><text x="100" y="95" text-anchor="middle" fill="#f0e8d6" font-family="Georgia,serif" font-size="23">V</text></svg>`;
function brand(){return document.getElementById('brand-template').innerHTML;}
function home(data){
  const headline=escapeHtml(data.subtitle).replace(" worth a second look.","<br>worth a <em>second<br>look.</em>");
  return `${brand()}<section class="home-layout"><div class="hero-copy"><div class="eyebrow overline">A little chemistry. A lasting impression.</div><h1>${headline}</h1><p>${escapeHtml(data.body)}</p><a class="primary-link" href="#profile">View your companion <span>↗</span></a><div class="fine-print">PRIVATE BOOKING / SUNSET-2</div></div><div class="hero-art">${emblem}<div class="art-code">TWO SIGNALS. ONE CONNECTION.</div></div></section><section class="booking-strip" aria-label="Booking summary"><div><span class="eyebrow">Your evening</span><strong>A connection is waiting.</strong></div><div><span class="eyebrow">Booking reference</span><strong>SUNSET-2</strong></div><div class="status">PROFILE AVAILABLE</div></section><p class="page-disclaimer">${escapeHtml(data.footer)}</p>`;
}
function profile(data){
  const rows = data.body.split('\n').map(line => {const split=line.indexOf(':');return [line.slice(0,split),line.slice(split+1).trim()];});
  const detailRows = rows.filter(([key])=>key!=='Meeting code').map(([key,value])=>`<div class="profile-detail"><dt>${escapeHtml(key)}</dt><dd>${escapeHtml(value)}</dd></div>`).join('');
  const code = rows.find(([key])=>key==='Meeting code')?.[1].replace(/\.$/,'') || 'SUNSET-2';
  return `${brand()}<section class="profile-layout"><aside class="profile-visual"><div class="portrait">${anonymousPortrait}<div class="portrait-label">DISCRETION COMES STANDARD</div></div><div class="profile-id"><span>COMPANION / 000V</span><strong>PRIVATE PROFILE</strong></div></aside><div class="profile-copy"><div class="eyebrow overline">Your evening, curated</div><h1>${escapeHtml(data.title).replace(' / ','<br>')}</h1><div class="verification"><span class="badge">◇</span>${escapeHtml(data.subtitle)}</div><dl class="profile-body">${detailRows}</dl><div class="code-card"><div><small>MEETING CODE</small><strong>${escapeHtml(code)}</strong></div><span class="code-icon" aria-hidden="true">✧</span></div></div></section><footer class="profile-footer"><p>${escapeHtml(data.footer)}</p><a href="#home">← Back to Afterglow</a></footer>`;
}
function serviceLog(data){
  const [summary,trace] = data.body.split('\n');
  const sentences = summary.split(/(?<=\.)\s+/);
  const rows = [
    ['Pairing',sentences[0]],
    ['Booking reference',sentences[1].replace(/^Booking reference: /,'').replace(/\.$/,'')],
    ['Camera export',sentences[2].replace(/^Camera export: /,'')],
    ['Clock check',sentences[3]],
    ['Access request',sentences[4]],
    ['Intrusion trace',trace.replace(/^Intrusion trace: /,'')]
  ];
  return `<header class="local-header"><div class="eyebrow">VENUE SYSTEMS / MAINTENANCE</div><span class="local-icon" aria-hidden="true">▤</span></header><section class="local-content"><div class="file-meta"><span>LOCAL RECORD / SERVICE-LIFT</span><span>READ ONLY · 21:14</span></div><h1>${escapeHtml(data.title)}</h1><p class="local-subtitle">${escapeHtml(data.subtitle)}</p><div class="log-records">${rows.map(([label,value],i)=>`<div class="log-row ${i===5?'trace':''}"><span class="row-num">${String(i+1).padStart(2,'0')}</span><div class="row-label">${label}</div><div>${i===1?`<mark>${escapeHtml(value)}</mark>`:escapeHtml(value)}</div></div>`).join('')}</div><footer class="local-footer"><p>${escapeHtml(data.footer)}</p><a href="#profile">Open booking URL ↗</a></footer></section>`;
}
function render(){
  const requested=location.hash.slice(1)||'home';
  const key=Object.hasOwn(content.pages,requested)?requested:'home';
  const data=content.pages[key];
  page.classList.toggle('local-page',key==='service_log');
  page.innerHTML=key==='profile'?profile(data):home(data);
  document.getElementById('address').textContent=key==='service_log'?'LOCAL://venue/maintenance/service-lift/21-14':data.address;
  document.getElementById('document-type').textContent=key==='service_log'?'LOCAL FILE / READ ONLY':'NETdir / public site';
  document.getElementById('back').disabled=key==='home';
  document.querySelectorAll('[data-app]').forEach(link=>{const selected=link.dataset.app===(key==='service_log'?'local':'net');link.classList.toggle('active',selected);if(selected)link.setAttribute('aria-current','page');else link.removeAttribute('aria-current');});
  document.querySelectorAll('[data-page]').forEach(link=>{const selected=link.dataset.page===key;link.classList.toggle('active',selected);if(selected)link.setAttribute('aria-current','page');});
  document.title=`${key==='service_log'?'Venue maintenance':key==='profile'?'V / Discreet mercenary':'Afterglow'} · NETdir`;
  if(activePage){page.focus({preventScroll:true});window.scrollTo(0,0);}
  activePage=key;
}
document.getElementById('back').addEventListener('click',()=>{location.hash='home';});
window.addEventListener('hashchange',()=>{if(content)render();});
fetch('../content.json').then(response=>{if(!response.ok)throw Error('Page content could not be loaded');return response.json();}).then(data=>{content=data;render();}).catch(error=>{page.innerHTML=`<p class="load-error">${escapeHtml(error.message)}</p>`;});
