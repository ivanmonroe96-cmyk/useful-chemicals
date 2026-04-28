# UE Chemicals — Comprehensive Multilingual SEO & GEO/AEO Optimization Plan

**Site:** https://useful-chemicals.com  
**Stack:** Astro 6 · Cloudflare Workers · `@astrojs/sitemap` · 19 locales  
**Catalog:** Caluanie Muelear Oxidize · Red Liquid Mercury (Hg₂Sb₂O₇ 20/20-258) · Silver Liquid Mercury (Hg, CAS 7439-97-6)  
**Date:** 2026-04-28

---

## Current Implementation Status — 2026-04-28

**Phase 1 is complete and build-verified.** The core technical SEO foundation has been implemented: product keyword metadata is populated across all 19 locales, page-level keyword tags are wired, priority EU product titles/descriptions were rewritten, false USA/SUA/VS manufacturer claims were removed, product JSON-LD was enhanced with offers, FAQ schema was confirmed, ordering HowTo schema was aligned to the visible flow, and the production build completed successfully.

**Phase 2 is now in progress.** Internal product cross-linking has been added across the three product pages so Caluanie, Red Mercury, and Silver Mercury reinforce each other with localized product anchors. `llms.txt` and `llms-full.txt` are now published for AI-search crawlers, trust/legal pages are crawlable and sitemap-eligible, product PDF buttons link directly to files to avoid unnecessary redirects, and geo tags consistently identify Bangkok, Thailand. The remaining high-value work is content expansion, regional landing pages, external schema validation, and post-deploy sitemap/indexing submission.

**Latest verification:** `npm run build` completed with exit code 0, prerendered all localized routes, generated optimized images, and created `dist/client/sitemap-index.xml`.

---

## 0. Executive Summary

| Area | State | Priority Action |
|---|---|---|
| Hreflang / canonical | ✅ Strong (19 locales + x-default) | Validate URL pairs after locale-specific title rewrites |
| Schema.org (Org/WebSite/Breadcrumb/FAQ/Product/HowTo) | ✅ Strong | Validate Product/FAQ/HowTo in Schema.org validator after deployment |
| robots.txt + AI crawler allowlist | ✅ Strong | Keep |
| `llms.txt` / `llms-full.txt` | ✅ Updated with multilingual AEO blocks and full AI summary | Optional per-locale mirrors for Tier-3 AI markets |
| `site.meta_keywords` | ✅ Present in all locales | Re-tune per the keyword files (below) |
| Product `meta_keywords` | ✅ Populated for every product, every locale | Monitor Search Console term impressions |
| Product `meta_title` length | ✅ Priority locales rewritten | Review live SERP snippets after index refresh |
| Geographic accuracy | ✅ Bangkok/Thailand consistent in geo tags and schema | Keep Bangkok/Thailand consistent in new copy |
| Keyword files supplied | ✅ DE, FR, ES, PL, PT, CS, NL, IT, EN organized | Keep original seed files for monthly tuning |
| Languages without keyword files | EN, IT, AR, BN, ZH, ID, KO, FA, RU, TR, VI | Derived sets in Section 6 |
| Blog content | ⚠️ Product guide routes exist; cluster expansion pending | Add Tier-1/Tier-2 posts from Section 7 |

---

## 1. Keyword Analysis — Per Supplied File

### 1.1 German (`keywords_de.txt`, 80 terms)

**Buyer intent (transactional — highest priority):**
- `rotes quecksilber kaufen` · `red mercury kaufen` · `quecksilber kaufen` · `quecksilber flüssig kaufen`
- `silber quecksilber kaufen online` · `caluanie muelear oxidize kaufen` · `caluanie muelear oxidize kaufen deutschland`
- `mercury kaufen` · `großhandel kaufen` · `quecksilber kaufen apotheke`

**Commercial / price:**
- `rotes quecksilber preis` · `quecksilber preis pro kg` · `1 kg quecksilber preis`
- `silber quecksilber kaufen price` · `quecksilber preis ankauf`

**Brand / qualifier:**
- `caluanie muelear oxidize deutschland` · `red mercury made in germany`
- `red mercury deutsch` · `mercury deutsch` · `liquid mercury - deutsch` · `deutscher hersteller`

**Informational (blog / FAQ targets):**
- `was ist rotes quecksilber` (`what is red mercury`) · `mercury droge` · `molekulare formel`
- `flüssiges silber` · `oxid rot` / `oxide red` · `staffel folge` (Breaking Bad reference — drop)
- `nucleonics week` · `din en iso` / `din en` (compliance signals)

**Notes:** Carl Roth and Apotheke terms suggest German users compare to local lab suppliers — emphasise compliance docs (TDS/SDS/COA) and "Lieferant aus Bangkok" framing.

### 1.2 French (`keywords_fr.txt`, 27 terms — sparse)

**Transactional:**
- `acheter du mercure rouge` · `achat mercure rouge` · `achat mercure rouge liquide`
- `achat mercure liquide` · `achat de mercure rouge en france` · `mercure liquide achat`
- `achat mercure metal liquide` · `achat mercure liquide gris`
- `caluanie muelear oxidize en vente en ligne france` · `achat du caluanie muelear oxidize`

**Where to find:**
- `ou trouver du mercure rouge` · `ou trouver du mercure rouge liquide`

**Price:**
- `mercure prix gramme` · `mercure prix kg` · `prix du mercure gris` · `mercure gris prix du gramme`
- `mercure vert prix` · `eau lourde prix`

**Adjacent:** `mercure liquide danger` (informational, FAQ), `achat oxyde de fer` (cross‑sell).

**Coverage gap:** No FR brand‑search variants (`caluanie muelear oxidize`, `mercure argenté`, `Hg`, `99.995`) — derive from EN/DE patterns (Section 6).

### 1.3 Spanish (`keywords_es.txt`, 191 terms — strongest dataset)

**Top transactional cluster:**
- `comprar mercurio rojo` · `mercurio rojo comprar` · `donde comprar mercurio rojo`
- `donde comprar mercurio rojo en españa` · `comprar mercurio rojo liquido`
- `venta de mercurio rojo` · `venta de mercurio rojo en españa` · `venta de mercurio rojo al por mayor`
- `mercurio rojo en venta` · `como conseguir mercurio rojo` · `donde conseguir mercurio rojo`
- `comprar mercurio` · `donde puedo comprar mercurio` · `venta de mercurio liquido en españa`

**Price cluster:**
- `mercurio rojo precio` · `precio del mercurio rojo` · `mercurio rojo precio por kilo`
- `mercurio rojo precio en dólares` · `valor del mercurio rojo` · `cuanto vale el mercurio rojo`
- `cuanto cuesta el mercurio rojo` · `mercurio liquido rojo precio`
- `precio mercurio liquido por kilo`

**LATAM geo‑variants (build dedicated landing pages):**
- `mercurio rojo en colombia` · `mercurio rojo precio colombia` · `venta de mercurio rojo en colombia`
- `mercurio rojo perú` · `mercurio rojo en perú` · `mercurio rojo precio en venezuela`
- `mercurio rojo en venezuela` · `mercurio rojo en ecuador` · `mercurio rojo en guatemala`

**Brand qualifier (German origin myth — own it):**
- `mercurio rojo aleman` · `mercurio rojo alemán` · `mercurio rojo aleman 20 20`
- `mercurio rojo 20/20` · `mercurio rojo 2020` · `mercurio rojo 285`
- `mercurio rojo alemán precio` · `fabrica de mercurio rojo en alemania` · `mercurio rojo alemania`

**Informational (blog/FAQ goldmine):**
- `que es el mercurio rojo` · `qué es el mercurio rojo` · `para que sirve el mercurio rojo`
- `usos del mercurio rojo` · `propiedades del mercurio rojo` · `mercurio rojo existe`
- `historia mercurio rojo` · `mercurio rojo nazis` · `mercurio rojo guerra fria`
- `mercurio rojo no se refleja en el espejo` · `mercurio rojo donde se encuentra`
- `como hacer mercurio rojo` · `mercurio rojo para minería` · `mercurio rojo para extraer oro`

**Form / variant:**
- `mercurio liquido rojo` · `mercurio rojo líquido` · `polvo de mercurio rojo` · `mercurio rojo en polvo`
- `oxido rojo de mercurio` · `oxido de mercurio rojo` · `yoduro de mercurio rojo`
- `mercurio rojo mineral` · `piedra de mercurio rojo` · `cilindro/bombona/botella/pipeta de mercurio rojo`

**Drop / negative (irrelevant intent):**
- `black desert mercurio rojo` / `bdo mercurio rojo` / `mercurio rojo bdo` (video game)
- `esencia de mercurio rojo wuchang` (game)
- `atun rojo mercurio` / `atún rojo mercurio` / `mercurio atun rojo` (tuna mercury content)
- `mercurio el planeta rojo` (planet)
- `mercurio rojo pelicula` / `mercurio rojo libro` (media)
- `termometro de mercurio rojo` (thermometer hobbyists — low commercial value)

### 1.4 Italian (`keywords_it.txt` — **MISLABELED, contains Dutch**)

**File issue:** Content is Dutch (`kwik`, `kwikzilver`, `vloeibaar kwik`). Use as the NL keyword set (Section 1.5) and **derive Italian list from Section 6.2**.

### 1.5 Dutch (sourced from `keywords_it.txt`, 49 terms)

**Transactional:**
- `kwik kopen` · `kwikzilver kopen` · `vloeibaar kwik kopen` · `rood kwik te koop`
- `red mercury kopen` · `rode kwik kopen` · `kwik kopen nederland` · `kwik kopen belgie` / `belgië`
- `kwik metaal kopen` · `kwik thiocyanaat kopen` · `kwik(ii)thiocyanaat kopen`
- `waar kan je kwik kopen` · `kwik kopen waar` · `kwik kopen prijs` · `kwik kopen liter`

**Price:**
- `kwik prijs` · `kwik prijs per kilo` · `rood kwik prijs` · `red mercury price`

**Sell side (capture cross‑intent — link to wholesale/contact):**
- `kwik verkopen` · `kwik kopen verkopen`

**Variants:** `kwik`, `red mercury`, `vloeibaar kwik`, `mercury kwik`, `rood kwik`, `kwik rood`, `reactievergelijking rood kwik` (chemistry FAQ).

**Drop / negative:** `kwik fit` (tire/garage chain — very high noise), `kwik kwek en kwak` (Disney), `kwik bier`, `kwik e mart lego`, `kwik seal`, `kruidvat`, `barometer/thermometer/koortsthermometer kopen` (consumer hobby).

### 1.6 Polish (`keywords_pl.txt`, 72 terms)

**Transactional:**
- `czerwona rtęć gdzie kupić` · `gdzie kupić rtęć` · `czy można kupić rtęć`
- `rtęć kupić` · `kupię rtęć` · `gdzie można kupić rtęć`
- `czerwona rtęć gdzie kupic` (no diacritic variant — keep both)

**Commercial:**
- `czerwona rtęć cena` · `czerwoną rtęć cena za kg` · `czerwona rtęć cena za kg`
- `czerwona rtęć allegro` (marketplace context)

**Informational / FAQ:**
- `czerwona rtęć co to` / `co to czerwona rtęć` / `co to jest czerwona rtęć`
- `czy czerwona rtęć istnieje` · `czerwona rtęć czy istnieje` · `czerwona rtęć istnieje?`
- `czerwona rtęć właściwości` · `czerwona rtęć zastosowanie`
- `czerwona rtęć w lustrze` / `czerwona rtęć lustro` (mirror myth)
- `czerwona rtęć zakazana` · `czerwona rtęć narkotyk` · `czerwona rtęć kongo`
- `czerwona rtęć tartaria` · `czerwona rtęć polska` · `czerwona rtęć informacje`

**Form / variant:**
- `czerwony tlenek rtęci` · `tlenek rtęci czerwony` · `czerwony siarczek rtęci`
- `czerwony siarczan rtęci` · `siarczek rtęci jako czerwona farba malarska`
- `rodanek rtęci gdzie kupić` · `piorunian rtęci gdzie kupić`

**Drop / negative:** `skyrim*` cluster (game), `gra czerwona rtęć`, `gra planszowa`, `wikipedia`, `termometr` consumer searches.

### 1.7 Portuguese (`keywords_pt.txt`, 56 terms — PT‑BR + Lusophone Africa)

**Transactional (BR + PT + AO + MZ markets):**
- `comprar mercúrio` · `comprar mercúrio líquido` · `mercúrio líquido comprar`
- `mercúrio vermelho onde comprar` · `onde comprar mercúrio vermelho`
- `mercúrio liquido onde comprar` · `onde comprar mercúrio líquido`
- `onde comprar mercúrio líquido em portugal`
- `mercúrio cromo onde comprar` · `onde comprar mercúrio para separar ouro` (gold mining intent — strong B2B)

**Price:**
- `mercúrio vermelho preço` · `preço do mercúrio vermelho` · `mercúrio vermelho preço por grama`
- `mercúrio vermelho valor` · `quanto custa um litro de mercúrio vermelho`
- `quanto custa o preço da grama de mercúrio vermelho` · `mercúrio vermelho em pó preço`

**Geo / regional (build LATAM/Africa landing pages):**
- `mercúrio vermelho em angola` · `preço do mercúrio vermelho em angola`
- `onde encontrar mercúrio vermelho em angola` · `mercúrio vermelho em moçambique`
- `mercúrio vermelho preço por grama em angola` · `venda preço do mercúrio vermelho em angola`

**Informational:**
- `o que é mercúrio vermelho` · `mercúrio vermelho existe`
- `para que serve o mercúrio vermelho` · `mercúrio vermelho para que serve`
- `como se explora o mercúrio vermelho`
- `teste de mercúrio vermelho` · `mercúrio vermelho natural`

**Forms / variants:** `mercúrio vermelho líquido`, `mercúrio vermelho em pó`, `óxido vermelho de mercúrio`, `garrafa de mercúrio vermelho`.

### 1.8 Czech (`keywords_cz.txt`, 381 terms — overwhelmingly informational)

**Buyer intent (rare but present — prioritise these):**
- `rtuť cena` · `červená rtuť cena` · `koupit rtuť` · `koupím rtuť`
- `rtuť prodej` · `rtuť prodej cena` · `prodám rtuť` · `kde sehnat rtuť`
- `rtuť výkup` · `rtuť výkup cena` · `rtuť cena výkup` · `kde se vykupuje rtuť`
- `vykupujeme rtuť` · `kde prodat rtuť` · `kde odevzdat rtuť` · `kam odevzdat rtuť`

**Brand / qualifier:**
- `červená rtuť` · `červená rtuť wiki` · `červená rtuť mošnov` · `cervena rtuť` · `rudá rtuť`
- `třaskavá rtuť` / `traskavá rtuť` (fulminate — niche industrial)
- `dentální rtuť` · `dentální rtuť bezpečnostní list` (dental amalgam — wholesale signal)

**Massive informational pool (use for blog / FAQ / `llms.txt`):**
- Properties: `rtuť hustota` / `hustota rtuť` / `rtuť hustota kg/m3`, `rtuť bod tání`, `rtuť bod varu`, `teplota tání rtuť`, `teplota varu rtuť`, `rtuť měrná tepelná kapacita`, `rtuť molární hmotnost`, `rtuť atomová hmotnost`, `rtuť povrchové napětí`, `rtuť tvrdost`, `rtuť skupenství`, `rtuť kg na m3`, `rtuť hmotnost`
- Identity: `rtuť značka` / `rtuť chemická značka` / `rtuť symbol` / `rtuť hg` / `hg rtuť` / `rtuť prvek` / `rtuť anglicky` / `rtuť latinsky` / `rtuť mercury` / `rtuť merkur`
- Safety: `rtuť jedovatost` · `je rtuť jedovatá` · `rtuť otrava` · `rtuť toxikologie` · `rtuť toxicita` · `rtuť smrtelná dávka` · `rtuť rizika` · `rtuť škodlivost` · `rtuť vliv na zdraví` · `rtuť bezpečnostní list` · `rtuť výpary` · `rotz teploměr` (broken thermometer cleanup)
- Use cases: `rtuť využití` · `rtuť použití` · `na co se používá rtuť` · `zlato a rtuť` · `rtuť a zlato` · `rtuť v zubním lékařství` · `rtuť v medicíně` · `rtuť v amalgámu` · `rtuť v plombách`

**Drop:** `skyrim`, `kingdom come`, `psp`, `zaklínač 3`, `karthal`, `barokní cyklus`, `neal stephenson`, `kniha rtuť`, `lucie bílá`, `tuňák`, `losos`, `makrela`, `sardinky`, `rio mare` (fish/mercury content), `očkování`/`vakcíny` (vaccine conspiracy — avoid), `2002 makro policie rtuť` (news event).

---

## 2. Website Audit — Findings

### 2.1 Critical (fix this week)

| # | Issue | Where | Fix |
|---|---|---|---|
| C1 | **All product `meta_keywords` are empty** for every locale | `src/i18n/translations/*.json` → `caluanie.meta_keywords`, `red_mercury.meta_keywords`, `silver_mercury.meta_keywords` | Populate per Section 4 |
| C2 | **Polish `caluanie.meta_title` claims "Producent w USA i Tajlandii"** (manufacturer in USA and Thailand) — geographically false | `pl.json` `caluanie.meta_title` | Remove USA, keep Bangkok/Thajlandia |
| C3 | **Romanian** equivalent: *"Producător în SUA și Thailanda"* | `ro.json` `caluanie.meta_title` | Same fix |
| C4 | **Dutch** equivalent: *"Fabrikant in de V[S]"* (Verenigde Staten) | `nl.json` `caluanie.meta_title` | Same fix |
| C5 | **`keywords_it.txt` is mislabeled** (Dutch content) | repo root | Rename to `keywords_nl.txt`; create derived `keywords_it.txt` (Section 6.2) |
| C6 | BaseLayout emits `meta_keywords` only via `site.meta_keywords` (page‑level keywords prop not wired) | `src/layouts/BaseLayout.astro` | Either accept a `keywords` prop or render `<meta name="keywords">` from a per‑page source |

### 2.2 High (titles/descriptions over budget)

Targets: title ≤ 60 chars, description 140–160 chars, H1 unique per page.

| Locale | Page | Current title length | Action |
|---|---|---|---|
| DE | caluanie | 95+ chars (`… TDS, SDB un…` truncated by Google) | Trim to "Caluanie Muelear Oxidize kaufen \| TDS · SDS · COA — UE Chemicals" (~60) |
| IT | caluanie | 95+ chars | Use "Caluanie Muelear Oxidize in vendita \| Fornitore Bangkok" |
| NL | caluanie | 90+ chars | Use "Caluanie Muelear Oxidize kopen \| Leverancier Bangkok" |
| ES | caluanie | 88 chars | Trim to "Comprar Caluanie Muelear Oxidize \| Proveedor Bangkok" |
| PL | caluanie | mentions USA (drop) | "Kup Caluanie Muelear Oxidize \| Producent Bangkok, Tajlandia" |
| RO | caluanie | mentions SUA (drop) | "Cumpără Caluanie Muelear Oxidize \| Furnizor Bangkok" |
| All | red/silver mercury | typically 70–80 chars | Drop the trailing "\| UE Chemicals" when over budget |

### 2.3 Medium (structural)

- **Add `Product` JSON‑LD** (`@type: Product`, `offers`, `sku`, `brand`, `aggregateRating` if collected) on each of the three product pages. Currently only `Organization`, `WebSite`, `BreadcrumbList`, plus `FAQPage` on home.
- **Add `HowTo` JSON‑LD** to `/ordering/` (steps: enquiry → quotation → COA share → escrow/wire → packaging → tracking → delivery).
- **Hreflang sanity:** verify the canonical URL chosen by `BaseLayout` for `/{lang}/products/caluanie/` matches the `<link rel="alternate" hreflang="{lang}">` target exactly (trailing slash + protocol). Mismatch silently breaks pairing.
- **Internal linking:** completed across the three product pages (Caluanie ↔ Red Mercury ↔ Silver Mercury) with localized product anchors.
- **Image alt text:** ensure each `images/products/...` `alt` attribute contains the localized product name + qualifier (e.g., `alt="Rotes Quecksilber 20/20-258 in versiegelter Glasflasche"` for DE).
- **`/blog/` thin** — only one English Caluanie guide. See Section 7.

### 2.4 Low (polish)

- Add `<meta name="news_keywords">` mirror of `meta_keywords` for news indexing.
- Add `og:image:alt` per locale.
- Add `twitter:site` / `twitter:creator` if a brand handle exists.
- Add `<link rel="alternate" type="application/rss+xml" …>` to blog pages for AI/LLM ingest.

---

## 3. Per‑Language Optimization Plan

Tier definitions (informed by EU buying power, supplied keyword volume, and search competition):

- **Tier 1** (full optimization + blog cluster): EN, DE, FR, ES, IT, NL, PL
- **Tier 2** (optimization + 1 cluster post): PT, RO, CS
- **Tier 3** (optimization, no new content): AR, BN, ZH, ID, KO, FA, RU, TR, VI

### 3.1 Tier 1

#### English (EN)
- **No keyword file supplied** — derived in Section 6.1.
- Hero H1 currently uses brand product names; keep but ensure the `<title>` of `/` includes the buyer phrase: `Caluanie Muelear Oxidize Supplier · Red & Silver Liquid Mercury — UE Chemicals`.
- Product pages: bake purity (`99.995%`), CAS (`7439-97-6`), formula (`Hg₂Sb₂O₇` for Red), and pack sizes (`1L · 5L · 25L · 200L`) into the first 200 chars — these are high‑confidence AEO snippets.
- Add an FAQ section answering the top informational queries: *Is Red Mercury real?*, *What is Caluanie Muelear Oxidize used for?*, *How do you ship liquid mercury internationally?*

#### German (DE)
- **Primary head terms:** `rotes quecksilber kaufen`, `quecksilber kaufen`, `caluanie muelear oxidize kaufen`, `silber quecksilber kaufen`.
- **Title pattern** (≤ 60 chars):
  - Home: `Quecksilber & Caluanie Muelear Oxidize kaufen — Bangkok`
  - Caluanie: `Caluanie Muelear Oxidize kaufen · TDS·SDS·COA — UE Chem.`
  - Red: `Rotes Quecksilber 20/20-258 kaufen · COA · Lieferant`
  - Silver: `Flüssiges Quecksilber Hg 99,995% kaufen · SDS · COA`
- **Description pattern (140–160 chars)**: include `Bangkok, Thailand`, `weltweiter Versand`, `Großhandel`, `COA / SDS / TDS`, `1 kg Preis auf Anfrage`.
- **`meta_keywords`** — see Section 4.
- **AEO**: add `<dl>` Q&A near footer: *"Was ist rotes Quecksilber?"*, *"Wer ist deutscher Hersteller von rotem Quecksilber?"*, *"Reflektiert rotes Quecksilber im Spiegel?"* (myth — answer factually).
- **GEO**: keep `geo.placename = Berlin` for `/de/`; add `geo.region=DE` and ICBM coords; consider sub‑pages `/de/lieferung-deutschland/` linked from home.

#### French (FR)
- **Primary head terms:** `acheter du mercure rouge`, `achat mercure rouge`, `achat mercure liquide`, `caluanie muelear oxidize en vente en ligne france`.
- **Title pattern**:
  - Home: `Acheter mercure rouge & Caluanie Muelear Oxidize — Bangkok`
  - Caluanie: `Acheter Caluanie Muelear Oxidize · TDS·SDS·COA · UE Chem.`
  - Red: `Acheter Mercure Rouge 20/20-258 · COA · Livraison France`
  - Silver: `Acheter Mercure Liquide (Hg) 99,995% · SDS · COA`
- **Description**: include `livraison France · UE · DOM-TOM`, `prix au kg sur demande`, `documentation par lot`.
- **AEO**: address `mercure liquide danger` factually, then reframe to industrial use.
- **Cross‑sell**: `eau lourde` is mentioned — add a small disclaimer page or an internal note that UE Chemicals does not supply heavy water (avoids irrelevant traffic).

#### Spanish (ES)
- **Primary head terms:** `comprar mercurio rojo`, `mercurio rojo precio`, `venta de mercurio rojo en españa`, `caluanie muelear oxidize`.
- **Title pattern**:
  - Home: `Comprar mercurio rojo y Caluanie Muelear Oxidize — Bangkok`
  - Caluanie: `Comprar Caluanie Muelear Oxidize · TDS·SDS·COA — UE Chem.`
  - Red: `Mercurio Rojo 20/20-258 a la venta · COA · Envío España`
  - Silver: `Mercurio Líquido Plateado Hg 99,995% · SDS · COA`
- **Description**: `Proveedor en Bangkok, Tailandia · envío a España, Colombia, México, Perú, Ecuador, Venezuela · precio por kilo a consulta · COA/SDS/TDS por lote`.
- **LATAM landing pages** (one per region with localized H1, slug, intro, contact): `/es/colombia/`, `/es/mexico/`, `/es/peru/`, `/es/venezuela/`, `/es/ecuador/`. Re‑use the product cards and add a "Envíos a {país}" subsection.
- **Blog cluster** (Section 7) capitalising on the *informational* keyword pool — these are top‑funnel queries with no clear commercial supplier ranking on Google ES.

#### Italian (IT)
- No keyword file — use derived list (Section 6.2).
- **Primary head terms:** `mercurio rosso prezzo`, `mercurio rosso vendita`, `comprare mercurio liquido`, `caluanie muelear oxidize vendita`.
- **Title pattern**:
  - Home: `Mercurio rosso e Caluanie Muelear Oxidize — Bangkok`
  - Caluanie: `Comprare Caluanie Muelear Oxidize · TDS·SDS·COA · UE Chem.`
  - Red: `Mercurio Rosso 20/20-258 in vendita · COA · Spedizione UE`
  - Silver: `Mercurio Liquido Argento Hg 99,995% · SDS · COA`

#### Dutch (NL)
- **Primary head terms:** `kwik kopen`, `vloeibaar kwik kopen`, `rood kwik te koop`, `red mercury kopen`.
- **Title pattern**:
  - Home: `Kwik kopen & Caluanie Muelear Oxidize — Leverancier Bangkok`
  - Caluanie: `Caluanie Muelear Oxidize kopen · TDS·SDS·COA · UE Chem.`
  - Red: `Rood Kwik 20/20-258 te koop · COA · Levering NL/BE`
  - Silver: `Vloeibaar Kwik (Hg) 99,995% kopen · SDS · COA`
- **Negative kw exclusion**: weave neutral copy that avoids ranking for `kwik fit` (tire shop) — never use the word "fit" near "kwik" on the page; do not use `kwik kwek kwak`.
- **Geo**: explicitly mention Nederland and België (Belgium) given `kwik kopen belgië` volume.

#### Polish (PL)
- **Primary head terms:** `czerwona rtęć gdzie kupić`, `gdzie kupić rtęć`, `czerwona rtęć cena`, `czerwona rtęć`.
- **Title pattern**:
  - Home: `Kup rtęć i Caluanie Muelear Oxidize — Dostawca Bangkok`
  - Caluanie: `Kup Caluanie Muelear Oxidize · TDS·SDS·COA · UE Chem.`
  - Red: `Czerwona rtęć 20/20-258 — gdzie kupić · COA · UE Chem.`
  - Silver: `Płynna rtęć srebrna (Hg) 99,995% · SDS · COA`
- **Fix**: remove "Producent w USA i Tajlandii" (USA is false) — replace with "Producent w Bangkoku, Tajlandia".
- **AEO**: Q&A targeting `czerwona rtęć co to`, `czy czerwona rtęć istnieje`, `czerwona rtęć zastosowanie`, `czerwona rtęć zakazana` (legality).

### 3.2 Tier 2

#### Portuguese (PT — covers PT/BR/AO/MZ)
- **Primary head terms:** `comprar mercúrio líquido`, `mercúrio vermelho onde comprar`, `mercúrio vermelho preço`, `caluanie muelear oxidize comprar`.
- **Title pattern** (Caluanie): `Comprar Caluanie Muelear Oxidize · COA·SDS · Bangcoc`
- **LATAM/Lusophone Africa**: dedicated `/pt/angola/`, `/pt/mocambique/`, `/pt/brasil/`, `/pt/portugal/` pages with localized currency mention and freight terms (CIF/FOB) — Angola/Moz volume is real per the keyword set.
- **Cross‑intent**: `onde comprar mercúrio para separar ouro` — add an "Aplicações em mineração de ouro" section linking to silver mercury product page.

#### Romanian (RO)
- Few keyword data points — use derived list (Section 6.4).
- **Fix** the false "SUA și Thailanda" claim in caluanie title → `Caluanie Muelear Oxidize · Furnizor Bangkok, Thailanda`.

#### Czech (CS)
- **Primary head terms:** `koupit rtuť`, `rtuť cena`, `červená rtuť`, `červená rtuť cena`.
- The keyword pool is largely informational; **the commercial opportunity is small but uncontested** — own the buyer terms and reuse the informational pool for `llms.txt` and a long FAQ.
- **Title pattern** (Caluanie): `Koupit Caluanie Muelear Oxidize · TDS·SDS·COA · Bangkok`

### 3.3 Tier 3 (no keyword files, derived in Section 6)

For AR, BN, ZH, ID, KO, FA, RU, TR, VI: apply the same title/description pattern using the derived keyword sets. Do not invest in new content yet — focus is technical correctness, hreflang, and product `meta_keywords`.

---

## 4. Product `meta_keywords` — Drop‑In Values

These are the values to paste into `src/i18n/translations/{lang}.json` under `caluanie.meta_keywords`, `red_mercury.meta_keywords`, `silver_mercury.meta_keywords`.

### EN
```
caluanie:        Caluanie Muelear Oxidize, Caluanie supplier, buy Caluanie Muelear Oxidize, Caluanie wholesale, industrial oxidant, metalworking, COA, SDS, TDS, Bangkok manufacturer, worldwide shipping
red_mercury:     red mercury, red liquid mercury, Hg2Sb2O7, red mercury 20/20-258, buy red mercury, red mercury price per kg, red mercury supplier, COA, SDS, wholesale, Bangkok
silver_mercury:  silver liquid mercury, liquid mercury Hg, mercury CAS 7439-97-6, 99.995% mercury, buy liquid mercury, mercury price per kg, mercury supplier, gold extraction, COA, SDS, Bangkok
```

### DE
```
caluanie:        Caluanie Muelear Oxidize kaufen, Caluanie Muelear Oxidize Deutschland, Caluanie Lieferant, industrielles Oxidationsmittel, TDS, SDS, COA, Großhandel, weltweiter Versand, Bangkok
red_mercury:     rotes Quecksilber kaufen, rotes Quecksilber Preis, red mercury kaufen, Hg2Sb2O7, rotes Quecksilber Lieferant, 20/20-258, COA, SDS, Großhandel, Bangkok
silver_mercury:  flüssiges Quecksilber kaufen, silber Quecksilber kaufen, Quecksilber kaufen, Quecksilber Preis pro kg, 1 kg Quecksilber Preis, Hg 99,995%, COA, SDS, Lieferant, Bangkok
```

### FR
```
caluanie:        acheter Caluanie Muelear Oxidize, Caluanie Muelear Oxidize en vente en ligne France, achat Caluanie Muelear Oxidize, fournisseur Caluanie, oxydant industriel, TDS, SDS, COA, Bangkok
red_mercury:     acheter mercure rouge, achat mercure rouge, mercure rouge prix, mercure rouge liquide, ou trouver du mercure rouge, Hg2Sb2O7, fournisseur mercure rouge, COA, SDS, Bangkok
silver_mercury:  acheter mercure liquide, achat mercure liquide, mercure argenté, mercure liquide gris, mercure prix kg, mercure prix gramme, Hg 99,995%, fournisseur, COA, SDS, Bangkok
```

### ES
```
caluanie:        comprar Caluanie Muelear Oxidize, Caluanie Muelear Oxidize precio, proveedor Caluanie, oxidante industrial, TDS, SDS, COA, venta al por mayor, envío internacional, Bangkok
red_mercury:     comprar mercurio rojo, mercurio rojo precio, venta de mercurio rojo, mercurio rojo en España, mercurio rojo 20/20, mercurio rojo alemán, Hg2Sb2O7, COA, SDS, Bangkok
silver_mercury:  comprar mercurio líquido, mercurio líquido precio, mercurio plateado, venta de mercurio líquido, precio mercurio líquido por kilo, Hg 99,995%, CAS 7439-97-6, COA, SDS, Bangkok
```

### IT
```
caluanie:        comprare Caluanie Muelear Oxidize, Caluanie Muelear Oxidize prezzo, vendita Caluanie, ossidante industriale, TDS, SDS, COA, ingrosso, spedizione mondiale, Bangkok
red_mercury:     comprare mercurio rosso, mercurio rosso prezzo, vendita mercurio rosso, mercurio rosso 20/20-258, Hg2Sb2O7, fornitore mercurio rosso, COA, SDS, Bangkok
silver_mercury:  comprare mercurio liquido, mercurio liquido prezzo, mercurio argentato, vendita mercurio liquido, prezzo mercurio al kg, Hg 99,995%, CAS 7439-97-6, COA, SDS, Bangkok
```

### NL
```
caluanie:        Caluanie Muelear Oxidize kopen, Caluanie Muelear Oxidize prijs, leverancier Caluanie, industriële oxidator, TDS, SDS, COA, groothandel, wereldwijde verzending, Bangkok
red_mercury:     rood kwik kopen, rood kwik te koop, rood kwik prijs, red mercury kopen, red mercury price, Hg2Sb2O7, leverancier rood kwik, COA, SDS, Bangkok
silver_mercury:  vloeibaar kwik kopen, kwik kopen, kwikzilver kopen, kwik prijs per kilo, kwik metaal kopen, Hg 99,995%, CAS 7439-97-6, COA, SDS, Bangkok
```

### PL
```
caluanie:        Caluanie Muelear Oxidize kup, Caluanie Muelear Oxidize cena, dostawca Caluanie, przemysłowy utleniacz, TDS, SDS, COA, hurt, wysyłka globalna, Bangkok
red_mercury:     czerwona rtęć gdzie kupić, czerwona rtęć cena, czerwona rtęć kupić, rtęć kupić, czerwona rtęć 20/20, Hg2Sb2O7, dostawca czerwonej rtęci, COA, SDS, Bangkok
silver_mercury:  rtęć kupić, gdzie kupić rtęć, płynna rtęć srebrna, rtęć cena, rtęć kg cena, Hg 99,995%, CAS 7439-97-6, dostawca rtęci, COA, SDS, Bangkok
```

### PT
```
caluanie:        comprar Caluanie Muelear Oxidize, Caluanie Muelear Oxidize preço, fornecedor Caluanie, oxidante industrial, TDS, SDS, COA, atacado, envio global, Bangcoc
red_mercury:     mercúrio vermelho onde comprar, mercúrio vermelho preço, mercúrio vermelho líquido, comprar mercúrio vermelho, mercúrio vermelho em Angola, Hg2Sb2O7, COA, SDS, Bangcoc
silver_mercury:  comprar mercúrio líquido, mercúrio líquido preço, mercúrio prateado, mercúrio líquido onde comprar, preço por kg, Hg 99,995%, CAS 7439-97-6, COA, SDS, Bangcoc
```

### CS
```
caluanie:        koupit Caluanie Muelear Oxidize, Caluanie Muelear Oxidize cena, dodavatel Caluanie, průmyslový oxidant, TDS, SDS, COA, velkoobchod, celosvětová doprava, Bangkok
red_mercury:     červená rtuť koupit, červená rtuť cena, kde koupit rtuť, koupit rtuť, červená rtuť 20/20-258, Hg2Sb2O7, dodavatel červené rtuti, COA, SDS, Bangkok
silver_mercury:  rtuť koupit, koupit rtuť, kapalná rtuť, rtuť cena, rtuť cena za kg, Hg 99,995%, CAS 7439-97-6, dodavatel rtuti, COA, SDS, Bangkok
```

### RO
```
caluanie:        cumpără Caluanie Muelear Oxidize, Caluanie Muelear Oxidize preț, furnizor Caluanie, oxidant industrial, TDS, SDS, COA, en-gros, livrare globală, Bangkok
red_mercury:     mercur roșu cumpără, mercur roșu preț, mercur roșu lichid, mercur roșu 20/20-258, Hg2Sb2O7, furnizor mercur roșu, COA, SDS, Bangkok
silver_mercury:  mercur lichid cumpără, mercur argintiu, mercur lichid preț, mercur kg preț, Hg 99,995%, CAS 7439-97-6, furnizor mercur, COA, SDS, Bangkok
```

### Tier‑3 derived (use the keyword sets from Section 6 verbatim).

---

## 5. Title & Description Rewrites (≤60 / 140–160 char)

| Locale | Page | Title | Meta description |
|---|---|---|---|
| EN | caluanie | `Buy Caluanie Muelear Oxidize · COA·SDS·TDS — Bangkok` | `Caluanie Muelear Oxidize from UE Chemicals Bangkok with verified COA, SDS, TDS, 1L–200L pack sizes and worldwide shipping for metalworking and refining.` |
| EN | red_mercury | `Red Liquid Mercury 20/20-258 · COA·SDS — UE Chemicals` | `Red Liquid Mercury (Hg₂Sb₂O₇, 20/20-258) ≥99.995% from UE Chemicals Bangkok. COA, SDS, sealed packaging, escrow-friendly payments, worldwide tracked shipping.` |
| EN | silver_mercury | `Silver Liquid Mercury Hg 99.995% · COA·SDS — Bangkok` | `Silver Liquid Mercury (Hg, CAS 7439-97-6) 99.995% pure from UE Chemicals Bangkok. COA, SDS, sealed flasks, gold-extraction grade, fast worldwide shipping.` |
| DE | caluanie | `Caluanie Muelear Oxidize kaufen · TDS·SDS·COA — UE Chem.` | `Caluanie Muelear Oxidize von UE Chemicals Bangkok mit geprüftem TDS, SDS, COA. 1 l – 200 l Gebinde, Großhandel, weltweiter Versand, Industriequalität.` |
| DE | red_mercury | `Rotes Quecksilber 20/20-258 kaufen · COA·SDS · Bangkok` | `Rotes Quecksilber (Hg₂Sb₂O₇, 20/20-258) ≥99,995% bei UE Chemicals Bangkok. Versiegelte Glasflaschen, COA und SDS pro Charge, weltweiter Versand.` |
| DE | silver_mercury | `Flüssiges Quecksilber Hg 99,995% kaufen · SDS·COA` | `Silber-flüssiges Quecksilber (Hg, CAS 7439-97-6) 99,995% bei UE Chemicals Bangkok. SDS, COA pro Charge, 1 kg – 35 kg Flaschen, weltweiter Versand.` |
| FR | caluanie | `Acheter Caluanie Muelear Oxidize · COA·SDS·TDS — Bangkok` | `Caluanie Muelear Oxidize chez UE Chemicals Bangkok : COA, SDS, TDS par lot, conditionnements 1 L – 200 L, livraison France, UE et export mondial.` |
| FR | red_mercury | `Mercure Rouge 20/20-258 · COA·SDS — UE Chemicals` | `Mercure Rouge liquide (Hg₂Sb₂O₇, 20/20-258) ≥99,995% chez UE Chemicals Bangkok. COA et SDS par lot, flacons scellés, livraison sécurisée mondiale.` |
| FR | silver_mercury | `Mercure Liquide Argenté Hg 99,995% · SDS·COA` | `Mercure liquide argenté (Hg, CAS 7439-97-6) 99,995% chez UE Chemicals Bangkok. SDS, COA par lot, flacons scellés 1–35 kg, expédition mondiale suivie.` |
| ES | caluanie | `Comprar Caluanie Muelear Oxidize · COA·SDS — Bangkok` | `Caluanie Muelear Oxidize en UE Chemicals Bangkok con COA, SDS, TDS verificados, envases de 1 L a 200 L y envío internacional a España y LATAM.` |
| ES | red_mercury | `Mercurio Rojo 20/20-258 — venta · COA·SDS · UE Chem.` | `Mercurio Rojo (Hg₂Sb₂O₇, 20/20-258) ≥99,995% en UE Chemicals Bangkok. COA y SDS por lote, frascos sellados, envío a España, México, Colombia, Perú.` |
| ES | silver_mercury | `Mercurio Líquido Plateado Hg 99,995% · SDS·COA` | `Mercurio líquido plateado (Hg, CAS 7439-97-6) 99,995% en UE Chemicals Bangkok. SDS, COA por lote, frascos 1–35 kg, envío internacional rastreado.` |
| IT | caluanie | `Comprare Caluanie Muelear Oxidize · COA·SDS · Bangkok` | `Caluanie Muelear Oxidize da UE Chemicals Bangkok con COA, SDS, TDS verificati, confezioni 1 L – 200 L e spedizione mondiale per uso industriale.` |
| IT | red_mercury | `Mercurio Rosso 20/20-258 in vendita · COA·SDS · Bangkok` | `Mercurio Rosso (Hg₂Sb₂O₇, 20/20-258) ≥99,995% da UE Chemicals Bangkok. COA e SDS per lotto, flaconi sigillati, spedizione UE e mondiale tracciata.` |
| IT | silver_mercury | `Mercurio Liquido Argento Hg 99,995% · SDS·COA` | `Mercurio liquido argento (Hg, CAS 7439-97-6) 99,995% da UE Chemicals Bangkok. SDS, COA per lotto, flaconi 1–35 kg, spedizione mondiale tracciata.` |
| NL | caluanie | `Caluanie Muelear Oxidize kopen · COA·SDS · Bangkok` | `Caluanie Muelear Oxidize bij UE Chemicals Bangkok met COA, SDS, TDS, verpakkingen 1 L – 200 L en wereldwijde verzending naar NL en BE.` |
| NL | red_mercury | `Rood Kwik 20/20-258 te koop · COA·SDS · UE Chemicals` | `Rood kwik (Hg₂Sb₂O₇, 20/20-258) ≥99,995% bij UE Chemicals Bangkok. COA en SDS per batch, verzegelde flessen, levering NL/BE en wereldwijd.` |
| NL | silver_mercury | `Vloeibaar Kwik Hg 99,995% kopen · SDS·COA · Bangkok` | `Vloeibaar kwik (Hg, CAS 7439-97-6) 99,995% bij UE Chemicals Bangkok. SDS, COA per batch, flessen 1–35 kg, snelle wereldwijde levering met tracking.` |
| PL | caluanie | `Kup Caluanie Muelear Oxidize · COA·SDS · Bangkok` | `Caluanie Muelear Oxidize w UE Chemicals Bangkok z COA, SDS, TDS, opakowania 1 L – 200 L i wysyłka globalna do Polski oraz UE.` |
| PL | red_mercury | `Czerwona rtęć 20/20-258 — gdzie kupić · COA·SDS` | `Czerwona rtęć (Hg₂Sb₂O₇, 20/20-258) ≥99,995% w UE Chemicals Bangkok. COA i SDS na partię, butelki uszczelnione, wysyłka do Polski i całej UE.` |
| PL | silver_mercury | `Płynna rtęć srebrna Hg 99,995% · SDS·COA · Bangkok` | `Płynna rtęć srebrna (Hg, CAS 7439-97-6) 99,995% w UE Chemicals Bangkok. SDS, COA na partię, butelki 1–35 kg, szybka wysyłka globalna z trackingiem.` |
| PT | caluanie | `Comprar Caluanie Muelear Oxidize · COA·SDS · Bangcoc` | `Caluanie Muelear Oxidize na UE Chemicals Bangcoc com COA, SDS, TDS, embalagens 1 L – 200 L e envio para Portugal, Brasil, Angola e Moçambique.` |
| PT | red_mercury | `Mercúrio Vermelho 20/20-258 · COA·SDS · UE Chemicals` | `Mercúrio Vermelho (Hg₂Sb₂O₇, 20/20-258) ≥99,995% na UE Chemicals Bangcoc. COA e SDS por lote, frascos selados, envio Lusofonia + global rastreado.` |
| PT | silver_mercury | `Mercúrio Líquido Prateado Hg 99,995% · SDS·COA` | `Mercúrio líquido prateado (Hg, CAS 7439-97-6) 99,995% na UE Chemicals Bangcoc. SDS, COA por lote, frascos 1–35 kg, envio mundial com rastreio.` |
| RO | caluanie | `Cumpără Caluanie Muelear Oxidize · COA·SDS · Bangkok` | `Caluanie Muelear Oxidize la UE Chemicals Bangkok cu COA, SDS, TDS, ambalaje 1 L – 200 L și livrare globală în România și UE.` |
| RO | red_mercury | `Mercur Roșu 20/20-258 · COA·SDS · UE Chemicals Bangkok` | `Mercur Roșu (Hg₂Sb₂O₇, 20/20-258) ≥99,995% la UE Chemicals Bangkok. COA și SDS per lot, sticle sigilate, livrare în România și la nivel global.` |
| RO | silver_mercury | `Mercur Lichid Argintiu Hg 99,995% · SDS·COA` | `Mercur lichid argintiu (Hg, CAS 7439-97-6) 99,995% la UE Chemicals Bangkok. SDS, COA per lot, sticle 1–35 kg, livrare mondială cu urmărire.` |
| CS | caluanie | `Koupit Caluanie Muelear Oxidize · COA·SDS · Bangkok` | `Caluanie Muelear Oxidize od UE Chemicals Bangkok s COA, SDS, TDS, balení 1 L – 200 L a celosvětovou dopravou do ČR a EU.` |
| CS | red_mercury | `Červená rtuť 20/20-258 koupit · COA·SDS · UE Chemicals` | `Červená rtuť (Hg₂Sb₂O₇, 20/20-258) ≥99,995% od UE Chemicals Bangkok. COA a SDS na šarži, zapečetěné lahve, doprava do ČR a celosvětově.` |
| CS | silver_mercury | `Stříbrná kapalná rtuť Hg 99,995% · SDS·COA · Bangkok` | `Stříbrná kapalná rtuť (Hg, CAS 7439-97-6) 99,995% od UE Chemicals Bangkok. SDS, COA na šarži, lahve 1–35 kg, rychlá globální doprava s trackingem.` |

---

## 6. Suggested Keyword Lists for Languages **Without** Files

These are derived from the EN/DE/ES patterns plus public knowledge of search‑intent norms in each market. Use as the seed for `meta_keywords`, H2/H3 phrasing, and `llms.txt` Q&A.

### 6.1 English (EN) — derived
```
Caluanie Muelear Oxidize, Caluanie Muelear Oxidize for sale, buy Caluanie Muelear Oxidize, Caluanie Muelear Oxidize price, Caluanie supplier, Caluanie wholesale, Caluanie manufacturer Bangkok, industrial oxidant, metalworking solvent
red mercury, red liquid mercury, red mercury for sale, buy red mercury, red mercury price per kg, red mercury 20/20, red mercury 20/20-258, Hg2Sb2O7, red mercury supplier, red mercury wholesale, red mercury Germany
liquid mercury, silver liquid mercury, buy liquid mercury, mercury Hg, mercury CAS 7439-97-6, 99.995% mercury, mercury price per kg, mercury for gold extraction, mercury for amalgamation, mercury supplier, mercury wholesale, Bangkok mercury supplier
```

### 6.2 Italian (IT) — derived
```
caluanie:       Caluanie Muelear Oxidize comprare, Caluanie Muelear Oxidize prezzo, Caluanie Muelear Oxidize vendita, Caluanie Muelear Oxidize Italia, fornitore Caluanie, ossidante industriale, TDS, SDS, COA, ingrosso, Bangkok
red_mercury:    mercurio rosso, mercurio rosso prezzo, mercurio rosso vendita, comprare mercurio rosso, mercurio rosso liquido, mercurio rosso 20/20-258, Hg2Sb2O7, fornitore mercurio rosso, COA, SDS, Bangkok
silver_mercury: mercurio liquido, mercurio argentato, comprare mercurio liquido, mercurio liquido prezzo, vendita mercurio liquido, prezzo mercurio al kg, Hg 99,995%, CAS 7439-97-6, fornitore mercurio, Bangkok
```

### 6.3 Russian (RU) — derived
```
caluanie:       купить Caluanie Muelear Oxidize, Caluanie Muelear Oxidize цена, Caluanie Muelear Oxidize Россия, поставщик Caluanie, промышленный окислитель, TDS, SDS, COA, оптом, доставка по миру, Бангкок
red_mercury:    красная ртуть купить, красная ртуть цена, купить красную ртуть, красная ртуть 20/20-258, Hg2Sb2O7, поставщик красной ртути, ртуть оптом, COA, SDS, Бангкок
silver_mercury: купить ртуть, ртуть жидкая, серебряная ртуть, ртуть цена за кг, ртуть Hg 99,995%, CAS 7439-97-6, поставщик ртути, ртуть оптом, COA, SDS, Бангкок
```

### 6.4 Romanian (RO) — derived
```
caluanie:       cumpără Caluanie Muelear Oxidize, Caluanie Muelear Oxidize preț, Caluanie Muelear Oxidize România, furnizor Caluanie, oxidant industrial, TDS, SDS, COA, en-gros, livrare globală, Bangkok
red_mercury:    mercur roșu, mercur roșu preț, cumpără mercur roșu, mercur roșu lichid, mercur roșu 20/20-258, Hg2Sb2O7, furnizor mercur roșu, COA, SDS, Bangkok
silver_mercury: cumpără mercur, mercur lichid, mercur argintiu, mercur preț pe kg, mercur Hg 99,995%, CAS 7439-97-6, furnizor mercur, en-gros, COA, SDS, Bangkok
```

### 6.5 Turkish (TR) — derived
```
caluanie:       Caluanie Muelear Oxidize satın al, Caluanie Muelear Oxidize fiyat, Caluanie Muelear Oxidize Türkiye, Caluanie tedarikçi, endüstriyel oksitleyici, TDS, SDS, COA, toptan, dünya çapında nakliye, Bangkok
red_mercury:    kırmızı cıva satın al, kırmızı cıva fiyat, kırmızı cıva nereden alınır, kırmızı cıva 20/20-258, Hg2Sb2O7, kırmızı cıva tedarikçisi, COA, SDS, Bangkok
silver_mercury: cıva satın al, sıvı cıva, gümüş cıva, cıva fiyatı kg, cıva Hg 99,995%, CAS 7439-97-6, cıva tedarikçisi, toptan, COA, SDS, Bangkok
```

### 6.6 Arabic (AR) — derived
```
caluanie:       شراء Caluanie Muelear Oxidize, سعر Caluanie Muelear Oxidize, مورد Caluanie, مؤكسد صناعي, TDS, SDS, COA, بالجملة, شحن عالمي, بانكوك
red_mercury:    الزئبق الأحمر, شراء الزئبق الأحمر, سعر الزئبق الأحمر, الزئبق الأحمر السائل, الزئبق الأحمر 20/20-258, Hg2Sb2O7, مورد الزئبق الأحمر, COA, SDS, بانكوك
silver_mercury: شراء الزئبق السائل, الزئبق الفضي, سعر الزئبق, الزئبق Hg 99.995%, CAS 7439-97-6, مورد الزئبق, بالجملة, COA, SDS, بانكوك
```

### 6.7 Persian/Farsi (FA) — derived
```
caluanie:       خرید Caluanie Muelear Oxidize, قیمت Caluanie Muelear Oxidize, تامین کننده Caluanie, اکسید کننده صنعتی, TDS, SDS, COA, عمده فروشی, ارسال جهانی, بانکوک
red_mercury:    جیوه قرمز, خرید جیوه قرمز, قیمت جیوه قرمز, جیوه قرمز مایع, جیوه قرمز 20/20-258, Hg2Sb2O7, تامین کننده جیوه قرمز, COA, SDS, بانکوک
silver_mercury: خرید جیوه, جیوه مایع, جیوه نقره ای, قیمت جیوه, جیوه Hg 99.995%, CAS 7439-97-6, تامین کننده جیوه, عمده فروشی, COA, SDS, بانکوک
```

### 6.8 Chinese — Simplified (ZH) — derived
```
caluanie:       购买 Caluanie Muelear Oxidize, Caluanie Muelear Oxidize 价格, Caluanie 供应商, 工业氧化剂, TDS, SDS, COA, 批发, 全球发货, 曼谷
red_mercury:    红色水银, 购买红色水银, 红色水银价格, 红色液体水银, 红色水银 20/20-258, Hg2Sb2O7, 红色水银供应商, COA, SDS, 曼谷
silver_mercury: 购买液体水银, 银色水银, 水银价格, 水银 Hg 99.995%, CAS 7439-97-6, 水银供应商, 批发, COA, SDS, 曼谷
```

### 6.9 Korean (KO) — derived
```
caluanie:       Caluanie Muelear Oxidize 구매, Caluanie Muelear Oxidize 가격, Caluanie 공급업체, 산업용 산화제, TDS, SDS, COA, 도매, 전 세계 배송, 방콕
red_mercury:    레드 머큐리, 레드 머큐리 구매, 레드 머큐리 가격, 액체 레드 머큐리, 레드 머큐리 20/20-258, Hg2Sb2O7, 레드 머큐리 공급업체, COA, SDS, 방콕
silver_mercury: 액체 수은 구매, 실버 머큐리, 수은 가격, 수은 Hg 99.995%, CAS 7439-97-6, 수은 공급업체, 도매, COA, SDS, 방콕
```

### 6.10 Indonesian (ID) — derived
```
caluanie:       beli Caluanie Muelear Oxidize, harga Caluanie Muelear Oxidize, pemasok Caluanie, oksidator industri, TDS, SDS, COA, grosir, pengiriman global, Bangkok
red_mercury:    merkuri merah, beli merkuri merah, harga merkuri merah, merkuri merah cair, merkuri merah 20/20-258, Hg2Sb2O7, pemasok merkuri merah, COA, SDS, Bangkok
silver_mercury: beli merkuri cair, merkuri perak, harga merkuri, merkuri Hg 99.995%, CAS 7439-97-6, pemasok merkuri, grosir, COA, SDS, Bangkok
```

### 6.11 Vietnamese (VI) — derived
```
caluanie:       mua Caluanie Muelear Oxidize, giá Caluanie Muelear Oxidize, nhà cung cấp Caluanie, chất oxy hóa công nghiệp, TDS, SDS, COA, bán buôn, vận chuyển toàn cầu, Bangkok
red_mercury:    thủy ngân đỏ, mua thủy ngân đỏ, giá thủy ngân đỏ, thủy ngân đỏ lỏng, thủy ngân đỏ 20/20-258, Hg2Sb2O7, nhà cung cấp thủy ngân đỏ, COA, SDS, Bangkok
silver_mercury: mua thủy ngân lỏng, thủy ngân bạc, giá thủy ngân, thủy ngân Hg 99,995%, CAS 7439-97-6, nhà cung cấp thủy ngân, bán buôn, COA, SDS, Bangkok
```

### 6.12 Bengali (BN) — derived
```
caluanie:       Caluanie Muelear Oxidize কিনুন, Caluanie Muelear Oxidize দাম, Caluanie সরবরাহকারী, শিল্প অক্সিডাইজার, TDS, SDS, COA, পাইকারি, বিশ্বব্যাপী শিপিং, ব্যাংকক
red_mercury:    লাল পারদ, লাল পারদ কিনুন, লাল পারদের দাম, তরল লাল পারদ, লাল পারদ 20/20-258, Hg2Sb2O7, লাল পারদ সরবরাহকারী, COA, SDS, ব্যাংকক
silver_mercury: তরল পারদ কিনুন, রূপালী পারদ, পারদের দাম, পারদ Hg 99.995%, CAS 7439-97-6, পারদ সরবরাহকারী, পাইকারি, COA, SDS, ব্যাংকক
```

---

## 7. Content Cluster Plan (Blog + AEO)

Each Tier‑1 locale gets the same 4‑post cluster (translate; do not auto‑translate — use native phrasing from the keyword files). Tier‑2 gets posts #1 and #2 only.

| # | Slug pattern | Target query cluster | AEO snippet target |
|---|---|---|---|
| 1 | `/blog/what-is-red-mercury/` (+ `/{lang}/blog/...`) | "is red mercury real", "what is red mercury", "red mercury Hg2Sb2O7", "red mercury 20/20-258", "rotes quecksilber was ist", "que es el mercurio rojo", "co to czerwona rtęć", "mercúrio vermelho o que é" | Featured snippet: 50‑word definition + composition box + price‑on‑request CTA |
| 2 | `/blog/buying-caluanie-muelear-oxidize-2026-guide/` | "buy Caluanie Muelear Oxidize", "Caluanie Muelear Oxidize price", "Caluanie supplier 2026", + each locale buy variant | "How to buy" `HowTo` schema; price brackets table; pack size table |
| 3 | `/blog/silver-liquid-mercury-for-gold-extraction/` | "mercury for gold extraction", "amalgamation", "mercurio para extraer oro", "mercúrio para separar ouro" | Step‑by‑step responsible‑use guidance + COA download |
| 4 | `/blog/red-mercury-myth-vs-fact/` | "red mercury mirror", "red mercury made in germany", "mercurio rojo no se refleja", "rotes quecksilber spiegel", "czerwona rtęć w lustrze" | Q&A format addressing each myth with sourced refutation |

**FAQ block (every product page, every locale):** answer 4–6 questions sourced directly from the keyword file's informational queries. Wrap with `FAQPage` JSON‑LD.

---

## 8. Technical SEO Implementation Checklist

```
[x] Rename keywords_it.txt → keywords_nl.txt (current file is Dutch)
[x] Create keywords_it.txt with derived list (Section 6.2)
[x] Create keywords_en.txt with derived list (Section 6.1)

[x] BaseLayout.astro: accept `keywords` prop; emit <meta name="keywords" content={keywords ?? siteMetaKeywords}>
[x] Wire each product Astro page to pass `keywords={t(tr, 'caluanie.meta_keywords')}`

[x] Populate caluanie.meta_keywords / red_mercury.meta_keywords / silver_mercury.meta_keywords
    in src/i18n/translations/{en,de,fr,es,it,nl,pl,pt,cs,ro,ru,tr,ar,fa,zh,ko,id,vi,bn}.json
    (use Section 4 + Section 6 values verbatim)

[x] Rewrite caluanie.meta_title / meta_desc per Section 5
    Same for red_mercury and silver_mercury

[x] Remove "USA" / "SUA" / "VS" claims from PL, RO, NL caluanie.meta_title (and any body copy)

[x] Add Product JSON-LD to each product page:
    @type Product, name (localized), brand "UE Chemicals", sku, image, description,
    offers { @type: Offer, priceCurrency: USD, price: "Contact for quotation",
             availability: "InStock", seller: { @type: Organization, name: "UE Chemicals" } }

[x] Add HowTo JSON-LD on /ordering/ (each locale):
    steps = [Inquiry, Quotation, COA review, Payment, Packaging, Shipping, Delivery]

[x] Add FAQPage JSON-LD to each product page (existing localized product FAQs confirmed and preserved)

[x] Validate hreflang pairing in generated HTML (437 pages checked locally; no missing hreflang sets)
[ ] Validate Schema.org with https://validator.schema.org/

[x] Sitemap regeneration (already automatic via @astrojs/sitemap on build)
[x] Include crawlable trust/legal pages in sitemap config (privacy, terms, returns, impressum, disclaimer)
[ ] Submit sitemap-index.xml in Google Search Console + Bing Webmaster + Yandex
[ ] Add IndexNow ping for Bing/Yandex on deploy

[x] /llms.txt — append per-locale Q&A blocks (or mirror to /{lang}/llms.txt for FA/AR/ZH/RU)
[x] /llms-full.txt — generate machine-readable product, policy, merchant, crawl, and AEO summary

[ ] Create LATAM/Lusophone landing pages:
    /es/colombia/, /es/mexico/, /es/peru/, /es/venezuela/, /es/ecuador/
    /pt/angola/, /pt/mocambique/, /pt/brasil/, /pt/portugal/

[ ] Image alt text audit per locale (use localized product name + qualifier)

[x] Internal linking: cross-link the 3 product pages within each locale

[x] Drop locale-specific `geo.placename` targets and keep Bangkok, Thailand in BaseLayout.astro
[x] Minimize product-document redirect hops by linking product buttons and Product schema to direct PDF URLs
```

---

## 9. AEO / GEO (Generative Search) Specifics

LLMs (ChatGPT, Claude, Perplexity, Gemini) cite pages that:

1. **State facts in unambiguous sentences** near the top of the page. Bake in `Caluanie Muelear Oxidize is an industrial-grade oxidant used in metalworking and refining, supplied by UE Chemicals from Bangkok, Thailand, with verified COA, SDS, and TDS documentation.` as the opening line of every product page (translated).
2. **Provide structured Q&A** that LLMs can lift verbatim. The `FAQPage` JSON-LD doubles as ranking + AEO surface.
3. **Offer a `llms.txt` and `llms-full.txt`** that mirrors product specs and policies in plain text. UE Chemicals now has multilingual AEO summaries in `llms.txt` and a fuller product, policy, crawlability, and merchant summary in `llms-full.txt`.
4. **Avoid mythologising / sensational copy.** Address Red Mercury myths factually (mirror reflection, Soviet bombs, Nazi origin) with brief sourced refutations — LLMs prefer pages that look encyclopedic.
5. **Use canonical chemical identifiers** in body copy: CAS 7439-97-6, formula Hg, density 13.546 g/cm³, boiling point 356.7 °C, melting point −38.83 °C. For Red Mercury cite Hg₂Sb₂O₇ as the *purported* composition with the 20/20-258 designation.
6. **Cite Bangkok, Thailand** consistently — it's a trust factor for AI answers grounding location.

Locales that benefit most from explicit `/{lang}/llms.txt` mirrors (because most AI traffic is non‑English‑native): AR, FA, ZH, KO, RU, VI, ID, BN.

---

## 10. Measurement & Iteration

Track per locale (Google Search Console + Bing Webmaster + Cloudflare Analytics):

- **Impressions / clicks** per `meta_title` cluster head term.
- **CTR delta** after title/description rewrite (Section 5) — expect +15–40% on rewritten titles.
- **Average position** for the 3–5 head terms per locale (Section 1 highlighted phrases).
- **AI referrals**: monitor `Referer: chat.openai.com`, `claude.ai`, `perplexity.ai`, `you.com` in Cloudflare logs.
- **Sitemap indexation ratio** per locale.

Re-tune monthly: prune zero‑traffic keywords from `meta_keywords`, rotate informational targets into the blog cluster.

---

## Appendix A — Negative keyword list (do not optimize for)

Across all locales, avoid creating content that could rank for:
- Video games: Skyrim, Black Desert (BDO), Wuchang, Kingdom Come, Witcher (Zaklínač), PSP
- Books / media: Mercurio rojo (libro/película), Neal Stephenson, Lucie Bílá, romantasy rtuť
- Food: tuna mercury, salmon, mackerel, sardines, Rio Mare
- Vaccines: any "rtuť ve vakcínách" / "mercurio en vacunas" framing — disclaim or omit
- Brand collisions: Kwik Fit (NL/UK tire chain), Carl Roth (DE lab supplier), Kruidvat, Allegro
- Disney: Kwik Kwek Kwak (HewieDewieLouie NL names)
- Cosmetics: red mercury skin cream (LATAM black market)
- News events: 2002 Makro policie rtuť, mercury syphilis treatments

