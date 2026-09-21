// nefes.js — iki1uc
// kalan O₂ = (nefes × 0.2093) − (nefes × 0.037)
// Titanic batmaz. Çünkü 86 > 18.

export function nefes(hacim = 500) {
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
