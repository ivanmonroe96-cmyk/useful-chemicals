import { defaultLang, languages } from './languages';

const translationModules = import.meta.glob('./translations/*.json', { eager: true });
const fallbackModule = translationModules[`./translations/${defaultLang}.json`] as any;
const fallbackTranslations = fallbackModule?.default || fallbackModule || {};

function lookupTranslation(translations: Record<string, any>, key: string): unknown {
  const keys = key.split('.');
  let result: any = translations;
  for (const k of keys) {
    if (result == null) return undefined;
    result = result[k];
  }
  return result;
}

export function getTranslations(lang: string): Record<string, any> {
  const mod = translationModules[`./translations/${lang}.json`] as any;
  if (mod) return mod.default || mod;
  return fallbackTranslations;
}

export function t(translations: Record<string, any>, key: string): string {
  const result = lookupTranslation(translations, key);
  if (typeof result === 'string') return result;

  const fallback = lookupTranslation(fallbackTranslations, key);
  return typeof fallback === 'string' ? fallback : key;
}

export function localizedPath(path: string, lang: string): string {
  if (lang === defaultLang) return path;
  return `/${lang}${path === '/' ? '' : path}`;
}

export function getLangStaticPaths() {
  return languages
    .filter(l => l.code !== defaultLang)
    .map(l => ({ params: { lang: l.code } }));
}
