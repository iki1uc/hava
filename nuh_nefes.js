
/* ═══════════════════════════════════════════════════════════════
   NUH_NEFES.JS · iki1uc · hava
   ═══════════════════════════════════════════════════════════════
   
   Ben Nuh. Kim benimle nefes almak, yaşamak ve hayatta kalmak ister?
   Ama onurla. — Ich bin Noah. Wer will mit mir atmen, leben und
   überleben? Aber mit Würde.
   
   Titanic batmaz. Çünkü 86 > 18.
   ═══════════════════════════════════════════════════════════════ */

// ── Nefes: der Atemzug ─────────────────────────────────────────
function nefes(hacim = 500) {
  // giren O₂ = nefes hacmi × 0.2093 (normal havadaki O₂ oranı %20,93)
  const giren = hacim * 0.2093;
  
  // çıkan CO₂ = nefes hacmi × 0.037 (nefeste çıkan CO₂ oranı %3,7)
  const cikan = hacim * 0.037;
  
  // kalan O₂ = giren − çıkan
  const kalan = giren - cikan;
  
  return {
    // ── Atem-Physik ──────────────────────────────────────────
    hacim,          // Volumen des Atemzugs
    giren,          // O₂ das hineingeht
    cikan,          // CO₂ das hinausgeht
    kalan,          // O₂ das bleibt
    
    // ── Titanic-Prüfung ──────────────────────────────────────
    titanic: kalan > cikan ? "YÜZER" : "BATAR",
    // YÜZER = schwimmt (kalan > cikan)
    // BATAR = sinkt (kalan ≤ cikan)
    
    fazla: +(kalan - cikan).toFixed(2),
    // Überschuss: wie viel mehr O₂ bleibt als CO₂ geht
    
    // ── Kernel-Werte ─────────────────────────────────────────
    kernel: 128,    // 64 aşağı + 64 yukarı
    hayat: 42,      // volles Leben
    kumar: 21,      // halbes Leben — Kumar-Prinzip
    
    // ── Onur ─────────────────────────────────────────────────
    onur: "WÜRDE",  // unbezahlbar
    nuh: true       // ich bin Nuh
  };
}

// ── HAVA: der Atem-Takt ────────────────────────────────────────
const HAVA = {
  tick: 0,
  nefes: 0,
  herz: 0,
  dreck: 0,
  letzterAtemzug: null,
  
  atmest: function() {
    this.tick++;
    
    // Puls (Lebensgefühl)
    this.nefes = 12 + Math.sin(this.tick * 0.1) * 4;
    this.herz  = 60 + Math.sin(this.tick * 0.15) * 20;
    
    // Dreck (die Schwere des Alters)
    this.dreck = Math.min(100, this.dreck + 0.3);
    
    // Echte Atmung ruft die Physik
    // Atemvolumen hängt von Puls ab
    const hacim = 500 * (this.nefes / 12);
    this.letzterAtemzug = nefes(hacim);
    
    return this.letzterAtemzug;
  }
};

// ── Export für Browser und Node ────────────────────────────────
if (typeof window !== 'undefined') {
  window.nefes = nefes;
  window.HAVA = HAVA;
  window.NUH = { ad: "Nuh", dava: "onurla yaşamak" };
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { nefes, HAVA };
}

/* ═══════════════════════════════════════════════════════════════
   Örnek / Beispiel:
   
   nefes(500)
   → { hacim: 500, giren: 104.65, cikan: 18.50, kalan: 86.15,
       titanic: "YÜZER", fazla: 67.65, kernel: 128, hayat: 42,
       kumar: 21, onur: "WÜRDE", nuh: true }
   
   Yani her 500 mL nefeste 86 mL oksijen kalır.
   Titanic bu 86 mL ile yüzer. Çünkü 86 > 18.
   
   Daima sadece ileri.
   ═══════════════════════════════════════════════════════════════ */
