# Website Optimization Plan Status
**Site:** useful-chemicals.com | **Stack:** Astro 6 + Cloudflare | **Updated:** April 22, 2026

---

## Current State Audit

| Area | Status | Notes |
|------|--------|-------|
| SEO / Meta Tags | 95% ✅ | Robots meta shipped, legal noindex shipped, verification placeholders present but not activated |
| i18n / hreflang (18 languages) | 96% ✅ | Locale routing is solid; Caluanie now uses version-gated rollout to prevent stale product copy leaks |
| Internal Linking | 96% ✅ | Localized navigation is stable; shared Caluanie page now includes section, blog, and support links |
| Schema Markup (JSON-LD) | 94% ✅ | Organization, LocalBusiness, AggregateRating, Blog, Product, FAQ, Breadcrumb, and product speakable markup are live |
| Content Quality | 92% ✅ | Current English Caluanie copy is aligned to the 2026 document set; locale approvals now happen per language |
| Robots.txt / Sitemap | 96% ✅ | `/api/` excluded, sitemap filtering and priority/changefreq serialization shipped |
| Accessibility (WCAG 2.1) | 82% ⚠️ | Skip link, focus styles, menu roles, and labeled contact fields shipped; live-region/error semantics still pending |
| Performance / Core Web Vitals | 78% ⚠️ | Hero image prioritization and responsive Caluanie images shipped; sitewide image dimension audit still pending |
| Security Headers | 84% ⚠️ | `_headers` shipped with CSP/HSTS and related headers; contact endpoint validates and escapes input but full strip-tags hardening is still optional |
| Analytics & Monitoring | 15% ⚠️ | Plausible and Clarity scaffolding exist, but both remain inactive until real IDs/codes are supplied |

---

## Shipped Work By Phase

### Phase 1 — Security Hardening

**Shipped**
- `public/_headers` is live with CSP, HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, and Permissions-Policy.
- `src/layouts/BaseLayout.astro` now exposes a `noindex` prop and emits robots meta tags accordingly.
- Legal/policy pages use that `noindex` prop.
- `public/robots.txt` now includes `Disallow: /api/`.
- `src/pages/api/contact.ts` now enforces required fields, length limits, email validation, and HTML escaping in outbound email content.

**Still Pending**
- Add explicit strip-tags normalization if stricter server-side sanitization is still desired.
- Run external header validation (for example `securityheaders.com`) against production after any CSP changes.
- Re-run a true end-to-end contact form submission against live secrets.

### Phase 2 — Core Web Vitals / Performance

**Shipped**
- Google Fonts now load with `display=swap` through the stylesheet URL in `src/layouts/BaseLayout.astro`.
- `src/layouts/BaseLayout.astro` now preconnects to `https://cdnjs.cloudflare.com` and DNS-prefetches `flagcdn.com`.
- The homepage hero image has explicit dimensions and `fetchpriority="high"`.
- The shared `src/components/products/CaluanieProductPage.astro` uses `astro:assets` responsive images and prioritizes the hero image.

**Still Pending**
- Add explicit width/height coverage to all remaining plain `<img>` elements across the site.
- Extend responsive image handling beyond the shared Caluanie page where it still makes sense.
- Audit and remove unused CSS from `src/styles/global.css`.

### Phase 3 — Accessibility (WCAG 2.1)

**Shipped**
- `src/layouts/BaseLayout.astro` now renders a skip-to-main-content link and anchors the main content region.
- `src/styles/global.css` now includes visible `:focus-visible` styling.
- `src/components/Header.astro` now adds `role="menu"` and `role="menuitem"` to the product dropdown.
- `src/pages/contact.astro` has associated labels for its form fields.

**Still Pending**
- Add `aria-live="polite"` support for the mobile menu state.
- Add inline validation messaging with `aria-describedby` on contact forms.
- Finish a formal sitewide alt-text audit and run axe/WAVE verification.

### Phase 4 — SEO Gap Closures

**Shipped**
- `src/layouts/BaseLayout.astro` now injects `LocalBusiness` and `AggregateRating` alongside the core organization schema.
- `astro.config.mjs` now excludes `/api/` and low-value legal pages from the sitemap and serializes priority/changefreq by page type.
- `src/pages/blog.astro` and `src/pages/[lang]/blog.astro` now emit list-style blog schema rather than a thin collection placeholder.
- Legal and policy pages are now `noindex`.
- Product speakable schema is live on Caluanie, red mercury, and silver mercury routes.
- The shared Caluanie page removed the previous double-slash schema URL issue and now centralizes product SEO output.

**Still Pending**
- Replace the placeholder Google Search Console and Bing verification tags with real values.
- Run current Rich Results / hreflang validation against the live domain after each content rollout wave.

### Phase 5 — Analytics & Monitoring

**Shipped**
- Plausible loader scaffolding exists in `src/layouts/BaseLayout.astro`.
- Microsoft Clarity scaffolding exists as a commented placeholder in `src/layouts/BaseLayout.astro`.

**Still Pending**
- Activate Plausible by removing the disabled flag after the production site is registered.
- Add a real Clarity project ID if heatmaps/session replay are still wanted.
- Add web-vitals reporting and a recurring audit cadence.

### Phase 6 — Content, AEO & LLM Optimization

**Shipped**
- The shared Caluanie page is now fully translation-driven and backed by current English source copy.
- `src/i18n/index.ts` now version-gates `caluanie.*` keys so stale locale product copy cannot silently leak into production.
- Product speakable schema is live across the product surface.
- The shared Caluanie page now includes stronger internal linking to applications, safety, ordering, blog, certificates, and contact surfaces.

**Still Pending**
- Expand `public/llms.txt` into a fuller entity/profile document.
- Approve additional non-English Caluanie locales one by one by fully updating their `caluanie` block and re-adding `caluanie.version`.
- Add more long-tail blog content where it supports real search intent.

### Phase 7 — Conversion Rate Optimization (CRO)

**Shipped**
- `src/pages/ordering.astro` now has stronger CTA structure, supporting trust signals, and CTA aria labels.

**Still Pending**
- Mirror that CRO polish to localized ordering/contact pages where needed.
- Activate measurement tooling before testing CTA variants.
- Review WhatsApp and CTA interaction behavior after analytics are live.

---

## Verified Baseline

- `npm run build` passes after the Caluanie i18n refactor and current SEO changes.
- Production deploy is currently done via `npx wrangler@4.80.0 deploy --config dist/server/wrangler.json`.
- Post-deploy validation succeeded on both the Workers URL and the production route for `/es/products/caluanie/`.

---

## Current Priority Backlog

1. Activate real verification and analytics codes instead of placeholders.
2. Finish the remaining sitewide accessibility and image-dimension audit.
3. Continue locale-by-locale Caluanie approvals using the version-gated rollout model.
4. Expand `llms.txt` and additional long-tail content only after the production measurement layer is live.