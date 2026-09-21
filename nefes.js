// ── nefes: der echte Atemzug (aus nefes.js) ────
function nefes(hacim = 500) {
  const giren = hacim * 0.2093;
  const cikan = hacim * 0.037;
  const kalan = giren - cikan;
  return {
    hacim,
    giren:  +giren.toFixed(2),
    cikan:  +cikan.toFixed(2),
    kalan:  +kalan.toFixed(2),
    titanic: kalan > cikan ? "YÜZER" : "BATAR",
    fazla:  +(kalan - cikan).toFixed(2),
    kernel: 128,
    hayat: 42,
    kumar: 21
  };
}

// ── HAVA: der Takt (dein alter Code + echte Atemzüge) ──
const HAVA = {
  tick: 0,
  nefes: 0,
  herz: 0,
  dreck: 0,
  letzterAtemzug: null,
  atmest: function() {
    this.tick++;

    // Puls (dein alter Code — bleibt, macht das Lebensgefühl)
    this.nefes = 12 + Math.sin(this.tick * 0.1) * 4;
    this.herz  = 60 + Math.sin(this.tick * 0.15) * 20;

    // Dreck (dein alter Code — bleibt, macht die Schwere)
    this.dreck = Math.min(100, this.dreck + 0.3);

    // NEU: echte Atmung ruft die Physik
    // Atemvolumen hängt von Puls ab — im Alter weniger
    const hacim = 500 * (this.nefes / 12);  // bei 12/min → 500 mL
    this.letzterAtemzug = nefes(hacim);

    return this.letzterAtemzug;
  }
};
