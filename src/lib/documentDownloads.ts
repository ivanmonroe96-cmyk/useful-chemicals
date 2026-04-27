import { defaultLang, languages } from '../i18n/languages';

export interface DocumentVersion {
  lang: string;
  href: string;
}

export interface DocumentDefinition {
  id: string;
  product: string;
  type: 'TDS' | 'SDS' | 'MSDS' | 'COA';
  title: string;
  defaultLang: string;
  versions: DocumentVersion[];
}

export interface ResolvedDocumentDownload {
  id: string;
  href: string;
  directHref: string;
  language: string;
  languageName: string;
  requestedLanguage: string;
  requestedLanguageName: string;
  isFallback: boolean;
  availableVersions: Array<DocumentVersion & { languageName: string }>;
}

const languageNames = Object.fromEntries(languages.map((language) => [language.code, language.name]));
const supportedLanguageCodes = new Set(languages.map((language) => language.code));

export const documentRegistry: DocumentDefinition[] = [
  {
    id: 'caluanie-tds',
    product: 'Caluanie Muelear Oxidize',
    type: 'TDS',
    title: 'Technical Data Sheet (TDS)',
    defaultLang,
    versions: [
      { lang: 'en', href: '/docs/caluanie/UE-Chemicals-Caluanie-Muelear-Oxidize-TDS.pdf' },
    ],
  },
  {
    id: 'caluanie-msds',
    product: 'Caluanie Muelear Oxidize',
    type: 'MSDS',
    title: 'Material Safety Data Sheet (MSDS)',
    defaultLang,
    versions: [
      { lang: 'en', href: '/documents/Caluanie%20Muelear%20Oxidize/Caluanie%20MSDS%20Material%20Safety%20Datasheet.pdf' },
    ],
  },
  {
    id: 'red-mercury-tds',
    product: 'Red Mercury 20/20-258',
    type: 'TDS',
    title: 'Technical Data Sheet (TDS)',
    defaultLang,
    versions: [
      { lang: 'en', href: '/documents/Red%20Liquid%20Mercury/Red%20Mercury%20-%20Technical%20Data%20Sheet.pdf' },
    ],
  },
  {
    id: 'red-mercury-sds',
    product: 'Red Mercury 20/20-258',
    type: 'SDS',
    title: 'Safety Data Sheet (SDS)',
    defaultLang,
    versions: [
      { lang: 'en', href: '/documents/Red%20Liquid%20Mercury/Safety%20Data%20Sheet%20-%20Red%20Mercury.pdf' },
    ],
  },
  {
    id: 'red-mercury-coa',
    product: 'Red Mercury 20/20-258',
    type: 'COA',
    title: 'Certificate of Analysis (COA)',
    defaultLang,
    versions: [
      { lang: 'en', href: '/documents/Red%20Liquid%20Mercury/Certificate%20of%20Analysis%20-%20Red%20Mercury.pdf' },
    ],
  },
  {
    id: 'silver-mercury-sds',
    product: 'Silver Liquid Mercury',
    type: 'SDS',
    title: 'Safety Data Sheet (SDS)',
    defaultLang,
    versions: [
      { lang: 'en', href: '/documents/Silver%20Liquid%20Mercury/Safety%20Data%20Sheet%20-%20Silver%20Mercury.pdf' },
    ],
  },
  {
    id: 'silver-mercury-coa',
    product: 'Silver Liquid Mercury',
    type: 'COA',
    title: 'Certificate of Analysis (COA)',
    defaultLang,
    versions: [
      { lang: 'en', href: '/documents/Silver%20Liquid%20Mercury/Certificate%20of%20Analysis%20-%20Silver%20Mercury.pdf' },
    ],
  },
];

export function normalizeDocumentLanguage(lang: string | null | undefined): string {
  if (!lang) return defaultLang;
  const normalized = lang.toLowerCase().trim().split('-')[0];
  return supportedLanguageCodes.has(normalized) ? normalized : defaultLang;
}

export function getPreferredDocumentLanguage(acceptLanguage: string | null | undefined): string {
  if (!acceptLanguage) return defaultLang;

  const languageRanges = acceptLanguage
    .split(',')
    .map((part) => {
      const [tag = '', qValue = 'q=1'] = part.trim().split(';');
      const quality = Number.parseFloat(qValue.replace(/^q=/, '')) || 0;
      return { lang: normalizeDocumentLanguage(tag), quality };
    })
    .filter((range) => range.lang && range.quality > 0)
    .sort((a, b) => b.quality - a.quality);

  return languageRanges[0]?.lang || defaultLang;
}

export function getDocumentDefinition(id: string): DocumentDefinition | undefined {
  return documentRegistry.find((document) => document.id === id);
}

export function getDocumentDownload(id: string, requestedLang: string | null | undefined): ResolvedDocumentDownload | undefined {
  const document = getDocumentDefinition(id);
  if (!document) return undefined;

  const requestedLanguage = normalizeDocumentLanguage(requestedLang);
  const version =
    document.versions.find((item) => item.lang === requestedLanguage) ||
    document.versions.find((item) => item.lang === document.defaultLang) ||
    document.versions[0];

  if (!version) return undefined;

  const availableVersions = document.versions.map((item) => ({
    ...item,
    languageName: languageNames[item.lang] || item.lang.toUpperCase(),
  }));

  return {
    id,
    href: `/api/documents/${encodeURIComponent(id)}?lang=${encodeURIComponent(requestedLanguage)}`,
    directHref: version.href,
    language: version.lang,
    languageName: languageNames[version.lang] || version.lang.toUpperCase(),
    requestedLanguage,
    requestedLanguageName: languageNames[requestedLanguage] || requestedLanguage.toUpperCase(),
    isFallback: version.lang !== requestedLanguage,
    availableVersions,
  };
}

export function getDocumentAlternateLinkHeader(id: string): string | undefined {
  const document = getDocumentDefinition(id);
  if (!document) return undefined;

  return document.versions
    .map((version) => `</api/documents/${encodeURIComponent(id)}?lang=${encodeURIComponent(version.lang)}>; rel="alternate"; hreflang="${version.lang}"`)
    .join(', ');
}

export function getMissingDocumentTranslations(): Array<{ id: string; missing: string[] }> {
  return documentRegistry
    .map((document) => {
      const available = new Set(document.versions.map((version) => version.lang));
      return {
        id: document.id,
        missing: languages
          .map((language) => language.code)
          .filter((languageCode) => !available.has(languageCode)),
      };
    })
    .filter((item) => item.missing.length > 0);
}