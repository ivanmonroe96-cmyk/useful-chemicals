export interface Language {
  code: string;      // ISO 639-1
  name: string;      // Native name
  flag: string;      // Country code for flagcdn (e.g. 'gb')
  dir?: 'ltr' | 'rtl';
}

export const defaultLang = 'en';

export const languages: Language[] = [
  { code: 'en', name: 'English', flag: 'gb' },
  { code: 'ar', name: 'العربية', flag: 'sa', dir: 'rtl' },
  { code: 'bn', name: 'বাংলা', flag: 'bd' },
  { code: 'zh', name: '中文', flag: 'cn' },
  { code: 'cs', name: 'Čeština', flag: 'cz' },
  { code: 'nl', name: 'Nederlands', flag: 'nl' },
  { code: 'fr', name: 'Français', flag: 'fr' },
  { code: 'de', name: 'Deutsch', flag: 'de' },
  { code: 'id', name: 'Bahasa Indonesia', flag: 'id' },
  { code: 'it', name: 'Italiano', flag: 'it' },
  { code: 'ko', name: '한국어', flag: 'kr' },
  { code: 'fa', name: 'فارسی', flag: 'ir', dir: 'rtl' },
  { code: 'pl', name: 'Polski', flag: 'pl' },
  { code: 'pt', name: 'Português', flag: 'br' },
  { code: 'ro', name: 'Română', flag: 'ro' },
  { code: 'ru', name: 'Русский', flag: 'ru' },
  { code: 'es', name: 'Español', flag: 'es' },
  { code: 'tr', name: 'Türkçe', flag: 'tr' },
  { code: 'vi', name: 'Tiếng Việt', flag: 'vn' },
];

const nonDefaultLangCodes = languages
  .filter(language => language.code !== defaultLang)
  .map(language => language.code)
  .join('|');
const langPrefixPattern = new RegExp(`^/(${nonDefaultLangCodes})(/|$)`);

function normalizePathname(pathname: string): string {
  let normalized = pathname.trim();
  if (!normalized.startsWith('/')) normalized = `/${normalized}`;
  normalized = normalized.replace(/\/+/g, '/');

  if (normalized !== '/' && !normalized.endsWith('/')) {
    normalized = `${normalized}/`;
  }

  return normalized || '/';
}

export function getLangFromUrl(pathname: string): string {
  const [, maybeLang] = pathname.split('/');
  const found = languages.find(l => l.code === maybeLang);
  return found ? found.code : defaultLang;
}

export function getLocalizedPath(path: string, lang: string): string {
  const [pathWithoutHash, hash = ''] = path.split('#');
  const [pathname, search = ''] = pathWithoutHash.split('?');

  // Strip any existing lang prefix then normalize to canonical trailing-slash URLs.
  const cleanPathname = normalizePathname((pathname || '/').replace(langPrefixPattern, '/'));
  const localizedPathname = lang === defaultLang
    ? cleanPathname
    : `/${lang}${cleanPathname === '/' ? '/' : cleanPathname}`;

  const queryPart = search ? `?${search}` : '';
  const hashPart = hash ? `#${hash}` : '';
  return `${localizedPathname}${queryPart}${hashPart}`;
}
