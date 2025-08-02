// src/context/pageContext.ts

import type { TranslationType } from "@/types/Translations";

let lang: string = "es";
let content: TranslationType;

export function setPageContext(newLang: string, newContent: TranslationType) {
  lang = newLang;
  content = newContent;
}

export function getLang() {
  return lang;
}

export function getContent() {
  return content;
}
