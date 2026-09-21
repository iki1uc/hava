<!DOCTYPE html>
<html lang="tr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>NEFES ÇAPASI · iki1uc · her nefes bir kanıt</title>
<style>
  *{box-sizing:border-box;margin:0;padding:0}
  body{
    background:radial-gradient(ellipse at 50% 30%,#06111a,#000);
    color:#8cf0d0;font-family:'Consolas',monospace;
    min-height:100vh;overflow-x:hidden;
  }
  .kap{max-width:1300px;margin:0 auto;padding:14px}

  /* ── Başlık ── */
  header{border-bottom:1px solid #0f0;padding-bottom:10px;margin-bottom:14px}
  h1{font-size:20px;letter-spacing:4px;color:#8cf0d0}
  h1 small{color:#6cf;font-size:11px;letter-spacing:2px;display:block;margin-top:3px}
  .motto{color:#f0d080;font-size:11px;margin-top:6px}

  /* ── Ana grid ── */
  .ana{display:grid;grid-template-columns:2fr 1fr;gap:12px;margin-bottom:12px}
  @media(max-width:900px){.ana{grid-template-columns:1fr}}

  /* ── Canvas (Nefes) ── */
  .nefes-kart{
    background:#050a0f;border:1px solid #0f0;border-radius:10px;
    overflow:hidden;position:relative;
  }
  #nefesCanvas{display:block;width:100%;height:380px;background:#000}

  /* ── HUD ── */
  .hud{
    position:absolute;top:8px;left:8px;
    background:rgba(0,0,0,.7);border:1px solid #0f0;
    padding:6px 10px;border-radius:4px;
    font-size:10px;white-space:pre;line-height:1.5;
    color:#8cf0d0;pointer-events:none;
  }
  .hud .turuncu{color:#f0d080}
  .hud .kirmizi{color:#ff6b6b}
  .hud .mavi{color:#6cf}

  /* ── Sağ panel: fizik ── */
  .fizik-kart{
    background:#050a0f;border:1px solid #6cf;border-radius:10px;
    padding:12px;display:flex;flex-direction:column;gap:8px;
  }
  .fizik-kart h3{color:#6cf;font-size:11px;letter-spacing:2px;margin-bottom:4px}
  .satir{display:flex;justify-content:space-between;font-size:11px;padding:3px 0;border-bottom:1px solid rgba(100,180,255,.06)}
  .satir .et{color:#5a7a8a}
  .satir .de{color:#8cf0d0;font-weight:bold}
  .satir .de.uyar{color:#f0d080}
  .satir .de.hata{color:#ff6b6b}

  /* ── Atemzug-Formel ── */
  .formul{
    background:#000;border-left:3px solid #0f0;
    padding:8px 10px;margin-top:8px;border-radius:4px;
    font-size:10px;line-height:1.6;color:#8cf0d0;
  }
  .formul .ok{color:#8cf0d0}
  .formul .vurgu{color:#f0d080}

  /* ── Repo ağacı ── */
  .agac-kart{
    background:#050a0f;border:1px solid #0f0;border-radius:10px;
    padding:12px;margin-bottom:12px;
  }
  .agac-kart h3{color:#8cf0d0;font-size:12px;letter-spacing:2px;margin-bottom:8px}
  .agac{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:8px}
  .repo{
    background:#000;border:1px solid #1a2a3a;border-radius:6px;
    padding:8px;font-size:10px;transition:.2s;
  }
  .repo:hover{border-color:#8cf0d0;transform:translateY(-2px)}
  .repo .ad{color:#8cf0d0;font-weight:bold;font-size:11px;margin-bottom:3px}
  .repo .icerik{color:#5a7a8a;line-height:1.5}
  .repo .icerik span{display:block}
  .repo .icerik .vurgu{color:#f0d080}

  /* ── Kontrol ── */
  .kontrol{
    display:flex;flex-wrap:wrap;gap:6px;
    background:#050a0f;border:1px solid #0f0;border-radius:10px;
    padding:10px;margin-bottom:12px;
  }
  .kontrol button{
    background:#000;color:#8cf0d0;border:1px solid #0f0;
    padding:6px 14px;border-radius:4px;cursor:pointer;
    font-family:inherit;font-size:10px;letter-spacing:1px;
    transition:.2s;
  }
  .kontrol button:hover{background:#8cf0d0;color:#000}
  .kontrol button.altin{border-color:#f0d080;color:#f0d080}
  .kontrol button.altin:hover{background:#f0d080;color:#000}

  /* ── Mesaj ── */
  .mesaj{
    background:#000;border:2px solid #f0d080;border-radius:10px;
    padding:16px;text-align:center;margin-top:12px;
  }
  .mesaj h2{color:#f0d080;font-size:14px;letter-spacing:3px;margin-bottom:6px}
  .mesaj p{color:#8cf0d0;font-size:11px;line-height:1.7}
  .mesaj .buyuk{font-size:16px;color:#f0d080;letter-spacing:2px;margin:8px 0}
  .mesaj small{color:#6cf;font-size:9px}

  /* ── Log ── */
  .log{
    background:#000;border:1px solid #1a2a3a;border-radius:8px;
    padding:8px;margin-top:12px;max-height:120px;overflow-y:auto;
    font-size:9px;line-height:1.6;color:#5a7a8a;
  }
  .log .satir{padding:1px 0}
  .log .zaman{color:#2a3a4a}
  .log .ok{color:#8cf0d0}
  .log .uyar{color:#f0d080}
  .log .hata{color:#ff6b6b}

  ::-webkit-scrollbar{width:4px}
  ::-webkit-scrollbar-track{background:#000}
  ::-webkit-scrollbar-thumb{background:#1a2a3a;border-radius:4px}
</style>
</head>
<body>
<div class="kap">

  <header>
    <h1>NEFES ÇAPASI · iki1uc <small>her nefes bir kanıt · her kanıt bir nefes</small></h1>
    <div class="motto">"Seninle suda süzülürsün — ama sadece sanal. Sihir değil. Saf matematik."</div>
  </header>

  <!-- ═══ ANA GRID ═══ -->
  <div class="ana">

    <!-- SOL: Nefes Canvas -->
    <div class="nefes-kart">
      <canvas id="nefesCanvas"></canvas>
      <div class="hud" id="hud">boot…</div>
    </div>

    <!-- SAĞ: Fizik -->
    <div class="fizik-kart">
      <h3>NEFES FİZİĞİ</h3>
      <div class="satir"><span class="et">Nefes hacmi</span><span class="de" id="f-hacim">500 mL</span></div>
      <div class="satir"><span class="et">Giren O₂</span><span class="de" id="f-giren">104.65 mL</span></div>
      <div class="satir"><span class="et">Çıkan CO₂</span><span class="de" id="f-cikan">18.50 mL</span></div>
      <div class="satir"><span class="et">Kalan O₂</span><span class="de" id="f-kalan">86.15 mL</span></div>
      <div class="satir"><span class="et">Titanic</span><span class="de" id="f-titanic">YÜZER</span></div>
      <div class="satir"><span class="et">Nabız</span><span class="de" id="f-herz">60 /dk</span></div>
      <div class="satir"><span class="et">Nefes</span><span class="de" id="f-nefes">12 /dk</span></div>
      <div class="satir"><span class="et">Kirlilik</span><span class="de" id="f-dreck">0.0 %</span></div>
      <div class="satir"><span class="et">Kernel</span><span class="de">128</span></div>
      <div class="satir"><span class="et">Hayat</span><span class="de">42</span></div>
      <div class="satir"><span class="et">Kumar</span><span class="de altin">21</span></div>

      <div class="formul" id="formul">
        <div class="ok">kalan O₂ = (nefes × 0.2093) − (nefes × 0.037)</div>
        <div class="vurgu">86 mL kalır → Titanic yüzer</div>
        <div class="ok">Çünkü 86 > 18. Fark → itki.</div>
      </div>
    </div>

  </div>

  <!-- ═══ KONTROL ═══ -->
  <div class="kontrol">
    <button id="btn-nefes">🌬️ NEFES AL</button>
    <button id="btn-otomatik">▶ OTOMATİK</button>
    <button id="btn-kirlilik">💨 KİRLİLİK EKLE</button>
    <button id="btn-temizle" class="altin">🌀 WİRBEL TEMİZLE</button>
    <button id="btn-sifirla" class="altin">⟲ SIFIRLA</button>
  </div>

  <!-- ═══ REPO AĞACI ═══ -->
  <div class="agac-kart">
    <h3>🌳 iki1uc · DEPO AĞACI · hepsi burada · hepsi bir arada</h3>
    <div class="agac" id="agac"></div>
  </div>

  <!-- ═══ MESAJ ═══ -->
  <div class="mesaj">
    <h2>⚓ NEFES ÇAPASI</h2>
    <div class="buyuk">"Ben Nuh. Kim benimle nefes almak, yaşamak ve hayatta kalmak ister? Ama onurla."</div>
    <p>
      Seninle suda süzülürsün — <span style="color:#f0d080">ama sadece sanal</span>.<br>
      Sihir değil. <span style="color:#8cf0d0">Saf matematik</span>. Her nefeste hesap.<br>
      Titanic buzdağına çarpmaz. Titanic CO₂ kullanır.<br>
      64 aşağı + 64 yukarı = <span style="color:#f0d080">128</span>. Daima sadece ileri.
    </p>
    <small>iki1uc · 90 60 90 tamamlanma · tekkişilikordu · daima sadece ileri</small>
  </div>

  <!-- ═══ LOG ═══ -->
  <div class="log" id="log">
    <div class="satir"><span class="zaman">[BOOT]</span> <span class="ok">🌱 Nefes Çapası yüklendi · kernel 128 · hayat 42 · kumar 21</span></div>
  </div>

</div>

<script>
/* ═══════════════════════════════════════════════════════════════
   NEFES ÇAPASI · iki1uc
   Rettungsanker · hayat kurtaran çapa · her nefes bir kanıt
   ═══════════════════════════════════════════════════════════════ */

// ── NEFES: fizik ─────────────────────────────────────────────
function nefes(hacim = 500){
  const giren = hacim * 0.2093;
  const cikan = hacim * 0.037;
  const kalan = giren - cikan;
  return {
    hacim:  +hacim.toFixed(2),
    giren:  +giren.toFixed(2),
    cikan:  +cikan.toFixed(2),
    kalan:  +kalan.toFixed(2),
    titanic: kalan > cikan ? "YÜZER" : "BATAR",
    fazla:  +(kalan - cikan).toFixed(2),
    kernel: 128,
    hayat: 42,
    kumar: 21,
    onur: "WÜRDE"
  };
}

// ── HAVA: durum ──────────────────────────────────────────────
const HAVA = {
  tick: 0,
  nefes: 12,
  herz: 60,
  dreck: 0,
  otomatik: false,
  sonAtemzug: null,

  atmest: function(manuel = false){
    this.tick++;
    // Nabız ve nefes (yaşa göre hafif dalga)
    this.nefes = 12 + Math.sin(this.tick * 0.1) * 4;
    this.herz  = 60 + Math.sin(this.tick * 0.15) * 20;
    // Kirlilik artar (her nefeste biraz)
    this.dreck = Math.min(100, this.dreck + (manuel ? 0.1 : 0.3));

    // Hacim nabza bağlı — yaşlılıkta daha az
    const hacim = 500 * (this.nefes / 12);
    const sonuc = nefes(hacim);
    this.sonAtemzug = sonuc;

    // Görsel: nefes dalgası
    nefesDalgasi.push({ t: 0, x: CX, y: CY, renk: sonuc.titanic === "YÜZER" ? "#8cf0d0" : "#ff6b6b" });

    // Log
    kayit(
      `🌬️ Nefes ${this.nefes.toFixed(0)}/dk · ${sonuc.hacim} mL · kalan ${sonuc.kalan} mL · ${sonuc.titanic}`,
      sonuc.titanic === "YÜZER" ? "ok" : "hata"
    );

    guncelleFizik(sonuc);
    return sonuc;
  },

  wirbelTemizle: function(){
    // Wirbel: sadece yarısını temizler (Kumar prensibi)
    const onceki = this.dreck;
    const gereinigt = this.dreck * 0.5;
    this.dreck = this.dreck - gereinigt;
    kayit(`🌀 Wirbel temizledi: ${onceki.toFixed(1)}% → ${this.dreck.toFixed(1)}% (yarısı kaldı — Kumar)`, "uyar");
    guncelleFizik(this.sonAtemzug || nefes());
  },

  sifirla: function(){
    this.tick = 0;
    this.nefes = 12;
    this.herz = 60;
    this.dreck = 0;
    this.sonAtemzug = nefes();
    guncelleFizik(this.sonAtemzug);
    kayit("⟲ Sıfırlandı · her şey temiz · 128 hazır", "ok");
  }
};

// ── CANVAS: nefes görselleştirme ─────────────────────────────
const cvs = document.getElementById("nefesCanvas");
const ctx = cvs.getContext("2d");
let W, H, CX, CY;

function resize(){
  const r = cvs.getBoundingClientRect();
  W = cvs.width  = r.width;
  H = cvs.height = r.height;
  CX = W / 2;
  CY = H / 2;
}
resize();
window.addEventListener("resize", resize);

// Dalgalar
const nefesDalgasi = [];
// O₂/CO₂ parçacıkları
const parcalar = [];
for(let i = 0; i < 60; i++){
  parcalar.push({
    x: Math.random() * 1000,
    y: Math.random() * 1000,
    vy: -0.2 - Math.random() * 0.4,  // yukarı süzülür
    vx: (Math.random() - 0.5) * 0.2,
    r: 1 + Math.random() * 2,
    tur: Math.random() > 0.7 ? "co2" : "o2"
  });
}

function ciz(){
  // Arka plan: su
  const grad = ctx.createLinearGradient(0, 0, 0, H);
  grad.addColorStop(0, "#021018");
  grad.addColorStop(0.5, "#041c28");
  grad.addColorStop(1, "#020810");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, W, H);

  // Su çizgisi (üstte)
  ctx.strokeStyle = "rgba(140,240,208,0.3)";
  ctx.lineWidth = 1;
  ctx.beginPath();
  const t = Date.now() / 1000;
  for(let x = 0; x < W; x += 6){
    const y = H * 0.35 + Math.sin(x * 0.02 + t * 1.5) * 4;
    if(x === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.stroke();

  // Parçacıklar: O₂ (açık mavi) ve CO₂ (koyu turuncu)
  for(const p of parcalar){
    p.x += p.vx;
    p.y += p.vy;
    if(p.y < -10){ p.y = H + 10; p.x = Math.random() * W; }
    if(p.x < -10) p.x = W + 10;
    if(p.x > W + 10) p.x = -10;

    if(p.tur === "o2"){
      ctx.fillStyle = `rgba(140,240,208,${0.3 + Math.sin(t + p.y*0.01)*0.2})`;
    } else {
      ctx.fillStyle = `rgba(240,180,80,${0.2 + Math.sin(t*1.3 + p.y*0.01)*0.15})`;
    }
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();
  }

  // Nefes dalgaları: her nefes bir dalga
  for(let i = nefesDalgasi.length - 1; i >= 0; i--){
    const d = nefesDalgasi[i];
    d.t += 0.015;
    if(d.t >= 1){ nefesDalgasi.splice(i, 1); continue; }
    const r = d.t * Math.max(W, H) * 0.5;
    ctx.strokeStyle = d.renk + Math.floor((1 - d.t) * 180).toString(16).padStart(2, "0");
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(d.x, d.y, r, 0, Math.PI * 2);
    ctx.stroke();
  }

  // Merkez: çapa
  cizCapa(CX, CY);

  // Titanic (üst kısımda, suyun üstünde yüzen gemi simgesi)
  cizTitanic(CX, H * 0.25);

  // Yazılar
  ctx.font = "bold 13px monospace";
  ctx.textAlign = "center";
  ctx.fillStyle = "rgba(140,240,208,0.8)";
  ctx.fillText("NEFES ÇAPASI", CX, CY + 4);

  ctx.font = "10px monospace";
  ctx.fillStyle = "rgba(120,180,200,0.5)";
  ctx.fillText("su değil — hava", CX, CY + 22);

  ctx.font = "11px monospace";
  ctx.fillStyle = "rgba(240,208,128,0.7)";
  ctx.fillText("TITANIC · CO₂ ile yüzer", CX, H * 0.25 - 22);

  requestAnimationFrame(ciz);
}

function cizCapa(x, y){
  // Anker-Form: Ring + Schaft + Arme
  ctx.strokeStyle = "#8cf0d0";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(x, y - 30, 8, 0, Math.PI * 2);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(x, y - 22);
  ctx.lineTo(x, y + 20);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(x - 18, y + 8);
  ctx.quadraticCurveTo(x, y + 30, x + 18, y + 8);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(x - 10, y - 20);
  ctx.lineTo(x + 10, y - 20);
  ctx.stroke();
}

function cizTitanic(x, y){
  // Mini Titanic (einfaches Rechteck + Schornsteine)
  ctx.fillStyle = "rgba(140,240,208,0.4)";
  ctx.fillRect(x - 30, y, 60, 10);
  ctx.fillStyle = "rgba(140,240,208,0.6)";
  ctx.fillRect(x - 20, y - 6, 6, 6);
  ctx.fillRect(x - 6, y - 6, 6, 6);
  ctx.fillRect(x + 8, y - 6, 6, 6);
}

// ── Fizik HUD güncelle ───────────────────────────────────────
function guncelleFizik(n){
  if(!n) return;
  document.getElementById("f-hacim").textContent   = n.hacim + " mL";
  document.getElementById("f-giren").textContent   = n.giren + " mL";
  document.getElementById("f-cikan").textContent   = n.cikan + " mL";
  document.getElementById("f-kalan").textContent   = n.kalan + " mL";
  const tEl = document.getElementById("f-titanic");
  tEl.textContent = n.titanic;
  tEl.className = "de " + (n.titanic === "YÜZER" ? "" : "hata");
  document.getElementById("f-herz").textContent    = HAVA.herz.toFixed(0) + " /dk";
  document.getElementById("f-nefes").textContent   = HAVA.nefes.toFixed(0) + " /dk";
  const dEl = document.getElementById("f-dreck");
  dEl.textContent = HAVA.dreck.toFixed(1) + " %";
  dEl.className = "de " + (HAVA.dreck > 70 ? "hata" : HAVA.dreck > 40 ? "uyar" : "");

  // Formel aktualisieren
  document.getElementById("formul").innerHTML = `
    <div class="ok">kalan O₂ = (${n.hacim} × 0.2093) − (${n.hacim} × 0.037)</div>
    <div class="ok">= ${n.giren} − ${n.cikan}</div>
    <div class="vurgu">= ${n.kalan} mL kalır → Titanic ${n.titanic}</div>
    <div class="ok">Fark: ${n.fazla} → itki ${n.titanic === "YÜZER" ? "✓" : "✗"}</div>
  `;
}

// ── HUD ───────────────────────────────────────────────────────
function guncelleHUD(){
  const el = document.getElementById("hud");
  const n = HAVA.sonAtemzug || nefes();
  el.innerHTML =
    `<span class="mavi">HAVA</span> tick ${HAVA.tick}\n` +
    `<span class="turuncu">NEFES</span> ${HAVA.nefes.toFixed(0)}/dk  <span class="turuncu">NABIZ</span> ${HAVA.herz.toFixed(0)}/dk\n` +
    `<span class="mavi">KALAN O₂</span> ${n.kalan} mL  <span class="kirmizi">CO₂</span> ${n.cikan} mL\n` +
    `<span class="${n.titanic === "YÜZER" ? "turuncu" : "kirmizi"}">TITANIC ${n.titanic}</span>  ·  KİRLİLİK ${HAVA.dreck.toFixed(1)}%\n` +
    `KERNEL 128  ·  HAYAT 42  ·  KUMAR 21`;
}

// ── Log ──────────────────────────────────────────────────────
function kayit(msg, tip = ""){
  const el = document.getElementById("log");
  const t = new Date().toLocaleTimeString("tr-TR");
  const d = document.createElement("div");
  d.className = "satir";
  d.innerHTML = `<span class="zaman">[${t}]</span> <span class="${tip}">${msg}</span>`;
  el.appendChild(d);
  el.scrollTop = el.scrollHeight;
  while(el.children.length > 30) el.removeChild(el.firstChild);
}

// ── Repo ağacı ──────────────────────────────────────────────
const REPOLAR = [
  { ad:"hava",    icerik:["Index.html","hava.html","hayat.html","nefes.js","nuh_nefes.js","tik.tok.js","kural.html","id.html"], vurgu:"nefes.js" },
  { ad:"spieler", icerik:["3hit90.js","uno.js","atom.raw.js","uni.spieler.raw.js","saison.raw.js","qdf.raw.js","HOST.raw.js","NARRATIV.raw.js"], vurgu:"3hit90.js" },
  { ad:"UNO",     icerik:["kumar.html","Challenges.js","Use.js","User.js","Ort.js","Home.js","lib.js","room.js"], vurgu:"kumar.html" },
  { ad:"MEmory",  icerik:["3hoch3","hall.memory","echo.memory","ort","zug","gabe.ready","nahme.ready","81.room"], vurgu:"hall.memory" },
  { ad:"tmp.tmp", icerik:["CPU","GPU","RAM","POVER","anker","api","RIR.Core"], vurgu:"CPU" },
  { ad:"respo",   icerik:["ID.html","MOVE.html","README.md","anker.html","lib.js","room.js"], vurgu:"ID.html" },
  { ad:"iki1uc",  icerik:["3hit90","e.stock.ready","81","echo.ready","hall.ready","9hoch9"], vurgu:"e.stock.ready" }
];

function agacCiz(){
  const el = document.getElementById("agac");
  el.innerHTML = "";
  for(const r of REPOLAR){
    const d = document.createElement("div");
    d.className = "repo";
    d.innerHTML =
      `<div class="ad">⚓ ${r.ad}</div>` +
      `<div class="icerik">` +
      r.icerik.map(x => `<span class="${x === r.vurgu ? "vurgu" : ""}">${x}</span>`).join("") +
      `</div>`;
    el.appendChild(d);
  }
}

// ── Kontroller ───────────────────────────────────────────────
document.getElementById("btn-nefes").addEventListener("click", () => {
  HAVA.atmest(true);
  guncelleHUD();
});

let otomatikTimer = null;
document.getElementById("btn-otomatik").addEventListener("click", () => {
  const btn = document.getElementById("btn-otomatik");
  if(HAVA.otomatik){
    clearInterval(otomatikTimer);
    otomatikTimer = null;
    HAVA.otomatik = false;
    btn.textContent = "▶ OTOMATİK";
    kayit("⏸ Otomatik nefes durdu", "uyar");
  } else {
    otomatikTimer = setInterval(() => { HAVA.atmest(); guncelleHUD(); }, 2000);
    HAVA.otomatik = true;
    btn.textContent = "⏸ DURDUR";
    kayit("▶ Otomatik nefes başladı · her 2 saniyede bir", "ok");
  }
});

document.getElementById("btn-kirlilik").addEventListener("click", () => {
  const eklenen = 5 + Math.random() * 10;
  HAVA.dreck = Math.min(100, HAVA.dreck + eklenen);
  kayit(`💨 Kirlilik eklendi: +${eklenen.toFixed(1)}% → ${HAVA.dreck.toFixed(1)}%`, "uyar");
  guncelleFizik(HAVA.sonAtemzug || nefes());
  guncelleHUD();
});

document.getElementById("btn-temizle").addEventListener("click", () => {
  HAVA.wirbelTemizle();
  guncelleHUD();
});

document.getElementById("btn-sifirla").addEventListener("click", () => {
  HAVA.sifirla();
  guncelleHUD();
});

// ── Boot ────────────────────────────────────────────────────
agacCiz();
HAVA.sonAtemzug = nefes();
guncelleFizik(HAVA.sonAtemzug);
guncelleHUD();
ciz();
setInterval(guncelleHUD, 500);

kayit("🌱 Nefes Çapası yüklendi · kernel 128 · hayat 42 · kumar 21", "ok");
kayit("⚓ Her nefes bir kanıt: 86 > 18 → Titanic yüzer", "ok");
kayit("💡 Kontroller: NEFES AL · OTOMATİK · KİRLİLİK · WİRBEL", "uyar");
</script>
</body>
</html>
