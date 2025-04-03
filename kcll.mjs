const MODULE_PATH = "modules/kibbles-compendium-of-legends-and-legacies"

Hooks.once("init", () => {
  // Add new class feature types for validation
  foundry.utils.mergeObject(CONFIG.DND5E.featureTypes.class.subtypes, {
    cultistBoon: "KCLL.CultistBoon",
    occultistRite: "KCLL.OccultistRite",
    spellbladeAegis: "KCLL.SpellbladeAegis",
    primalManifestation: "KCLL.PrimalManifestation",
    mysticTechnique: "KCLL.MysticTechnique"
  });

  CONFIG.DND5E.itemProperties.bloodMagic = {
    label: "KCLL.BloodMagic.Label",
    abbreviation: "KCLL.BloodMagic.Abbreviation",
    reference: "Compendium.kibbles-compendium-of-legends-and-legacies.kcll-journals.JournalEntry.NXibCQQFLkrAGE1i.JournalEntryPage.7fVrfxPp9OykJ5OS"
  }
  CONFIG.DND5E.validProperties.spell.add("bloodMagic");

  const dazed = {
    label: "KCLL.Dazed",
    icon: `${MODULE_PATH}/assets/icons/dazed.svg`,
    id: "dazed",
    _id: dnd5e.utils.staticID("dnd5edazed"),
    reference: "Compendium.kibbles-compendium-of-legends-and-legacies.kcll-journals.JournalEntry.NXibCQQFLkrAGE1i.JournalEntryPage.8t64sXFlxtCVP3b1",
  }

  CONFIG.DND5E.conditionTypes.dazed = dazed;

  CONFIG.statusEffects.push({
    img: dazed.icon,
    id: dazed.id,
    name: dazed.label,
    _id: dazed._id
  })
})