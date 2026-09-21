// ALT:
// HAVA.tick++;
// HAVA.nefes = 12 + Math.sin(HAVA.tick*0.1)*4;
// ...

// NEU:
setInterval(() => {
  const atemzug = HAVA.atmest();
  console.log('[hava] nefes:', {
    nefes: HAVA.nefes.toFixed(0),
    herz:  HAVA.herz.toFixed(0),
    dreck: HAVA.dreck.toFixed(1),
    o2:    atemzug.kalan,
    titanic: atemzug.titanic
  });
}, 2000);
