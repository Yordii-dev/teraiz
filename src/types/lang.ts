// src/utils/lang.ts
export const SUPPORTED_LANGS = ["es", "en", "fr"] as const;
export type Lang = (typeof SUPPORTED_LANGS)[number];
