# Multilingual PDF Document Guide

## Registry

All downloadable PDFs used by product pages are registered in `src/lib/documentDownloads.ts`. Each document entry needs a stable `id`, product name, document type, default language, and one `versions` item per translated PDF.

Use language codes from `src/i18n/languages.ts`. Do not invent regional variants unless the site adds that locale first.

## File Naming

Place translated PDFs under `public/documents/<Product>/<language-code>/` or another stable public path, then add the path to the registry. Recommended file names use this pattern:

```text
<Product> - <Document Type> - <language-code>.pdf
```

Examples:

```text
public/documents/Red Liquid Mercury/de/Red Mercury - Safety Data Sheet - de.pdf
public/documents/Silver Liquid Mercury/fr/Certificate of Analysis - Silver Mercury - fr.pdf
```

## UI Behavior

Product download buttons point to `/api/documents/<document-id>?lang=<site-language>`. The endpoint serves the requested language when available and falls back to the document default language, currently English. Product cards display the actual PDF language next to the download button.

When a document has more than one registered language, the product card automatically shows direct choices for the available translated PDFs.

## Translation Readiness

Every new document should be added in English first, then translated into all site languages as soon as legal and safety review is complete. A translated PDF should not be registered until the content has been reviewed for product identity, hazard statements, dates, units, and locale-specific formatting.

Current supported site languages are: English, Arabic, Bengali, Chinese, Czech, Dutch, French, German, Indonesian, Italian, Korean, Persian, Polish, Portuguese, Romanian, Russian, Spanish, Turkish, and Vietnamese.

## Accessibility

PDFs should include selectable text, document title metadata, language metadata, logical heading order, tagged tables, meaningful link text, and alt text for informative images. Keep a source document for each language so accessibility fixes can be regenerated consistently.

## SEO And Metadata

The document endpoint adds `Content-Language`, `Vary: Accept-Language`, and `Link: rel="alternate"` headers for registered PDF versions. Keep public page hreflang tags in `BaseLayout.astro`; downloadable PDFs should remain behind the endpoint so language matching and fallback stay centralized.

## QA Checklist

Before publishing a new or translated PDF, verify these scenarios:

1. The localized product page button displays the expected PDF language.
2. `/api/documents/<document-id>?lang=<language-code>` redirects to the translated PDF when present.
3. Missing translations fall back to English and show the fallback message in the product card.
4. The PDF opens on desktop and mobile, and the button text fits without wrapping awkwardly.
5. Screen reader document language and heading structure are correct inside the PDF.