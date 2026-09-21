// ═══════════════════════════════════════════════════════
// ARG-KETTE mit volksnaher Erklärbär-Schicht
// ═══════════════════════════════════════════════════════

const ARG = {

  // ── earG: liest ─────────────────────────────────────
  earG: function(input) {
    const technisch = {
      stage: "earg",
      gelesen: input.length,
      viertel: input.map(x => Math.floor(x.co2 / 25) + 1),
      materPI: input.map(x => (x.co2 / Math.PI).toFixed(2))
    };
    const volksnah =
      `Ich habe ${input.length} Dinge gelesen. ` +
      `Jedes Ding hat vier Viertel. ` +
      `Das erste Ding ist zu ${technisch.viertel[0]} Vierteln voll.`;
    return { ...technisch, erklärbär: volksnah };
  },

  // ── xarG: kreuzt ────────────────────────────────────
  xarG: function(gelesen) {
    const technisch = {
      stage: "xarg",
      gekreuzt: gelesen.gelesen.length,
      pyramide: "drinnen",
      move: "von außen nach innen"
    };
    const volksnah =
      `Jetzt verbinde ich, was zusammengehört. ` +
      `Die Pyramide war früher draußen — jetzt ist sie drinnen. ` +
      `Drinnen blüht es.`;
    return { ...technisch, erklärbär: volksnah };
  },

  // ── 3tearG: findet den Kern ─────────────────────────
  drittearG: function(gekreuzt) {
    const technisch = {
      stage: "3tearg",
      peak: 100,
      zauber6: "6 Dreiecke",
      harmonie: true
    };
    const volksnah =
      `Ich habe den Kern gefunden. ` +
      `Es ist wie im Märchen: Drei Dinge, sechs Ecken, ein Licht. ` +
      `Feuer und Eis sind beide drin — und beide sind still.`;
    return { ...technisch, erklärbär: volksnah };
  },

  // ── arg.symc: übersetzt ─────────────────────────────
  argSymc: function(kern) {
    const technisch = {
      stage: "arg.symc",
      symbolisch: "CO₂ → O₂ + H₂O",
      universell: true
    };
    const volksnah =
      `Ich mache es einfach: ` +
      `Was zu viel ist (CO₂), wird zu was Gutem (O₂ und Wasser). ` +
      `Nicht bauen — nur nachmachen. So wie die Elben.`;
    return { ...technisch, erklärbär: volksnah };
  },

  // ── endSync: schließt ──────────────────────────────
  endSync: function(übersetzt) {
    const technisch = {
      stage: "endSync",
      stabil: true,
      vertrag: "erfüllt"
    };
    const volksnah =
      `Fertig. Alles steht. ` +
      `Nichts ist verloren. ` +
      `Der Atem geht weiter — 86 bleiben, Titanic schwimmt.`;
    return { ...technisch, erklärbär: volksnah };
  },

  // ── Die ganze Kette mit Rahmen ─────────────────────
  kette: function(input) {
    const e = this.earG(input);
    const x = this.xarG(e);
    const d = this.drittearG(x);
    const s = this.argSymc(d);
    const f = this.endSync(s);

    return {
      // Technisch — für Programme
      technisch: [e, x, d, s, f],
      // Volksnah — für Menschen
      rahmen: [
        e.erklärbär,
        x.erklärbär,
        d.erklärbär,
        s.erklärbär,
        f.erklärbär
      ],
      // Ein Satz, der alles trägt
      einSatz: f.erklärbär
    };
  }
};
