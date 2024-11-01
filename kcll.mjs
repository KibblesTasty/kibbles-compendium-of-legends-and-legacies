Hooks.once("init", () => {
  // Add new class feature types for validation
  foundry.utils.mergeObject(CONFIG.DND5E.featureTypes.class.subtypes, {
    occultistRite: "KCLL.OccultistRite",
    spellbladeAegis: "KCLL.SpellbladeAegis",
    primalManifestation: "KCLL.PrimalManifestation"
  });
})