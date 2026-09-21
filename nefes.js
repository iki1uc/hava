HAVA.tick++;
HAVA.nefes = 12 + Math.sin(HAVA.tick*0.1)*4;
HAVA.herz = 60 + Math.sin(HAVA.tick*0.15)*20;
HAVA.dreck = Math.min(100, HAVA.dreck + 0.3);
