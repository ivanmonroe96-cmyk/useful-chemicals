export interface Language {
  code: string;      // ISO 639-1
  name: string;      // Native name
  flag: string;      // Country flag emoji
  dir?: 'ltr' | 'rtl';
}

export const defaultLang = 'en';

export const languages: Language[] = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦', dir: 'rtl' },
  { code: 'bn', name: 'বাংলা', flag: '🇧🇩' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'cs', name: 'Čeština', flag: '🇨🇿' },
  { code: 'nl', name: 'Nederlands', flag: '🇳🇱' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'id', name: 'Bahasa Indonesia', flag: '🇮🇩' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'ko', name: '한국어', flag: '🇰🇷' },
  { code: 'fa', name: 'فارسی', flag: '🇮🇷', dir: 'rtl' },
  { code: 'pl', name: 'Polski', flag: '🇵🇱' },
  { code: 'pt', name: 'Português', flag: '🇧🇷' },
  { code: 'ro', name: 'Română', flag: '🇷🇴' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
  { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳' },
];

const nonDefaultLangCodes = languages
  .filter(language => language.code !== defaultLang)
  .map(language => language.code)
  .join('|');
const langPrefixPattern = new RegExp(`^/(${nonDefaultLangCodes})(/|$)`);

export function getLangFromUrl(pathname: string): string {
  const [, maybeLang] = pathname.split('/');
  const found = languages.find(l => l.code === maybeLang);
  return found ? found.code : defaultLang;
}

export function getLocalizedPath(path: string, lang: string): string {
  // Strip any existing lang prefix
  const clean = path.replace(langPrefixPattern, '/');
  if (lang === defaultLang) return clean || '/';
  return `/${lang}${clean === '/' ? '' : clean}`;
}
