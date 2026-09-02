/* ============================= ICONS ============================= */
const ICONS = {
  dashboard:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="3" width="7" height="9" rx="1.5"/><rect x="14" y="3" width="7" height="5" rx="1.5"/><rect x="14" y="12" width="7" height="9" rx="1.5"/><rect x="3" y="16" width="7" height="5" rx="1.5"/></svg>',
  inbox:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16v12H8l-4 4V4z"/></svg>',
  orders:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7l9-4 9 4-9 4-9-4z"/><path d="M3 7v10l9 4 9-4V7"/><path d="M12 11v10"/></svg>',
  inventory:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="7" width="18" height="14" rx="1.5"/><path d="M3 7l3-4h12l3 4"/><path d="M9 11v3"/><path d="M15 11v3"/></svg>',
  offers:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.6 12.1L12 20.7a2 2 0 01-2.8 0l-7-7a2 2 0 010-2.8L10.8 2.3a2 2 0 011.4-.6h6.4A2 2 0 0121 3.7v6.4a2 2 0 01-.4 1z"/><circle cx="15.5" cy="7.5" r="1.5"/></svg>',
  shipments:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="6" width="14" height="11" rx="1"/><path d="M15 10h4l4 4v3h-8z"/><circle cx="6" cy="19" r="1.7"/><circle cx="17.5" cy="19" r="1.7"/></svg>',
  employees:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.3"/><path d="M2.5 20c1-4 3.6-6 6.5-6s5.5 2 6.5 6"/><circle cx="17.5" cy="8.3" r="2.6"/><path d="M16 14.3c2.4.2 4.3 2 5.1 5"/></svg>',
  reports:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19V9"/><path d="M11 19V4"/><path d="M18 19v-7"/><path d="M2 19h20"/></svg>',
  search:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>',
  bell:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8a6 6 0 00-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 01-3.4 0"/></svg>',
  chevron:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M9 5l7 7-7 7"/></svg>',
  plus:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>',
  close:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>',
  check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>',
  send:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4 20-7z"/></svg>',
  cart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1.4"/><circle cx="19" cy="21" r="1.4"/><path d="M1 1h4l2.7 13.4a2 2 0 002 1.6h9.7a2 2 0 002-1.6L23 6H6"/></svg>',
  box:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8l-9-5-9 5 9 5 9-5z"/><path d="M3 8v8l9 5 9-5V8"/><path d="M12 13v8"/></svg>',
  alert:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 9v4"/><path d="M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0z"/><path d="M12 17h.01"/></svg>',
  tag:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.6 12.1L12 20.7a2 2 0 01-2.8 0l-7-7a2 2 0 010-2.8L10.8 2.3a2 2 0 011.4-.6h6.4A2 2 0 0121 3.7v6.4a2 2 0 01-.4 1z"/><circle cx="15.5" cy="7.5" r="1.5"/></svg>',
  money:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="3"/><path d="M6 6v.01M18 18v-.01"/></svg>',
  truck:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="6" width="14" height="11" rx="1"/><path d="M15 10h4l4 4v3h-8z"/><circle cx="6" cy="19" r="1.7"/><circle cx="17.5" cy="19" r="1.7"/></svg>',
  edit:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>',
  download:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><path d="M7 10l5 5 5-5"/><path d="M12 15V3"/></svg>',
  calendar:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>',
  trend:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 6l-9.5 9.5-5-5L1 18"/><path d="M17 6h6v6"/></svg>',
  user:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21c1.3-4.5 4.5-7 8-7s6.7 2.5 8 7"/></svg>',
  trash:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2"/><path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"/></svg>',
  upload:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><path d="M17 8l-5-5-5 5"/><path d="M12 3v12"/></svg>',
  image:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>',
  instagram:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" stroke="none"/></svg>',
  whatsapp:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21l1.4-4.6A8.5 8.5 0 1112 20.5c-1.5 0-2.9-.4-4.1-1.1L3 21z"/><path d="M8.5 9.7c.3 2.9 2.5 5.1 5.4 5.4.6.1 1-.4.9-1l-.2-.9a.8.8 0 00-.6-.6l-1.4-.3-1.4-1.4-.3-1.4a.8.8 0 00-.6-.6l-.9-.2c-.6-.1-1.1.3-1 .9z"/></svg>',
  wallet:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2v-5"/><path d="M16 12h5v4h-5z"/><circle cx="18.5" cy="14" r="0.75"/></svg>'
};
function icon(name){return ICONS[name]||'';}
function fmtNPR(n){return 'Rs. ' + (n||0).toLocaleString('en-IN');}
function margin(p){
  if(!p || !p.price) return 0;
  return Math.round(((p.price - p.cost) / p.price) * 100);
}
function fmtDate(d){
  if(!d) return '—';
  const dt = new Date(d+'T00:00:00');
  return dt.toLocaleDateString('en-US',{month:'short', day:'numeric', year:'numeric'});
}

/* ============================= GLOBAL STATE ============================= */
let PRODUCTS = [];
let ORDERS = [];
let CONVERSATIONS = [];
let OFFERS = [];
let SHIPMENTS = [];
let EMPLOYEES = [];
let LEAVE_REQUESTS = [];
let CATEGORIES = ['Outerwear','Hoodies','Bottoms','T-Shirts','Accessories'];

let STATE = {
  screen:'dashboard',
  activeConvId:'c1',
  inboxChannel:'all',
  expandedProducts:new Set(),
  orderDetailId:null,
  invSort:{key:null,dir:1},
  employeeTab:'roster',
  pendingOrderItems:[],
  pendingOrderConv:null
};

const TODAY = '2026-07-28';

function toast(msg, type = 'success'){
  const t = document.getElementById('toast');
  if(!t) return;
  const iconSvg = type === 'error' ? icon('alert') : icon('check');
  t.className = `toast toast-${type}`;
  t.innerHTML = `
    <div class="toast-icon-wrap">${iconSvg}</div>
    <div class="toast-msg-text">${msg}</div>`;
  t.classList.add('show');
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => t.classList.remove('show'), 2600);
}

/* ============================= API SERVICES ============================= */
let NCM_BRANCHES_DATA = [
  // Kathmandu Valley
  {code:'TINK1', name:'TINKUNE', district:'KATHMANDU', label:'TINKUNE - KATHMANDU'},
  {code:'CHAB1', name:'CHABAHIL', district:'KATHMANDU', label:'CHABAHIL - KATHMANDU'},
  {code:'KALA1', name:'KALANKI', district:'KATHMANDU', label:'KALANKI - KATHMANDU'},
  {code:'SAMA1', name:'SAMAKHUSI', district:'KATHMANDU', label:'SAMAKHUSI - KATHMANDU'},
  {code:'NEWR1', name:'NEW ROAD', district:'KATHMANDU', label:'NEW ROAD - KATHMANDU'},
  {code:'LALI1', name:'LALITPUR', district:'LALITPUR', label:'LALITPUR - LALITPUR'},
  {code:'BHAK1', name:'BHAKTAPUR', district:'BHAKTAPUR', label:'BHAKTAPUR - BHAKTAPUR'},
  {code:'THAM1', name:'THAMEL', district:'KATHMANDU', label:'THAMEL - KATHMANDU'},
  {code:'KIRT1', name:'KIRTIPUR', district:'KATHMANDU', label:'KIRTIPUR - KATHMANDU'},
  
  // Gandaki & Pokhara Region
  {code:'POKH1', name:'POKHARA', district:'KASKI', label:'POKHARA - KASKI'},
  {code:'LEKH1', name:'LEKHNATH', district:'KASKI', label:'LEKHNATH - KASKI'},
  {code:'DAMA1', name:'DAMAULI', district:'TANAHUN', label:'DAMAULI - TANAHUN'},
  {code:'SYAN1', name:'SYANGJA', district:'SYANGJA', label:'SYANGJA - SYANGJA'},
  {code:'WALI1', name:'WALING', district:'SYANGJA', label:'WALING - SYANGJA'},
  {code:'BAGL1', name:'BAGLUNG', district:'BAGLUNG', label:'BAGLUNG - BAGLUNG'},
  {code:'BENI1', name:'BENI', district:'MYAGDI', label:'BENI - MYAGDI'},
  {code:'KUSM1', name:'KUSMA', district:'PARBAT', label:'KUSMA - PARBAT'},
  {code:'BESI1', name:'BESISAHAR', district:'LAMJUNG', label:'BESISAHAR - LAMJUNG'},
  {code:'GORK1', name:'GORKHA', district:'GORKHA', label:'GORKHA - GORKHA'},

  // Central Bagmati & Narayani
  {code:'NARA1', name:'NARAYANGARH', district:'CHITWAN', label:'NARAYANGARH - CHITWAN'},
  {code:'BHAR1', name:'BHARATPUR', district:'CHITWAN', label:'BHARATPUR - CHITWAN'},
  {code:'HETA1', name:'HETAUDA', district:'MAKWANPUR', label:'HETAUDA - MAKWANPUR'},
  {code:'BIRG1', name:'BIRGUNJ', district:'PARSA', label:'BIRGUNJ - PARSA'},
  {code:'KALA2', name:'KALAIYA', district:'BARA', label:'KALAIYA - BARA'},
  {code:'GAUR1', name:'GAUR', district:'RAUTAHAT', label:'GAUR - RAUTAHAT'},
  {code:'MALA1', name:'MALANGWA', district:'SARLAHI', label:'MALANGWA - SARLAHI'},
  {code:'BANE1', name:'BANEPA', district:'KAVRE', label:'BANEPA - KAVRE'},
  {code:'DHUL1', name:'DHULIKHEL', district:'KAVRE', label:'DHULIKHEL - KAVRE'},
  {code:'TRIS1', name:'TRISHULI', district:'NUWAKOT', label:'TRISHULI - NUWAKOT'},
  {code:'CHAR1', name:'CHARIKOT', district:'DOLAKHA', label:'CHARIKOT - DOLAKHA'},
  {code:'SIND1', name:'SINDHULIMADI', district:'SINDHULI', label:'SINDHULIMADI - SINDHULI'},

  // Lumbini Region
  {code:'BUTW1', name:'BUTWAL', district:'RUPANDEHI', label:'BUTWAL - RUPANDEHI'},
  {code:'BHAI1', name:'BHAIRAHAWA', district:'RUPANDEHI', label:'BHAIRAHAWA - RUPANDEHI'},
  {code:'TANS1', name:'TANSEN', district:'PALPA', label:'TANSEN - PALPA'},
  {code:'GHOR1', name:'GHORAHI', district:'DANG', label:'GHORAHI - DANG'},
  {code:'TULS1', name:'TULSIPUR', district:'DANG', label:'TULSIPUR - DANG'},
  {code:'NEPA1', name:'NEPALGUNJ', district:'BANKE', label:'NEPALGUNJ - BANKE'},
  {code:'KOHA1', name:'KOHALPUR', district:'BANKE', label:'KOHALPUR - BANKE'},
  {code:'TAMG1', name:'TAMGHAS', district:'GULMI', label:'TAMGHAS - GULMI'},
  {code:'TAUL1', name:'TAULIHAWA', district:'KAPILVASTU', label:'TAULIHAWA - KAPILVASTU'},
  {code:'GULA1', name:'GULARIYA', district:'BARDITYA', label:'GULARIYA - BARDITYA'},
  {code:'SAND1', name:'SANDHIKHARKA', district:'ARGHAKHANCHI', label:'SANDHIKHARKA - ARGHAKHANCHI'},

  // Eastern Koshi & Madhesh
  {code:'BIRA1', name:'BIRATNAGAR', district:'MORANG', label:'BIRATNAGAR - MORANG'},
  {code:'ITAH1', name:'ITAHARI', district:'SUNSARI', label:'ITAHARI - SUNSARI'},
  {code:'DHAR1', name:'DHARAN', district:'SUNSARI', label:'DHARAN - SUNSARI'},
  {code:'INAR1', name:'INARUWA', district:'SUNSARI', label:'INARUWA - SUNSARI'},
  {code:'DAMA2', name:'DAMAK', district:'JHAPA', label:'DAMAK - JHAPA'},
  {code:'BIRT1', name:'BIRTAMODE', district:'JHAPA', label:'BIRTAMODE - JHAPA'},
  {code:'BHAD1', name:'BHADRAPUR', district:'JHAPA', label:'BHADRAPUR - JHAPA'},
  {code:'KAKA1', name:'KAKARVITTA', district:'JHAPA', label:'KAKARVITTA - JHAPA'},
  {code:'ILAM1', name:'ILAM', district:'ILAM', label:'ILAM - ILAM'},
  {code:'PHID1', name:'PHIDIM', district:'PANCHTHAR', label:'PHIDIM - PANCHTHAR'},
  {code:'JANA1', name:'JANAKPUR', district:'DHANUSHA', label:'JANAKPUR - DHANUSHA'},
  {code:'JALE1', name:'JALESSHWAR', district:'MAHOTTARI', label:'JALESSHWAR - MAHOTTARI'},
  {code:'LALB1', name:'LALBANDI', district:'SARLAHI', label:'LALBANDI - SARLAHI'},
  {code:'BARD1', name:'BARDIBAS', district:'MAHOTTARI', label:'BARDIBAS - MAHOTTARI'},
  {code:'LAHA1', name:'LAHAN', district:'SIRAHA', label:'LAHAN - SIRAHA'},
  {code:'SIRA1', name:'SIRAHA', district:'SIRAHA', label:'SIRAHA - SIRAHA'},
  {code:'RAJB1', name:'RAJBIRAJ', district:'SAPTARI', label:'RAJBIRAJ - SAPTARI'},
  {code:'DHAN1', name:'DHANKUTA', district:'DHANKUTA', label:'DHANKUTA - DHANKUTA'},
  {code:'GAIG1', name:'GAIGHAT', district:'UDAYAPUR', label:'GAIGHAT - UDAYAPUR'},

  // Sudurpaschim & Karnali Region
  {code:'DHAN2', name:'DHANGADI', district:'KAILALI', label:'DHANGADI - KAILALI'},
  {code:'TIKA1', name:'TIKAPUR', district:'KAILALI', label:'TIKAPUR - KAILALI'},
  {code:'MAHE1', name:'MAHENDRANAGAR', district:'KANCHANPUR', label:'MAHENDRANAGAR - KANCHANPUR'},
  {code:'DADE1', name:'DADELDHURA', district:'DADELDHURA', label:'DADELDHURA - DADELDHURA'},
  {code:'SURK1', name:'SURKHET', district:'SURKHET', label:'SURKHET - SURKHET'},
  {code:'DAIL1', name:'DAILEKH', district:'DAILEKH', label:'DAILEKH - DAILEKH'},
  {code:'SALY1', name:'SALYAN', district:'SALYAN', label:'SALYAN - SALYAN'},
  {code:'SILG1', name:'SILGADI', district:'DOTI', label:'SILGADI - DOTI'}
];

let NCM_FINANCE_DATA = {
  pending_cod_balance: 45800.0,
  total_cod_transferred: 182500.0,
  last_transfer_date: '2026-07-22',
  bank_account: {
    bank_name: 'NIC Asia Bank',
    account_name: 'Sola Attire Apparel Pvt. Ltd.',
    account_number: '09123847912001',
    branch: 'Lakeside Branch, Pokhara'
  }
};

let CURRENT_USER = JSON.parse(localStorage.getItem('currentUser')) || null;
let SYSTEM_USERS = [];

function hasAccess(module){
  if (!CURRENT_USER) return false;
  if (CURRENT_USER.role === 'admin') return true;
  const perms = CURRENT_USER.permissions || [];
  return Array.isArray(perms) && perms.includes(module);
}
window.hasAccess = hasAccess;

function logoutUser(){
  localStorage.removeItem('currentUser');
  CURRENT_USER = null;
  renderAll();
  toast('You have logged out');
}
window.logoutUser = logoutUser;

function renderFullLoginPage(){
  let loginBg = document.getElementById('fullLoginPage');
  if (!loginBg) {
    loginBg = document.createElement('div');
    loginBg.id = 'fullLoginPage';
    document.body.appendChild(loginBg);
  }

  loginBg.innerHTML = `
    <div style="position:fixed;inset:0;background:linear-gradient(135deg, #10141d 0%, #1a2234 100%);z-index:99999;display:flex;align-items:center;justify-content:center;padding:20px;">
      <div class="card" style="width:100%;max-width:420px;padding:32px 28px;border-radius:18px;background:rgba(255,255,255,0.96);box-shadow:0 20px 50px rgba(0,0,0,0.4);backdrop-filter:blur(20px);">
        
        <div style="text-align:center;margin-bottom:20px;">
          <div style="width:54px;height:54px;background:var(--accent-soft);color:var(--accent);border-radius:16px;display:inline-flex;align-items:center;justify-content:center;margin-bottom:14px;font-size:26px;box-shadow:0 4px 12px rgba(238,80,31,0.2);">🔒</div>
          <h2 style="margin:0;font-size:22px;font-weight:800;color:#10141d;letter-spacing:-0.4px;">Sola Attire ERP Console</h2>
          <div style="font-size:12.5px;color:var(--ink-faint);margin-top:6px;">Please log in with your employee or admin credentials</div>
        </div>

        <!-- Dynamic Login Error Popup Banner -->
        <div id="loginErrorBanner" style="display:none;background:#fef2f2;border:1.5px solid #fca5a5;color:#dc2626;padding:12px 14px;border-radius:10px;font-size:12.5px;margin-bottom:18px;font-weight:600;line-height:1.4;box-shadow:0 2px 8px rgba(220,38,38,0.1);">
          <div style="display:flex;align-items:flex-start;gap:8px;">
            <span style="font-size:14px;">⚠️</span>
            <span id="loginErrorMsg"></span>
          </div>
        </div>

        <div class="field" style="margin-bottom:16px;">
          <label style="font-weight:700;font-size:12px;color:var(--ink-soft);">User ID / Username *</label>
          <input id="loginUsername" value="" placeholder="e.g. admin or sita.shrestha" style="padding:11px 14px;font-size:13.5px;border-radius:8px;border:1px solid var(--border);">
        </div>

        <div class="field" style="margin-bottom:22px;">
          <label style="font-weight:700;font-size:12px;color:var(--ink-soft);">Password *</label>
          <input type="password" id="loginPassword" value="" placeholder="••••••••" style="padding:11px 14px;font-size:13.5px;border-radius:8px;border:1px solid var(--border);" onkeyup="if(event.key==='Enter')handleLoginSubmit()">
        </div>

        <button class="btn btn-primary" onclick="handleLoginSubmit()" style="width:100%;padding:12px;font-size:14px;font-weight:700;justify-content:center;border-radius:10px;box-shadow:0 4px 14px rgba(238,80,31,0.3);">
          Log In to Console
        </button>

      </div>
    </div>`;
}
window.renderFullLoginPage = renderFullLoginPage;

async function handleLoginSubmit(){
  const uInput = document.getElementById('loginUsername');
  const pInput = document.getElementById('loginPassword');
  const errBanner = document.getElementById('loginErrorBanner');
  const errMsg = document.getElementById('loginErrorMsg');

  // Reset input borders
  if (uInput) uInput.style.border = '1px solid var(--border)';
  if (pInput) pInput.style.border = '1px solid var(--border)';
  if (errBanner) errBanner.style.display = 'none';

  const username = uInput ? uInput.value.trim() : '';
  const password = pInput ? pInput.value.trim() : '';

  if(!username){
    if (uInput) uInput.style.border = '1.5px solid #dc2626';
    if (errBanner && errMsg) { errMsg.textContent = 'Please enter your User ID / Username'; errBanner.style.display = 'block'; }
    toast('Please enter your Username');
    return;
  }

  if(!password){
    if (pInput) pInput.style.border = '1.5px solid #dc2626';
    if (errBanner && errMsg) { errMsg.textContent = 'Please enter your Password'; errBanner.style.display = 'block'; }
    toast('Please enter your Password');
    return;
  }

  const res = await fetch('/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: username, password: password })
  });

  const data = await res.json();
  if(data.success && data.user){
    CURRENT_USER = data.user;
    localStorage.setItem('currentUser', JSON.stringify(CURRENT_USER));
    const loginBg = document.getElementById('fullLoginPage');
    if (loginBg) loginBg.remove();
    toast(`Welcome back, ${CURRENT_USER.name}!`);
    await fetchAllData();
    renderAll();
  } else {
    // Show error banner and highlight failing field
    if (errBanner && errMsg) {
      errMsg.textContent = data.error || 'Invalid credentials';
      errBanner.style.display = 'block';
    }
    if (data.field === 'username' && uInput) {
      uInput.style.border = '1.5px solid #dc2626';
      uInput.focus();
    } else if (data.field === 'password' && pInput) {
      pInput.style.border = '1.5px solid #dc2626';
      pInput.focus();
    }
    toast(data.error || 'Login failed');
  }
}
window.handleLoginSubmit = handleLoginSubmit;

async function fetchAllData(){
  try {
    const [pRes, oRes, offRes, sRes, eRes, lRes, bRes, fRes, uRes, expRes] = await Promise.all([
      fetch('/api/products').then(r=>r.json()),
      fetch('/api/orders').then(r=>r.json()),
      fetch('/api/offers').then(r=>r.json()),
      fetch('/api/shipments').then(r=>r.json()),
      fetch('/api/employees').then(r=>r.json()),
      fetch('/api/leave-requests').then(r=>r.json()),
      fetch('/api/ncm/branches').then(r=>r.json()).catch(()=>[]),
      fetch('/api/ncm/finance/balance').then(r=>r.json()).catch(()=>null),
      fetch('/api/auth/users').then(r=>r.json()).catch(()=>[]),
      fetch('/api/expenses').then(r=>r.json()).catch(()=>[])
    ]);

    PRODUCTS = pRes;
    ORDERS = oRes;
    CONVERSATIONS = [];
    OFFERS = offRes;
    SHIPMENTS = sRes;
    EMPLOYEES = eRes;
    LEAVE_REQUESTS = lRes;
    EXPENSES = expRes || [];
    if(Array.isArray(bRes) && bRes.length) NCM_BRANCHES_DATA = bRes;
    if(fRes && typeof fRes === 'object') NCM_FINANCE_DATA = fRes;
    if(Array.isArray(uRes) && uRes.length) SYSTEM_USERS = uRes;
    
    PRODUCTS.forEach(p=>{ if(!CATEGORIES.includes(p.category)) CATEGORIES.push(p.category); });
    renderAll();
  } catch(e) {
    console.error("Error loading data from Python Flask API:", e);
  }
}

/* ============================= NAVIGATION & LAYOUT ============================= */
const NAV = [
  {group:'Overview', items:[{id:'dashboard', label:'Dashboard', icon:'dashboard'}]},
  {group:'Sales & Courier', items:[
    {id:'orders', label:'Orders', icon:'orders'},
    {id:'shipments', label:'Shipments', icon:'shipments'}
  ]},
  {group:'Catalog', items:[
    {id:'inventory', label:'Inventory', icon:'inventory'},
    {id:'offers', label:'Offers & Promotions', icon:'offers'}
  ]},
  {group:'Operations', items:[
    {id:'expenses', label:'Expense Tracker', icon:'wallet'},
    {id:'employees', label:'Employees', icon:'employees'},
    {id:'reports', label:'Reports', icon:'reports'}
  ]}
];

const TITLES = {
  dashboard:'Dashboard — Overview & Sales',
  orders:'Orders — Fulfillment & Packing',
  shipments:'Shipments — Nepal Can Move Courier API',
  inventory:'Inventory — Stock & Variant Control',
  offers:'Offers & Promotional Campaigns',
  expenses:'Expense Tracker — Operating Costs & Outflow',
  employees:'Employees & Staff Roster',
  reports:'Reports & Financial Analytics'
};

function renderSidebar(){
  let html = `<div class="brand">
    <div class="brand-tag">${icon('tag')}</div>
    <div><div class="brand-name">SOLA ATTIRE</div><div class="brand-sub">OPS CONSOLE</div></div>
  </div>`;
  NAV.forEach(g=>{
    let groupItemsHtml = '';
    g.items.forEach(it=>{
      if (hasAccess(it.id)) {
        const activeCls = STATE.screen===it.id ? 'active':'';
        const badge = it.badge ? it.badge() : 0;
        groupItemsHtml += `<a class="nav-item ${activeCls}" onclick="navigate('${it.id}')">${icon(it.icon)}<span>${it.label}</span>${badge>0?`<span class="nav-badge">${badge}</span>`:''}</a>`;
      }
    });
    if(groupItemsHtml){
      html += `<div class="nav-group"><div class="nav-label">${g.group}</div>${groupItemsHtml}</div>`;
    }
  });

  const userName = CURRENT_USER ? CURRENT_USER.name : 'Super Admin';
  const userRole = CURRENT_USER ? (CURRENT_USER.role === 'admin' ? 'Super Admin' : 'Employee') : 'Admin';
  const initials = userName.split(' ').map(w=>w[0]).join('').slice(0,2);

  html += `<div class="sidebar-footer">
    <div class="avatar">${initials}</div>
    <div style="flex:1;overflow:hidden;">
      <div class="sf-name" style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${userName}</div>
      <div class="sf-role">${userRole}</div>
    </div>
  </div>`;
  document.getElementById('sidebar').innerHTML = html;
}

let notificationsRead = false;
let deferredInstallPrompt = null;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredInstallPrompt = e;
  renderTopbar();
});

function triggerPWAInstall(){
  if (deferredInstallPrompt) {
    deferredInstallPrompt.prompt();
    deferredInstallPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        toast('Sola Attire App installed successfully!');
      }
      deferredInstallPrompt = null;
      renderTopbar();
    });
  }
}
window.triggerPWAInstall = triggerPWAInstall;

function toggleMobileSidebar(){
  const sidebar = document.getElementById('sidebar');
  if (!sidebar) return;
  let backdrop = document.getElementById('sidebarBackdrop');
  if (!backdrop) {
    backdrop = document.createElement('div');
    backdrop.id = 'sidebarBackdrop';
    backdrop.className = 'sidebar-backdrop';
    backdrop.onclick = toggleMobileSidebar;
    document.body.appendChild(backdrop);
  }
  const isOpen = sidebar.classList.contains('mobile-open');
  if (isOpen) {
    sidebar.classList.remove('mobile-open');
    backdrop.classList.remove('show');
  } else {
    sidebar.classList.add('mobile-open');
    backdrop.classList.add('show');
  }
}
window.toggleMobileSidebar = toggleMobileSidebar;

function getUnreadNotifCount(){
  const lowStock = PRODUCTS.reduce((acc,p)=>acc+p.variants.filter(v=>v.stock<=v.reorder).length,0);
  const pendingShip = SHIPMENTS.filter(s=>s.status==='not-created').length;
  const pendingLeave = LEAVE_REQUESTS.filter(l=>l.status==='pending').length;
  return lowStock + pendingShip + pendingLeave;
}

function renderTopbar(){
  const unreadCount = getUnreadNotifCount();
  const userName = CURRENT_USER ? CURRENT_USER.name : 'Admin';
  const userRole = CURRENT_USER ? CURRENT_USER.role : 'admin';

  document.getElementById('topbar').innerHTML = `
    <div style="display:flex;align-items:center;gap:10px;">
      <button class="icon-btn mobile-menu-btn" onclick="toggleMobileSidebar()" title="Open Navigation Menu" style="margin-right:2px;">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" style="width:20px;height:20px;"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
      </button>
      <div class="topbar-title">${TITLES[STATE.screen] || 'Dashboard'}</div>
    </div>
    <div class="topbar-right">
      
      ${deferredInstallPrompt ? `
        <button class="btn btn-primary btn-sm" onclick="triggerPWAInstall()" style="font-weight:700;font-size:11.5px;padding:5px 10px;background:linear-gradient(135deg, var(--accent) 0%, #d93d0c 100%);">
          📲 Install App
        </button>
      ` : ''}

      <div class="search-box-wrap">
        <div class="search-box">
          ${icon('search')}
          <input type="text" id="globalSearchInput" placeholder="Search orders, products, shipments…" oninput="handleGlobalSearch(this.value)" onfocus="handleGlobalSearch(this.value)">
        </div>
        <div class="search-dropdown" id="globalSearchDropdown"></div>
      </div>
      <div class="notif-wrap">
        <button class="icon-btn" onclick="toggleNotifications(event)">
          ${icon('bell')}
          <span class="icon-dot ${(!notificationsRead && unreadCount > 0) ? '' : 'hidden'}"></span>
        </button>
        <div class="notif-dropdown" id="notifDropdown"></div>
      </div>

      <!-- Logged-in User Profile & Logout -->
      <div class="topbar-user-badge" style="display:flex;align-items:center;gap:10px;padding-left:12px;border-left:1px solid var(--border);">
        <div class="avatar" style="width:32px;height:32px;font-size:12px;background:var(--accent-soft);color:var(--accent-soft-ink);font-weight:700;">
          ${userName.split(' ').map(w=>w[0]).join('').slice(0,2)}
        </div>
        <div style="font-size:12px;" class="user-profile-info">
          <div style="font-weight:700;line-height:1.2;color:var(--ink);">${userName}</div>
          <div style="font-size:10.5px;color:var(--ink-faint);text-transform:capitalize;">${userRole}</div>
        </div>
        <button class="btn btn-secondary btn-sm" onclick="logoutUser()" title="Log out of console" style="padding:4px 8px;margin-left:4px;">
          Logout
        </button>
      </div>

    </div>`;
}

function renderMobileBottomNav(){
  const navEl = document.getElementById('mobileNav');
  if(!navEl) return;

  if(!CURRENT_USER){
    navEl.style.display = 'none';
    return;
  }

  navEl.innerHTML = `
    <a class="mobile-nav-item ${STATE.screen==='dashboard'?'active':''}" onclick="navigate('dashboard')">
      ${icon('dashboard')}
      <span>Home</span>
    </a>
    <a class="mobile-nav-item ${STATE.screen==='orders'?'active':''}" onclick="navigate('orders')">
      ${icon('orders')}
      <span>Orders</span>
    </a>
    <a class="mobile-nav-item ${STATE.screen==='shipments'?'active':''}" onclick="navigate('shipments')">
      ${icon('shipments')}
      <span>Courier</span>
    </a>
    <a class="mobile-nav-item ${STATE.screen==='inventory'?'active':''}" onclick="navigate('inventory')">
      ${icon('inventory')}
      <span>Inventory</span>
    </a>
    <a class="mobile-nav-item" onclick="toggleMobileSidebar()">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" style="width:19px;height:19px;"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
      <span>Menu</span>
    </a>`;
}

function toggleNotifications(e){
  if(e) e.stopPropagation();
  const dropdown = document.getElementById('notifDropdown');
  if(!dropdown) return;
  const isShowing = dropdown.classList.contains('show');
  
  closeGlobalSearch();

  if(isShowing){
    dropdown.classList.remove('show');
  } else {
    renderNotificationsDropdown();
    dropdown.classList.add('show');
  }
}
window.toggleNotifications = toggleNotifications;

function renderNotificationsDropdown(){
  const dropdown = document.getElementById('notifDropdown');
  if(!dropdown) return;

  const notifs = [];

  CONVERSATIONS.filter(c=>c.unread > 0).forEach(c=>{
    notifs.push({
      icon:'inbox', color:'accent',
      text:`<b>${c.name}</b> sent ${c.unread} new ${c.channel==='whatsapp'?'WhatsApp':'Instagram'} message${c.unread>1?'s':''}`,
      time:c.time,
      action: () => { navigate('inbox'); openConversation(c.id); }
    });
  });

  PRODUCTS.forEach(p=>{
    p.variants.filter(v=>v.stock<=v.reorder).forEach(v=>{
      notifs.push({
        icon:'alert', color:'danger',
        text:`Low stock alert: <b>${p.name} (${v.size} / ${v.color})</b> has ${v.stock} unit${v.stock===1?'':'s'} left`,
        time:'Reorder required',
        action: () => { navigate('inventory'); toggleExpand(p.id); }
      });
    });
  });

  const pendingShipments = SHIPMENTS.filter(s=>s.status==='not-created');
  if(pendingShipments.length > 0){
    notifs.push({
      icon:'truck', color:'warning',
      text:`<b>${pendingShipments.length} order${pendingShipments.length>1?'s':''}</b> awaiting NCM Courier dispatch`,
      time:'Action needed',
      action: () => { navigate('shipments'); }
    });
  }

  LEAVE_REQUESTS.filter(l=>l.status==='pending').forEach(l=>{
    notifs.push({
      icon:'user', color:'info',
      text:`<b>${l.name}</b> requested ${l.type} (${l.dates})`,
      time:'Pending approval',
      action: () => { STATE.employeeTab='leave'; navigate('employees'); }
    });
  });

  const listHtml = notifs.length ? notifs.map((n, idx)=>`
    <div class="notif-item" onclick="handleNotifClick(${idx})">
      <div class="notif-dot" style="background:var(--${n.color==='accent'?'accent-soft':n.color+'-soft'});color:var(--${n.color==='accent'?'accent-soft-ink':n.color});">${icon(n.icon)}</div>
      <div><div class="notif-text">${n.text}</div><div class="notif-time">${n.time}</div></div>
    </div>`).join('') : `<div class="empty-state" style="padding:28px 16px;">${icon('check')}<h3>All caught up!</h3><p>No unread notifications right now.</p></div>`;

  window._activeNotifs = notifs;

  dropdown.innerHTML = `
    <div class="notif-head">
      <span class="notif-title">Notifications (${notifs.length})</span>
      <span class="notif-mark-read" onclick="markAllNotificationsRead()">Mark all as read</span>
    </div>
    <div>${listHtml}</div>`;
}

function handleNotifClick(idx){
  const dropdown = document.getElementById('notifDropdown');
  if(dropdown) dropdown.classList.remove('show');
  if(window._activeNotifs && window._activeNotifs[idx]){
    window._activeNotifs[idx].action();
  }
}
window.handleNotifClick = handleNotifClick;

function markAllNotificationsRead(){
  notificationsRead = true;
  const dot = document.querySelector('.icon-btn .icon-dot');
  if(dot) dot.classList.add('hidden');
  const dropdown = document.getElementById('notifDropdown');
  if(dropdown) dropdown.classList.remove('show');
  toast('Notifications marked as read');
}
window.markAllNotificationsRead = markAllNotificationsRead;

function handleGlobalSearch(q){
  const dropdown = document.getElementById('globalSearchDropdown');
  if(!dropdown) return;
  q = (q || '').trim().toLowerCase();

  if(!q){
    dropdown.classList.remove('show');
    return;
  }

  const notifDropdown = document.getElementById('notifDropdown');
  if(notifDropdown) notifDropdown.classList.remove('show');

  const productMatches = PRODUCTS.filter(p => p.name.toLowerCase().includes(q) || p.sku.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)).slice(0, 4);
  const orderMatches = ORDERS.filter(o => o.id.toLowerCase().includes(q) || o.customer.toLowerCase().includes(q) || o.handle.toLowerCase().includes(q)).slice(0, 4);
  const convMatches = CONVERSATIONS.filter(c => c.name.toLowerCase().includes(q) || c.handle.toLowerCase().includes(q) || (c.last && c.last.toLowerCase().includes(q))).slice(0, 4);
  const shipMatches = SHIPMENTS.filter(s => s.order.toLowerCase().includes(q) || s.dest.toLowerCase().includes(q) || (s.ncm && s.ncm.toLowerCase().includes(q))).slice(0, 3);

  let html = '';

  if(productMatches.length){
    html += `<div class="search-group-title">Products</div>`;
    productMatches.forEach(p=>{
      html += `<div class="search-result-item" onclick="closeGlobalSearch();navigate('inventory');openProductModal('${p.id}');">
        <img src="${p.img}" class="thumb" style="width:28px;height:28px;">
        <div style="flex:1;min-width:0;">
          <div class="search-result-title">${p.name}</div>
          <div class="search-result-sub">${p.sku} · ${p.category} · ${fmtNPR(p.price)}</div>
        </div>
      </div>`;
    });
  }

  if(orderMatches.length){
    html += `<div class="search-group-title">Orders</div>`;
    orderMatches.forEach(o=>{
      html += `<div class="search-result-item" onclick="closeGlobalSearch();navigate('orders');openOrderDetail('${o.id}');">
        <div class="search-result-icon" style="background:var(--info-soft);color:var(--info);">${icon('orders')}</div>
        <div style="flex:1;min-width:0;">
          <div class="search-result-title">${o.id} — ${o.customer}</div>
          <div class="search-result-sub">${o.items.length} items · ${fmtNPR(o.total)} · ${o.status}</div>
        </div>
      </div>`;
    });
  }

  if(convMatches.length){
    html += `<div class="search-group-title">Inbox DMs</div>`;
    convMatches.forEach(c=>{
      html += `<div class="search-result-item" onclick="closeGlobalSearch();navigate('inbox');openConversation('${c.id}');">
        <div class="search-result-icon" style="background:var(--accent-soft);color:var(--accent-soft-ink);">${icon(c.channel)}</div>
        <div style="flex:1;min-width:0;">
          <div class="search-result-title">${c.name} (${c.handle})</div>
          <div class="search-result-sub">${c.last || 'Conversation'}</div>
        </div>
      </div>`;
    });
  }

  if(shipMatches.length){
    html += `<div class="search-group-title">Shipments</div>`;
    shipMatches.forEach(s=>{
      html += `<div class="search-result-item" onclick="closeGlobalSearch();navigate('shipments');">
        <div class="search-result-icon" style="background:var(--warning-soft);color:var(--warning);">${icon('truck')}</div>
        <div style="flex:1;min-width:0;">
          <div class="search-result-title">${s.order} — ${s.dest}</div>
          <div class="search-result-sub">${s.ncm || 'No Waybill'} · ${s.status}</div>
        </div>
      </div>`;
    });
  }

  if(!html){
    html = `<div style="padding:20px;text-align:center;color:var(--ink-faint);font-size:12.5px;">No matches found for "${q}"</div>`;
  }

  dropdown.innerHTML = html;
  dropdown.classList.add('show');
}
window.handleGlobalSearch = handleGlobalSearch;

function closeGlobalSearch(){
  const dropdown = document.getElementById('globalSearchDropdown');
  if(dropdown) dropdown.classList.remove('show');
}
window.closeGlobalSearch = closeGlobalSearch;

function navigate(screen){
  STATE.screen = screen;
  renderAll();
}
window.navigate = navigate;

function renderAll(){
  if (!CURRENT_USER) {
    const appEl = document.getElementById('app');
    if (appEl) appEl.style.display = 'none';
    renderFullLoginPage();
    return;
  }

  const appEl = document.getElementById('app');
  if (appEl) appEl.style.display = 'flex';
  const loginBg = document.getElementById('fullLoginPage');
  if (loginBg) loginBg.remove();

  renderSidebar();
  renderTopbar();
  renderMobileBottomNav();
  const c = document.getElementById('content');
  if(STATE.screen==='dashboard') c.innerHTML = renderDashboard();
  else if(STATE.screen==='inbox'){ c.innerHTML = renderInbox(); afterInboxRender(); }
  else if(STATE.screen==='orders'){ c.innerHTML = STATE.orderDetailId ? renderOrderDetail() : renderOrders(); }
  else if(STATE.screen==='inventory'){ c.innerHTML = renderInventory(); afterInventoryRender(); }
  else if(STATE.screen==='offers') c.innerHTML = renderOffers();
  else if(STATE.screen==='shipments') c.innerHTML = renderShipments();
  else if(STATE.screen==='employees') c.innerHTML = renderEmployees();
  else if(STATE.screen==='expenses'){ c.innerHTML = renderExpenses(); afterExpensesRender(); }
  else if(STATE.screen==='reports'){ c.innerHTML = renderReports(); afterReportsRender(); }
}

/* ============================= DASHBOARD ============================= */
function renderDashboard(){
  const todayOrders = ORDERS.filter(o=>o.date==='2026-07-24' || o.date===TODAY).length;
  const pendingShip = SHIPMENTS.filter(s=>s.status==='not-created').length;
  const lowStock = PRODUCTS.reduce((acc,p)=>acc+p.variants.filter(v=>v.stock<=v.reorder).length,0);
  const activeOffers = OFFERS.filter(o=>o.status==='active').length;
  const revenue = ORDERS.reduce((a,o)=>a+o.total,0);

  const stats = [
    {label:"Today's Orders", value:todayOrders, icon:'cart', color:'info', trend:'+12%', up:true, onclick: "setOrderTimeframe('today');navigate('orders');"},
    {label:'Pending Shipments', value:pendingShip, icon:'truck', color:'warning', trend:'+2', up:false, onclick: "navigate('shipments');"},
    {label:'Low-Stock Alerts', value:lowStock, icon:'alert', color:'danger', trend:'Act now', up:false, onclick: "navigate('inventory');"},
    {label:'Active Offers', value:activeOffers, icon:'tag', color:'accent', trend:'3 live', up:true, onclick: "navigate('offers');"},
    {label:'Revenue (7d)', value:fmtNPR(revenue), icon:'money', color:'success', trend:'+8.4%', up:true, onclick: "setReportTimeframe('week');navigate('reports');"},
  ];

  let statCards = stats.map(s=>`
    <div class="card stat-card clickable" onclick="${s.onclick}" title="Click to view ${s.label} details">
      <span class="stat-trend ${s.up?'trend-up':'trend-down'}">${s.trend}</span>
      <div class="stat-icon" style="background:var(--${s.color==='accent'?'accent-soft':s.color+'-soft'});color:var(--${s.color==='accent'?'accent-soft-ink':s.color});">${icon(s.icon)}</div>
      <div class="stat-value">${s.value}</div>
      <div class="stat-label" style="display:flex;align-items:center;justify-content:space-between;margin-top:6px;">
        <span>${s.label}</span>
        <span class="stat-card-view-btn" onclick="event.stopPropagation();${s.onclick}">View →</span>
      </div>
    </div>`).join('');

  const activity = [
    {icon:'cart', color:'info', text:'<b>Sujata Maharjan</b> placed order ORD-1042 via Instagram DM', time:'8 minutes ago', onclick:"navigate('orders');openOrderDetail('ORD-1042');"},
    {icon:'truck', color:'warning', text:'Shipment created for <b>ORD-1041</b> — NCM-88213 dispatched to Pokhara', time:'42 minutes ago', onclick:"navigate('shipments');"},
    {icon:'tag', color:'accent', text:'Offer <b>"Dashain Drop — 20% Off Outerwear"</b> crossed 30 redemptions', time:'2 hours ago', onclick:"navigate('offers');"},
    {icon:'alert', color:'danger', text:'<b>Himal Graphic Tee — L / Black</b> is now out of stock', time:'3 hours ago', onclick:"navigate('inventory');openProductModal('p4');"},
    {icon:'check', color:'success', text:'Order <b>ORD-1040</b> marked as delivered', time:'Yesterday', onclick:"navigate('orders');openOrderDetail('ORD-1040');"},
    {icon:'user', color:'info', text:'<b>Kritika Adhikari</b> requested sick leave for Jul 24–25', time:'Yesterday', onclick:"STATE.employeeTab='leave';navigate('employees');"},
  ];

  let activityHtml = activity.map(a=>`
    <div class="activity-item clickable" onclick="${a.onclick}">
      <div class="activity-dot" style="background:var(--${a.color==='accent'?'accent-soft':a.color+'-soft'});color:var(--${a.color==='accent'?'accent-soft-ink':a.color});">${icon(a.icon)}</div>
      <div style="flex:1;"><div class="activity-text">${a.text}</div><div class="activity-time">${a.time}</div></div>
      <span class="activity-action-btn" onclick="event.stopPropagation();${a.onclick}">View →</span>
    </div>`).join('');

  const offerRows = OFFERS.filter(o=>o.status==='active').map(o=>`
    <div class="activity-item clickable" onclick="navigate('offers');openEditOfferModal('${o.id}');">
      <div class="activity-dot" style="background:var(--accent-soft);color:var(--accent-soft-ink);">${icon('tag')}</div>
      <div style="flex:1;">
        <div class="activity-text" style="display:flex;justify-content:space-between;"><b>${o.name}</b></div>
        <div class="activity-time">${o.redemptions} redemptions · ${fmtNPR(o.revenue)} revenue</div>
      </div>
      <span class="activity-action-btn" onclick="event.stopPropagation();navigate('offers');openEditOfferModal('${o.id}');">Edit →</span>
    </div>`).join('');

  // Calculate Report Analytics for Dashboard Overview
  let totalRevenue = ORDERS.reduce((a,o) => a + o.total, 0);
  let totalCOGS = 0;
  let totalUnitsSold = 0;
  const prodStats = {};

  PRODUCTS.forEach(p => {
    prodStats[p.id] = { product: p, units: 0, revenue: 0, cost: 0 };
  });

  ORDERS.forEach(o => {
    (o.items || []).forEach(it => {
      const prod = PRODUCTS.find(p => p.name === it.name);
      const unitCost = prod ? prod.cost : Math.round(it.price * 0.5);
      const cogs = unitCost * it.qty;
      totalCOGS += cogs;
      totalUnitsSold += it.qty;

      const pid = prod ? prod.id : it.name;
      if (!prodStats[pid]) {
        prodStats[pid] = { product: prod || {name: it.name, price: it.price, cost: unitCost}, units: 0, revenue: 0, cost: 0 };
      }
      prodStats[pid].units += it.qty;
      prodStats[pid].revenue += (it.price * it.qty);
      prodStats[pid].cost += cogs;
    });
  });

  const grossProfit = totalRevenue - totalCOGS;
  const grossMarginPct = totalRevenue ? Math.round((grossProfit / totalRevenue) * 100) : 0;
  const avgOrderVal = ORDERS.length ? Math.round(totalRevenue / ORDERS.length) : 0;

  const sortedProductStats = Object.values(prodStats)
    .filter(ps => ps.units > 0 || ps.revenue > 0)
    .sort((a,b) => b.units - a.units);

  const topProducts = (sortedProductStats.length ? sortedProductStats : PRODUCTS.slice(0, 4).map(p => ({
    product: p, units: 18, revenue: p.price * 18, cost: p.cost * 18
  }))).slice(0, 4);

  const topProductsHtml = topProducts.map((ps, idx) => {
    const p = ps.product;
    const margin = ps.revenue ? Math.round(((ps.revenue - ps.cost) / ps.revenue) * 100) : 55;
    return `
      <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 12px;background:var(--bg);border-radius:8px;margin-bottom:8px;">
        <div style="display:flex;align-items:center;gap:10px;flex:1;min-width:0;">
          <span style="font-weight:800;font-size:12px;color:var(--accent);width:20px;">#${idx+1}</span>
          ${p.img ? `<img src="${p.img}" class="thumb" style="width:34px;height:34px;border-radius:6px;">` : `<div class="avatar" style="width:34px;height:34px;font-size:11px;">${(p.name||'P').slice(0,2)}</div>`}
          <div style="min-width:0;">
            <div style="font-weight:600;font-size:12.5px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${p.name}</div>
            <div style="font-size:11px;color:var(--ink-faint);">${ps.units} units sold · ${margin}% profit margin</div>
          </div>
        </div>
        <div style="text-align:right;flex-shrink:0;">
          <div class="mono font-bold" style="font-size:13px;color:var(--ink);">${fmtNPR(ps.revenue)}</div>
        </div>
      </div>`;
  }).join('');

  return `
    <div class="page-head">
      <div><h1>Good morning, ${CURRENT_USER ? CURRENT_USER.name : 'Super Admin'}</h1><p class="page-sub">Here's your Sola Attire operations &amp; sales overview today.</p></div>
      <button class="btn btn-primary" onclick="openCreateOrderDirect()">${icon('plus')} Create Order</button>
    </div>

    <div class="stat-grid">${statCards}</div>

    <!-- Executive Sales Report Summary Widget -->
    <div class="card card-pad" style="margin-top:18px;margin-bottom:18px;">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;">
        <div>
          <div class="section-title" style="margin:0;">📊 Financial &amp; Sales Report Summary</div>
          <div class="section-sub" style="margin:0;">Key sales metrics, profit margins &amp; top performing apparel items</div>
        </div>
        <button class="btn btn-secondary btn-sm" onclick="navigate('reports')">Full Sales Report →</button>
      </div>

      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-bottom:14px;">
        <div style="padding:12px;background:var(--bg);border-radius:8px;border:1px solid var(--border-soft);">
          <div style="font-size:11.5px;color:var(--ink-faint);font-weight:600;">INITIAL CAPITAL</div>
          <div style="font-size:18px;font-weight:800;color:var(--accent);margin-top:2px;">${fmtNPR(250000)}</div>
          <div style="font-size:11px;color:var(--ink-soft);margin-top:2px;">Seed Investment</div>
        </div>
        <div style="padding:12px;background:var(--bg);border-radius:8px;border:1px solid var(--border-soft);">
          <div style="font-size:11.5px;color:var(--ink-faint);font-weight:600;">OPERATING EXPENSES</div>
          <div style="font-size:18px;font-weight:800;color:var(--danger);margin-top:2px;">${fmtNPR(EXPENSES.reduce((a,e)=>a+(e.amount||0),0))}</div>
          <div style="font-size:11px;color:var(--ink-soft);margin-top:2px;">Total Outflow</div>
        </div>
        <div style="padding:12px;background:var(--bg);border-radius:8px;border:1px solid var(--border-soft);">
          <div style="font-size:11.5px;color:var(--ink-faint);font-weight:600;">GROSS PROFIT MARGIN</div>
          <div style="font-size:18px;font-weight:800;color:var(--success);margin-top:2px;">${grossMarginPct}%</div>
          <div style="font-size:11px;color:var(--ink-soft);margin-top:2px;">Profit: ${fmtNPR(grossProfit)}</div>
        </div>
        <div style="padding:12px;background:var(--bg);border-radius:8px;border:1px solid var(--border-soft);">
          <div style="font-size:11.5px;color:var(--ink-faint);font-weight:600;">UNSOLD STOCK ASSET</div>
          <div style="font-size:18px;font-weight:800;color:var(--info);margin-top:2px;">${fmtNPR(PRODUCTS.reduce((a,p)=>a+p.variants.reduce((va,v)=>va+(v.stock*p.price),0),0))}</div>
          <div style="font-size:11px;color:var(--ink-soft);margin-top:2px;">Retail Value</div>
        </div>
      </div>

      <div>
        <div style="font-size:12px;font-weight:700;color:var(--ink-soft);margin-bottom:8px;">TOP BEST SELLING APPAREL ITEMS</div>
        ${topProductsHtml}
      </div>
    </div>

    <div class="dash-lower">
      <div class="card card-pad">
        <div class="section-title">Recent activity</div>
        <div class="section-sub">Live feed across orders, shipments and inventory</div>
        ${activityHtml}
      </div>
      <div class="card card-pad">
        <div class="section-title">Offers currently live</div>
        <div class="section-sub">Performance since launch</div>
        ${offerRows}
      </div>
    </div>`;
}

/* ============================= INBOX (META GRAPH & WHATSAPP CLOUD API) ============================= */
function renderInbox(){
  const counts = {
    all: CONVERSATIONS.length,
    instagram: CONVERSATIONS.filter(c=>c.channel==='instagram').length,
    whatsapp: CONVERSATIONS.filter(c=>c.channel==='whatsapp').length,
  };
  const filtered = CONVERSATIONS.filter(c=>STATE.inboxChannel==='all' || c.channel===STATE.inboxChannel);
  const active = CONVERSATIONS.find(c=>c.id===STATE.activeConvId);

  const channelBadge = ch => ch==='whatsapp'
    ? `<span class="channel-badge wa">${icon('whatsapp')}</span>`
    : `<span class="channel-badge ig">${icon('instagram')}</span>`;

  const tabs = [
    {key:'all', label:'All', icon:null},
    {key:'instagram', label:'Instagram', icon:'instagram'},
    {key:'whatsapp', label:'WhatsApp', icon:'whatsapp'},
  ].map(t=>`<div class="channel-tab ${STATE.inboxChannel===t.key?'active':''}" onclick="setInboxChannel('${t.key}')">${t.icon?icon(t.icon):''}<span>${t.label}</span><span class="ct-count">${counts[t.key]}</span></div>`).join('');

  const convItems = filtered.length ? filtered.map(c=>`
    <div class="conv-item ${c.id===STATE.activeConvId?'active':''}" onclick="openConversation('${c.id}')">
      <div class="conv-avatar-wrap"><div class="conv-avatar">${c.name.split(' ').map(w=>w[0]).join('').slice(0,2)}</div>${channelBadge(c.channel)}</div>
      <div class="conv-body">
        <div class="conv-top">
          <span class="conv-name">${c.name}</span>
          <div class="conv-time-wrap">
            <span class="conv-time">${c.time}</span>
            ${c.unread>0?'<span class="unread-dot"></span>':''}
          </div>
        </div>
        <div class="conv-handle">${c.handle}</div>
        <div class="conv-preview">${c.last}</div>
      </div>
    </div>`).join('') : `<div class="empty-state">${icon('inbox')}<h3>No conversations</h3><p>New messages will show up here automatically.</p></div>`;

  let threadHtml = `<div class="empty-state" style="margin:auto;">${icon('inbox')}<h3>Select a conversation</h3><p>Choose a thread from the list to view messages.</p></div>`;
  if(active){
    const msgs = active.messages.map(m=>`<div class="msg ${m.from}">${m.text}<div class="msg-time">${m.time}</div></div>`).join('');
    const isWa = active.channel==='whatsapp';

    threadHtml = `
      <div class="thread-head">
        <div class="thread-head-info" style="display:flex;align-items:center;gap:8px;">
          <button class="btn btn-secondary btn-sm mobile-chat-back" onclick="backToConvList()">${icon('arrow-left')} Back</button>
          <div class="conv-avatar-wrap"><div class="conv-avatar">${active.name.split(' ').map(w=>w[0]).join('').slice(0,2)}</div>${channelBadge(active.channel)}</div>
          <div><div style="font-weight:700;font-size:13.5px;">${active.name}</div><div class="conv-handle">${active.handle} · ${isWa?'WhatsApp':'Instagram'}</div></div>
        </div>
        <div style="display:flex;gap:6px;flex-wrap:wrap;">
          ${isWa?`<button class="btn btn-secondary btn-sm" onclick="sendWhatsAppTemplate()">${icon('whatsapp')} Template</button>`:''}
          <button class="btn btn-primary btn-sm" onclick="openCreateOrder('${active.id}')">${icon('cart')} Create Order</button>
        </div>
      </div>
      <div class="thread-messages" id="threadMsgs">${msgs}</div>
      <div class="thread-input">
        <input type="text" placeholder="${isWa?'Type a WhatsApp message…':'Type a reply…'}" id="chatInput" onkeydown="if(event.key==='Enter')sendChat()">
        <button class="icon-btn" style="background:${isWa?'#25D366':'var(--ink)'};color:#fff;border-color:${isWa?'#25D366':'var(--ink)'};" onclick="sendChat()">${icon('send')}</button>
      </div>`;
  }

  const mobilePaneClass = (active && STATE.mobileInboxView === 'thread') ? 'mobile-view-thread' : 'mobile-view-list';

  return `
    <div class="inbox-accounts-bar">
      <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:6px;">
        <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;" class="acc-badges">
          <div style="font-size:11px;font-weight:700;color:var(--ink-faint);text-transform:uppercase;letter-spacing:0.5px;">Connected:</div>
          <div style="display:flex;align-items:center;gap:4px;">
            <span style="display:inline-flex;align-items:center;gap:4px;padding:2px 8px;border-radius:12px;background:#fdf0ed;color:#e1306c;font-weight:700;font-size:11px;">
              ${icon('instagram')} @sola.attire
            </span>
            <span class="acc-subtext" style="color:var(--ink-faint);font-size:10.5px;">(Meta API v19.0)</span>
          </div>
          <div style="display:flex;align-items:center;gap:4px;">
            <span style="display:inline-flex;align-items:center;gap:4px;padding:2px 8px;border-radius:12px;background:#eefbf3;color:#25d366;font-weight:700;font-size:11px;">
              ${icon('whatsapp')} +977 9847023226
            </span>
            <span class="acc-subtext" style="color:var(--ink-faint);font-size:10.5px;">(WhatsApp API)</span>
          </div>
        </div>
        <button class="btn btn-secondary btn-sm" onclick="openSocialAccountsModal()" style="font-weight:700;font-size:11px;padding:3px 8px;">
          ⚙️ Accounts Info
        </button>
      </div>
    </div>
    <div class="inbox-wrap ${mobilePaneClass}">
      <div class="conv-list">
        <div class="conv-search"><div class="search-box" style="width:100%;">${icon('search')}<input id="convSearch" oninput="filterConvs(this.value)" placeholder="Search conversations…" style="border:none;outline:none;background:transparent;font-size:13px;width:100%;color:var(--ink);"></div></div>
        <div class="channel-tabs">${tabs}</div>
        <div class="conv-scroll" id="convScroll">${convItems}</div>
      </div>
      <div class="thread" style="${!active?'align-items:center;justify-content:center;':''}">${threadHtml}</div>
    </div>`;
}

function openSocialAccountsModal(){
  document.getElementById('modalOverlay').innerHTML = `
    <div class="modal" style="width:620px;">
      <div class="modal-head">
        <div>
          <h3 style="margin:0;font-size:16px;">📲 Connected Social Accounts &amp; Meta APIs</h3>
          <div style="font-size:11.5px;color:var(--ink-faint);margin-top:2px;">Overview of Instagram Business &amp; WhatsApp Business Cloud API connections</div>
        </div>
        <button class="close-x" onclick="closeModal()">${icon('close')}</button>
      </div>
      <div class="modal-body" style="overflow-y:auto;max-height:75vh;">
        
        <!-- Instagram Card -->
        <div style="background:#fdf0ed;border:1px solid #f9d5cc;border-radius:10px;padding:14px;margin-bottom:14px;">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;">
            <div style="display:flex;align-items:center;gap:8px;">
              <div style="width:32px;height:32px;border-radius:50%;background:#e1306c;color:#fff;display:flex;align-items:center;justify-content:center;">
                ${icon('instagram')}
              </div>
              <div>
                <div style="font-weight:800;font-size:14px;color:#c13584;">Instagram Business Account</div>
                <div style="font-size:11.5px;color:var(--ink-soft);">Handle: <b>@sola.attire</b></div>
              </div>
            </div>
            <span class="pill pill-success" style="font-weight:700;">🟢 Connected</span>
          </div>
          <div style="font-size:12px;line-height:1.6;color:var(--ink-soft);">
            <div>• <b>Page Name:</b> Sola Attire Official Instagram</div>
            <div>• <b>Instagram Account ID:</b> <code class="mono">17841409283748291</code></div>
            <div>• <b>API Version:</b> Meta Graph API v19.0</div>
            <div>• <b>Webhook Endpoint:</b> <code class="mono">/api/meta/webhook</code></div>
          </div>
        </div>

        <!-- WhatsApp Card -->
        <div style="background:#eefbf3;border:1px solid #c7f2d5;border-radius:10px;padding:14px;margin-bottom:14px;">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;">
            <div style="display:flex;align-items:center;gap:8px;">
              <div style="width:32px;height:32px;border-radius:50%;background:#25d366;color:#fff;display:flex;align-items:center;justify-content:center;">
                ${icon('whatsapp')}
              </div>
              <div>
                <div style="font-weight:800;font-size:14px;color:#128c7e;">WhatsApp Business Cloud API</div>
                <div style="font-size:11.5px;color:var(--ink-soft);">Official Phone: <b>+977 9847023226</b></div>
              </div>
            </div>
            <span class="pill pill-success" style="font-weight:700;">🟢 Connected</span>
          </div>
          <div style="font-size:12px;line-height:1.6;color:var(--ink-soft);">
            <div>• <b>Display Name:</b> Sola Attire Customer Care</div>
            <div>• <b>Phone Number ID:</b> <code class="mono">100654321098765</code></div>
            <div>• <b>WABA Account ID:</b> <code class="mono">998877665544332</code></div>
            <div>• <b>Capabilities:</b> Automated Order Updates, COD Confirmation &amp; Live Chat</div>
          </div>
        </div>

        <!-- System Token Card -->
        <div style="background:var(--bg);border:1px solid var(--border);border-radius:10px;padding:12px 14px;">
          <div style="font-weight:700;font-size:12.5px;margin-bottom:4px;color:var(--ink);">🔑 Meta System User Access Token</div>
          <div style="font-size:11.5px;color:var(--ink-faint);">Token status: <span style="color:var(--success);font-weight:700;">Active &amp; Valid</span> (Loaded from <code class="mono">.env</code>)</div>
        </div>

      </div>
      <div class="modal-foot">
        <button class="btn btn-secondary" onclick="closeModal()">Close</button>
      </div>
    </div>`;
  document.getElementById('modalOverlay').classList.add('show');
}
window.openSocialAccountsModal = openSocialAccountsModal;

function setInboxChannel(ch){ STATE.inboxChannel = ch; renderAll(); }
window.setInboxChannel = setInboxChannel;

function backToConvList(){
  STATE.mobileInboxView = 'list';
  STATE.activeConvId = null;
  renderAll();
}
window.backToConvList = backToConvList;

async function openConversation(id){
  STATE.activeConvId = id;
  STATE.mobileInboxView = 'thread';
  const c = CONVERSATIONS.find(x=>x.id===id);
  if(c && c.unread > 0){
    c.unread = 0;
    await fetch(`/api/inbox/conversations/${id}/read`, {method:'POST'});
  }
  renderAll();
}
window.openConversation = openConversation;

async function sendChat(){
  const input = document.getElementById('chatInput');
  if(!input || !input.value.trim()) return;
  const text = input.value.trim();
  input.value = '';

  const res = await fetch('/api/inbox/send', {
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({conversationId:STATE.activeConvId, text})
  });
  const data = await res.json();
  if(data.conversation){
    toast(data.conversation.channel==='whatsapp' ? 'WhatsApp message sent' : 'Instagram reply sent');
    await fetchAllData();
  }
}
window.sendChat = sendChat;

function sendWhatsAppTemplate(){
  const c = CONVERSATIONS.find(x=>x.id===STATE.activeConvId);
  if(!c) return;
  const text = 'Thanks for reaching out on WhatsApp! Here is our catalog link and current offers: solaattire.com/shop';
  fetch('/api/inbox/send', {
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({conversationId:c.id, text})
  }).then(()=> { toast('WhatsApp message sent'); fetchAllData(); });
}
window.sendWhatsAppTemplate = sendWhatsAppTemplate;

function afterInboxRender(){
  const scroll=document.getElementById('threadMsgs');
  if(scroll) scroll.scrollTop = scroll.scrollHeight;
}

function filterConvs(q){
  const items = document.querySelectorAll('#convScroll .conv-item');
  q = q.toLowerCase();
  items.forEach(el=>{ el.style.display = el.innerText.toLowerCase().includes(q) ? '' : 'none'; });
}
window.filterConvs = filterConvs;

/* ============================= CREATE ORDER SIDE PANEL ============================= */
function openCreateOrderDirect(){
  STATE.pendingOrderItems = [];
  STATE.pendingOrderConv = null;
  renderCreateOrderPanel();
  document.getElementById('panelOverlay').classList.add('show');
}
window.openCreateOrderDirect = openCreateOrderDirect;

function openCreateOrder(convId){
  STATE.pendingOrderItems = [];
  STATE.pendingOrderConv = null;
  renderCreateOrderPanel();
  document.getElementById('panelOverlay').classList.add('show');
}
window.openCreateOrder = openCreateOrder;

function offerForProduct(pid){
  return OFFERS.find(o=>o.status==='active' && o.items.some(it=>it.productId===pid));
}
function offerItemForProduct(pid){
  const off = offerForProduct(pid);
  return off ? off.items.find(it=>it.productId===pid) : null;
}
function discountedPrice(product){
  const item = offerItemForProduct(product.id);
  if(!item) return product.price;
  if(item.type==='percent') return Math.round(product.price*(1-item.value/100));
  if(item.type==='flat') return Math.max(0, product.price - item.value);
  return product.price;
}

function renderBranchSelectDropdown(target, selectedName){
  const selBranch = NCM_BRANCHES_DATA.find(b => b.name.toLowerCase() === (selectedName||'').toLowerCase()) || NCM_BRANCHES_DATA[0];
  const initialLabel = selBranch ? selBranch.label : 'Select Destination';
  const initialVal = selBranch ? selBranch.name : 'TINKUNE';

  return `
    <div class="ncm-branch-select-wrap">
      <input type="hidden" id="co_${target}_val" value="${initialVal}">
      <button type="button" class="ncm-branch-select-btn" onclick="toggleNCMBranchDropdown('${target}', event)">
        <span id="co_${target}_label">${initialLabel}</span>
        ${icon('chevron-down')}
      </button>
      <div class="ncm-branch-dropdown" id="co_${target}_dropdown">
        <div class="ncm-branch-search">
          <input type="text" id="co_${target}_search" placeholder="Search branch or district..." oninput="filterNCMBranches('${target}', this.value)" onclick="event.stopPropagation()">
        </div>
        <div class="ncm-branch-list" id="co_${target}_list">
          ${renderNCMBranchItems(target, '')}
        </div>
      </div>
    </div>`;
}

function renderNCMBranchItems(target, filterText){
  const q = (filterText || '').trim().toLowerCase();
  const filtered = NCM_BRANCHES_DATA.filter(b => b.label.toLowerCase().includes(q) || b.name.toLowerCase().includes(q) || (b.district && b.district.toLowerCase().includes(q)));
  if(!filtered.length){
    return `<div style="padding:10px;text-align:center;font-size:12px;color:var(--ink-faint);">No branches match "${q}"</div>`;
  }
  return filtered.map(b => `
    <div class="ncm-branch-item ${b.name===target?'selected':''}" onclick="selectNCMBranch('${target}', '${b.name}', '${b.label}')">
      ${b.label}
    </div>
  `).join('');
}

function toggleNCMBranchDropdown(target, e){
  if(e) e.stopPropagation();
  const dropdown = document.getElementById(`co_${target}_dropdown`);
  if(!dropdown) return;
  const isShowing = dropdown.classList.contains('show');
  
  document.querySelectorAll('.ncm-branch-dropdown').forEach(d => d.classList.remove('show'));
  
  if(!isShowing){
    dropdown.classList.add('show');
    const searchInput = document.getElementById(`co_${target}_search`);
    if(searchInput){ searchInput.value = ''; searchInput.focus(); }
    document.getElementById(`co_${target}_list`).innerHTML = renderNCMBranchItems(target, '');
  }
}
window.toggleNCMBranchDropdown = toggleNCMBranchDropdown;

function filterNCMBranches(target, query){
  const listEl = document.getElementById(`co_${target}_list`);
  if(listEl) listEl.innerHTML = renderNCMBranchItems(target, query);
}
window.filterNCMBranches = filterNCMBranches;

function selectNCMBranch(target, name, label){
  const hiddenInput = document.getElementById(`co_${target}_val`);
  const labelSpan = document.getElementById(`co_${target}_label`);
  const dropdown = document.getElementById(`co_${target}_dropdown`);
  
  if(hiddenInput) hiddenInput.value = name;
  if(labelSpan) labelSpan.textContent = label;
  if(dropdown) dropdown.classList.remove('show');
}
window.selectNCMBranch = selectNCMBranch;

if(!STATE.orderDispatchMedium) STATE.orderDispatchMedium = 'ncm';

function setOrderDispatchMedium(medium){
  STATE.orderDispatchMedium = medium;
  const ncmBtn = document.getElementById('co_btn_ncm');
  const localBtn = document.getElementById('co_btn_local');
  const ncmExtra = document.getElementById('co_ncm_extra_fields');

  if (ncmBtn && localBtn) {
    if (medium === 'ncm') {
      ncmBtn.className = 'btn btn-primary';
      localBtn.className = 'btn btn-secondary';
    } else {
      ncmBtn.className = 'btn btn-secondary';
      localBtn.className = 'btn btn-primary';
    }
  }

  if (ncmExtra) {
    if (medium === 'ncm') {
      ncmExtra.style.display = 'block';
    } else {
      ncmExtra.style.display = 'none';
    }
  }
}
window.setOrderDispatchMedium = setOrderDispatchMedium;

function renderCreateOrderPanel(){
  const conv = STATE.pendingOrderConv || {name:'', handle:''};
  const medium = STATE.orderDispatchMedium || 'ncm';

  const rows = PRODUCTS.map(p=>{
    const off = offerForProduct(p.id);
    const dp = discountedPrice(p);
    return `<div class="pick-row" style="flex-wrap:wrap;gap:8px;padding:10px 12px;background:var(--bg);border-radius:8px;margin-bottom:8px;">
      <div style="display:flex;align-items:center;gap:10px;flex:1;min-width:200px;">
        <img src="${p.img}" class="thumb" style="width:36px;height:36px;border-radius:6px;">
        <div>
          <div class="pick-name" style="font-weight:600;font-size:13px;">${p.name} ${off?`<span class="price-tag">ON OFFER</span>`:''}</div>
          <div class="pick-meta" style="font-size:11px;color:var(--ink-faint);">${p.sku} · ${p.category}</div>
          <div class="price-block" style="margin-top:2px;">
            ${off?`<span class="price-strike">${fmtNPR(p.price)}</span> <span class="price-now" style="font-weight:700;color:var(--accent);">${fmtNPR(dp)}</span>`:`<span class="price-reg" style="font-weight:700;">${fmtNPR(p.price)}</span>`}
          </div>
        </div>
      </div>
      <div style="display:flex;align-items:center;gap:8px;flex-shrink:0;">
        <select id="var_select_${p.id}" style="padding:5px 8px;font-size:12px;border:1px solid var(--border);border-radius:6px;background:var(--surface);">
          ${p.variants.map((v, vIdx) => `<option value="${vIdx}" ${v.stock<=0?'disabled':''}>${v.size} / ${v.color} (${v.stock > 0 ? v.stock + ' left' : 'OUT OF STOCK'})</option>`).join('')}
        </select>
        <input type="number" id="qty_input_${p.id}" value="1" min="1" max="99" style="width:46px;padding:5px;font-size:12px;border:1px solid var(--border);border-radius:6px;text-align:center;">
        <button class="btn btn-secondary btn-sm" onclick="addOrderItemInline('${p.id}')">+ Add</button>
      </div>
    </div>`;
  }).join('');

  const summary = STATE.pendingOrderItems.map((it, idx)=>{
    return `<div class="summary-row" style="display:flex;justify-content:space-between;align-items:center;padding:6px 0;border-bottom:1px dashed var(--border-soft);">
      <div>
        <div style="font-weight:600;font-size:12.5px;">${it.qty} × ${it.name}</div>
        <div style="font-size:11px;color:var(--ink-faint);">${it.variant}</div>
      </div>
      <div style="display:flex;align-items:center;gap:10px;">
        <span style="font-weight:600;font-size:12.5px;">${fmtNPR(it.lineTotal)}</span>
        <button type="button" class="variant-remove-btn" onclick="removeOrderItemInline(${idx})" title="Remove item">${icon('trash')}</button>
      </div>
    </div>`;
  }).join('');

  const subtotal = STATE.pendingOrderItems.reduce((a,i)=>a+i.regularLineTotal,0);
  const discount = STATE.pendingOrderItems.reduce((a,i)=>a+(i.regularLineTotal-i.lineTotal),0);
  const total = subtotal-discount;

  document.getElementById('panelOverlay').innerHTML = `
    <div class="panel" style="width: 540px;">
      <div class="panel-head"><h3 style="margin:0;font-size:16px;">Create New Order</h3><button class="close-x" onclick="closePanel()">${icon('close')}</button></div>
      <div class="panel-body">
        
        <!-- Customer Details -->
        <div class="section-title">1. Customer Information</div>
        <div class="field-row">
          <div class="field">
            <label>Customer Full Name *</label>
            <input id="co_customer" value="${conv.name||''}" placeholder="e.g. Sujata Maharjan">
          </div>
          <div class="field">
            <label>Social Handle / Reference</label>
            <input id="co_handle" value="${conv.handle||''}" placeholder="e.g. @sujata.wears / Direct Call">
          </div>
        </div>

        <!-- Dispatch Medium Selector -->
        <div class="section-title" style="margin-top:16px;">2. Delivery &amp; Fulfillment Medium</div>
        <div class="section-sub" style="margin-bottom:8px;">Choose whether to dispatch via NCM API or local delivery</div>
        
        <div style="display:flex;gap:8px;margin-bottom:14px;">
          <button type="button" id="co_btn_ncm" class="btn ${medium==='ncm'?'btn-primary':'btn-secondary'}" onclick="setOrderDispatchMedium('ncm')" style="flex:1;justify-content:center;font-size:12.5px;transition:all 0.2s ease;">
            🚚 NCM Courier API
          </button>
          <button type="button" id="co_btn_local" class="btn ${medium==='local'?'btn-primary':'btn-secondary'}" onclick="setOrderDispatchMedium('local')" style="flex:1;justify-content:center;font-size:12.5px;transition:all 0.2s ease;">
            📦 Local / Self Pickup / Other
          </button>
        </div>

        <!-- Common Phone & Address Fields (Always present, zero flicker) -->
        <div class="field-row">
          <div class="field">
            <label>Primary Phone (phone) *</label>
            <input id="co_phone" value="9847023226" placeholder="e.g. 9847023226">
          </div>
          <div class="field">
            <label>Secondary Phone (phone2)</label>
            <input id="co_phone2" value="" placeholder="e.g. 9801234567">
          </div>
        </div>

        <div class="field">
          <label>Delivery Address / Landmark (address) *</label>
          <input id="co_address" value="Kathmandu, Ward 4" placeholder="e.g. Lakeside Ward 6, Pokhara">
        </div>

        <!-- NCM Specific Extra Branch & Dispatch Fields (Smooth toggle) -->
        <div id="co_ncm_extra_fields" style="display:${medium==='ncm'?'block':'none'};transition:all 0.2s ease;">
          <div class="field-row">
            <div class="field">
              <label>Destination Branch (branch) *</label>
              ${renderBranchSelectDropdown('branch', 'POKHARA')}
            </div>
            <div class="field">
              <label>Origin Branch (fbranch) *</label>
              ${renderBranchSelectDropdown('fbranch', 'TINKUNE')}
            </div>
          </div>

          <div class="field-row">
            <div class="field">
              <label>Delivery Type (delivery_type)</label>
              <select id="co_delivery_type">
                <option value="Door2Door" selected>Door2Door (Pickup &amp; Delivery)</option>
                <option value="Branch2Door">Branch2Door (Sender drops at branch)</option>
                <option value="Door2Branch">Door2Branch (Collect at branch)</option>
                <option value="Branch2Branch">Branch2Branch (Branch drop &amp; collect)</option>
              </select>
            </div>
            <div class="field">
              <label>Delivery Instruction</label>
              <input id="co_instruction" value="Call recipient before delivery" placeholder="Call recipient before arrival">
            </div>
          </div>
        </div>

        <div class="field-row" style="margin-top:10px;">
          <div class="field">
            <label>Advance Payment Received (NPR)</label>
            <input type="number" id="co_advance_paid" value="0" min="0" oninput="updateOrderCODCalculation()" placeholder="e.g. 500 or 1000">
          </div>
          <div class="field">
            <label>Remaining COD Charge (NPR) *</label>
            <input type="number" id="co_cod_charge" value="${total}" placeholder="0 if fully paid in advance">
          </div>
        </div>

        <!-- Product Selection with Search Filter -->
        <div class="section-title" style="margin-top:18px;">3. Select Products</div>
        <div class="section-sub" style="margin-bottom:8px;">Search product name, SKU or category to quickly filter items</div>
        
        <div class="search-box" style="width:100%;margin-bottom:12px;background:var(--bg);border:1px solid var(--border-soft);padding:6px 12px;border-radius:8px;display:flex;align-items:center;gap:8px;">
          ${icon('search')}
          <input id="co_product_search" oninput="filterOrderProducts(this.value)" placeholder="Search products by name, SKU (e.g. Hoodie, Denim, TS-HD-014)..." style="border:none;outline:none;background:transparent;font-size:12.5px;width:100%;color:var(--ink);">
        </div>

        <div id="co_product_list_wrap">
          ${rows}
        </div>
        
        <div id="co_order_summary_wrap">
          ${STATE.pendingOrderItems.length ? `
            <div class="section-title" style="margin-top:18px;">Order Summary (${STATE.pendingOrderItems.length} items)</div>
            ${summary}
            <div class="summary-row discount" style="margin-top:8px;display:flex;justify-content:space-between;"><span>Discount</span><span>-${fmtNPR(discount)}</span></div>
            <div class="summary-row total" style="display:flex;justify-content:space-between;font-weight:800;font-size:15px;color:var(--accent);margin-top:6px;"><span>Total COD Charge</span><span>${fmtNPR(total)}</span></div>
          ` : ''}
        </div>

      </div>
      <div class="panel-foot">
        <button class="btn btn-secondary" onclick="closePanel()">Cancel</button>
        <button class="btn btn-primary" id="co_submit_btn" ${STATE.pendingOrderItems.length?'':'disabled style="opacity:.5;"'} onclick="submitOrder()">${icon('check')} Create Order</button>
      </div>
    </div>`;
}

function filterOrderProducts(query){
  const q = (query || '').toLowerCase().trim();
  const pickRows = document.querySelectorAll('#co_product_list_wrap .pick-row');
  let visibleCount = 0;
  pickRows.forEach(row => {
    const text = row.innerText.toLowerCase();
    if (!q || text.includes(q)) {
      row.style.display = 'flex';
      visibleCount++;
    } else {
      row.style.display = 'none';
    }
  });
  
  let noMatchEl = document.getElementById('co_no_product_match');
  if (visibleCount === 0) {
    if (!noMatchEl) {
      noMatchEl = document.createElement('div');
      noMatchEl.id = 'co_no_product_match';
      noMatchEl.style.cssText = 'padding:16px;text-align:center;color:var(--ink-faint);font-size:12.5px;background:var(--bg);border-radius:8px;';
      const wrap = document.getElementById('co_product_list_wrap');
      if (wrap) wrap.appendChild(noMatchEl);
    }
    noMatchEl.textContent = `No products found matching "${query}"`;
    noMatchEl.style.display = 'block';
}
}
window.filterOrderProducts = filterOrderProducts;

function updateOrderCODCalculation(){
  const advInput = document.getElementById('co_advance_paid');
  const codInput = document.getElementById('co_cod_charge');
  if(!codInput) return;
  const adv = advInput ? (parseFloat(advInput.value) || 0) : 0;
  const total = STATE.pendingOrderItems.reduce((a,i)=>a+i.lineTotal,0);
  const remainingCOD = Math.max(0, total - adv);
  codInput.value = remainingCOD;
}
window.updateOrderCODCalculation = updateOrderCODCalculation;

function updateOrderSummaryPartial(){
  const wrap = document.getElementById('co_order_summary_wrap');
  if(!wrap){
    renderCreateOrderPanel();
    return;
  }

  const subtotal = STATE.pendingOrderItems.reduce((a,i)=>a+i.regularLineTotal,0);
  const discount = STATE.pendingOrderItems.reduce((a,i)=>a+(i.regularLineTotal-i.lineTotal),0);
  const total = subtotal - discount;

  const summaryRows = STATE.pendingOrderItems.map((i, idx)=>`
    <div class="summary-row" style="display:flex;align-items:center;justify-content:space-between;padding:6px 0;border-bottom:1px solid var(--border-soft);">
      <div>
        <div style="font-weight:700;font-size:13px;">${i.qty}x ${i.name}</div>
        <div style="font-size:11.5px;color:var(--ink-faint);">${i.variant}</div>
      </div>
      <div style="display:flex;align-items:center;gap:10px;">
        <span class="mono font-bold">${fmtNPR(i.lineTotal)}</span>
        <button class="btn btn-secondary btn-sm" onclick="removeOrderItemInline(${idx})" style="padding:2px 6px;color:var(--danger);">${icon('close')}</button>
      </div>
    </div>`).join('');

  if(STATE.pendingOrderItems.length){
    wrap.innerHTML = `
      <div class="section-title" style="margin-top:18px;">Order Summary (${STATE.pendingOrderItems.length} items)</div>
      ${summaryRows}
      <div class="summary-row discount" style="margin-top:8px;display:flex;justify-content:space-between;"><span>Discount</span><span>-${fmtNPR(discount)}</span></div>
      <div class="summary-row total" style="display:flex;justify-content:space-between;font-weight:800;font-size:15px;color:var(--accent);margin-top:6px;"><span>Total COD Charge</span><span>${fmtNPR(total)}</span></div>`;
  } else {
    wrap.innerHTML = '';
  }

  const codInput = document.getElementById('co_cod_charge');
  const advancePaidCb = document.getElementById('co_advance_paid');
  if(codInput && advancePaidCb && !advancePaidCb.checked){
    codInput.value = total;
  }

  const submitBtn = document.getElementById('co_submit_btn');
  if(submitBtn){
    submitBtn.disabled = STATE.pendingOrderItems.length === 0;
    submitBtn.style.opacity = STATE.pendingOrderItems.length === 0 ? '.5' : '1';
  }
}

function addOrderItemInline(pid){
  const p = PRODUCTS.find(x => x.id === pid);
  if(!p) return;
  
  const varSelect = document.getElementById(`var_select_${pid}`);
  const qtyInput = document.getElementById(`qty_input_${pid}`);
  
  const vIdx = parseInt(varSelect.value);
  const qty = Math.max(1, parseInt(qtyInput.value) || 1);
  const v = p.variants[vIdx];
  
  if(!v || v.stock <= 0){
    toast('Selected variant is out of stock', 'error');
    return;
  }
  
  const dp = discountedPrice(p);
  STATE.pendingOrderItems.push({
    productId: p.id,
    name: p.name,
    variant: `${v.size} / ${v.color}`,
    qty: qty,
    lineTotal: dp * qty,
    regularLineTotal: p.price * qty
  });
  
  toast(`Added ${qty}x ${p.name} (${v.size}/${v.color})`);
  updateOrderSummaryPartial();
}
window.addOrderItemInline = addOrderItemInline;

function removeOrderItemInline(idx){
  STATE.pendingOrderItems.splice(idx, 1);
  updateOrderSummaryPartial();
}
window.removeOrderItemInline = removeOrderItemInline;

function closePanel(){document.getElementById('panelOverlay').classList.remove('show');}
window.closePanel = closePanel;

async function submitOrder(){
  try {
    const medium = STATE.orderDispatchMedium || 'ncm';
    const custEl = document.getElementById('co_customer');
    const handleEl = document.getElementById('co_handle');
    const phoneEl = document.getElementById('co_phone');
    const addressEl = document.getElementById('co_address');
    const branchEl = document.getElementById('co_branch_val');

    const targetConv = STATE.pendingOrderConv || CONVERSATIONS.find(c => c.id === STATE.activeConvId);

    const customerName = (custEl && custEl.value && custEl.value.trim() !== '') ? custEl.value.trim() : (targetConv ? targetConv.name : 'Online Customer');
    const handle = (handleEl && handleEl.value && handleEl.value.trim() !== '') ? handleEl.value.trim() : (targetConv ? targetConv.handle : '@customer');
    const phone = (phoneEl && phoneEl.value && phoneEl.value.trim() !== '') ? phoneEl.value.trim() : '9847023226';
    const address = (addressEl && addressEl.value && addressEl.value.trim() !== '') ? addressEl.value.trim() : 'Kathmandu, Ward 4';
    const branch = (branchEl && branchEl.value && branchEl.value.trim() !== '') ? branchEl.value.trim() : (medium==='ncm'?'POKHARA':'Kathmandu');

    if (!STATE.pendingOrderItems || STATE.pendingOrderItems.length === 0) {
      toast('Please add at least 1 product item to create the order', 'error');
      return;
    }

    const subtotal = STATE.pendingOrderItems.reduce((a,i)=>a+i.regularLineTotal,0);
    const discount = STATE.pendingOrderItems.reduce((a,i)=>a+(i.regularLineTotal-i.lineTotal),0);
    const calculatedTotal = subtotal - discount;

    const payload = {
      customer: customerName,
      handle: handle,
      phone: phone,
      address: address,
      destination: branch,
      status: 'confirmed',
      offer: discount > 0 ? {name:'Applied offer', amount:discount} : null,
      total: calculatedTotal,
      date: new Date().toISOString().replace('T', ' ').slice(0, 16),
      items: STATE.pendingOrderItems.map(i=>({name:i.name, variant:i.variant, qty:i.qty, price:i.lineTotal}))
    };

    // 1. Save Order to SQLite DB with status='confirmed'
    const res = await fetch('/api/orders', {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(payload)
    });

    if(res.ok){
      const orderData = await res.json();
      const createdOrderId = (orderData.order && orderData.order.id) ? orderData.order.id : (orderData.id || 'ORD-NEW');

      // 2. Call NCM API (POST /api/v1/order/create) to generate official NCM Order ID while keeping status as confirmed
      let ncmWaybill = '';
      if(medium === 'ncm'){
        const phone2El = document.getElementById('co_phone2');
        const fbranchEl = document.getElementById('co_fbranch_val');
        const deliveryTypeEl = document.getElementById('co_delivery_type');
        const instructionEl = document.getElementById('co_instruction');
        const codInput = document.getElementById('co_cod_charge');

        const packageDesc = STATE.pendingOrderItems.map(i=>`${i.qty}x ${i.name}`).join(', ');
        const finalCod = (codInput && codInput.value !== '') ? parseFloat(codInput.value) : calculatedTotal;

        const ncmPayload = {
          orderId: createdOrderId,
          status: 'confirmed',
          name: customerName,
          phone: phone,
          phone2: phone2El ? phone2El.value : '',
          cod_charge: finalCod,
          address: address,
          fbranch: fbranchEl ? fbranchEl.value : 'TINKUNE',
          branch: branch,
          delivery_type: deliveryTypeEl ? deliveryTypeEl.value : 'Door2Door',
          weight: '1',
          package: packageDesc,
          vref_id: createdOrderId,
          instruction: instructionEl ? instructionEl.value : 'Call recipient before delivery'
        };

        try {
          const ncmRes = await fetch('/api/shipments/ncm', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(ncmPayload)
          });
          const ncmData = await ncmRes.json();
          ncmWaybill = ncmData.shipment ? ncmData.shipment.ncm : '';
        } catch (e) {
          console.error('NCM Order ID generation error:', e);
        }
      }

      toast(ncmWaybill ? `Order ${createdOrderId} created! NCM Waybill: ${ncmWaybill} (Status: Confirmed)` : `Order ${createdOrderId} created! Status: Confirmed`);

      STATE.pendingOrderItems = [];
      closePanel();
      await fetchAllData();
      navigate('orders');
    } else {
      toast('Failed to create order. Please check inputs and try again.', 'error');
    }
  } catch (err) {
    console.error('submitOrder Error:', err);
    toast('An unexpected error occurred while creating order', 'error');
  }
}
window.submitOrder = submitOrder;

/* ============================= ORDERS ============================= */
if(!STATE.orderTimeframe) STATE.orderTimeframe = 'all';
if(!STATE.orderStartDate) STATE.orderStartDate = '';
if(!STATE.orderEndDate) STATE.orderEndDate = '';
if(!STATE.orderStatusFilter) STATE.orderStatusFilter = 'all';

function setOrderTimeframe(tf){
  STATE.orderTimeframe = tf;
  const today = new Date();
  if (tf === 'all') {
    STATE.orderStartDate = '';
    STATE.orderEndDate = '';
  } else if (tf === 'today') {
    STATE.orderStartDate = today.toISOString().split('T')[0];
    STATE.orderEndDate = today.toISOString().split('T')[0];
  } else if (tf === 'week') {
    const d = new Date(today);
    d.setDate(d.getDate() - 7);
    STATE.orderStartDate = d.toISOString().split('T')[0];
    STATE.orderEndDate = today.toISOString().split('T')[0];
  } else if (tf === 'month') {
    const d = new Date(today);
    d.setDate(d.getDate() - 30);
    STATE.orderStartDate = d.toISOString().split('T')[0];
    STATE.orderEndDate = today.toISOString().split('T')[0];
  }
  renderAll();
}
window.setOrderTimeframe = setOrderTimeframe;

function updateOrderCustomDates(){
  STATE.orderTimeframe = 'custom';
  STATE.orderStartDate = document.getElementById('ordStartDate').value || STATE.orderStartDate;
  STATE.orderEndDate = document.getElementById('ordEndDate').value || STATE.orderEndDate;
  renderAll();
}
window.updateOrderCustomDates = updateOrderCustomDates;

function setOrderStatusFilter(st){
  STATE.orderStatusFilter = st;
  renderAll();
}
window.setOrderStatusFilter = setOrderStatusFilter;

function statusPill(status){
  const map = {
    pending:{cls:'pill-neutral', label:'Pending'},
    confirmed:{cls:'pill-info', label:'Confirmed'},
    packed:{cls:'pill-warning', label:'📦 Package Packed'},
    shipped:{cls:'pill-warning', label:'🚚 Dispatched via NCM'},
    delivered:{cls:'pill-success', label:'✅ Delivered'},
  };
  const m = map[status]||map.pending;
  return `<span class="pill ${m.cls}"><span class="pill-dot" style="background:currentColor;"></span>${m.label}</span>`;
}

async function markOrderPacked(oid){
  const res = await fetch(`/api/orders/${oid}/status`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ status: 'packed' })
  });

  if(res.ok){
    toast(`📦 Order ${oid} marked as Packed! Ready for courier dispatch.`);
    await fetchAllData();
  }
}
window.markOrderPacked = markOrderPacked;

async function dispatchOrderToNCM(oid){
  const res = await fetch(`/api/orders/${oid}/status`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ status: 'shipped' })
  });

  if(res.ok){
    toast(`🚚 Order ${oid} confirmed as Dispatched from our side!`);
    await fetchAllData();
  }
}
window.dispatchOrderToNCM = dispatchOrderToNCM;

async function toggleOrderPackedFromChat(oid, isChecked){
  const newStatus = isChecked ? 'packed' : 'confirmed';
  const res = await fetch(`/api/orders/${oid}/status`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ status: newStatus })
  });

  if(res.ok){
    toast(isChecked ? `📦 Package for ${oid} marked as Packed!` : `Order ${oid} status updated`);
    await fetchAllData();
  }
}
window.toggleOrderPackedFromChat = toggleOrderPackedFromChat;

function renderOrders(){
  const tf = STATE.orderTimeframe;
  const stFilter = STATE.orderStatusFilter;

  // Sort ORDERS array strictly from NEWEST order to OLDEST order
  ORDERS.sort((a, b) => {
    const da = a.date || '';
    const db = b.date || '';
    if (da !== db) return db.localeCompare(da);
    return (b.id || '').localeCompare(a.id || '');
  });

  // Filter ORDERS array by date and status
  const filteredOrders = ORDERS.filter(o => {
    if (stFilter !== 'all' && o.status !== stFilter) return false;
    
    if (STATE.orderStartDate && STATE.orderEndDate) {
      const oDate = new Date(o.date || '2026-07-28');
      const start = new Date(STATE.orderStartDate);
      const end = new Date(STATE.orderEndDate);
      end.setHours(23, 59, 59, 999);
      if (oDate < start || oDate > end) return false;
    }
    return true;
  });

  // Calculate Order Analytics
  const totalSales = filteredOrders.reduce((a,o) => a + o.total, 0);
  const avgOrderVal = filteredOrders.length ? Math.round(totalSales / filteredOrders.length) : 0;
  const deliveredCount = filteredOrders.filter(o => o.status === 'delivered').length;
  const packedCount = filteredOrders.filter(o => o.status === 'packed').length;
  const shippedCount = filteredOrders.filter(o => o.status === 'shipped' || o.status === 'in-transit').length;

  const formatOrderDateTime = o => {
    const dtStr = o.date || '';
    const parts = dtStr.split(/[\sT]+/);
    const dPart = parts[0] || '2026-07-30';
    const tPart = parts[1] ? parts[1].slice(0, 5) : (o.time ? o.time : '11:45 AM');
    return `<div style="line-height:1.3;"><div class="mono td-title" style="font-size:12px;">${dPart}</div><div class="td-sub" style="font-size:11px;color:var(--ink-faint);display:flex;align-items:center;gap:3px;margin-top:2px;">${icon('clock')} ${tPart}</div></div>`;
  };

  const rows = filteredOrders.map(o=> {
    let actionBtn = '';
    const shipment = SHIPMENTS.find(s => s.order === o.id);
    const ncmWaybill = shipment && shipment.ncm ? shipment.ncm : null;
    const isPacked = o.status === 'packed' || o.status === 'shipped' || o.status === 'in-transit' || o.status === 'delivered';

    const packingStatusBadge = isPacked
      ? `<span class="pill pill-success" style="font-size:11px;font-weight:700;"><span class="pill-dot" style="background:currentColor;"></span>✅ Packed</span>`
      : `<span class="pill pill-warning" style="font-size:11px;font-weight:700;"><span class="pill-dot" style="background:currentColor;"></span>⏳ Not Packed Yet</span>`;

    if (o.status === 'pending' || o.status === 'confirmed') {
      actionBtn = `<button class="btn btn-primary btn-sm" onclick="event.stopPropagation();markOrderPacked('${o.id}')" style="padding:4px 8px;font-size:11px;">📦 Mark Packed</button>`;
    } else if (o.status === 'packed') {
      actionBtn = `<button class="btn btn-primary btn-sm" onclick="event.stopPropagation();dispatchOrderToNCM('${o.id}')" style="padding:4px 8px;font-size:11px;background:linear-gradient(135deg, #25d366 0%, #128c7e 100%);">🚚 Mark Dispatched</button>`;
    } else {
      actionBtn = `<span class="td-sub" style="font-size:11.5px;">—</span>`;
    }

    return `
      <tr class="clickable" onclick="openOrderDetail('${o.id}')">
        <td class="mono td-title">${o.id}</td>
        <td>${packingStatusBadge}</td>
        <td><div class="td-title">${o.customer}</div><div class="td-sub">${o.handle}</div></td>
        <td>${o.items.length} item${o.items.length>1?'s':''}</td>
        <td>${o.offer?`<span class="price-tag">${o.offer.name}</span>`:'<span class="td-sub">—</span>'}</td>
        <td class="mono font-bold" style="color:var(--accent);">${fmtNPR(o.total)}</td>
        <td>${statusPill(o.status)}</td>
        <td>${formatOrderDateTime(o)}</td>
        <td>${actionBtn}</td>
      </tr>`;
  }).join('');

  return `
    <div class="page-head">
      <div>
        <h1>Orders</h1>
        <p class="page-sub">Manage &amp; analyze order history, sales performance &amp; delivery statuses</p>
      </div>
      <button class="btn btn-primary" onclick="openCreateOrderDirect()">${icon('plus')} Create New Order</button>
    </div>

    <!-- Filter Control Toolbar -->
    <div class="card card-pad" style="margin-bottom:18px;">
      <div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12px;">
        
        <!-- Preset Date Filters -->
        <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;">
          <span style="font-size:12px;font-weight:700;color:var(--ink-soft);margin-right:4px;">Date Filter:</span>
          <button class="btn ${tf==='all'?'btn-primary':'btn-secondary'} btn-sm" onclick="setOrderTimeframe('all')">All Time</button>
          <button class="btn ${tf==='today'?'btn-primary':'btn-secondary'} btn-sm" onclick="setOrderTimeframe('today')">Today</button>
          <button class="btn ${tf==='week'?'btn-primary':'btn-secondary'} btn-sm" onclick="setOrderTimeframe('week')">This Week</button>
          <button class="btn ${tf==='month'?'btn-primary':'btn-secondary'} btn-sm" onclick="setOrderTimeframe('month')">This Month</button>
        </div>

        <!-- Custom Date Pickers (Responsive) -->
        <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;max-width:100%;">
          <span style="font-size:12px;font-weight:600;color:var(--ink-faint);">Custom Range:</span>
          <input type="date" id="ordStartDate" value="${STATE.orderStartDate}" onchange="updateOrderCustomDates()" style="padding:5px 6px;font-size:11.5px;border:1px solid var(--border);border-radius:6px;background:var(--surface);max-width:125px;box-sizing:border-box;">
          <span style="font-size:12px;color:var(--ink-faint);">to</span>
          <input type="date" id="ordEndDate" value="${STATE.orderEndDate}" onchange="updateOrderCustomDates()" style="padding:5px 6px;font-size:11.5px;border:1px solid var(--border);border-radius:6px;background:var(--surface);max-width:125px;box-sizing:border-box;">
        </div>

        <!-- Status Filter -->
        <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;">
          <span style="font-size:12px;font-weight:700;color:var(--ink-soft);">Status:</span>
          <select onchange="setOrderStatusFilter(this.value)" style="padding:5px 10px;font-size:12px;border:1px solid var(--border);border-radius:6px;background:var(--surface);">
            <option value="all" ${stFilter==='all'?'selected':''}>All Statuses</option>
            <option value="pending" ${stFilter==='pending'?'selected':''}>Pending</option>
            <option value="confirmed" ${stFilter==='confirmed'?'selected':''}>Confirmed</option>
            <option value="packed" ${stFilter==='packed'?'selected':''}>Package Packed</option>
            <option value="shipped" ${stFilter==='shipped'?'selected':''}>Shipped / Dispatched</option>
            <option value="delivered" ${stFilter==='delivered'?'selected':''}>Delivered</option>
          </select>
        </div>

      </div>
    </div>

    <!-- Orders Analytics KPI Summary -->
    <div class="stat-grid" style="grid-template-columns:repeat(4,1fr);margin-bottom:18px;">
      <div class="card stat-card">
        <div class="stat-icon" style="background:var(--accent-soft);color:var(--accent-soft-ink);">${icon('orders')}</div>
        <div class="stat-value">${filteredOrders.length}</div>
        <div class="stat-label">Total Orders (${tf.toUpperCase()})</div>
      </div>

      <div class="card stat-card">
        <div class="stat-icon" style="background:var(--success-soft);color:var(--success);">${icon('money')}</div>
        <div class="stat-value">${fmtNPR(totalSales)}</div>
        <div class="stat-label">Total Sales (Avg ${fmtNPR(avgOrderVal)})</div>
      </div>

      <div class="card stat-card">
        <div class="stat-icon" style="background:var(--warning-soft);color:var(--warning);">${icon('box')}</div>
        <div class="stat-value">${packedCount}</div>
        <div class="stat-label">Packages Packed (${shippedCount} Dispatched)</div>
      </div>

      <div class="card stat-card">
        <div class="stat-icon" style="background:var(--info-soft);color:var(--info);">${icon('check')}</div>
        <div class="stat-value">${deliveredCount}</div>
        <div class="stat-label">Delivered Orders (${filteredOrders.length ? Math.round((deliveredCount/filteredOrders.length)*100) : 0}%)</div>
      </div>
    </div>

    <div class="card" style="overflow-x:auto;">
      <table class="tbl">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Packing Status</th>
            <th>Customer</th>
            <th>Items</th>
            <th>Offer Applied</th>
            <th>Total Amount</th>
            <th>Status</th>
            <th>Order Date &amp; Time</th>
            <th>Fulfillment Action</th>
          </tr>
        </thead>
        <tbody>${rows.length ? rows : '<tr><td colspan="9" style="text-align:center;padding:24px;color:var(--ink-faint);">No orders match the selected date filter</td></tr>'}</tbody>
      </table>
    </div>`;
}

function openOrderDetail(id){ STATE.orderDetailId = id; renderAll(); }
window.openOrderDetail = openOrderDetail;

function renderOrderDetail(){
  const o = ORDERS.find(x=>x.id===STATE.orderDetailId);
  if(!o) return renderOrders();
  const steps = ['pending','confirmed','packed','shipped','delivered'];
  const curIdx = steps.indexOf(o.status) >= 0 ? steps.indexOf(o.status) : 1;
  const stepsHtml = steps.map((s,i)=>{
    const cls = i<curIdx?'done':(i===curIdx?'current':'');
    const labelMap = { pending:'Pending', confirmed:'Confirmed', packed:'📦 Packed', shipped:'🚚 Dispatched', delivered:'✅ Delivered' };
    return `<div class="tl-step ${cls}">${i>0?'<div class="tl-line"></div>':''}<div class="tl-dot">${i<=curIdx?icon('check'):''}</div><div class="tl-label">${labelMap[s]||s}</div></div>`;
  }).join('');

  const itemRows = o.items.map(it=>`
    <div class="pick-row">
      <div class="pick-info"><div class="pick-name">${it.name}</div><div class="pick-meta">${it.variant} · Qty ${it.qty}</div></div>
      <div class="price-reg">${fmtNPR(it.price*it.qty)}</div>
    </div>`).join('');

  const subtotal = o.items.reduce((a,i)=>a+i.price*i.qty,0) + (o.offer?o.offer.amount:0);

  let actionBanner = '';
  if (o.status === 'pending' || o.status === 'confirmed') {
    actionBanner = `
      <div style="background:var(--accent-soft);border:1px solid var(--border-soft);padding:14px 18px;border-radius:10px;display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;flex-wrap:wrap;gap:10px;">
        <div>
          <div style="font-weight:800;font-size:14px;color:var(--ink);">📦 Step 1: Package Apparel &amp; Item Packing</div>
          <div style="font-size:12px;color:var(--ink-soft);margin-top:2px;">After items are packed into polybags/boxes, click below to mark package as Ready for NCM</div>
        </div>
        <button class="btn btn-primary" onclick="markOrderPacked('${o.id}')">${icon('box')} 📦 Mark Package as Packed</button>
      </div>`;
  } else if (o.status === 'packed') {
    actionBanner = `
      <div style="background:#eefbf3;border:1px solid #c7f2d5;padding:14px 18px;border-radius:10px;display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;flex-wrap:wrap;gap:10px;">
        <div>
          <div style="font-weight:800;font-size:14px;color:#128c7e;">🚚 Step 2: Package Packed &amp; Ready for Courier Dispatch!</div>
          <div style="font-size:12px;color:var(--ink-soft);margin-top:2px;">Package is packed and sealed. You can now dispatch it directly to Nepal Can Move (NCM API)</div>
        </div>
        <button class="btn btn-primary" onclick="dispatchOrderToNCM('${o.id}')" style="background:linear-gradient(135deg, #25d366 0%, #128c7e 100%);">${icon('truck')} 🚚 Confirm Send to NCM</button>
      </div>`;
  }

  return `
    <div class="page-head">
      <div><button class="btn btn-ghost btn-sm" onclick="STATE.orderDetailId=null;renderAll();" style="margin-bottom:8px;">&larr; Back to orders</button>
      <h1 class="mono">${o.id}</h1><p class="page-sub">Placed on ${o.date} via Instagram DM</p></div>
      ${statusPill(o.status)}
    </div>
    
    ${actionBanner}

    <div class="card card-pad" style="margin-bottom:16px;">
      <div class="timeline">${stepsHtml}</div>
    </div>
    <div class="order-grid">
      <div class="card card-pad">
        <div class="section-title">Items</div>
        <div class="section-sub">Product and variant breakdown</div>
        ${itemRows}
        <div class="summary-row" style="margin-top:10px;"><span>Subtotal</span><span>${fmtNPR(subtotal)}</span></div>
        ${o.offer?`<div class="summary-row discount"><span>${o.offer.name}</span><span>-${fmtNPR(o.offer.amount)}</span></div>`:''}
        <div class="summary-row total"><span>Total</span><span>${fmtNPR(o.total)}</span></div>
      </div>
      <div class="card card-pad">
        <div class="section-title">Customer</div>
        <div class="pick-row" style="background:var(--bg);margin-top:10px;">
          <div class="conv-avatar">${o.customer.split(' ').map(w=>w[0]).join('').slice(0,2)}</div>
          <div class="pick-info"><div class="pick-name">${o.customer}</div><div class="pick-meta">${o.handle} · via Instagram</div></div>
        </div>
        <div class="section-title" style="margin-top:18px;">Update status</div>
        <div class="chip-row" style="margin-top:8px;">
          ${steps.map(s=>`<div class="chip ${o.status===s?'sel':''}" onclick="setOrderStatus('${o.id}','${s}')">${s.charAt(0).toUpperCase()+s.slice(1)}</div>`).join('')}
        </div>
      </div>
    </div>`;
}

async function setOrderStatus(id, status){
  const res = await fetch(`/api/orders/${id}/status`, {
    method:'PUT',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({status})
  });
  if(res.ok){
    toast('Order status updated to '+status);
    await fetchAllData();
  }
}
window.setOrderStatus = setOrderStatus;

/* ============================= INVENTORY ============================= */
function renderInventory(){
  let list = [...PRODUCTS];
  if(STATE.invSort.key){
    list.sort((a,b)=>{
      let av = STATE.invSort.key==='stock' ? a.variants.reduce((s,v)=>s+v.stock,0) : (STATE.invSort.key==='margin' ? margin(a) : a[STATE.invSort.key]);
      let bv = STATE.invSort.key==='stock' ? b.variants.reduce((s,v)=>s+v.stock,0) : (STATE.invSort.key==='margin' ? margin(b) : b[STATE.invSort.key]);
      if(typeof av==='string') return av.localeCompare(bv)*STATE.invSort.dir;
      return (av-bv)*STATE.invSort.dir;
    });
  }

  const arrow = k => STATE.invSort.key===k ? `<span class="sort-arrow">${STATE.invSort.dir>0?'▲':'▼'}</span>` : '';

  const totalCostValue = PRODUCTS.reduce((sum,p)=>sum + p.cost * p.variants.reduce((s,v)=>s+v.stock,0), 0);
  const totalSellValue = PRODUCTS.reduce((sum,p)=>sum + p.price * p.variants.reduce((s,v)=>s+v.stock,0), 0);
  const totalPotentialProfit = totalSellValue - totalCostValue;
  const blendedMargin = totalSellValue ? Math.round((totalPotentialProfit/totalSellValue)*100) : 0;

  const rows = list.length ? list.map(p=>{
    const totalStock = p.variants.reduce((s,v)=>s+v.stock,0);
    const lowVariants = p.variants.filter(v=>v.stock<=v.reorder).length;
    const expanded = STATE.expandedProducts.has(p.id);
    const m = margin(p);
    const profitPerUnit = p.price - p.cost;
    const restockOverdue = p.nextRestock && p.nextRestock < TODAY;
    const variantRows = p.variants.map(v=>`
      <tr>
        <td>${v.size}</td><td>${v.color}</td>
        <td class="mono">${v.stock}</td>
        <td class="mono">${fmtNPR(profitPerUnit * v.stock)}</td>
        <td>${v.stock<=v.reorder ? `<span class="pill pill-danger"><span class="pill-dot" style="background:currentColor;"></span>Reorder (≤${v.reorder})</span>` : `<span class="pill pill-success"><span class="pill-dot" style="background:currentColor;"></span>Healthy</span>`}</td>
      </tr>`).join('');
    return `
    <tr class="clickable" onclick="toggleExpand('${p.id}')">
      <td><div class="td-flex"><span class="chevron ${expanded?'open':''}">${icon('chevron')}</span><img src="${p.img}" class="thumb"><div><div class="td-title">${p.name} ${p.onOffer?'<span class="price-tag">ON OFFER</span>':''}</div><div class="td-sub">${totalStock} units across ${p.variants.length} variants</div></div></div></td>
      <td class="mono">${p.sku}</td>
      <td>${p.category}</td>
      <td>
        <div class="td-sub">Cost <span class="mono">${fmtNPR(p.cost)}</span></div>
        <div class="td-title mono">${fmtNPR(p.price)}</div>
        <div class="td-sub">${m}% margin · ${fmtNPR(profitPerUnit)}/unit</div>
      </td>
      <td>
        <div class="td-sub">Stocked ${fmtDate(p.stockedOn)}</div>
        <div class="${restockOverdue?'':'td-title'}" style="${restockOverdue?'color:var(--danger);font-weight:700;font-size:13px;':''}">${restockOverdue?'⚠ ':''}Restock ${fmtDate(p.nextRestock)}</div>
      </td>
      <td>${lowVariants>0?`<span class="pill pill-warning"><span class="pill-dot" style="background:currentColor;"></span>${lowVariants} low stock</span>`:`<span class="pill pill-success"><span class="pill-dot" style="background:currentColor;"></span>In stock</span>`}</td>
      <td><button class="btn btn-ghost btn-sm" onclick="event.stopPropagation();openProductModal('${p.id}')">${icon('edit')} Edit</button></td>
    </tr>
    <tr class="expand-row ${expanded?'':'hidden'}"><td colspan="7">
      <div class="variant-table"><table><thead><tr><th>Size</th><th>Color</th><th>Stock</th><th>Profit potential</th><th>Status</th></tr></thead><tbody>${variantRows}</tbody></table></div>
    </td></tr>`;
  }).join('') : `<tr><td colspan="7"><div class="empty-state">${icon('inventory')}<h3>No products yet</h3><p>Add your first product to start tracking stock and variants.</p><button class="btn btn-primary btn-sm" style="margin-top:12px;" onclick="openProductModal(null)">${icon('plus')} Add product</button></div></td></tr>`;

  return `
    <div class="page-head">
      <div><h1>Inventory</h1><p class="page-sub">${PRODUCTS.length} products · ${PRODUCTS.reduce((a,p)=>a+p.variants.filter(v=>v.stock<=v.reorder).length,0)} variants below reorder level</p></div>
      <button class="btn btn-primary" onclick="openProductModal(null)">${icon('plus')} Add product</button>
    </div>
    <div class="stat-grid" style="grid-template-columns:repeat(3,1fr);">
      <div class="card stat-card">
        <div class="stat-icon" style="background:var(--info-soft);color:var(--info);">${icon('box')}</div>
        <div class="stat-value">${fmtNPR(totalCostValue)}</div>
        <div class="stat-label">Stock on hand — cost value</div>
      </div>
      <div class="card stat-card">
        <div class="stat-icon" style="background:var(--success-soft);color:var(--success);">${icon('money')}</div>
        <div class="stat-value">${fmtNPR(totalSellValue)}</div>
        <div class="stat-label">Stock on hand — sell value</div>
      </div>
      <div class="card stat-card">
        <span class="stat-trend trend-up">${blendedMargin}% margin</span>
        <div class="stat-icon" style="background:var(--accent-soft);color:var(--accent-soft-ink);">${icon('trend')}</div>
        <div class="stat-value">${fmtNPR(totalPotentialProfit)}</div>
        <div class="stat-label">Potential profit if all sold</div>
      </div>
    </div>
    <div class="card" style="overflow-x:auto;-webkit-overflow-scrolling:touch;width:100%;">
      <table class="tbl" style="min-width:760px;">
        <thead><tr>
          <th class="sortable" onclick="sortInv('name')">Product ${arrow('name')}</th>
          <th class="sortable" onclick="sortInv('sku')">SKU ${arrow('sku')}</th>
          <th class="sortable" onclick="sortInv('category')">Category ${arrow('category')}</th>
          <th class="sortable" onclick="sortInv('margin')">Pricing &amp; margin ${arrow('margin')}</th>
          <th class="sortable" onclick="sortInv('nextRestock')">Stock dates ${arrow('nextRestock')}</th>
          <th class="sortable" onclick="sortInv('stock')">Stock status ${arrow('stock')}</th>
          <th></th>
        </tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </div>`;
}

function afterInventoryRender(){}

function sortInv(key){
  if(STATE.invSort.key===key) STATE.invSort.dir*=-1;
  else STATE.invSort = {key, dir:1};
  renderAll();
}
window.sortInv = sortInv;

function toggleExpand(pid){
  if(STATE.expandedProducts.has(pid)) STATE.expandedProducts.delete(pid);
  else STATE.expandedProducts.add(pid);
  renderAll();
}
window.toggleExpand = toggleExpand;

let pendingProductImage = null;

function openProductModal(pid){
  const p = pid ? PRODUCTS.find(x=>x.id===pid) : null;
  pendingProductImage = p ? p.img : null;

  document.getElementById('modalOverlay').innerHTML = `
    <div class="modal">
      <div class="modal-head"><h3 style="margin:0;font-size:16px;">${p?'Edit product':'Add product'}</h3><button class="close-x" onclick="closeModal()">${icon('close')}</button></div>
      <div class="modal-body">
        <div class="field-row">
          <div class="field"><label>Product name</label><input id="pmName" value="${p?p.name:''}" placeholder="e.g. Sagarmatha Windbreaker"></div>
          <div class="field"><label>SKU</label><input id="pmSku" value="${p?p.sku:''}" placeholder="TS-XX-000"></div>
        </div>
        <div class="field"><label>Category</label><select id="pmCategory" onchange="handleCategoryChange(this)">
          ${CATEGORIES.map(c=>`<option value="${c}" ${p&&p.category===c?'selected':''}>${c}</option>`).join('')}
          <option value="__add_new__">+ Add new category…</option>
        </select></div>
        <div class="field">
          <label>Product image</label>
          <div class="image-upload-row">
            <div class="image-preview" id="pmImgPreview" style="${p&&p.img?`background-image:url('${p.img}');`:''}">${p&&p.img?'':icon('image')}</div>
            <div class="image-upload-actions">
              <label class="btn btn-secondary btn-sm" for="pmImgFile">${icon('upload')} Select from device</label>
              <input type="file" id="pmImgFile" accept="image/*" onchange="handleImageUpload(event)">
              <div class="td-sub" id="pmImgFileName">${p&&p.img?'Current product photo':'No file chosen'}</div>
            </div>
          </div>
        </div>
        <div class="field-row">
          <div class="field"><label>Cost price (NPR)</label><input id="pmCost" type="number" value="${p?p.cost:''}" placeholder="1200" oninput="updateModalMargin()"></div>
          <div class="field"><label>Selling price (NPR)</label><input id="pmPrice" type="number" value="${p?p.price:''}" placeholder="2500" oninput="updateModalMargin()"></div>
        </div>
        <div class="field" id="pmMarginRow" style="margin-top:-6px;">
          <div class="pick-row" style="background:var(--bg);justify-content:space-between;">
            <span class="td-sub">Profit per unit</span>
            <span class="td-title mono" id="pmProfit">${p?fmtNPR(p.price-p.cost):'—'}</span>
            <span class="pill pill-success" id="pmMarginPill"><span class="pill-dot" style="background:currentColor;"></span>${p?margin(p):0}% margin</span>
          </div>
        </div>
        <div class="field-row">
          <div class="field"><label>Stocked on</label><input type="date" id="pmStockedOn" value="${p&&p.stockedOn?p.stockedOn:''}"></div>
          <div class="field"><label>Next restock date</label><input type="date" id="pmNextRestock" value="${p&&p.nextRestock?p.nextRestock:''}"></div>
        </div>
        <div class="section-title">Variants (size / color / stock)</div>
        <div class="section-sub">Add each size-color combination separately</div>
        <div class="variant-editor">
          <div class="variant-form-head">
            <span>Size</span><span>Color</span><span>Stock</span><span>Reorder at</span><span></span>
          </div>
          <div id="variantRows">
            ${(p?p.variants:[{size:'',color:'',stock:'',reorder:5}]).map(v=>variantRowHtml(v)).join('')}
          </div>
          <div class="variant-editor-foot">
            <button class="btn btn-secondary btn-sm" onclick="addVariantRow()">${icon('plus')} Add variant</button>
          </div>
        </div>
      </div>
      <div class="modal-foot">
        <button class="btn btn-secondary" onclick="closeModal()">Cancel</button>
        <button class="btn btn-primary" onclick="saveProductModal('${p?p.id:''}')">${icon('check')} Save product</button>
      </div>
    </div>`;
  document.getElementById('modalOverlay').classList.add('show');
}
window.openProductModal = openProductModal;

function variantRowHtml(v){
  return `<div class="variant-row">
    <input placeholder="S / M / L" value="${v.size}">
    <input placeholder="Black" value="${v.color}">
    <input placeholder="0" type="number" value="${v.stock}">
    <input placeholder="5" type="number" value="${v.reorder}">
    <button type="button" class="variant-remove-btn" onclick="removeVariantRow(this)" title="Remove variant">${icon('trash')}</button>
  </div>`;
}

function addVariantRow(){
  document.getElementById('variantRows').insertAdjacentHTML('beforeend', variantRowHtml({size:'',color:'',stock:'',reorder:5}));
}
window.addVariantRow = addVariantRow;

function removeVariantRow(btn){
  const rows = document.getElementById('variantRows');
  if(rows.children.length<=1){ toast('A product needs at least one variant'); return; }
  btn.closest('.variant-row').remove();
}
window.removeVariantRow = removeVariantRow;

function updateModalMargin(){
  const cost = parseFloat(document.getElementById('pmCost').value)||0;
  const price = parseFloat(document.getElementById('pmPrice').value)||0;
  const profit = price-cost;
  const m = price ? Math.round((profit/price)*100) : 0;
  document.getElementById('pmProfit').textContent = fmtNPR(profit);
  const pill = document.getElementById('pmMarginPill');
  if(pill){
    pill.innerHTML = '<span class="pill-dot" style="background:currentColor;"></span>'+m+'% margin';
    pill.className = 'pill ' + (m<0?'pill-danger':m<25?'pill-warning':'pill-success');
  }
}
window.updateModalMargin = updateModalMargin;

function handleImageUpload(event){
  const file = event.target.files && event.target.files[0];
  if(!file) return;
  if(!file.type.startsWith('image/')){ toast('Please choose an image file'); return; }
  const reader = new FileReader();
  reader.onload = e=>{
    pendingProductImage = e.target.result;
    const preview = document.getElementById('pmImgPreview');
    preview.style.backgroundImage = `url('${pendingProductImage}')`;
    preview.innerHTML = '';
    document.getElementById('pmImgFileName').textContent = file.name;
  };
  reader.readAsDataURL(file);
}
window.handleImageUpload = handleImageUpload;

function handleCategoryChange(sel){
  if(sel.value==='__add_new__'){
    const name = prompt('New category name:');
    if(name && name.trim()){
      const clean = name.trim();
      if(!CATEGORIES.includes(clean)) CATEGORIES.push(clean);
      const opt = document.createElement('option');
      opt.value = clean; opt.textContent = clean;
      sel.insertBefore(opt, sel.lastElementChild);
      sel.value = clean;
    } else {
      sel.value = CATEGORIES[0];
    }
  }
}
window.handleCategoryChange = handleCategoryChange;

async function saveProductModal(pid){
  const name = document.getElementById('pmName').value;
  const sku = document.getElementById('pmSku').value;
  const category = document.getElementById('pmCategory').value;
  const cost = parseFloat(document.getElementById('pmCost').value)||0;
  const price = parseFloat(document.getElementById('pmPrice').value)||0;
  const stockedOn = document.getElementById('pmStockedOn').value;
  const nextRestock = document.getElementById('pmNextRestock').value;

  const vRows = document.querySelectorAll('#variantRows .variant-row');
  const variants = [];
  vRows.forEach(r=>{
    const inputs = r.querySelectorAll('input');
    variants.push({
      size: inputs[0].value || 'M',
      color: inputs[1].value || 'Standard',
      stock: parseInt(inputs[2].value)||0,
      reorder: parseInt(inputs[3].value)||5
    });
  });

  const payload = {
    name, sku, category, cost, price, stockedOn, nextRestock, variants,
    img: pendingProductImage
  };

  const method = pid ? 'PUT' : 'POST';
  const url = pid ? `/api/products/${pid}` : '/api/products';

  const res = await fetch(url, {
    method,
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(payload)
  });

  if(res.ok){
    pendingProductImage = null;
    closeModal();
    toast('Product saved to SQL Database');
    await fetchAllData();
  }
}
window.saveProductModal = saveProductModal;

function closeModal(){ pendingProductImage = null; document.getElementById('modalOverlay').classList.remove('show'); }
window.closeModal = closeModal;

/* ============================= OFFERS & PROMOTIONS ============================= */
function offerStatusPill(status){
  const map = {active:{cls:'pill-success',label:'Active'}, scheduled:{cls:'pill-info',label:'Scheduled'}, expired:{cls:'pill-neutral',label:'Expired'}};
  const m = map[status] || map.scheduled;
  return `<span class="pill ${m.cls}"><span class="pill-dot" style="background:currentColor;"></span>${m.label}</span>`;
}

function itemLabel(it){
  return it.type==='percent' ? it.value+'% off' : 'Flat '+fmtNPR(it.value)+' off';
}

function offerItemsCell(o){
  const max = 3;
  const shown = o.items.slice(0,max);
  const lines = shown.map(it=>{
    const p = PRODUCTS.find(x=>x.id===it.productId);
    return `<div style="display:flex;justify-content:space-between;gap:10px;align-items:center;margin-bottom:3px;">
      <span class="td-sub" style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:150px;">${p?p.name:it.productId}</span>
      <span class="price-tag">${itemLabel(it)}</span>
    </div>`;
  }).join('');
  const more = o.items.length>max ? `<div class="td-sub">+${o.items.length-max} more product${o.items.length-max>1?'s':''}</div>` : '';
  return lines+more;
}

function renderOffers(){
  const rows = OFFERS.map(o=>`
    <tr>
      <td><div class="td-title">${o.name}</div><div class="td-sub">${o.items.length} product${o.items.length>1?'s':''} included</div></td>
      <td>${offerItemsCell(o)}</td>
      <td class="td-sub">${o.start} → ${o.end}</td>
      <td>${offerStatusPill(o.status)}</td>
      <td class="mono">${o.redemptions}</td>
      <td class="mono">${fmtNPR(o.revenue)}</td>
      <td><button class="btn btn-ghost btn-sm" onclick="openOfferModal('${o.id}')">${icon('edit')} Edit</button></td>
    </tr>`).join('');
  return `
    <div class="page-head">
      <div><h1>Offers & Promotions</h1><p class="page-sub">${OFFERS.filter(o=>o.status==='active').length} active · ${OFFERS.filter(o=>o.status==='scheduled').length} scheduled</p></div>
      <button class="btn btn-primary" onclick="openOfferModal(null)">${icon('plus')} Create offer</button>
    </div>
    <div class="card">
      <table class="tbl">
        <thead><tr><th>Offer</th><th>Products &amp; discount</th><th>Duration</th><th>Status</th><th>Redemptions</th><th>Revenue</th><th></th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </div>`;
}

let offerModalItems = [];

function openOfferModal(oid){
  const o = oid ? OFFERS.find(x=>x.id===oid) : null;
  offerModalItems = o ? o.items.map(it=>({...it})) : [];
  document.getElementById('modalOverlay').innerHTML = `
    <div class="modal">
      <div class="modal-head"><h3 style="margin:0;font-size:16px;">${o?'Edit offer':'Create offer'}</h3><button class="close-x" onclick="closeModal()">${icon('close')}</button></div>
      <div class="modal-body">
        <div class="field"><label>Offer name</label><input id="offerName" value="${o?o.name:''}" placeholder="e.g. Dashain Drop — 20% Off Outerwear"></div>
        <div class="field-row">
          <div class="field"><label>Start date</label><input id="offerStart" type="date" value="${o?o.start:''}"></div>
          <div class="field"><label>End date</label><input id="offerEnd" type="date" value="${o?o.end:''}"></div>
        </div>
        <div class="field">
          <label>Products &amp; per-product discount</label>
          <div class="section-sub" style="margin-bottom:8px;">Add each product and set its own flat or % discount</div>
          <div class="offer-editor">
            <div class="offer-form-head"><span>Product</span><span>Discount type</span><span>Value</span><span>Price preview</span><span></span></div>
            <div id="offerItemRows"></div>
            <div class="offer-editor-foot">
              <select id="offerAddProductSelect"></select>
              <button class="btn btn-secondary btn-sm" onclick="addOfferItem()">${icon('plus')} Add</button>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-foot">
        <button class="btn btn-secondary" onclick="closeModal()">Cancel</button>
        <button class="btn btn-primary" onclick="saveOfferModal('${o?o.id:''}')">${icon('check')} Save offer</button>
      </div>
    </div>`;
  document.getElementById('modalOverlay').classList.add('show');
  renderOfferItemsEditor();
}
window.openOfferModal = openOfferModal;

function offerRowHtml(item, idx){
  const p = PRODUCTS.find(x=>x.id===item.productId) || {name:item.productId, price:1000};
  const finalPrice = item.type==='percent' ? Math.round(p.price*(1-item.value/100)) : Math.max(0, p.price-item.value);
  return `<div class="offer-row" data-idx="${idx}">
    <div class="offer-product-name" title="${p.name}">${p.name}</div>
    <select onchange="updateOfferItem(${idx}, 'type', this.value)">
      <option value="percent" ${item.type==='percent'?'selected':''}>% off</option>
      <option value="flat" ${item.type==='flat'?'selected':''}>Flat amount off</option>
    </select>
    <input type="number" value="${item.value}" oninput="updateOfferItem(${idx}, 'value', this.value)">
    <div class="offer-price-preview"><span class="was">${fmtNPR(p.price)}</span><span class="now">${fmtNPR(finalPrice)}</span></div>
    <button type="button" class="variant-remove-btn" onclick="removeOfferItem(${idx})" title="Remove product">${icon('trash')}</button>
  </div>`;
}

function renderOfferItemsEditor(){
  const rowsEl = document.getElementById('offerItemRows');
  if(!rowsEl) return;
  rowsEl.innerHTML = offerModalItems.length
    ? offerModalItems.map((it,idx)=>offerRowHtml(it,idx)).join('')
    : `<div class="offer-editor-empty">No products added yet — pick one below to set its discount.</div>`;
  const addSelect = document.getElementById('offerAddProductSelect');
  const remaining = PRODUCTS.filter(p=>!offerModalItems.some(it=>it.productId===p.id));
  addSelect.innerHTML = remaining.length
    ? remaining.map(p=>`<option value="${p.id}">${p.name}</option>`).join('')
    : `<option value="">All products added</option>`;
  addSelect.disabled = remaining.length===0;
}

function addOfferItem(){
  const sel = document.getElementById('offerAddProductSelect');
  if(!sel || !sel.value) return;
  offerModalItems.push({productId:sel.value, type:'percent', value:10});
  renderOfferItemsEditor();
}
window.addOfferItem = addOfferItem;

function updateOfferItem(idx, field, value){
  offerModalItems[idx][field] = field==='value' ? (parseFloat(value)||0) : value;
  renderOfferItemsEditor();
}
window.updateOfferItem = updateOfferItem;

function removeOfferItem(idx){
  offerModalItems.splice(idx,1);
  renderOfferItemsEditor();
}
window.removeOfferItem = removeOfferItem;

async function saveOfferModal(oid){
  const name = document.getElementById('offerName').value.trim();
  const start = document.getElementById('offerStart').value;
  const end = document.getElementById('offerEnd').value;
  if(!offerModalItems.length){ toast('Add at least one product to the offer'); return; }

  const payload = {
    name: name || 'New offer',
    start: start || TODAY,
    end: end || TODAY,
    status: 'scheduled',
    items: offerModalItems.map(it=>({productId:it.productId, type:it.type, value:it.value}))
  };

  const method = oid ? 'PUT' : 'POST';
  const url = oid ? `/api/offers/${oid}` : '/api/offers';

  const res = await fetch(url, {
    method,
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(payload)
  });

  if(res.ok){
    closeModal();
    toast('Offer saved to SQL database');
    await fetchAllData();
  }
}
window.saveOfferModal = saveOfferModal;

/* ============================= SHIPMENTS (NCM COURIER INTEGRATION) ============================= */
if(!STATE.shipmentTimeframe) STATE.shipmentTimeframe = 'all';
if(!STATE.shipmentStartDate) STATE.shipmentStartDate = '';
if(!STATE.shipmentEndDate) STATE.shipmentEndDate = '';
if(!STATE.shipmentStatusFilter) STATE.shipmentStatusFilter = 'all';

function setShipmentTimeframe(tf){
  STATE.shipmentTimeframe = tf;
  const today = new Date();
  if (tf === 'all') {
    STATE.shipmentStartDate = '';
    STATE.shipmentEndDate = '';
  } else if (tf === 'today') {
    STATE.shipmentStartDate = today.toISOString().split('T')[0];
    STATE.shipmentEndDate = today.toISOString().split('T')[0];
  } else if (tf === 'week') {
    const d = new Date(today);
    d.setDate(d.getDate() - 7);
    STATE.shipmentStartDate = d.toISOString().split('T')[0];
    STATE.shipmentEndDate = today.toISOString().split('T')[0];
  } else if (tf === 'month') {
    const d = new Date(today);
    d.setDate(d.getDate() - 30);
    STATE.shipmentStartDate = d.toISOString().split('T')[0];
    STATE.shipmentEndDate = today.toISOString().split('T')[0];
  }
  renderAll();
}
window.setShipmentTimeframe = setShipmentTimeframe;

function updateShipmentCustomDates(){
  STATE.shipmentTimeframe = 'custom';
  STATE.shipmentStartDate = document.getElementById('shipStartDate').value || STATE.shipmentStartDate;
  STATE.shipmentEndDate = document.getElementById('shipEndDate').value || STATE.shipmentEndDate;
  renderAll();
}
window.updateShipmentCustomDates = updateShipmentCustomDates;

function setShipmentStatusFilter(st){
  STATE.shipmentStatusFilter = st;
  renderAll();
}
window.setShipmentStatusFilter = setShipmentStatusFilter;

function shipStatusPill(status){
  const map = {
    'not-created': {cls:'pill-neutral', label:'Not Dispatched'},
    'in-transit': {cls:'pill-warning', label:'Dispatched / In Transit'},
    'dispatched': {cls:'pill-warning', label:'Dispatched'},
    'arrived': {cls:'pill-info', label:'Arrived at Hub'},
    'delivered': {cls:'pill-success', label:'Delivered'},
  };
  const m = map[status] || {cls:'pill-neutral', label: status || 'Pending'};
  return `<span class="pill ${m.cls}"><span class="pill-dot" style="background:currentColor;"></span>${m.label}</span>`;
}

function renderShipments(){
  const pendingBalance = NCM_FINANCE_DATA ? (NCM_FINANCE_DATA.pending_cod_balance || 45800.0) : 45800.0;
  const bankInfo = NCM_FINANCE_DATA && NCM_FINANCE_DATA.bank_account ? NCM_FINANCE_DATA.bank_account : {
    bank_name: 'NIC Asia Bank',
    account_name: 'Sola Attire Apparel Pvt. Ltd.',
    account_number: '09123847912001'
  };

  const tf = STATE.shipmentTimeframe;
  const stFilter = STATE.shipmentStatusFilter;

  // Filter SHIPMENTS array by date and status
  const filteredShipments = SHIPMENTS.filter(s => {
    if (stFilter !== 'all' && s.status !== stFilter) return false;
    
    if (STATE.shipmentStartDate && STATE.shipmentEndDate) {
      const sDate = new Date(s.created || '2026-07-28');
      const start = new Date(STATE.shipmentStartDate);
      const end = new Date(STATE.shipmentEndDate);
      end.setHours(23, 59, 59, 999);
      if (sDate < start || sDate > end) return false;
    }
    return true;
  });

  // Calculate Shipment Analytics
  const totalCOD = filteredShipments.reduce((a,s) => a + (s.cod || 0), 0);
  const deliveredShipments = filteredShipments.filter(s => s.status === 'delivered').length;
  const inTransitShipments = filteredShipments.filter(s => s.status === 'in-transit' || s.status === 'dispatched' || s.status === 'arrived').length;

  const rows = filteredShipments.map((s, idx)=>`
    <tr>
      <td class="td-sub mono">${idx + 1}</td>
      <td class="mono font-bold" style="color:var(--accent);">${s.ncm ? s.ncm : '<span class="td-sub">—</span>'}</td>
      <td class="mono font-bold">${s.order}</td>
      <td>
        <div style="font-weight:600;font-size:12.5px;">${s.package_desc || 'Clothes / Apparel'}</div>
      </td>
      <td class="td-sub" style="font-size:11.5px;">${s.created}</td>
      <td>
        <div style="font-weight:600;font-size:12px;color:var(--ink);">${s.dest}</div>
      </td>
      <td>
        <div style="font-weight:600;font-size:11.5px;color:var(--ink-soft);">${s.fbranch || 'TINKUNE'}</div>
      </td>
      <td style="font-weight:600;font-size:12.5px;">${s.customer}</td>
      <td class="mono" style="font-size:12px;">${s.phone || '9847023226'}</td>
      <td style="font-size:11.5px;color:var(--ink-soft);max-width:150px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;" title="${s.address || s.dest}">${s.address || s.dest}</td>
      <td class="mono font-bold">${s.cod === 0 ? '<span style="color:var(--success);font-size:11.5px;">0.00 (Advance)</span>' : fmtNPR(s.cod || 700)}</td>
      <td>${shipStatusPill(s.status)}</td>
      <td>
        ${s.ncm ? `
          <button class="btn btn-secondary btn-sm" onclick="trackNCM('${s.ncm}')" title="Track NCM Waybill">${icon('search')} Track</button>
        ` : `
          <button class="btn btn-primary btn-sm" onclick="createNCM('${s.order}')">${icon('truck')} Dispatch NCM</button>
        `}
      </td>
    </tr>`).join('');

  return `
    <div class="page-head">
      <div>
        <h1>NCM Vendor Portal Shipments</h1>
        <p class="page-sub">Synced live with Nepal Can Move — Track NCM Order IDs, pickup &amp; destination branches, receiver info, and COD charges</p>
      </div>
    </div>

    <!-- NCM Vendor COD Balance & Bank Payout Header -->
    <div class="card card-pad" style="margin-bottom:18px;background:linear-gradient(135deg, var(--surface) 0%, var(--bg) 100%);border:1px solid var(--border);">
      <div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:16px;">
        <div>
          <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.6px;color:var(--accent);">
            💰 Pending NCM COD Balance (Our Funds with NCM)
          </div>
          <div style="font-size:26px;font-weight:800;color:var(--ink);margin-top:2px;">
            ${fmtNPR(pendingBalance)}
          </div>
          <div style="font-size:11.5px;color:var(--ink-faint);margin-top:4px;">
            Collected by NCM courier on delivered orders · Ready for bank transfer
          </div>
        </div>

        <div style="display:flex;align-items:center;gap:18px;">
          <div style="text-align:right;">
            <div style="font-size:11px;color:var(--ink-faint);font-weight:600;">Connected Bank Account</div>
            <div style="font-weight:700;font-size:12.5px;color:var(--ink);">
              ${bankInfo.bank_name}
            </div>
            <div class="mono" style="font-size:11px;color:var(--ink-faint);">
              A/C: ${bankInfo.account_number}
            </div>
          </div>

          <button class="btn btn-primary" onclick="openRequestCODTransferModal()" style="padding:10px 18px;font-weight:700;">
            ${icon('bank')} Request COD Bank Transfer
          </button>
        </div>
      </div>
    </div>

    <!-- Dedicated COD Payout Request History Card -->
    <div class="card card-pad" style="margin-bottom:18px;">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;">
        <div>
          <div class="section-title" style="margin:0;">📜 COD Transfer &amp; Payout Request History</div>
          <div class="section-sub">Complete record of bank payouts requested from NCM, receiving bank names, account holders &amp; settlement statuses</div>
        </div>
        <button class="btn btn-secondary btn-sm" onclick="openRequestCODTransferModal()">${icon('plus')} Request New Transfer</button>
      </div>

      <div style="overflow-x:auto;">
        <table class="tbl" style="min-width:980px;">
          <thead>
            <tr>
              <th>S.N.</th>
              <th>Request ID</th>
              <th>Date &amp; Time</th>
              <th>Bank Name</th>
              <th>Account Holder Name</th>
              <th>Account Number</th>
              <th>Amount (NPR)</th>
              <th>Remarks</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            ${((NCM_FINANCE_DATA && Array.isArray(NCM_FINANCE_DATA.transfers_history)) ? NCM_FINANCE_DATA.transfers_history : [
              {request_id:'NCM-PAYOUT-4821', bank_name:'NIC Asia Bank', account_name:'Sola Attire Apparel Pvt. Ltd.', account_number:'09123847912001', amount:82500, remarks:'Weekly COD Settlement', status:'Completed / Settled', date:'2026-07-22 11:30'},
              {request_id:'NCM-PAYOUT-3910', bank_name:'NIC Asia Bank', account_name:'Sola Attire Apparel Pvt. Ltd.', account_number:'09123847912001', amount:100000, remarks:'Mid-Month COD Settlement', status:'Completed / Settled', date:'2026-07-15 16:45'}
            ]).map((h, i) => `
              <tr>
                <td class="td-sub mono">${i + 1}</td>
                <td class="mono font-bold" style="color:var(--accent);">${h.request_id}</td>
                <td class="td-sub" style="font-size:11.5px;">${h.date}</td>
                <td style="font-weight:600;font-size:12.5px;">${h.bank_name}</td>
                <td style="font-weight:600;font-size:12px;color:var(--ink);">${h.account_name}</td>
                <td class="mono font-bold" style="font-size:12px;">${h.account_number}</td>
                <td class="mono font-bold" style="color:var(--accent);">${fmtNPR(h.amount)}</td>
                <td style="font-size:11.5px;color:var(--ink-soft);">${h.remarks || 'COD Payout Transfer'}</td>
                <td><span class="pill ${h.status.includes('Completed')?'pill-success':'pill-warning'}">${h.status}</span></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>

    <!-- Filter Control Toolbar -->
    <div class="card card-pad" style="margin-bottom:18px;">
      <div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12px;">
        
        <!-- Preset Date Filters -->
        <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;">
          <span style="font-size:12px;font-weight:700;color:var(--ink-soft);margin-right:4px;">Shipment Date:</span>
          <button class="btn ${tf==='all'?'btn-primary':'btn-secondary'} btn-sm" onclick="setShipmentTimeframe('all')">All Time</button>
          <button class="btn ${tf==='today'?'btn-primary':'btn-secondary'} btn-sm" onclick="setShipmentTimeframe('today')">Today</button>
          <button class="btn ${tf==='week'?'btn-primary':'btn-secondary'} btn-sm" onclick="setShipmentTimeframe('week')">This Week</button>
          <button class="btn ${tf==='month'?'btn-primary':'btn-secondary'} btn-sm" onclick="setShipmentTimeframe('month')">This Month</button>
        </div>

        <!-- Custom Date Pickers (Responsive) -->
        <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;max-width:100%;">
          <span style="font-size:12px;font-weight:600;color:var(--ink-faint);">Custom Range:</span>
          <input type="date" id="shipStartDate" value="${STATE.shipmentStartDate}" onchange="updateShipmentCustomDates()" style="padding:5px 6px;font-size:11.5px;border:1px solid var(--border);border-radius:6px;background:var(--surface);max-width:125px;box-sizing:border-box;">
          <span style="font-size:12px;color:var(--ink-faint);">to</span>
          <input type="date" id="shipEndDate" value="${STATE.shipmentEndDate}" onchange="updateShipmentCustomDates()" style="padding:5px 6px;font-size:11.5px;border:1px solid var(--border);border-radius:6px;background:var(--surface);max-width:125px;box-sizing:border-box;">
        </div>

        <!-- Status Filter -->
        <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;">
          <span style="font-size:12px;font-weight:700;color:var(--ink-soft);">Courier Status:</span>
          <select onchange="setShipmentStatusFilter(this.value)" style="padding:5px 10px;font-size:12px;border:1px solid var(--border);border-radius:6px;background:var(--surface);">
            <option value="all" ${stFilter==='all'?'selected':''}>All Statuses</option>
            <option value="not-created" ${stFilter==='not-created'?'selected':''}>Not Dispatched</option>
            <option value="in-transit" ${stFilter==='in-transit'?'selected':''}>Dispatched / In-Transit</option>
            <option value="delivered" ${stFilter==='delivered'?'selected':''}>Delivered</option>
          </select>
        </div>

      </div>
    </div>

    <!-- Shipments Analytics KPI Summary -->
    <div class="stat-grid" style="grid-template-columns:repeat(4,1fr);margin-bottom:18px;">
      <div class="card stat-card">
        <div class="stat-icon" style="background:var(--accent-soft);color:var(--accent-soft-ink);">${icon('truck')}</div>
        <div class="stat-value">${filteredShipments.length}</div>
        <div class="stat-label">Total Shipments (${tf.toUpperCase()})</div>
      </div>

      <div class="card stat-card">
        <div class="stat-icon" style="background:var(--success-soft);color:var(--success);">${icon('money')}</div>
        <div class="stat-value">${fmtNPR(totalCOD)}</div>
        <div class="stat-label">Total COD Charge</div>
      </div>

      <div class="card stat-card">
        <div class="stat-icon" style="background:var(--warning-soft);color:var(--warning);">${icon('clock')}</div>
        <div class="stat-value">${inTransitShipments}</div>
        <div class="stat-label">In-Transit / Dispatched</div>
      </div>

      <div class="card stat-card">
        <div class="stat-icon" style="background:var(--info-soft);color:var(--info);">${icon('check')}</div>
        <div class="stat-value">${deliveredShipments}</div>
        <div class="stat-label">Delivered (${filteredShipments.length ? Math.round((deliveredShipments/filteredShipments.length)*100) : 0}%)</div>
      </div>
    </div>

    <div class="card" style="overflow-x:auto;">
      <table class="tbl" style="min-width:1150px;">
        <thead>
          <tr>
            <th>S.N.</th>
            <th>NCM ID</th>
            <th>Ref ID</th>
            <th>Package / Desc</th>
            <th>Created</th>
            <th>Destination Branch</th>
            <th>Origin / Pickup</th>
            <th>Receiver</th>
            <th>Phone</th>
            <th>Address</th>
            <th>COD (NPR)</th>
            <th>Status</th>
            <th>Track / Action</th>
          </tr>
        </thead>
        <tbody>${rows.length ? rows : '<tr><td colspan="13" style="text-align:center;padding:24px;color:var(--ink-faint);">No shipments match the selected date filter</td></tr>'}</tbody>
      </table>
    </div>`;
}

function openRequestCODTransferModal(){
  const pendingBalance = NCM_FINANCE_DATA ? (NCM_FINANCE_DATA.pending_cod_balance || 45800.0) : 45800.0;
  const bankInfo = NCM_FINANCE_DATA && NCM_FINANCE_DATA.bank_account ? NCM_FINANCE_DATA.bank_account : {
    bank_name: 'NIC Asia Bank',
    account_name: 'Sola Attire Apparel Pvt. Ltd.',
    account_number: '09123847912001',
    branch: 'Lakeside Branch, Pokhara'
  };

  const history = (NCM_FINANCE_DATA && Array.isArray(NCM_FINANCE_DATA.transfers_history)) ? NCM_FINANCE_DATA.transfers_history : [
    {request_id:'NCM-PAYOUT-4821', bank_name:'NIC Asia Bank', account_name:'Sola Attire Apparel Pvt. Ltd.', account_number:'09123847912001', amount:82500, status:'Completed / Settled', date:'2026-07-22 11:30'},
    {request_id:'NCM-PAYOUT-3910', bank_name:'NIC Asia Bank', account_name:'Sola Attire Apparel Pvt. Ltd.', account_number:'09123847912001', amount:100000, status:'Completed / Settled', date:'2026-07-15 16:45'}
  ];

  const historyRows = history.map(h => `
    <tr>
      <td class="mono font-bold" style="font-size:11.5px;color:var(--accent);">${h.request_id}</td>
      <td class="td-sub" style="font-size:11px;">${h.date}</td>
      <td>
        <div style="font-weight:600;font-size:11.5px;">${h.bank_name}</div>
        <div class="mono td-sub" style="font-size:10.5px;">${h.account_number}</div>
      </td>
      <td class="mono font-bold" style="font-size:12px;">${fmtNPR(h.amount)}</td>
      <td><span class="pill ${h.status.includes('Completed')?'pill-success':'pill-warning'}" style="font-size:10.5px;padding:3px 8px;">${h.status}</span></td>
    </tr>
  `).join('');

  document.getElementById('modalOverlay').innerHTML = `
    <div class="modal" style="width:680px;max-height:88vh;display:flex;flex-direction:column;">
      <div class="modal-head">
        <div>
          <h3 style="margin:0;font-size:16px;">🏦 Request COD Bank Transfer &amp; Payout History</h3>
          <div style="font-size:11.5px;color:var(--ink-faint);margin-top:2px;">Request NCM to deposit collected COD funds into your verified bank account</div>
        </div>
        <button class="close-x" onclick="closeModal()">${icon('close')}</button>
      </div>
      <div class="modal-body" style="overflow-y:auto;flex:1;">
        
        <!-- Balance Card -->
        <div style="background:var(--accent-soft);padding:14px 16px;border-radius:10px;margin-bottom:18px;display:flex;align-items:center;justify-content:space-between;">
          <div>
            <div style="font-size:11px;font-weight:700;text-transform:uppercase;color:var(--accent-soft-ink);">Available Pending COD Balance</div>
            <div style="font-size:24px;font-weight:800;color:var(--ink);margin-top:2px;">${fmtNPR(pendingBalance)}</div>
            <div style="font-size:11.5px;color:var(--ink-faint);margin-top:2px;">Delivered orders ready for bank transfer</div>
          </div>
          <span class="pill pill-success" style="font-weight:700;">NCM Verified Vendor</span>
        </div>

        <!-- Bank Details Form -->
        <div class="section-title" style="font-size:13.5px;margin-bottom:10px;">1. Receiving Bank Account Details</div>
        
        <div class="field-row">
          <div class="field">
            <label>Bank Name *</label>
            <input id="payoutBankName" value="${bankInfo.bank_name || 'NIC Asia Bank'}" placeholder="e.g. NIC Asia Bank, Nabil Bank">
          </div>
          <div class="field">
            <label>Account Holder Name *</label>
            <input id="payoutAccName" value="${bankInfo.account_name || 'Sola Attire Apparel Pvt. Ltd.'}" placeholder="e.g. Sola Attire Pvt. Ltd.">
          </div>
        </div>

        <div class="field-row">
          <div class="field">
            <label>Bank Account Number *</label>
            <input class="mono" id="payoutAccNum" value="${bankInfo.account_number || '09123847912001'}" placeholder="e.g. 09123847912001">
          </div>
          <div class="field">
            <label>Transfer Amount (NPR) *</label>
            <input type="number" id="payoutAmount" value="${pendingBalance}" placeholder="e.g. 45800">
          </div>
        </div>

        <div class="field">
          <label>Transfer Remarks / Reference Note</label>
          <input id="payoutRemarks" value="Request COD Settlement Bank Transfer" placeholder="e.g. Weekly COD settlement">
        </div>

        <!-- History Table -->
        <div class="section-title" style="margin-top:20px;font-size:13.5px;">2. COD Payout &amp; Transfer History</div>
        <div style="border:1px solid var(--border-soft);border-radius:8px;overflow:hidden;margin-top:8px;">
          <table class="tbl" style="margin:0;">
            <thead>
              <tr>
                <th>Request ID</th>
                <th>Date</th>
                <th>Bank &amp; Account</th>
                <th>Amount (NPR)</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              ${historyRows}
            </tbody>
          </table>
        </div>

      </div>
      <div class="modal-foot">
        <button class="btn btn-secondary" onclick="closeModal()">Close</button>
        <button class="btn btn-primary" onclick="submitRequestCODTransfer()">${icon('check')} Submit COD Payout Request</button>
      </div>
    </div>`;
  document.getElementById('modalOverlay').classList.add('show');
}
window.openRequestCODTransferModal = openRequestCODTransferModal;

async function submitRequestCODTransfer(){
  const bankName = document.getElementById('payoutBankName').value || 'NIC Asia Bank';
  const accountName = document.getElementById('payoutAccName').value || 'Sola Attire Apparel Pvt. Ltd.';
  const accountNumber = document.getElementById('payoutAccNum').value || '09123847912001';
  const amount = parseFloat(document.getElementById('payoutAmount').value || 0);
  const remarks = document.getElementById('payoutRemarks').value || 'Request COD Bank Transfer';

  if (!amount || amount <= 0) {
    toast('Please enter a valid transfer amount');
    return;
  }

  const res = await fetch('/api/ncm/finance/request-transfer', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      amount: amount,
      bank_name: bankName,
      account_name: accountName,
      account_number: accountNumber,
      remarks: remarks
    })
  });

  const data = await res.json();
  if (data.success) {
    closeModal();
    toast(`COD Payout Request Submitted! Ref: ${data.request_id}`);
    if (data.transfers_history) {
      NCM_FINANCE_DATA.transfers_history = data.transfers_history;
    }
    if (NCM_FINANCE_DATA) {
      NCM_FINANCE_DATA.pending_cod_balance = Math.max(0, (NCM_FINANCE_DATA.pending_cod_balance || 45800) - amount);
      NCM_FINANCE_DATA.total_cod_transferred = (NCM_FINANCE_DATA.total_cod_transferred || 182500) + amount;
      NCM_FINANCE_DATA.bank_account = { bank_name: bankName, account_name: accountName, account_number: accountNumber };
    }
    renderAll();
  } else {
    toast('Transfer request failed');
  }
}
window.submitRequestCODTransfer = submitRequestCODTransfer;

const NCM_BRANCHES = [
  'KATHMANDU', 'POKHARA', 'LALITPUR', 'BHAKTAPUR', 'BIRATNAGAR', 
  'BUTWAL', 'CHITWAN', 'DHARAN', 'NEPALGUNJ', 'HETAUDA', 'BIRGUNJ'
];

function createNCM(orderId){
  openNCMShipmentModal(orderId);
}
window.createNCM = createNCM;

function openNCMShipmentModal(orderId){
  const shipment = SHIPMENTS.find(s => s.order === orderId);
  const order = ORDERS.find(o => o.id === orderId);
  
  const customerName = shipment ? shipment.customer : (order ? order.customer : '');
  const destination = shipment ? shipment.dest : 'POKHARA';
  const totalAmount = order ? order.total : (shipment ? shipment.cod : 0);
  const packageDesc = order && order.items ? order.items.map(i => `${i.qty}x ${i.name}`).join(', ') : 'Apparel & Accessories';

  document.getElementById('modalOverlay').innerHTML = `
    <div class="modal" style="width: 720px;">
      <div class="modal-head">
        <h3 style="margin:0;font-size:16px;">Create NCM Courier Shipment (${orderId})</h3>
        <button class="close-x" onclick="closeModal()">${icon('close')}</button>
      </div>
      <div class="modal-body">
        <div class="field-row">
          <div class="field">
            <label>Customer Full Name (name) *</label>
            <input id="ncmName" value="${customerName}" placeholder="e.g. John Doe">
          </div>
          <div class="field">
            <label>Primary Phone Number (phone) *</label>
            <input id="ncmPhone" value="${shipment ? shipment.phone : '9847023226'}" placeholder="e.g. 9847023226">
          </div>
        </div>

        <div class="field-row">
          <div class="field">
            <label>Secondary Phone (phone2)</label>
            <input id="ncmPhone2" value="" placeholder="e.g. 9801234567">
          </div>
          <div class="field">
            <label>COD Amount NPR (cod_charge) *</label>
            <input id="ncmCodCharge" type="number" value="${totalAmount}" placeholder="2200">
          </div>
        </div>

        <div class="field">
          <label>Delivery Address / Street (address) *</label>
          <input id="ncmAddress" value="${shipment ? shipment.address : destination + ', Nepal'}" placeholder="e.g. New Road, Ward 4, Pokhara">
        </div>

        <div class="field-row">
          <div class="field">
            <label>Origin Pickup Branch (fbranch) *</label>
            ${renderBranchSelectDropdown('ncm_fbranch', 'TINKUNE')}
          </div>
          <div class="field">
            <label>Destination Branch (branch) *</label>
            ${renderBranchSelectDropdown('ncm_dest', destination)}
          </div>
        </div>

        <div class="field-row">
          <div class="field">
            <label>Delivery Type (delivery_type)</label>
            <select id="ncmDeliveryType">
              <option value="Door2Door" selected>Door2Door (Pickup & Delivery)</option>
              <option value="Branch2Door">Branch2Door (Sender drops at branch)</option>
              <option value="Door2Branch">Door2Branch (Customer collects at branch)</option>
              <option value="Branch2Branch">Branch2Branch (Branch drop & collect)</option>
            </select>
          </div>
          <div class="field">
            <label>Weight in kg (weight)</label>
            <input id="ncmWeight" type="number" value="1" placeholder="1">
          </div>
        </div>

        <div class="field-row">
          <div class="field">
            <label>Package Description (package)</label>
            <input id="ncmPackage" value="${packageDesc}" placeholder="e.g. Jeans Pant, Hoodie">
          </div>
          <div class="field">
            <label>Vendor Reference ID (vref_id)</label>
            <input id="ncmVrefId" value="${orderId}" readonly style="background:var(--bg);">
          </div>
        </div>

        <div class="field">
          <label>Delivery Instruction (instruction)</label>
          <input id="ncmInstruction" value="Call recipient before delivery" placeholder="e.g. Handle carefully, Call before arrival">
        </div>
      </div>
      <div class="modal-foot">
        <button class="btn btn-secondary" onclick="closeModal()">Cancel</button>
        <button class="btn btn-primary" onclick="submitNCMShipmentModal('${orderId}')">${icon('truck')} Dispatch via NCM API</button>
      </div>
    </div>`;
  document.getElementById('modalOverlay').classList.add('show');
}
window.openNCMShipmentModal = openNCMShipmentModal;

async function submitNCMShipmentModal(orderId){
  const destEl = document.getElementById('co_ncm_dest_val');
  const fbranchEl = document.getElementById('co_ncm_fbranch_val');

  const payload = {
    orderId: orderId,
    status: 'in-transit',
    name: document.getElementById('ncmName').value,
    phone: document.getElementById('ncmPhone').value,
    phone2: document.getElementById('ncmPhone2').value,
    cod_charge: document.getElementById('ncmCodCharge').value,
    address: document.getElementById('ncmAddress').value,
    fbranch: fbranchEl ? fbranchEl.value : 'TINKUNE',
    branch: destEl ? destEl.value : 'POKHARA',
    delivery_type: document.getElementById('ncmDeliveryType').value,
    weight: document.getElementById('ncmWeight').value,
    package: document.getElementById('ncmPackage').value,
    vref_id: document.getElementById('ncmVrefId').value,
    instruction: document.getElementById('ncmInstruction').value
  };

  const res = await fetch('/api/shipments/ncm', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  const data = await res.json();
  if(data.shipment){
    closeModal();
    toast(`🚚 Order ${orderId} dispatched via NCM Courier! Tracking: ${data.shipment.ncm}`);
    await fetchAllData();
  }
}
window.submitNCMShipmentModal = submitNCMShipmentModal;

async function trackNCM(waybill){
  const shipment = SHIPMENTS.find(s => s.ncm === waybill || s.order === waybill);
  const ncmId = waybill ? waybill.replace("NCM-", "") : "24057802";
  
  document.getElementById('modalOverlay').innerHTML = `
    <div class="modal" style="max-width:540px;">
      <div class="modal-head">
        <h3 style="margin:0;font-size:16px;">🚚 Live NCM Tracking (${waybill})</h3>
        <button class="close-x" onclick="closeModal()">${icon('close')}</button>
      </div>
      <div class="modal-body" style="text-align:center;padding:35px 20px;">
        <div style="font-size:13.5px;color:var(--ink-soft);font-weight:600;margin-bottom:12px;">Querying GET /api/v1/order/status?id=${ncmId}</div>
        <div style="display:flex;justify-content:center;gap:6px;">
          <span style="width:8px;height:8px;border-radius:50%;background:var(--accent);animation:shimmer 1s infinite;"></span>
          <span style="width:8px;height:8px;border-radius:50%;background:var(--accent);animation:shimmer 1s infinite .2s;"></span>
          <span style="width:8px;height:8px;border-radius:50%;background:var(--accent);animation:shimmer 1s infinite .4s;"></span>
        </div>
      </div>
    </div>`;
  document.getElementById('modalOverlay').classList.add('show');

  try {
    const res = await fetch(`/api/shipments/track/${waybill}`);
    const data = await res.json();
    
    let history = [];
    if (data.history && Array.isArray(data.history) && data.history.length) {
      history = data.history;
    } else if (Array.isArray(data) && data.length) {
      history = data;
    } else {
      history = [
        {status: 'Pickup Order Created', added_time: shipment ? shipment.created : '2026-07-27', branch: shipment ? shipment.fbranch : 'TINKUNE', remarks: 'Order registered by vendor'},
        {status: 'Dispatched to Hub', added_time: '2026-07-27 14:30', branch: 'TINKUNE', remarks: 'Transferred to sorting center'},
        {status: 'Sent for Delivery', added_time: '2026-07-28 09:15', branch: shipment ? shipment.dest : 'POKHARA', remarks: 'Assigned to local delivery rider'}
      ];
    }
    
    const currStatus = data.current_status || (history.length ? history[history.length-1].status : 'Dispatched');

    const timelineHtml = history.map((item, idx) => `
      <div style="display:flex;gap:14px;position:relative;padding-bottom:16px;">
        <div style="display:flex;flex-direction:column;align-items:center;width:24px;flex-shrink:0;">
          <div style="width:12px;height:12px;border-radius:50%;background:${idx===history.length-1?'var(--accent)':'var(--success)'};border:2.5px solid var(--surface);z-index:2;box-shadow:0 0 0 2px ${idx===history.length-1?'var(--accent-soft)':'var(--success-soft)'};"></div>
          ${idx < history.length - 1 ? `<div style="width:2px;flex:1;background:var(--border);margin-top:2px;"></div>` : ''}
        </div>
        <div style="flex:1;top:-3px;position:relative;">
          <div style="font-weight:700;font-size:13px;color:var(--ink);">${item.status || item.current_status || 'In Transit'}</div>
          <div style="font-size:11.5px;color:var(--ink-faint);margin-top:2px;">${item.added_time || item.created || '2026-07-28'} ${item.branch ? '· ' + item.branch : ''}</div>
          ${item.remarks ? `<div style="font-size:11.5px;color:var(--ink-soft);margin-top:2px;font-style:italic;">"${item.remarks}"</div>` : ''}
        </div>
      </div>
    `).join('');

    document.getElementById('modalOverlay').innerHTML = `
      <div class="modal" style="max-width:560px;">
        <div class="modal-head">
          <div>
            <h3 style="margin:0;font-size:16px;">🚚 NCM Tracking: <span class="mono" style="color:var(--accent);">${waybill}</span></h3>
            <div style="font-size:11.5px;color:var(--ink-faint);margin-top:2px;">Vendor Order Ref: ${shipment ? shipment.order : 'ORD'}</div>
          </div>
          <button class="close-x" onclick="closeModal()">${icon('close')}</button>
        </div>
        <div class="modal-body">
          
          <!-- Live Status Card -->
          <div style="background:var(--accent-soft);border:1px solid var(--border-soft);padding:14px 16px;border-radius:10px;display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;">
            <div>
              <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:var(--accent-soft-ink);">Current NCM Status</div>
              <div style="font-size:16.5px;font-weight:800;color:var(--ink);margin-top:2px;">${currStatus}</div>
            </div>
            <span class="pill pill-warning" style="font-size:11.5px;padding:5px 12px;">Nepal Can Move API</span>
          </div>

          <!-- Receiver & Delivery Info -->
          ${shipment ? `
            <div style="background:var(--bg);padding:12px 14px;border-radius:8px;margin-bottom:16px;display:grid;grid-template-columns:1fr 1fr;gap:8px;font-size:12px;">
              <div><span style="color:var(--ink-faint);">Receiver:</span> <b>${shipment.customer}</b></div>
              <div><span style="color:var(--ink-faint);">Phone:</span> <b class="mono">${shipment.phone}</b></div>
              <div><span style="color:var(--ink-faint);">Destination:</span> <b>${shipment.dest}</b></div>
              <div><span style="color:var(--ink-faint);">COD Charge:</span> <b class="mono">${shipment.cod === 0 ? 'Rs. 0 (Advance Paid)' : fmtNPR(shipment.cod)}</b></div>
              <div style="grid-column:span 2;"><span style="color:var(--ink-faint);">Address:</span> <b>${shipment.address}</b></div>
            </div>
          ` : ''}

          <!-- Timeline -->
          <div class="section-title" style="margin-bottom:12px;font-size:13px;">Tracking History</div>
          <div style="padding-left:4px;">
            ${timelineHtml}
          </div>

        </div>
        <div class="modal-foot">
          <button class="btn btn-secondary" onclick="closeModal()">Close</button>
          <button class="btn btn-primary" onclick="trackNCM('${waybill}')">${icon('search')} Refresh Status</button>
        </div>
      </div>`;
  } catch(e) {
    toast("Could not connect to NCM Tracking API");
  }
}
window.trackNCM = trackNCM;

/* ============================= EMPLOYEES & ACCESS CONTROL ============================= */
function statusChip(s){
  const cls = s==='Present'?'pill-success':s==='On Leave'?'pill-warning':'pill-danger';
  return `<span class="pill ${cls}"><span class="pill-dot" style="background:currentColor;"></span>${s}</span>`;
}

function renderEmployees(){
  const tab = STATE.employeeTab || 'roster';
  let body='';

  if(tab==='roster'){
    body = `
      <div style="margin-bottom:18px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;padding-bottom:14px;border-bottom:1px solid var(--border-soft);">
        <div>
          <div style="font-weight:800;font-size:15px;color:var(--ink);display:flex;align-items:center;gap:6px;">
            <span>👥 Employee Staff Roster &amp; Profile Directory</span>
          </div>
          <div style="font-size:12px;color:var(--ink-faint);margin-top:3px;">Add team members, edit roles, manage attendance status and performance scores</div>
        </div>
        <button class="btn btn-primary btn-sm" onclick="openCreateEmployeeModal()">${icon('plus')} Create New Employee Profile</button>
      </div>

      <div style="display:flex;flex-direction:column;gap:12px;">
        ${EMPLOYEES.map(e=>`
          <div class="emp-card" style="display:flex;align-items:center;gap:14px;padding:14px 18px;background:var(--surface);border:1px solid var(--border);border-radius:10px;box-shadow:var(--shadow-sm);">
            <div class="emp-avatar">${e.name.split(' ').map(w=>w[0]).join('').slice(0,2)}</div>
            <div style="flex:1;">
              <div class="td-title" style="font-size:14.5px;font-weight:700;color:var(--ink);">${e.name}</div>
              <div class="td-sub" style="font-size:12px;color:var(--ink-faint);margin-top:2px;">${e.role} · Joined ${e.joined}</div>
            </div>
            ${statusChip(e.attendance)}
            <div style="width:110px;text-align:right;margin-right:12px;">
              <div class="td-sub" style="font-size:11px;color:var(--ink-faint);">Performance</div>
              <div class="td-title" style="font-size:14.5px;font-weight:800;color:var(--accent);">${e.performance}%</div>
            </div>
            <div style="display:flex;gap:6px;">
              <button class="btn btn-secondary btn-sm" onclick="openEditEmployeeModal('${e.id}')" title="Edit Employee Profile">${icon('edit')} Edit</button>
              <button class="btn btn-secondary btn-sm" onclick="deleteEmployee('${e.id}')" title="Delete Employee" style="color:var(--danger);">${icon('trash')}</button>
            </div>
          </div>
        `).join('')}
      </div>`;
  } else if(tab==='users'){
    body = `
      <div style="margin-bottom:14px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;">
        <div>
          <div style="font-weight:700;font-size:14px;">🔑 Employee System Accounts &amp; Access Control Points</div>
          <div style="font-size:11.5px;color:var(--ink-faint);">Create employee login credentials (User ID &amp; Password) and assign specific module permissions</div>
        </div>
        <button class="btn btn-primary btn-sm" onclick="openCreateUserModal()">${icon('plus')} Create Employee User Account</button>
      </div>

      <table class="tbl">
        <thead>
          <tr>
            <th>User ID / Username</th>
            <th>Full Name</th>
            <th>Account Role</th>
            <th>Granted Module Access Points</th>
            <th>Created Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          ${(SYSTEM_USERS.length ? SYSTEM_USERS : [
            {id:1, username:'admin', name:'Super Admin', role:'admin', permissions:['inbox','orders','products','offers','shipments','employees','reports'], created:'2026-07-28'}
          ]).map(u => `
            <tr>
              <td class="mono font-bold" style="color:var(--accent);">${u.username}</td>
              <td style="font-weight:600;">${u.name}</td>
              <td><span class="pill ${u.role==='admin'?'pill-success':'pill-info'}" style="font-weight:700;">${u.role.toUpperCase()}</span></td>
              <td>
                <div style="display:flex;flex-wrap:wrap;gap:4px;">
                  ${u.role === 'admin' ? '<span class="pill pill-success" style="font-size:10px;font-weight:700;">ALL MODULES (Super Admin)</span>' : (u.permissions || []).map(p => `<span class="pill pill-neutral" style="font-size:10px;text-transform:uppercase;font-weight:600;">${p}</span>`).join('')}
                </div>
              </td>
              <td class="td-sub" style="font-size:11.5px;">${u.created || '2026-07-28'}</td>
              <td>
                <div style="display:flex;gap:6px;">
                  <button class="btn btn-secondary btn-sm" onclick="openEditPermissionsModal(${u.id})">${icon('edit')} Access Points</button>
                  ${u.username !== 'admin' ? `<button class="btn btn-secondary btn-sm" onclick="deleteUserAccount(${u.id})" style="color:var(--danger);">${icon('trash')}</button>` : ''}
                </div>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>`;
  } else if(tab==='attendance'){
    body = `<table class="tbl"><thead><tr><th>Employee</th><th>Today's Status</th><th>This Month</th><th>Late Arrivals</th></tr></thead><tbody>
      ${EMPLOYEES.map(e=>`<tr><td class="td-title">${e.name}</td><td>${statusChip(e.attendance)}</td><td class="mono">22/24 days</td><td class="mono">0</td></tr>`).join('')}
      </tbody></table>`;
  } else if(tab==='leave'){
    body = `
      <div style="margin-bottom:14px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;">
        <div>
          <div style="font-weight:700;font-size:14px;">📝 Employee Leave Requests Management</div>
          <div style="font-size:11.5px;color:var(--ink-faint);">Review, approve or reject leave applications submitted by staff members</div>
        </div>
        <button class="btn btn-primary btn-sm" onclick="openRequestLeaveModal()">${icon('plus')} Submit New Leave Request</button>
      </div>

      <table class="tbl">
        <thead>
          <tr>
            <th>Employee Name</th>
            <th>Leave Type</th>
            <th>Requested Dates</th>
            <th>Reason / Remarks</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          ${LEAVE_REQUESTS.length ? LEAVE_REQUESTS.map(l=>`
            <tr>
              <td class="td-title" style="font-weight:600;">${l.name}</td>
              <td><span class="pill pill-neutral" style="font-size:11px;font-weight:600;">${l.type}</span></td>
              <td class="mono" style="font-size:12px;">${l.dates}</td>
              <td style="font-size:11.5px;color:var(--ink-soft);">${l.reason || 'Personal leave request'}</td>
              <td>
                <span class="pill ${l.status==='approved'?'pill-success':l.status==='rejected'?'pill-danger':'pill-warning'}">
                  <span class="pill-dot" style="background:currentColor;"></span>${l.status.charAt(0).toUpperCase()+l.status.slice(1)}
                </span>
              </td>
              <td>
                <div style="display:flex;gap:6px;">
                  ${l.status==='pending' ? `
                    <button class="btn btn-primary btn-sm" onclick="updateLeaveStatus(${l.id}, 'approved')" style="padding:4px 8px;font-size:11px;">Approve</button>
                    <button class="btn btn-secondary btn-sm" onclick="updateLeaveStatus(${l.id}, 'rejected')" style="padding:4px 8px;font-size:11px;color:var(--danger);">Reject</button>
                  ` : ''}
                  <button class="btn btn-secondary btn-sm" onclick="deleteLeaveRequest(${l.id})" style="padding:4px 8px;font-size:11px;color:var(--danger);" title="Delete Record">${icon('trash')}</button>
                </div>
              </td>
            </tr>
          `).join('') : '<tr><td colspan="6" style="text-align:center;padding:20px;color:var(--ink-faint);">No leave requests found</td></tr>'}
        </tbody>
      </table>`;
  } else if(tab==='payroll'){
    const totalPayroll = EMPLOYEES.reduce((sum, e) => {
      const base = e.base_pay || 30000.0;
      const allowance = e.allowance || 2500.0;
      const bonus = Math.round(base * (e.performance / 100) * 0.1);
      return sum + base + allowance + bonus;
    }, 0);

    body = `
      <div style="margin-bottom:14px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;">
        <div>
          <div style="font-weight:700;font-size:14px;">💵 Monthly Payroll &amp; Compensation Calculator</div>
          <div style="font-size:11.5px;color:var(--ink-faint);">Dynamic monthly pay calculations based on base pay, allowance, and performance bonuses</div>
        </div>
        <div style="text-align:right;">
          <div style="font-size:11px;color:var(--ink-faint);font-weight:600;">Total Estimated Payroll</div>
          <div style="font-size:18px;font-weight:800;color:var(--accent);">${fmtNPR(totalPayroll)}</div>
        </div>
      </div>

      <table class="tbl">
        <thead>
          <tr>
            <th>Employee</th>
            <th>Role</th>
            <th>Base Salary (NPR)</th>
            <th>Allowance</th>
            <th>Performance Bonus (${icon('star')})</th>
            <th>Net Monthly Pay (Est.)</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          ${EMPLOYEES.map(e => {
            const base = e.base_pay || 30000.0;
            const allowance = e.allowance || 2500.0;
            const bonus = Math.round(base * (e.performance / 100) * 0.1);
            const netPay = base + allowance + bonus;
            return `
              <tr>
                <td class="td-title" style="font-weight:700;">${e.name}</td>
                <td><span class="pill pill-neutral" style="font-size:11px;font-weight:600;">${e.role}</span></td>
                <td class="mono font-bold">${fmtNPR(base)}</td>
                <td class="mono">${fmtNPR(allowance)}</td>
                <td class="mono" style="color:var(--success); font-weight:600;">+ ${fmtNPR(bonus)} <span style="font-size:10px;color:var(--ink-faint);">(${e.performance}%)</span></td>
                <td class="mono font-bold" style="color:var(--accent);font-size:13.5px;">${fmtNPR(netPay)}</td>
                <td>
                  <button class="btn btn-secondary btn-sm" onclick="openEditPayrollModal('${e.id}')">${icon('edit')} Edit Salary</button>
                </td>
              </tr>`;
          }).join('')}
        </tbody>
      </table>`;
  }

  const tabsList = ['roster', 'attendance', 'users', 'leave', 'payroll'];

  return `
    <div class="page-head">
      <div>
        <h1>Employees &amp; User Accounts</h1>
        <p class="page-sub">${EMPLOYEES.length} team members · ${SYSTEM_USERS.length || 1} login accounts</p>
      </div>
      <button class="btn btn-primary" onclick="openCreateUserModal()">${icon('plus')} Create Employee User Account</button>
    </div>
    <div class="tabs">
      ${tabsList.map(t=>`<div class="tab ${tab===t?'active':''}" onclick="STATE.employeeTab='${t}';renderAll();">${t === 'users' ? '🔑 User Accounts & Access Points' : t.charAt(0).toUpperCase()+t.slice(1)}${t==='leave'?' Requests':''}</div>`).join('')}
    </div>
    <div class="card card-pad">${body}</div>`;
}

function openCreateEmployeeModal(){
  openEditEmployeeModal(null);
}
window.openCreateEmployeeModal = openCreateEmployeeModal;

function openEditEmployeeModal(eid){
  const emp = eid ? EMPLOYEES.find(e => e.id === eid) : null;
  const isEdit = !!emp;

  document.getElementById('modalOverlay').innerHTML = `
    <div class="modal" style="width:520px;">
      <div class="modal-head">
        <div>
          <h3 style="margin:0;font-size:16px;">${isEdit ? '✏️ Edit Employee Profile' : '👥 Create New Employee Profile'}</h3>
          <div style="font-size:11.5px;color:var(--ink-faint);margin-top:2px;">${isEdit ? 'Update employee details and performance' : 'Add a new team member to Sola Attire staff roster'}</div>
        </div>
        <button class="close-x" onclick="closeModal()">${icon('close')}</button>
      </div>
      <div class="modal-body">
        <div class="field">
          <label>Employee Full Name *</label>
          <input id="empName" value="${isEdit ? emp.name : ''}" placeholder="e.g. Kritika Adhikari">
        </div>
        
        <div class="field-row">
          <div class="field">
            <label>Designation / Role *</label>
            <select id="empRole">
              <option value="Sales Associate" ${isEdit && emp.role==='Sales Associate'?'selected':''}>Sales Associate</option>
              <option value="Store Manager" ${isEdit && emp.role==='Store Manager'?'selected':''}>Store Manager</option>
              <option value="Logistics Lead" ${isEdit && emp.role==='Logistics Lead'?'selected':''}>Logistics Lead</option>
              <option value="Customer Support" ${isEdit && emp.role==='Customer Support'?'selected':''}>Customer Support</option>
              <option value="Inventory Specialist" ${isEdit && emp.role==='Inventory Specialist'?'selected':''}>Inventory Specialist</option>
              <option value="Social Media Handler" ${isEdit && emp.role==='Social Media Handler'?'selected':''}>Social Media Handler</option>
            </select>
          </div>
          <div class="field">
            <label>Joined Date *</label>
            <input type="date" id="empJoined" value="${isEdit ? emp.joined : '2026-07-28'}">
          </div>
        </div>

        <div class="field-row">
          <div class="field">
            <label>Attendance Status</label>
            <select id="empAttendance">
              <option value="Present" ${isEdit && emp.attendance==='Present'?'selected':''}>Present</option>
              <option value="On Leave" ${isEdit && emp.attendance==='On Leave'?'selected':''}>On Leave</option>
              <option value="Absent" ${isEdit && emp.attendance==='Absent'?'selected':''}>Absent</option>
            </select>
          </div>
          <div class="field">
            <label>Performance Score (%)</label>
            <input type="number" id="empPerformance" value="${isEdit ? emp.performance : 90}" placeholder="90" min="0" max="100">
          </div>
        </div>
      </div>
      <div class="modal-foot">
        <button class="btn btn-secondary" onclick="closeModal()">Cancel</button>
        <button class="btn btn-primary" onclick="saveEmployeeModal(${eid ? `'${eid}'` : 'null'})">${icon('check')} ${isEdit ? 'Save Changes' : 'Create Employee Profile'}</button>
      </div>
    </div>`;
  document.getElementById('modalOverlay').classList.add('show');
}
window.openEditEmployeeModal = openEditEmployeeModal;

async function saveEmployeeModal(eid){
  const name = document.getElementById('empName').value.trim();
  const role = document.getElementById('empRole').value;
  const joined = document.getElementById('empJoined').value || '2026-07-28';
  const attendance = document.getElementById('empAttendance').value;
  const performance = parseInt(document.getElementById('empPerformance').value) || 90;

  if(!name){
    toast("Employee Name is required!");
    return;
  }

  const payload = { name, role, joined, attendance, performance };
  const method = eid ? 'PUT' : 'POST';
  const url = eid ? `/api/employees/${eid}` : '/api/employees';

  const res = await fetch(url, {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  if(res.ok){
    closeModal();
    toast(eid ? 'Employee profile updated!' : 'New employee created successfully!');
    await fetchAllData();
  }
}
window.saveEmployeeModal = saveEmployeeModal;

async function deleteEmployee(eid){
  if(!confirm("Are you sure you want to delete this employee profile?")) return;
  const res = await fetch(`/api/employees/${eid}`, { method: 'DELETE' });
  if(res.ok){
    toast("Employee profile deleted!");
    await fetchAllData();
  }
}
window.deleteEmployee = deleteEmployee;

function openRequestLeaveModal(){
  const empOptions = EMPLOYEES.map(e => `<option value="${e.name}">${e.name} (${e.role})</option>`).join('');

  document.getElementById('modalOverlay').innerHTML = `
    <div class="modal" style="width:520px;">
      <div class="modal-head">
        <div>
          <h3 style="margin:0;font-size:16px;">📝 Submit Employee Leave Request</h3>
          <div style="font-size:11.5px;color:var(--ink-faint);margin-top:2px;">Submit a new leave application for approval</div>
        </div>
        <button class="close-x" onclick="closeModal()">${icon('close')}</button>
      </div>
      <div class="modal-body">
        <div class="field">
          <label>Select Employee *</label>
          <select id="leaveEmpName">${empOptions}</select>
        </div>

        <div class="field-row">
          <div class="field">
            <label>Leave Type *</label>
            <select id="leaveType">
              <option value="Sick Leave" selected>Sick Leave</option>
              <option value="Casual / Annual Leave">Casual / Annual Leave</option>
              <option value="Personal Leave">Personal Leave</option>
              <option value="Maternity / Paternity Leave">Maternity / Paternity Leave</option>
            </select>
          </div>
          <div class="field">
            <label>Dates / Duration *</label>
            <input id="leaveDates" placeholder="e.g. Jul 30 – Aug 01">
          </div>
        </div>

        <div class="field">
          <label>Reason / Remarks</label>
          <input id="leaveReason" placeholder="e.g. Medical emergency / Family function">
        </div>
      </div>
      <div class="modal-foot">
        <button class="btn btn-secondary" onclick="closeModal()">Cancel</button>
        <button class="btn btn-primary" onclick="submitLeaveRequestModal()">${icon('check')} Submit Leave Request</button>
      </div>
    </div>`;
  document.getElementById('modalOverlay').classList.add('show');
}
window.openRequestLeaveModal = openRequestLeaveModal;

async function submitLeaveRequestModal(){
  const name = document.getElementById('leaveEmpName').value;
  const type = document.getElementById('leaveType').value;
  const dates = document.getElementById('leaveDates').value.trim();
  const reason = document.getElementById('leaveReason').value.trim();

  if(!name || !dates){
    toast("Employee name and dates are required!");
    return;
  }

  const res = await fetch('/api/leave-requests', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, type, dates, reason })
  });

  if(res.ok){
    closeModal();
    toast("Leave request submitted!");
    await fetchAllData();
  }
}
window.submitLeaveRequestModal = submitLeaveRequestModal;

async function updateLeaveStatus(lid, status){
  const res = await fetch(`/api/leave-requests/${lid}/status`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ status })
  });

  if(res.ok){
    toast(`Leave request ${status}!`);
    await fetchAllData();
  }
}
window.updateLeaveStatus = updateLeaveStatus;

async function deleteLeaveRequest(lid){
  const res = await fetch(`/api/leave-requests/${lid}`, { method: 'DELETE' });
  if(res.ok){
    toast("Leave request record deleted!");
    await fetchAllData();
  }
}
window.deleteLeaveRequest = deleteLeaveRequest;

function openEditPayrollModal(eid){
  const emp = EMPLOYEES.find(e => e.id === eid);
  if(!emp) return;
  const base = emp.base_pay || 30000.0;
  const allowance = emp.allowance || 2500.0;

  document.getElementById('modalOverlay').innerHTML = `
    <div class="modal" style="width:480px;">
      <div class="modal-head">
        <div>
          <h3 style="margin:0;font-size:16px;">💵 Edit Payroll &amp; Salary Structure</h3>
          <div style="font-size:11.5px;color:var(--ink-faint);margin-top:2px;">Employee: <b>${emp.name}</b> (${emp.role})</div>
        </div>
        <button class="close-x" onclick="closeModal()">${icon('close')}</button>
      </div>
      <div class="modal-body">
        <div class="field">
          <label>Monthly Base Salary (NPR) *</label>
          <input type="number" id="payBase" value="${base}" placeholder="30000">
        </div>

        <div class="field">
          <label>Monthly Allowance / Bonus (NPR) *</label>
          <input type="number" id="payAllowance" value="${allowance}" placeholder="2500">
        </div>
        
        <div style="background:var(--accent-soft);padding:10px 12px;border-radius:8px;font-size:12px;color:var(--ink-soft);margin-top:10px;">
          <div>💡 <b>Performance Bonus Calculation:</b> Automatically added based on current score (<b>${emp.performance}%</b>)</div>
        </div>
      </div>
      <div class="modal-foot">
        <button class="btn btn-secondary" onclick="closeModal()">Cancel</button>
        <button class="btn btn-primary" onclick="savePayrollModal('${eid}')">${icon('check')} Save Salary Structure</button>
      </div>
    </div>`;
  document.getElementById('modalOverlay').classList.add('show');
}
window.openEditPayrollModal = openEditPayrollModal;

async function savePayrollModal(eid){
  const base_pay = parseFloat(document.getElementById('payBase').value) || 30000.0;
  const allowance = parseFloat(document.getElementById('payAllowance').value) || 2500.0;

  const res = await fetch(`/api/employees/${eid}/payroll`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ base_pay, allowance })
  });

  if(res.ok){
    closeModal();
    toast("Payroll structure updated!");
    await fetchAllData();
  }
}
window.savePayrollModal = savePayrollModal;

function openCreateUserModal(){
  document.getElementById('modalOverlay').innerHTML = `
    <div class="modal" style="max-width:520px;">
      <div class="modal-head">
        <h3 style="margin:0;font-size:16px;">🔑 Create New Employee User Account</h3>
        <button class="close-x" onclick="closeModal()">${icon('close')}</button>
      </div>
      <div class="modal-body">
        
        <div class="field-row">
          <div class="field">
            <label>Full Employee Name *</label>
            <input id="nu_name" placeholder="e.g. Sita Shrestha">
          </div>
          <div class="field">
            <label>User ID / Username *</label>
            <input class="mono" id="nu_username" placeholder="e.g. sita.shrestha">
          </div>
        </div>

        <div class="field-row">
          <div class="field">
            <label>Password *</label>
            <input type="text" class="mono" id="nu_password" value="sita123" placeholder="e.g. sita123">
          </div>
          <div class="field">
            <label>Account Role</label>
            <select id="nu_role">
              <option value="employee" selected>Employee (Restricted Access)</option>
              <option value="admin">Administrator (Full Access)</option>
            </select>
          </div>
        </div>

        <div class="section-title" style="margin-top:14px;font-size:13px;">Granted Module Access Points</div>
        <div class="section-sub" style="margin-bottom:10px;">Select which dashboard modules this employee is allowed to view &amp; manage</div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;background:var(--bg);padding:12px;border-radius:8px;font-size:12.5px;">
          <label style="display:flex;align-items:center;gap:8px;cursor:pointer;">
            <input type="checkbox" id="perm_inbox" checked style="width:16px;height:16px;accent-color:var(--accent);">
            💬 Inbox (Customer Chat)
          </label>
          <label style="display:flex;align-items:center;gap:8px;cursor:pointer;">
            <input type="checkbox" id="perm_orders" checked style="width:16px;height:16px;accent-color:var(--accent);">
            📦 Orders &amp; Sales
          </label>
          <label style="display:flex;align-items:center;gap:8px;cursor:pointer;">
            <input type="checkbox" id="perm_products" checked style="width:16px;height:16px;accent-color:var(--accent);">
            🏷️ Products &amp; Inventory
          </label>
          <label style="display:flex;align-items:center;gap:8px;cursor:pointer;">
            <input type="checkbox" id="perm_offers" checked style="width:16px;height:16px;accent-color:var(--accent);">
            🎯 Offers &amp; Discounts
          </label>
          <label style="display:flex;align-items:center;gap:8px;cursor:pointer;">
            <input type="checkbox" id="perm_shipments" checked style="width:16px;height:16px;accent-color:var(--accent);">
            🚚 NCM Courier Shipments
          </label>
          <label style="display:flex;align-items:center;gap:8px;cursor:pointer;">
            <input type="checkbox" id="perm_employees" style="width:16px;height:16px;accent-color:var(--accent);">
            👥 Employee Management
          </label>
          <label style="display:flex;align-items:center;gap:8px;cursor:pointer;grid-column:span 2;">
            <input type="checkbox" id="perm_reports" style="width:16px;height:16px;accent-color:var(--accent);">
            📊 Reports &amp; Financial Analytics
          </label>
        </div>

      </div>
      <div class="modal-foot">
        <button class="btn btn-secondary" onclick="closeModal()">Cancel</button>
        <button class="btn btn-primary" onclick="submitCreateUser()">${icon('check')} Create Employee Account</button>
      </div>
    </div>`;
  document.getElementById('modalOverlay').classList.add('show');
}
window.openCreateUserModal = openCreateUserModal;

async function submitCreateUser(){
  const name = document.getElementById('nu_name').value.trim();
  const username = document.getElementById('nu_username').value.trim();
  const password = document.getElementById('nu_password').value.trim();
  const role = document.getElementById('nu_role').value;

  if(!name || !username || !password){
    toast('Please enter name, username and password');
    return;
  }

  const permissions = [];
  if(document.getElementById('perm_inbox').checked) permissions.push('inbox');
  if(document.getElementById('perm_orders').checked) permissions.push('orders');
  if(document.getElementById('perm_products').checked) permissions.push('inventory');
  if(document.getElementById('perm_offers').checked) permissions.push('offers');
  if(document.getElementById('perm_shipments').checked) permissions.push('shipments');
  if(document.getElementById('perm_employees').checked) permissions.push('employees');
  if(document.getElementById('perm_reports').checked) permissions.push('reports');

  const res = await fetch('/api/auth/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: name,
      username: username,
      password: password,
      role: role,
      permissions: permissions
    })
  });

  const data = await res.json();
  if(data.success){
    closeModal();
    toast(`Employee Account Created! Username: ${username}`);
    await fetchAllData();
    renderAll();
  } else {
    toast(data.error || 'Failed to create user account');
  }
}
window.submitCreateUser = submitCreateUser;

function openEditPermissionsModal(userId){
  const user = SYSTEM_USERS.find(u => u.id === userId);
  if(!user) return;

  const perms = user.permissions || [];
  document.getElementById('modalOverlay').innerHTML = `
    <div class="modal" style="max-width:500px;">
      <div class="modal-head">
        <h3 style="margin:0;font-size:16px;">🔑 Edit Access Points: <span style="color:var(--accent);">${user.name}</span> (${user.username})</h3>
        <button class="close-x" onclick="closeModal()">${icon('close')}</button>
      </div>
      <div class="modal-body">
        
        <div class="field" style="margin-bottom:14px;">
          <label>Account Role</label>
          <select id="edit_nu_role">
            <option value="employee" ${user.role==='employee'?'selected':''}>Employee (Restricted Access)</option>
            <option value="admin" ${user.role==='admin'?'selected':''}>Administrator (Full Access)</option>
          </select>
        </div>

        <div class="section-title" style="font-size:13px;">Granted Module Access Points</div>
        <div class="section-sub" style="margin-bottom:10px;">Check module permissions allowed for this employee</div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;background:var(--bg);padding:12px;border-radius:8px;font-size:12.5px;">
          <label style="display:flex;align-items:center;gap:8px;cursor:pointer;">
            <input type="checkbox" id="edit_perm_inbox" ${perms.includes('inbox')?'checked':''} style="width:16px;height:16px;accent-color:var(--accent);">
            💬 Inbox (Customer Chat)
          </label>
          <label style="display:flex;align-items:center;gap:8px;cursor:pointer;">
            <input type="checkbox" id="edit_perm_orders" ${perms.includes('orders')?'checked':''} style="width:16px;height:16px;accent-color:var(--accent);">
            📦 Orders &amp; Sales
          </label>
          <label style="display:flex;align-items:center;gap:8px;cursor:pointer;">
            <input type="checkbox" id="edit_perm_products" ${perms.includes('inventory')?'checked':''} style="width:16px;height:16px;accent-color:var(--accent);">
            🏷️ Products &amp; Inventory
          </label>
          <label style="display:flex;align-items:center;gap:8px;cursor:pointer;">
            <input type="checkbox" id="edit_perm_offers" ${perms.includes('offers')?'checked':''} style="width:16px;height:16px;accent-color:var(--accent);">
            🎯 Offers &amp; Discounts
          </label>
          <label style="display:flex;align-items:center;gap:8px;cursor:pointer;">
            <input type="checkbox" id="edit_perm_shipments" ${perms.includes('shipments')?'checked':''} style="width:16px;height:16px;accent-color:var(--accent);">
            🚚 NCM Courier Shipments
          </label>
          <label style="display:flex;align-items:center;gap:8px;cursor:pointer;">
            <input type="checkbox" id="edit_perm_employees" ${perms.includes('employees')?'checked':''} style="width:16px;height:16px;accent-color:var(--accent);">
            👥 Employee Management
          </label>
          <label style="display:flex;align-items:center;gap:8px;cursor:pointer;grid-column:span 2;">
            <input type="checkbox" id="edit_perm_reports" ${perms.includes('reports')?'checked':''} style="width:16px;height:16px;accent-color:var(--accent);">
            📊 Reports &amp; Financial Analytics
          </label>
        </div>

      </div>
      <div class="modal-foot">
        <button class="btn btn-secondary" onclick="closeModal()">Cancel</button>
        <button class="btn btn-primary" onclick="submitEditPermissions(${user.id})">${icon('check')} Update Access Points</button>
      </div>
    </div>`;
  document.getElementById('modalOverlay').classList.add('show');
}
window.openEditPermissionsModal = openEditPermissionsModal;

async function submitEditPermissions(userId){
  const role = document.getElementById('edit_nu_role').value;
  const permissions = [];
  if(document.getElementById('edit_perm_inbox').checked) permissions.push('inbox');
  if(document.getElementById('edit_perm_orders').checked) permissions.push('orders');
  if(document.getElementById('edit_perm_products').checked) permissions.push('inventory');
  if(document.getElementById('edit_perm_offers').checked) permissions.push('offers');
  if(document.getElementById('edit_perm_shipments').checked) permissions.push('shipments');
  if(document.getElementById('edit_perm_employees').checked) permissions.push('employees');
  if(document.getElementById('edit_perm_reports').checked) permissions.push('reports');

  const res = await fetch(`/api/auth/users/${userId}/permissions`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ role: role, permissions: permissions })
  });

  const data = await res.json();
  if(data.success){
    closeModal();
    toast('Employee access points updated!');
    await fetchAllData();
    renderAll();
  } else {
    toast(data.error || 'Failed to update access points');
  }
}
window.submitEditPermissions = submitEditPermissions;

async function deleteUserAccount(userId){
  const res = await fetch(`/api/auth/users/${userId}`, { method: 'DELETE' });
  const data = await res.json();
  if(data.success){
    toast('Employee account deleted!');
    await fetchAllData();
    renderAll();
  } else {
    toast(data.error || 'Could not delete user', 'error');
  }
}
window.deleteUserAccount = deleteUserAccount;

async function approveLeave(lid){
  const res = await fetch(`/api/leave-requests/${lid}/approve`, {method:'PUT'});
  if(res.ok){
    toast('Leave request approved');
    await fetchAllData();
  }
}
window.approveLeave = approveLeave;

/* ============================= EXPENSE TRACKER ============================= */
let EXPENSES = [];
if (!STATE.expenseCategory) STATE.expenseCategory = 'all';
if (!STATE.expenseSearch) STATE.expenseSearch = '';

const EXPENSE_CATEGORIES = [
  'Shipping & Delivery',
  'Marketing & Ads',
  'Packaging & Supplies',
  'Rent & Utilities',
  'Salaries & Staff',
  'Fabric & Procurement',
  'Miscellaneous'
];

function setExpenseCategory(cat){
  STATE.expenseCategory = cat;
  renderAll();
}
window.setExpenseCategory = setExpenseCategory;

function filterExpenses(q){
  STATE.expenseSearch = (q || '').trim().toLowerCase();
  renderAll();
}
window.filterExpenses = filterExpenses;

function renderExpenses(){
  let list = EXPENSES.slice();

  if (STATE.expenseCategory !== 'all') {
    list = list.filter(e => e.category === STATE.expenseCategory);
  }

  if (STATE.expenseSearch) {
    list = list.filter(e => 
      (e.title && e.title.toLowerCase().includes(STATE.expenseSearch)) ||
      (e.category && e.category.toLowerCase().includes(STATE.expenseSearch)) ||
      (e.paymentMethod && e.paymentMethod.toLowerCase().includes(STATE.expenseSearch)) ||
      (e.notes && e.notes.toLowerCase().includes(STATE.expenseSearch))
    );
  }

  const totalExpense = EXPENSES.reduce((a, e) => a + (e.amount || 0), 0);
  const nowStr = new Date().toISOString().slice(0, 7); // YYYY-MM
  const monthExpense = EXPENSES.filter(e => e.date && e.date.startsWith(nowStr)).reduce((a, e) => a + (e.amount || 0), 0);

  // Net Profit calculation
  const totalRevenue = ORDERS.reduce((a, o) => a + (o.total || 0), 0);
  const totalCOGS = ORDERS.reduce((a, o) => {
    return a + (o.items || []).reduce((iAcc, it) => {
      const prod = PRODUCTS.find(p => p.name === it.name);
      const unitCost = prod ? prod.cost : Math.round(it.price * 0.5);
      return iAcc + (unitCost * it.qty);
    }, 0);
  }, 0);
  const netProfit = totalRevenue - totalCOGS - totalExpense;

  const initialCapital = 250000;
  const remainingCapitalBuffer = Math.max(0, initialCapital - totalExpense);
  const capitalUtilizedPct = Math.min(100, Math.round((totalExpense / initialCapital) * 100));

  const rowsHtml = list.length ? list.map(e => `
    <tr>
      <td class="mono font-bold" style="font-size:12px;color:var(--ink-soft);">${e.date}</td>
      <td>
        <div style="font-weight:700;font-size:13px;color:var(--ink);">${e.title}</div>
        ${e.notes ? `<div class="td-sub" style="font-size:11px;color:var(--ink-faint);">${e.notes}</div>` : ''}
      </td>
      <td><span class="pill pill-info" style="font-size:11px;font-weight:600;">${e.category}</span></td>
      <td><span class="pill pill-neutral" style="font-size:11px;">${e.paymentMethod || 'Cash'}</span></td>
      <td class="mono font-bold" style="font-size:13.5px;color:var(--danger);">${fmtNPR(e.amount)}</td>
      <td>
        <div style="display:flex;gap:6px;justify-content:flex-end;">
          <button class="btn btn-secondary btn-sm" onclick="openExpenseModal('${e.id}')" title="Edit Expense">${icon('edit')}</button>
          <button class="btn btn-secondary btn-sm" onclick="deleteExpense('${e.id}')" style="color:var(--danger);" title="Delete Expense">${icon('trash')}</button>
        </div>
      </td>
    </tr>
  `).join('') : `<tr><td colspan="6" class="empty-state" style="padding:32px 16px;">${icon('wallet')}<h3>No expenses recorded</h3><p>Click "+ Add New Expense" to log operational expenses.</p></td></tr>`;

  return `
    <div class="page-head">
      <div>
        <h1>Expense Tracker</h1>
        <p class="page-sub">Track business operating costs, logistics fees, marketing spend &amp; capital utilization</p>
      </div>
      <button class="btn btn-primary" onclick="openExpenseModal()">${icon('plus')} Add New Expense</button>
    </div>

    <!-- KPI Metrics Grid -->
    <div class="stat-grid" style="grid-template-columns:repeat(4,1fr);margin-bottom:18px;">
      <div class="card stat-card">
        <div class="stat-icon" style="background:var(--accent-soft);color:var(--accent-soft-ink);">${icon('money')}</div>
        <div class="stat-value">${fmtNPR(initialCapital)}</div>
        <div class="stat-label">Initial Capital Investment</div>
      </div>

      <div class="card stat-card">
        <span class="stat-trend trend-down">${capitalUtilizedPct}% capital spent</span>
        <div class="stat-icon" style="background:var(--danger-soft);color:var(--danger);">${icon('wallet')}</div>
        <div class="stat-value">${fmtNPR(totalExpense)}</div>
        <div class="stat-label">Total Outflow &amp; Expenses</div>
      </div>

      <div class="card stat-card">
        <div class="stat-icon" style="background:var(--info-soft);color:var(--info);">${icon('box')}</div>
        <div class="stat-value">${fmtNPR(remainingCapitalBuffer)}</div>
        <div class="stat-label">Remaining Capital Buffer</div>
      </div>

      <div class="card stat-card">
        <span class="stat-trend ${netProfit>=0?'trend-up':'trend-down'}">${netProfit>=0?'+':''}${fmtNPR(netProfit)} net</span>
        <div class="stat-icon" style="background:var(--success-soft);color:var(--success);">${icon('trend')}</div>
        <div class="stat-value">${fmtNPR(netProfit)}</div>
        <div class="stat-label">Net Operating Profit</div>
      </div>
    </div>

    <!-- Filter Control Toolbar -->
    <div class="card card-pad" style="margin-bottom:18px;">
      <div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12px;">
        
        <!-- Category Filter -->
        <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;">
          <span style="font-size:12px;font-weight:700;color:var(--ink-soft);">Category:</span>
          <select onchange="setExpenseCategory(this.value)" style="padding:6px 12px;font-size:12px;border:1px solid var(--border);border-radius:6px;background:var(--surface);">
            <option value="all" ${STATE.expenseCategory==='all'?'selected':''}>All Categories (${EXPENSES.length})</option>
            ${EXPENSE_CATEGORIES.map(cat => `<option value="${cat}" ${STATE.expenseCategory===cat?'selected':''}>${cat}</option>`).join('')}
          </select>
        </div>

        <!-- Search Bar -->
        <div class="search-box" style="width:260px;background:var(--bg);border:1px solid var(--border-soft);padding:6px 12px;border-radius:8px;display:flex;align-items:center;gap:8px;">
          ${icon('search')}
          <input placeholder="Search expenses by title or note..." value="${STATE.expenseSearch}" oninput="filterExpenses(this.value)" style="border:none;background:transparent;outline:none;font-size:12px;width:100%;">
        </div>

      </div>
    </div>

    <!-- Expenses Data Table -->
    <div class="card card-pad">
      <table class="tbl">
        <thead>
          <tr>
            <th>Date</th>
            <th>Title &amp; Note</th>
            <th>Category</th>
            <th>Payment Method</th>
            <th>Amount (NPR)</th>
            <th style="text-align:right;">Actions</th>
          </tr>
        </thead>
        <tbody>
          ${rowsHtml}
        </tbody>
      </table>
    </div>
  `;
}

function afterExpensesRender(){}

function openExpenseModal(eid){
  const e = eid ? EXPENSES.find(x => x.id === eid) : null;
  const todayStr = new Date().toISOString().split('T')[0];

  document.getElementById('modalOverlay').innerHTML = `
    <div class="modal" style="width:480px;">
      <div class="modal-head">
        <h3>${e ? 'Edit Expense Record' : 'Record New Expense'}</h3>
        <button class="close-x" onclick="closeModal()">${icon('close')}</button>
      </div>
      <div class="modal-body">
        <form onsubmit="submitExpenseForm(event, '${e ? e.id : ''}')">
          <div class="field">
            <label>Expense Title *</label>
            <input id="exp_title" value="${e ? e.title : ''}" placeholder="e.g. Courier Shipping Deposit / Polybags / Rent" required>
          </div>

          <div class="field-row" style="margin-top:12px;">
            <div class="field">
              <label>Amount (NPR) *</label>
              <input type="number" step="0.01" id="exp_amount" value="${e ? e.amount : ''}" placeholder="e.g. 2500" required>
            </div>
            <div class="field">
              <label>Expense Date *</label>
              <input type="date" id="exp_date" value="${e ? e.date : todayStr}" required>
            </div>
          </div>

          <div class="field-row" style="margin-top:12px;">
            <div class="field">
              <label>Category *</label>
              <select id="exp_category">
                ${EXPENSE_CATEGORIES.map(cat => `<option value="${cat}" ${e && e.category === cat ? 'selected' : ''}>${cat}</option>`).join('')}
              </select>
            </div>
            <div class="field">
              <label>Payment Method *</label>
              <select id="exp_method">
                <option value="eSewa" ${e && e.paymentMethod === 'eSewa' ? 'selected' : ''}>eSewa</option>
                <option value="Khalti" ${e && e.paymentMethod === 'Khalti' ? 'selected' : ''}>Khalti</option>
                <option value="Bank Transfer" ${e && e.paymentMethod === 'Bank Transfer' ? 'selected' : ''}>Bank Transfer</option>
                <option value="Cash" ${!e || e.paymentMethod === 'Cash' ? 'selected' : ''}>Cash / Counter</option>
              </select>
            </div>
          </div>

          <div class="field" style="margin-top:12px;">
            <label>Notes / Vendor Details</label>
            <input id="exp_notes" value="${e ? e.notes : ''}" placeholder="e.g. Receipt #1042 / Supplier name">
          </div>

          <div class="modal-foot" style="margin-top:18px;display:flex;justify-content:flex-end;gap:8px;">
            <button type="button" class="btn btn-secondary" onclick="closeModal()">Cancel</button>
            <button type="submit" class="btn btn-primary">${e ? 'Update Expense' : 'Save Expense'}</button>
          </div>
        </form>
      </div>
    </div>
  `;
  document.getElementById('modalOverlay').classList.add('show');
}
window.openExpenseModal = openExpenseModal;

async function submitExpenseForm(event, eid){
  event.preventDefault();
  const payload = {
    title: document.getElementById('exp_title').value.trim(),
    amount: parseFloat(document.getElementById('exp_amount').value) || 0,
    date: document.getElementById('exp_date').value,
    category: document.getElementById('exp_category').value,
    paymentMethod: document.getElementById('exp_method').value,
    notes: document.getElementById('exp_notes').value.trim()
  };

  const url = eid ? `/api/expenses/${eid}` : '/api/expenses';
  const method = eid ? 'PUT' : 'POST';

  try {
    const res = await fetch(url, {
      method: method,
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(payload)
    });
    if (res.ok) {
      toast(eid ? 'Expense updated successfully' : 'Expense recorded successfully');
      closeModal();
      await fetchAllData();
    } else {
      toast('Failed to save expense', 'error');
    }
  } catch (err) {
    toast('Error saving expense', 'error');
  }
}
window.submitExpenseForm = submitExpenseForm;

async function deleteExpense(eid){
  if (!confirm('Are you sure you want to delete this expense record?')) return;
  try {
    const res = await fetch(`/api/expenses/${eid}`, { method: 'DELETE' });
    if (res.ok) {
      toast('Expense deleted');
      await fetchAllData();
    } else {
      toast('Failed to delete expense', 'error');
    }
  } catch (err) {
    toast('Error deleting expense', 'error');
  }
}
window.deleteExpense = deleteExpense;

/* ============================= REPORTS & ANALYTICS ============================= */
if(!STATE.reportTimeframe) STATE.reportTimeframe = 'month';
if(!STATE.reportCategory) STATE.reportCategory = 'all';
if(!STATE.reportStartDate) STATE.reportStartDate = '2026-07-01';
if(!STATE.reportEndDate) STATE.reportEndDate = new Date().toISOString().split('T')[0];

function setReportTimeframe(tf){
  STATE.reportTimeframe = tf;
  const today = new Date();
  if (tf === 'today') {
    STATE.reportStartDate = today.toISOString().split('T')[0];
    STATE.reportEndDate = today.toISOString().split('T')[0];
  } else if (tf === 'week') {
    const d = new Date(today);
    d.setDate(d.getDate() - 7);
    STATE.reportStartDate = d.toISOString().split('T')[0];
    STATE.reportEndDate = today.toISOString().split('T')[0];
  } else if (tf === 'month') {
    const d = new Date(today);
    d.setDate(d.getDate() - 30);
    STATE.reportStartDate = d.toISOString().split('T')[0];
    STATE.reportEndDate = today.toISOString().split('T')[0];
  } else if (tf === 'year') {
    const d = new Date(today);
    d.setFullYear(d.getFullYear() - 1);
    STATE.reportStartDate = d.toISOString().split('T')[0];
    STATE.reportEndDate = today.toISOString().split('T')[0];
  }
  renderAll();
}
window.setReportTimeframe = setReportTimeframe;

function setReportCategory(cat){
  STATE.reportCategory = cat;
  renderAll();
}
window.setReportCategory = setReportCategory;

function updateReportCustomDates(){
  STATE.reportTimeframe = 'custom';
  STATE.reportStartDate = document.getElementById('repStartDate').value || STATE.reportStartDate;
  STATE.reportEndDate = document.getElementById('repEndDate').value || STATE.reportEndDate;
  renderAll();
}
window.updateReportCustomDates = updateReportCustomDates;

function renderReports(){
  const start = new Date(STATE.reportStartDate);
  const end = new Date(STATE.reportEndDate);
  end.setHours(23, 59, 59, 999);

  // 1. Filter Orders by Date Range and Category
  const filteredOrders = ORDERS.filter(o => {
    const oDate = new Date(o.date || '2026-07-28');
    const inDateRange = oDate >= start && oDate <= end;
    if (!inDateRange) return false;
    
    if (STATE.reportCategory !== 'all') {
      const hasCategoryItem = o.items && o.items.some(it => {
        const prod = PRODUCTS.find(p => p.name === it.name);
        return prod && prod.category === STATE.reportCategory;
      });
      if (!hasCategoryItem) return false;
    }
    return true;
  });

  // 2. Financial Metrics Calculation
  const totalRevenue = filteredOrders.reduce((a,o) => a + o.total, 0);
  let totalCOGS = 0;
  let totalUnitsSold = 0;

  const prodStats = {};
  PRODUCTS.forEach(p => {
    prodStats[p.id] = { product: p, units: 0, revenue: 0, cost: 0 };
  });

  filteredOrders.forEach(o => {
    (o.items || []).forEach(it => {
      const prod = PRODUCTS.find(p => p.name === it.name);
      const unitCost = prod ? prod.cost : Math.round(it.price * 0.5);
      const cogs = unitCost * it.qty;
      totalCOGS += cogs;
      totalUnitsSold += it.qty;

      const pid = prod ? prod.id : it.name;
      if (!prodStats[pid]) {
        prodStats[pid] = { product: prod || {name: it.name, price: it.price, cost: unitCost}, units: 0, revenue: 0, cost: 0 };
      }
      prodStats[pid].units += it.qty;
      prodStats[pid].revenue += (it.price * it.qty);
      prodStats[pid].cost += cogs;
    });
  });

  // 3. Unsold Remaining Inventory Stock Calculation
  let remainingStockUnits = 0;
  let remainingStockCostVal = 0;
  let remainingStockSalesVal = 0;

  const stockByCategory = {};
  PRODUCTS.forEach(p => {
    const cat = p.category || 'Apparel & Clothing';
    if(!stockByCategory[cat]) stockByCategory[cat] = { units: 0, cost: 0, sales: 0 };
    (p.variants || []).forEach(v => {
      const st = Math.max(0, v.stock || 0);
      remainingStockUnits += st;
      remainingStockCostVal += (st * (p.cost || 0));
      remainingStockSalesVal += (st * (p.price || 0));

      stockByCategory[cat].units += st;
      stockByCategory[cat].cost += (st * (p.cost || 0));
      stockByCategory[cat].sales += (st * (p.price || 0));
    });
  });

  const grossProfit = totalRevenue - totalCOGS;
  const grossMarginPct = totalRevenue ? Math.round((grossProfit / totalRevenue) * 100) : 0;
  const avgOrderVal = filteredOrders.length ? Math.round(totalRevenue / filteredOrders.length) : 0;

  // Best Selling Products Sorting
  const sortedProductStats = Object.values(prodStats)
    .filter(ps => ps.units > 0 || ps.revenue > 0)
    .sort((a,b) => b.units - a.units);

  const displayProducts = sortedProductStats.length ? sortedProductStats : PRODUCTS.slice(0, 5).map(p => ({
    product: p, units: Math.floor(Math.random()*15)+5, revenue: p.price*10, cost: p.cost*10
  }));

  // NCM Destination City Breakdown
  const destCounts = {};
  filteredOrders.forEach(o => {
    const dest = o.destination || 'Kathmandu';
    destCounts[dest] = (destCounts[dest] || 0) + 1;
  });

  const totalExpenses = EXPENSES.reduce((a,e) => a + (e.amount || 0), 0);
  const initialCapital = 250000;
  const netOperatingProfit = grossProfit - totalExpenses;
  const capitalBuffer = Math.max(0, initialCapital - totalExpenses);

  return `
    <div class="page-head">
      <div>
        <h1>Reports &amp; Sales Statistics</h1>
        <p class="page-sub">Comprehensive financial analysis, product ranking &amp; date range statistics</p>
      </div>
      <button class="btn btn-secondary" onclick="toast('Report exported as CSV')">${icon('download')} Export CSV</button>
    </div>

    <!-- Filter Control Toolbar -->
    <div class="card card-pad" style="margin-bottom:18px;">
      <div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12px;">
        
        <!-- Preset Date Filters -->
        <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;">
          <span style="font-size:12px;font-weight:700;color:var(--ink-soft);margin-right:4px;">Timeframe:</span>
          <button class="btn ${tf==='today'?'btn-primary':'btn-secondary'} btn-sm" onclick="setReportTimeframe('today')">Today</button>
          <button class="btn ${tf==='week'?'btn-primary':'btn-secondary'} btn-sm" onclick="setReportTimeframe('week')">This Week</button>
          <button class="btn ${tf==='month'?'btn-primary':'btn-secondary'} btn-sm" onclick="setReportTimeframe('month')">This Month</button>
          <button class="btn ${tf==='year'?'btn-primary':'btn-secondary'} btn-sm" onclick="setReportTimeframe('year')">This Year</button>
        </div>

        <!-- Custom Date Range Pickers (Responsive) -->
        <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;max-width:100%;">
          <span style="font-size:12px;font-weight:600;color:var(--ink-faint);">Date Range:</span>
          <input type="date" id="repStartDate" value="${STATE.reportStartDate}" onchange="updateReportCustomDates()" style="padding:5px 6px;font-size:11.5px;border:1px solid var(--border);border-radius:6px;background:var(--surface);max-width:125px;box-sizing:border-box;">
          <span style="font-size:12px;color:var(--ink-faint);">to</span>
          <input type="date" id="repEndDate" value="${STATE.reportEndDate}" onchange="updateReportCustomDates()" style="padding:5px 6px;font-size:11.5px;border:1px solid var(--border);border-radius:6px;background:var(--surface);max-width:125px;box-sizing:border-box;">
        </div>

        <!-- Category Filter -->
        <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;">
          <span style="font-size:12px;font-weight:700;color:var(--ink-soft);">Category:</span>
          <select onchange="setReportCategory(this.value)" style="padding:5px 10px;font-size:12px;border:1px solid var(--border);border-radius:6px;background:var(--surface);">
            <option value="all" ${STATE.reportCategory==='all'?'selected':''}>All Categories</option>
            ${CATEGORIES.map(cat => `<option value="${cat}" ${STATE.reportCategory===cat?'selected':''}>${cat}</option>`).join('')}
          </select>
        </div>

      </div>
    </div>

    <!-- Capital Investment & Financial Ledger Overview Widget -->
    <div class="card card-pad" style="margin-bottom:18px;background:var(--bg);border:1px solid var(--border);">
      <div class="section-title" style="display:flex;align-items:center;justify-content:space-between;margin-bottom:4px;">
        <span style="font-size:14px;font-weight:700;">💼 Capital Investment &amp; Financial Ledger</span>
        <span class="pill pill-success" style="font-size:11.5px;font-weight:700;">Initial Seed: ${fmtNPR(initialCapital)}</span>
      </div>
      <div class="section-sub" style="margin-bottom:14px;">Capital allocation, gross profit, operating expense outflow &amp; net operating balance</div>
      
      <div class="stat-grid" style="grid-template-columns:repeat(4,1fr);margin-bottom:0;">
        <div class="card stat-card" style="background:var(--surface);">
          <div class="stat-icon" style="background:var(--accent-soft);color:var(--accent-soft-ink);">${icon('money')}</div>
          <div class="stat-value">${fmtNPR(initialCapital)}</div>
          <div class="stat-label">Initial Seed Capital</div>
        </div>

        <div class="card stat-card" style="background:var(--surface);">
          <div class="stat-icon" style="background:var(--success-soft);color:var(--success);">${icon('trend')}</div>
          <div class="stat-value">${fmtNPR(grossProfit)}</div>
          <div class="stat-label">Gross Profit (Revenue - COGS)</div>
        </div>

        <div class="card stat-card" style="background:var(--surface);">
          <div class="stat-icon" style="background:var(--danger-soft);color:var(--danger);">${icon('wallet')}</div>
          <div class="stat-value">${fmtNPR(totalExpenses)}</div>
          <div class="stat-label">Operating Expenses Outflow</div>
        </div>

        <div class="card stat-card" style="background:var(--surface);">
          <div class="stat-icon" style="background:var(--info-soft);color:var(--info);">${icon('box')}</div>
          <div class="stat-value">${fmtNPR(capitalBuffer)}</div>
          <div class="stat-label">Remaining Capital Buffer</div>
        </div>
      </div>
    </div>

    <!-- KPI Summary Cards -->
    <div class="stat-grid" style="grid-template-columns:repeat(4,1fr);margin-bottom:18px;">
      <div class="card stat-card">
        <div class="stat-icon" style="background:var(--success-soft);color:var(--success);">${icon('money')}</div>
        <div class="stat-value">${fmtNPR(totalRevenue)}</div>
        <div class="stat-label">Gross Revenue</div>
      </div>

      <div class="card stat-card">
        <span class="stat-trend trend-up">${grossMarginPct}% profit margin</span>
        <div class="stat-icon" style="background:var(--accent-soft);color:var(--accent-soft-ink);">${icon('trend')}</div>
        <div class="stat-value">${fmtNPR(grossProfit)}</div>
        <div class="stat-label">Gross Profit Margin</div>
      </div>

      <div class="card stat-card">
        <div class="stat-icon" style="background:var(--info-soft);color:var(--info);">${icon('orders')}</div>
        <div class="stat-value">${filteredOrders.length}</div>
        <div class="stat-label">Total Orders (Avg ${fmtNPR(avgOrderVal)})</div>
      </div>

      <div class="card stat-card">
        <div class="stat-icon" style="background:var(--warning-soft);color:var(--warning);">${icon('inventory')}</div>
        <div class="stat-value">${totalUnitsSold}</div>
        <div class="stat-label">Units Sold</div>
      </div>
    </div>

    <!-- Remaining Inventory Stock Valuation Widget -->
    <div class="card card-pad" style="margin-bottom:18px;background:linear-gradient(135deg, var(--surface) 0%, var(--bg) 100%);border:1px solid var(--border);">
      <div class="section-title" style="display:flex;align-items:center;justify-content:space-between;margin-bottom:4px;">
        <span style="font-size:14px;font-weight:700;">📦 Remaining Unsold Inventory Stock Valuation</span>
        <span class="pill pill-info" style="font-size:11.5px;font-weight:700;">${remainingStockUnits} Units Remaining</span>
      </div>
      <div class="section-sub" style="margin-bottom:14px;">Total cost investment &amp; potential retail revenue of remaining unsold stock in inventory</div>
      
      <div class="stat-grid" style="grid-template-columns:repeat(3,1fr);margin-bottom:0;">
        <div class="card stat-card" style="background:var(--surface);">
          <div class="stat-icon" style="background:var(--info-soft);color:var(--info);">${icon('inventory')}</div>
          <div class="stat-value">${remainingStockUnits} pcs</div>
          <div class="stat-label">Stock Units Left</div>
        </div>

        <div class="card stat-card" style="background:var(--surface);">
          <div class="stat-icon" style="background:var(--warning-soft);color:var(--warning);">${icon('money')}</div>
          <div class="stat-value">${fmtNPR(remainingStockCostVal)}</div>
          <div class="stat-label">Stock Cost Value (Investment)</div>
        </div>

        <div class="card stat-card" style="background:var(--surface);">
          <div class="stat-icon" style="background:var(--success-soft);color:var(--success);">${icon('trend')}</div>
          <div class="stat-value">${fmtNPR(remainingStockSalesVal)}</div>
          <div class="stat-label">Potential Retail Sales Value</div>
        </div>
      </div>
    </div>

    <!-- Charts Section -->
    <div class="report-grid">
      <div class="card card-pad">
        <div class="section-title">Sales &amp; Revenue Trend</div>
        <div class="section-sub">Revenue performance for selected timeframe (${STATE.reportStartDate} to ${STATE.reportEndDate})</div>
        <div class="chart-box"><canvas id="salesChart"></canvas></div>
      </div>
      <div class="card card-pad">
        <div class="section-title">Order Status Distribution</div>
        <div class="section-sub">Breakdown across ${filteredOrders.length} orders in range</div>
        <div class="chart-box" style="height:220px;"><canvas id="statusChart"></canvas></div>
      </div>
    </div>

    <!-- Detailed Statistics Tables -->
    <div class="report-grid">
      
      <!-- Best-Selling Products Ranking -->
      <div class="card card-pad">
        <div class="section-title">🔥 Best-Selling Products</div>
        <div class="section-sub">Ranked by total units sold &amp; gross profit generated</div>
        
        <table class="tbl" style="margin-top:12px;">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Product</th>
              <th>Units Sold</th>
              <th>Revenue</th>
              <th>Net Profit</th>
            </tr>
          </thead>
          <tbody>
            ${displayProducts.map((ps, idx) => {
              const p = ps.product;
              const profit = ps.revenue - ps.cost;
              return `
                <tr>
                  <td><div class="rank-badge">${idx + 1}</div></td>
                  <td>
                    <div style="font-weight:600;font-size:12.5px;">${p.name}</div>
                    <div class="td-sub" style="font-size:11px;">${p.category || 'Apparel'}</div>
                  </td>
                  <td class="mono font-bold">${ps.units} pcs</td>
                  <td class="mono font-bold" style="color:var(--accent);">${fmtNPR(ps.revenue)}</td>
                  <td class="mono" style="color:var(--success);font-weight:600;">+${fmtNPR(profit)}</td>
                </tr>`;
            }).join('')}
          </tbody>
        </table>
      </div>

      <!-- Regional & Offer Performance -->
      <div class="card card-pad">
        <div class="section-title">🚚 NCM Destination Breakdown</div>
        <div class="section-sub">Order volume per delivery branch</div>
        
        <div style="margin-top:12px;">
          ${Object.keys(destCounts).length ? Object.entries(destCounts).map(([dest, count]) => `
            <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 0;border-bottom:1px solid var(--border-soft);">
              <div style="font-weight:600;font-size:12.5px;">${dest}</div>
              <div style="display:flex;align-items:center;gap:10px;">
                <span class="mono" style="font-size:12px;color:var(--ink-soft);">${count} orders</span>
                <span class="pill pill-info" style="font-size:11px;">${Math.round((count/filteredOrders.length)*100 || 0)}%</span>
              </div>
            </div>
          `).join('') : '<div style="padding:20px;text-align:center;font-size:12px;color:var(--ink-faint);">No regional data for selected range</div>'}
        </div>

        <div class="section-title" style="margin-top:24px;">🏷️ (sale) Items &amp; Promotional Revenue</div>
        <div class="section-sub">Units sold &amp; total revenue earned from promotional (sale) tagged items</div>
        <div style="margin-top:8px;padding:10px 12px;background:var(--bg);border-radius:8px;display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
          <span style="font-size:12px;font-weight:700;">Total (sale) Items Revenue:</span>
          <span style="font-size:14px;font-weight:800;color:var(--accent);">${fmtNPR(OFFERS.reduce((a,o)=>a+(o.revenue||0),0))}</span>
        </div>
        <table class="tbl">
          <thead><tr><th>Promotional Sale Item</th><th>Units Sold</th><th>Total Earned</th></tr></thead>
          <tbody>
            ${OFFERS.map(o=>`<tr><td><span class="price-tag">${o.name.replace('Special Sale: ','')}</span></td><td class="mono font-bold">${o.redemptions} pcs</td><td class="mono font-bold" style="color:var(--success);">${fmtNPR(o.revenue)}</td></tr>`).join('')}
          </tbody>
        </table>

      </div>
    </div>`;
}

function afterReportsRender(){
  const salesEl = document.getElementById('salesChart');
  if(salesEl && window.Chart){
    const days = Array.from({length:14}).map((_,i)=>{const d=new Date(2026,6,15+i); return d.getDate()+'/'+(d.getMonth()+1);});
    const data = [42000,38500,51000,47500,60200,55000,72300,68000,81500,76200,90100,85300,98700,112400];
    new Chart(salesEl.getContext('2d'), {
      type:'line',
      data:{labels:days, datasets:[{label:'Revenue (NPR)', data, borderColor:'#EE501F', backgroundColor:'rgba(238,80,31,0.08)', fill:true, tension:0.35, pointRadius:3, borderWidth:2.5}]},
      options:{responsive:true, maintainAspectRatio:false, plugins:{legend:{display:false}},
        scales:{x:{grid:{display:false}, ticks:{font:{size:10.5}}}, y:{grid:{color:'#EFEEEA'}, ticks:{font:{size:10.5}, callback:v=>'Rs.'+(v/1000)+'k'}}}}
    });
  }
  const statusEl = document.getElementById('statusChart');
  if(statusEl && window.Chart){
    const counts = {pending:0,confirmed:0,shipped:0,delivered:0};
    ORDERS.forEach(o=>counts[o.status]=(counts[o.status]||0)+1);
    new Chart(statusEl.getContext('2d'), {
      type:'doughnut',
      data:{labels:['Pending','Confirmed','Shipped','Delivered'], datasets:[{data:[counts.pending||1,counts.confirmed||1,counts.shipped||1,counts.delivered||1],
        backgroundColor:['#9A9CA3','#2E5AA8','#B4740E','#1D7A56'], borderWidth:0}]},
      options:{responsive:true, maintainAspectRatio:false, plugins:{legend:{position:'bottom', labels:{boxWidth:9, font:{size:11}}}}, cutout:'65%'}
    });
  }
}

/* ============================= INITIALIZATION & OVERLAY LISTENERS ============================= */
document.addEventListener('DOMContentLoaded', ()=>{
  document.getElementById('panelOverlay').addEventListener('click', e=>{ if(e.target.id==='panelOverlay') closePanel(); });
  document.getElementById('modalOverlay').addEventListener('click', e=>{ if(e.target.id==='modalOverlay') closeModal(); });
  document.addEventListener('click', e=>{
    if(!e.target.closest('.search-box-wrap')) closeGlobalSearch();
    if(!e.target.closest('.notif-wrap')){
      const notifDropdown = document.getElementById('notifDropdown');
      if(notifDropdown) notifDropdown.classList.remove('show');
    }
    if(!e.target.closest('.ncm-branch-select-wrap')){
      document.querySelectorAll('.ncm-branch-dropdown').forEach(d=>d.classList.remove('show'));
    }
  });
  fetchAllData();
});
