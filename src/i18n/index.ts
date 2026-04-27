import { defaultLang, languages, getLocalizedPath } from './languages';

const translationModules = import.meta.glob('./translations/*.json', { eager: true });
const fallbackModule = translationModules[`./translations/${defaultLang}.json`] as any;
const fallbackTranslations = fallbackModule?.default || fallbackModule || {};
const currentCaluanieTranslationVersion = '2026-03-10';
const currentRedMercuryTranslationVersion = '2026-04-23-video';
const currentSilverMercuryTranslationVersion = '2026-04-23-redesign';

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
  if (
    key.startsWith('red_mercury.') &&
    lookupTranslation(translations, 'red_mercury.version') !== currentRedMercuryTranslationVersion
  ) {
    const fallback = lookupTranslation(fallbackTranslations, key);
    return typeof fallback === 'string' ? fallback : key;
  }

  if (
    key.startsWith('caluanie.') &&
    lookupTranslation(translations, 'caluanie.version') !== currentCaluanieTranslationVersion
  ) {
    const fallback = lookupTranslation(fallbackTranslations, key);
    return typeof fallback === 'string' ? fallback : key;
  }

  if (
    key.startsWith('silver_mercury.') &&
    lookupTranslation(translations, 'silver_mercury.version') !== currentSilverMercuryTranslationVersion
  ) {
    const fallback = lookupTranslation(fallbackTranslations, key);
    return typeof fallback === 'string' ? fallback : key;
  }

  const result = lookupTranslation(translations, key);
  if (typeof result === 'string') return result;

  const fallback = lookupTranslation(fallbackTranslations, key);
  return typeof fallback === 'string' ? fallback : key;
}

export function localizedPath(path: string, lang: string): string {
  return getLocalizedPath(path, lang);
}

export function getLangStaticPaths() {
  return languages
    .filter(l => l.code !== defaultLang)
    .map(l => ({ params: { lang: l.code } }));
}
