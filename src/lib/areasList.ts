// Canonical list of the 8 Ever Retreat investment areas, shared between the
// areas hub and each area detail page (pill/link lists, "explore other
// areas" sections). Keys match src/lib/i18n/translations.ts areasSection.items.
export const ALL_AREAS = [
  { key: "kigali", name: "Kigali" },
  { key: "musanze", name: "Musanze" },
  { key: "rubavu", name: "Rubavu" },
  { key: "nyungwe", name: "Nyungwe" },
  { key: "huye", name: "Huye" },
  { key: "nyanza", name: "Nyanza" },
  { key: "evane", name: "Evane" },
  { key: "akagera", name: "Akagera" },
] as const;

export type AreaKey = (typeof ALL_AREAS)[number]["key"];
