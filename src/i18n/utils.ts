// Définition directe de ce qu'il y avait probablement dans ./ui.ts
export const ui = {
  en: {
    greeting: "Hello",
    // ... autres clés de traduction
  },
  es: {
    greeting: "Hola",
    // ... autres clés de traduction
  },
};

export const defaultLang = "es";
export const showDefaultLang = false;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

export function useTranslatedPath(lang: keyof typeof ui) {
  return function translatePath(path: string, l: string = lang) {
    return !showDefaultLang && l === defaultLang ? path : `/${l}${path}`;
  }
}

export const languages = {
  en: "English",
  es: "Español",
};
