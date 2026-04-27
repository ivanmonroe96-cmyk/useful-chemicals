#!/usr/bin/env python3
"""Backfill missing English translations into src/i18n/translations/en.json.

Source of truth for key set/order: de.json (mirrors es.json).
English values were authored by translating from the de/es source content.
"""
import json
import os
from collections import OrderedDict

ROOT = os.path.join(os.path.dirname(__file__), "..", "src", "i18n", "translations")

# Authored English translations for the 195 keys that exist in de.json but not en.json.
NEW_EN = {
    # site
    "site.meta_keywords": "Caluanie Muelear Oxidize, red mercury, liquid mercury, silver mercury, Bangkok chemical supplier, manufacturer, COA, SDS, TDS, wholesale, worldwide shipping, industrial chemicals",

    # products
    "products.meta_keywords": "Caluanie Muelear Oxidize, red mercury, liquid mercury, silver mercury, Bangkok chemical supplier, manufacturer, wholesale, quote, COA, SDS, TDS, worldwide shipping, industrial chemicals",

    # blog
    "blog.meta_keywords": "Caluanie Muelear Oxidize guide, red mercury guide, liquid mercury guide, industrial chemicals blog, chemical safety, shipping documentation, COA, SDS, TDS, FAQ, Bangkok supplier",

    # about
    "about.hero_explore": "Explore Products",
    "about.hero_contact": "Contact Us",
    "about.hero_stat1": "Bangkok, TH",
    "about.hero_stat2": "3",
    "about.hero_stat3": "Global",
    "about.mission_label": "Our Mission",
    "about.mission_title": "Delivering high-quality industrial chemicals",
    "about.mission_desc1": "Our mission at UE Chemicals is to produce and deliver high-quality industrial chemicals that meet the highest standards of purity, safety, and reliability. We understand that every industry has unique requirements, and our goal is to support the diverse needs of our customers with premium-grade products and expert guidance.",
    "about.mission_desc2": "From chemical processing to precision manufacturing, our products empower professionals to achieve efficient and effective results.",
    "about.mission_feat1_title": "Premium Purity",
    "about.mission_feat1_desc": "Every product meets the strictest purity standards for demanding applications.",
    "about.mission_feat2_title": "Global Reach",
    "about.mission_feat2_desc": "Reliable international shipping with full compliance documentation.",
    "about.why_label": "Why UE Chemicals",
    "about.why_title": "Built on quality. Driven by safety.",
    "about.why_desc": "As a leader in chemical manufacturing, UE Chemicals combines technical expertise with a relentless focus on quality control and safety compliance.",
    "about.why1_title": "Quality Assurance",
    "about.why1_desc": "Every batch undergoes rigorous quality testing to guarantee performance and consistency across all products.",
    "about.why2_title": "Safety Compliance",
    "about.why2_desc": "We follow industry regulations and best practices for safe handling and distribution of all chemicals.",
    "about.why3_title": "Customer Support",
    "about.why3_desc": "Our team of professionals is ready to assist with product inquiries, order details, and technical support.",
    "about.why4_title": "Global Delivery",
    "about.why4_desc": "Partnered with leading freight carriers for safe, on-time delivery to any destination worldwide.",
    "about.facility_desc1": "Located in Bangkok, Thailand, our manufacturing facility is designed to produce chemicals of the highest purity. With advanced equipment, dedicated testing labs, and a skilled team of technicians, our facility allows us to produce all of our products with exceptional consistency and reliability.",
    "about.facility_desc2": "By adhering to strict environmental and safety protocols, we deliver products that align with industry requirements and exceed customer expectations.",
    "about.facility_explore": "Explore Our Products",
    "about.safety_label": "Our Commitment",
    "about.safety_title": "Safety at the heart of our operations",
    "about.safety1_title": "Safe Production",
    "about.safety1_desc": "Every product is manufactured under strict safety protocols with multi-stage quality controls at each step of the process.",
    "about.safety2_title": "Safe Packaging",
    "about.safety2_desc": "Industry-standard packaging with tamper-evident seals and leak-proof containers ensures product integrity during transit.",
    "about.safety3_title": "Safe Distribution",
    "about.safety3_desc": "We partner with certified carriers experienced in handling hazardous materials for reliable, compliant delivery.",
    "about.safety4_title": "Complete Documentation",
    "about.safety4_desc": "Every product ships with detailed Safety Data Sheets and Certificates of Analysis, enabling responsible handling.",
    "about.cta_how_to_order": "How to Order",

    # caluanie
    "caluanie.version": "2026-03-10",
    "caluanie.anchor_nav_label": "Caluanie section navigation",
    "caluanie.hero_chip_row_label": "Caluanie documentation and supply highlights",
    "caluanie.hero_chip_tds": "TDS UEC-TDS-CMO-2026-01",
    "caluanie.hero_chip_sds": "SDS UEC-SDS-CMO-2026-01",
    "caluanie.hero_chip_coa": "COA preview available",
    "caluanie.hero_chip_use": "Industrial and commercial use only",
    "caluanie.hero_note": "Buyer note: buyers remain responsible for local regulatory compliance, import permits, and end-use suitability before any operational use.",
    "caluanie.hero_image_alt": "Palletised Caluanie Muelear Oxidize containers staged inside the UE Chemicals warehouse",
    "caluanie.hero_image_caption": "Current stock presentation of Caluanie Muelear Oxidize at the UE Chemicals facility.",
    "caluanie.gallery_image_alt": "Caluanie Muelear Oxidize stock stacked on export-ready pallets inside the UE Chemicals warehouse",
    "caluanie.gallery_image_caption": "Export-ready pallet configuration and warehouse staging for Caluanie Muelear Oxidize orders.",
    "caluanie.facility_image_alt": "UE Chemicals warehouse facility with industrial chemical containers and Caluanie Muelear Oxidize stock",
    "caluanie.facility_image_caption": "Warehouse environment view showing the broader industrial handling context behind the documented supply process.",
    "caluanie.tech_note_title": "What buyers still need to confirm",
    "caluanie.tech_note1": "CAS number note: a single definitive CAS number could not be verified from the supplied source files. Confirm component identifiers against the current approved Safety Data Sheet when required.",
    "caluanie.tech_note2": "Transport note: the UN number, transport class, and packing group must be confirmed against the current approved SDS and route-specific transport review before shipment.",
    "caluanie.tech_note3": "COA note: the downloadable COA is a formatted release template. The final customer-facing COA must match the actual batch history and laboratory record of the supplied lot.",
    "caluanie.tech_note4": "Regulatory note: buyers remain responsible for local regulatory compliance, import permits, and end-use suitability before any use.",
    "caluanie.tech_table_caption": "Verified technical specifications for Caluanie Muelear Oxidize from the current TDS and COA preview",
    "caluanie.docs_label": "Documentation",
    "caluanie.doc_tds_date": "Effective: 2026-03-10",
    "caluanie.doc_tds_aria": "Download Technical Data Sheet (TDS) for Caluanie Muelear Oxidize",
    "caluanie.doc_sds_date": "Effective: 2026-03-10",
    "caluanie.doc_sds_aria": "Download Safety Data Sheet (SDS) for Caluanie Muelear Oxidize",
    "caluanie.doc_coa_date": "Template date: 2026-03-10",
    "caluanie.doc_coa_aria": "Download Certificate of Analysis (COA) for Caluanie Muelear Oxidize",
    "caluanie.benefits_link1_desc": "See how UE Chemicals describes metalworking, refining, and mineral-processing use cases across the site.",
    "caluanie.benefits_link2_desc": "Review the site-wide safety page before locking in storage, handling, and export procedures.",
    "caluanie.benefits_link3_desc": "Check the company-level quality and documentation overview without overstating product-specific certification claims.",
    "caluanie.benefits_link4_desc": "Use the ordering page to understand the inquiry, confirmation, packaging, and shipping coordination flow.",
    "caluanie.benefits_link5_desc": "Read the long-form guide for additional context, sourcing questions, and buyer-education content.",
    "caluanie.benefits_link6_desc": "Use the contact page for pricing, documentation, destination review, and batch-specific paperwork.",
    "caluanie.safety5": "Contain spills with inert absorbent material, keep the product away from drains and waterways, and follow local disposal regulations.",
    "caluanie.safety6": "Ship only with the current Safety Data Sheet and route-specific transport documentation.",
    "caluanie.quote_check1": "State the required pack size and country of delivery in your inquiry.",
    "caluanie.quote_check2": "Request the current TDS, SDS, and batch-specific COA if you need release documentation before shipment.",
    "caluanie.quote_check3": "Confirm import permits, end-use suitability, and route-specific transport requirements for your jurisdiction.",
    "caluanie.quote_check4": "Validate the product against your internal process and compliance requirements before any operational use.",

    # red_mercury
    "red_mercury.version": "2026-04-23-video",
    "red_mercury.hero_note": "The supplied document set does not use an identical product description across each file. The page therefore separates TDS, SDS, and COA values rather than merging them into an unsupported claim.",
    "red_mercury.hero_chip_row_label": "Red Mercury verification chips",
    "red_mercury.hero_chip_tds": "TDS identifier listed",
    "red_mercury.hero_chip_sds": "SDS hazard data listed",
    "red_mercury.hero_chip_coa": "COA assay listed",
    "red_mercury.hero_chip_hazard": "UN 2809 / PG III",
    "red_mercury.hero_image_alt": "Cherry-red Red Mercury 20/20-258 sample (Hg2Sb2O7) in a UE Chemicals laboratory",
    "red_mercury.hero_image_caption": "Red Mercury 20/20-258 sample photographed against the TDS-listed identifier (Hg2Sb2O7), cherry-red colour, and 20.2 density value.",
    "red_mercury.gallery_image_alt": "Sealed laboratory vial of Red Mercury (Sb2O7Hg2) showing cherry-red colour and metallic liquid form",
    "red_mercury.gallery_image_caption": "Reference vial used in QA; appearance and form match the result fields in the supplied COA (red, metallic liquid).",
    "red_mercury.facility_image_alt": "Red Mercury quality-control inspection at UE Chemicals Bangkok with sealed container and analytical paperwork",
    "red_mercury.facility_image_caption": "COA inspection flow linking batch A0396891 with the 24/05/2025 release date and the >=99.995% assay value from the certificate.",
    "red_mercury.bench_image_alt": "Red Mercury 20/20-258 density verification station with sealed export-ready containers",
    "red_mercury.bench_image_caption": "Density and packaging verification before export dispatch; transport classification UN 2809, Class 8 (C9), Packing Group III.",
    "red_mercury.container_image_alt": "Sealed export container of Red Mercury 20/20-258 prepared for dispatch with hazard documentation",
    "red_mercury.container_image_caption": "Sealed, tamper-evident container photo supporting the dangerous-goods workflow described in the supplied SDS.",
    "red_mercury.video_label": "Video Demonstration",
    "red_mercury.video_title": "Rolling-liquid behaviour test (Red Mercury 20/20-258)",
    "red_mercury.video_desc": "Recorded laboratory clip of Red Mercury 20/20-258 showing the cherry-red rolling-liquid form described in section 5 of the Technical Data Sheet. Watermarked, view-only material from UE Chemicals QA.",
    "red_mercury.video_caption": "Sample batch A0396891, density 20.2 g/cm3, assay >=99.995% (per COA). Material is watermarked and provided for verification purposes only.",
    "red_mercury.video_unsupported": "Your browser cannot display this video. Please contact UE Chemicals for an assisted viewing.",
    "red_mercury.video_watermark": "UE Chemicals - useful-chemicals.com - Verification only",
    "red_mercury.video_protect_notice": "Protected content - download, recording, and redistribution are prohibited.",
    "red_mercury.anchor_nav_video": "Video",
    "red_mercury.anchor_nav_label": "Red Mercury section navigation",
    "red_mercury.docs_label": "Document set",
    "red_mercury.doc_tds_date": "Supplier technical data sheet",
    "red_mercury.doc_sds_date": "Revision date June 2023",
    "red_mercury.doc_coa_date": "Release date 24/05/2025",
    "red_mercury.benefits_desc": "These internal links support sourcing, shipping, compliance, and related-product review so buyers can move from documentation review to ordering with the right context.",
    "red_mercury.summary_doc_title": "Document consistency note",
    "red_mercury.summary_doc_desc": "Because the supplied PDFs use different identifiers and purity conventions, the page keeps each value tied to its source document.",
    "red_mercury.tech_note_title": "Review before ordering",
    "red_mercury.tech_note1": "TDS, SDS, and COA should be reviewed together because the product identifier, formula, and purity language differ between the source files.",
    "red_mercury.tech_note2": "The SDS instructs use only after understanding the safety precautions and requires a chemical fume hood, tightly closed containers, and appropriate PPE.",
    "red_mercury.tech_note3": "The transport section of the SDS lists UN 2809, Class 8 (C9), Packing Group III, and marine-pollutant handling.",
    "red_mercury.tech_note4": "The COA identifies the material as Mercury 99.99+% with assay >=99.995%, so batch release paperwork should be checked against the intended use and destination country.",
    "red_mercury.tech_table_caption": "Document-supported specification table for Red Mercury",
    "red_mercury.doc_tds_note": "The TDS also lists elemental composition and additional reaction or radiation fields that should be reviewed directly in the source PDF.",
    "red_mercury.doc_sds_note": "Handling requires a chemical fume hood, tightly closed containers, and PPE; transport: UN 2809, Class 8, PG III.",
    "red_mercury.doc_coa_note": "The COA is batch-level release evidence and must be paired with the exact shipment and the intended industrial use.",
    "red_mercury.link1_title": "Review certificates and compliance records",
    "red_mercury.link1_desc": "Open the certificates area of the site to verify the supporting documentation workflow.",
    "red_mercury.link2_title": "Hazard handling guidance",
    "red_mercury.link2_desc": "Read the safety page for site-wide storage, handling, and compliance guidance.",
    "red_mercury.link3_title": "Read the export ordering steps",
    "red_mercury.link3_desc": "Use the ordering page to understand the quote, payment, and documentation flow.",
    "red_mercury.link4_title": "Verify the shipping and packaging process",
    "red_mercury.link4_desc": "Review the shipping detail before requesting destination-specific transport arrangements.",
    "red_mercury.link5_title": "Compare with Silver Liquid Mercury",
    "red_mercury.link5_desc": "Use the related product page to compare documentation structure and positioning of the silver mercury offer.",
    "red_mercury.link6_title": "Contact industrial sales",
    "red_mercury.link6_desc": "Send intended use, required documents, quantity, and destination for a manual review.",
    "red_mercury.quote_check1": "Include the exact document you need reviewed: TDS, SDS, COA, or the full pack.",
    "red_mercury.quote_check2": "State the country of delivery so transport, hazard, and paperwork checks can be matched to the route.",
    "red_mercury.quote_check3": "Indicate the intended industrial use so the team can compare it with the SDS-named uses.",
    "red_mercury.quote_check4": "Request batch-specific paperwork if the COA must match an active release lot.",

    # silver_mercury
    "silver_mercury.version": "2026-04-23-redesign",
    "silver_mercury.hero_note": "Batch A0396891 - quality test/release date 24/05/2025 - assay >=99.995% (per COA). Country of origin: Thailand.",
    "silver_mercury.hero_chip_row_label": "Silver Mercury document set",
    "silver_mercury.hero_chip_sds": "SDS - REACH/CLP",
    "silver_mercury.hero_chip_coa": "COA - batch A0396891",
    "silver_mercury.hero_chip_un": "UN 2809 / Class 6.1",
    "silver_mercury.hero_chip_origin": "Origin: Thailand",
    "silver_mercury.hero_image_alt": "Sealed flask of 99.995% Silver Liquid Mercury (Hg) in a UE Chemicals Bangkok laboratory",
    "silver_mercury.hero_image_caption": "Reference flask of elemental mercury (Hg, CAS 7439-97-6) - silver-white metallic liquid, density 13.546 g/cm3 at 25 °C, per supplied SDS.",
    "silver_mercury.gallery_image_alt": "Mirror-bright pour of Silver Liquid Mercury showing the characteristic silver-white metallic liquid form",
    "silver_mercury.gallery_image_caption": "QA pour: appearance and form match the result fields in the COA (silver-white, metallic liquid).",
    "silver_mercury.facility_image_alt": "Bulk supply photograph of Silver Liquid Mercury packaged for export from Bangkok by UE Chemicals",
    "silver_mercury.facility_image_caption": "Bulk supply photo documenting tamper-evident packaging tied to batch A0396891 and the 24/05/2025 release date.",
    "silver_mercury.instrument_image_alt": "Precision-instrument grade Silver Liquid Mercury used in barometers, thermometers, and analytical equipment",
    "silver_mercury.instrument_image_caption": "High-purity grade for scientific instruments and analytical chemistry; insoluble matter <=0.001% (per COA).",
    "silver_mercury.anchor_nav_label": "Silver Mercury section navigation",
    "silver_mercury.anchor_nav_video": "Video",
    "silver_mercury.video_label": "Video Demonstration",
    "silver_mercury.video_title": "Silver Liquid Mercury - rolling-liquid demonstration",
    "silver_mercury.video_desc": "Watermarked laboratory clip of elemental mercury (Hg) showing the silver-white metallic liquid form described in section 2 of the supplied Safety Data Sheet.",
    "silver_mercury.video_caption": "Sample batch A0396891, density 13.546 g/cm3, assay >=99.995% (per COA). Material is watermarked and provided for verification purposes only.",
    "silver_mercury.video_unsupported": "Your browser cannot display this video. Please contact UE Chemicals for an assisted viewing.",
    "silver_mercury.video_watermark": "UE Chemicals - useful-chemicals.com - Verification only",
    "silver_mercury.video_protect_notice": "Protected content - download, recording, and redistribution are prohibited.",
    "silver_mercury.summary_doc_title": "Document-supported",
    "silver_mercury.summary_doc_desc": "Every shipment is accompanied by the supplied Safety Data Sheet and Certificate of Analysis (batch A0396891, release 24/05/2025) so buyers can verify identity, purity, and hazard data before signing.",
    "silver_mercury.tech_table_caption": "Verified chemical and regulatory specifications for Silver Liquid Mercury (Hg) per supplied SDS and COA",
    "silver_mercury.tech_note_title": "How to read these values",
    "silver_mercury.tech_note1": "Identity, formula, CAS, and EINECS numbers are taken directly from section 2 of the supplied SDS.",
    "silver_mercury.tech_note2": "Assay (>=99.995%) and impurity ceilings (Ag <=0.5 ppm, Fe/Zn <=0.5 ppm, Pb/Cu/Cd <=0.1 ppm) are taken from the result table of the supplied COA.",
    "silver_mercury.tech_note3": "Hazard class, UN number, and packing group reflect the SDS transport section and take precedence over generic listings.",
    "silver_mercury.tech_note4": "Storage temperature (5-25 °C), ventilation requirements, and the OSHA PEL <0.05 mg/m3 follow the SDS handling section.",
    "silver_mercury.tech_shelf": "Storage",
    "silver_mercury.tech_shelf_val": "5-25 °C, ventilated, in sealed iron or steel containers",
    "silver_mercury.docs_label": "Documentation",
    "silver_mercury.doc_tds_note": "Identity per CAS 7439-97-6; physical data per SDS section 2.",
    "silver_mercury.doc_tds_date": "Compiled 2026-04-23",
    "silver_mercury.doc_sds_note": "Use SDS sections 7 and 8 for site-specific PPE and exposure controls (<0.05 mg/m3).",
    "silver_mercury.doc_sds_date": "Issued by UE Chemicals",
    "silver_mercury.doc_coa_note": "Issued 25/05/2025; release date 24/05/2025; signed by L. Van den Broek, QA Manager.",
    "silver_mercury.doc_coa_date": "Released 24/05/2025",
    "silver_mercury.link1_title": "Certificates & compliance",
    "silver_mercury.link1_desc": "Browse the evidence and certificates library for REACH, CLP, and Minamata Convention compliance.",
    "silver_mercury.link2_title": "Safety procedures",
    "silver_mercury.link2_desc": "Detailed PPE, ventilation, spill-response, and storage protocols for elemental mercury.",
    "silver_mercury.link3_title": "Ordering process",
    "silver_mercury.link3_desc": "Step-by-step ordering, KYC verification, and lead times for UN 2809 hazardous shipments.",
    "silver_mercury.link4_title": "Hazardous goods shipping",
    "silver_mercury.link4_desc": "Class 6.1 logistics, ADR/IMDG/IATA documentation, and global hazardous-carrier coverage.",
    "silver_mercury.link5_title": "Compare: Red Mercury 20/20-258",
    "silver_mercury.link5_desc": "Document-supported Red Mercury 20/20-258 (Hg2Sb2O7) product page with TDS, SDS, and COA.",
    "silver_mercury.link6_title": "Talk to sales",
    "silver_mercury.link6_desc": "Direct line to the UE Chemicals Bangkok desk for quotes, samples, and custom packaging.",
    "silver_mercury.quote_check1": "Confirm purity grade (4N / 5N / quadruple-distilled ACS) and pack size.",
    "silver_mercury.quote_check2": "Provide port of destination or delivery address and end-use declaration (KYC).",
    "silver_mercury.quote_check3": "Receive an SDS and COA preview by email within 24 hours.",
    "silver_mercury.quote_check4": "Sign the proforma invoice; UE Chemicals coordinates the UN 2809 hazardous dispatch.",
}


def set_path(d, dotted, value):
    parts = dotted.split(".")
    cur = d
    for p in parts[:-1]:
        if p not in cur or not isinstance(cur[p], dict):
            cur[p] = {}
        cur = cur[p]
    cur[parts[-1]] = value


def reorder_section(target_section, reference_section):
    """Return an OrderedDict with keys in reference_section order; unknown
    target keys are appended at the end (preserves prior order among them)."""
    out = OrderedDict()
    used = set()
    for k, ref_v in reference_section.items():
        if k in target_section:
            t_v = target_section[k]
            if isinstance(t_v, dict) and isinstance(ref_v, dict):
                out[k] = reorder_section(t_v, ref_v)
            else:
                out[k] = t_v
            used.add(k)
    for k, t_v in target_section.items():
        if k not in used:
            out[k] = t_v
    return out


def main():
    en_path = os.path.join(ROOT, "en.json")
    de_path = os.path.join(ROOT, "de.json")
    with open(en_path, "r", encoding="utf-8") as f:
        en = json.load(f, object_pairs_hook=OrderedDict)
    with open(de_path, "r", encoding="utf-8") as f:
        de = json.load(f, object_pairs_hook=OrderedDict)

    for dotted, value in NEW_EN.items():
        set_path(en, dotted, value)

    # Reorder sections that gained new keys to match de.json order.
    sections_touched = sorted({k.split(".")[0] for k in NEW_EN})
    for sec in sections_touched:
        if sec in en and sec in de and isinstance(en[sec], dict) and isinstance(de[sec], dict):
            en[sec] = reorder_section(en[sec], de[sec])

    with open(en_path, "w", encoding="utf-8") as f:
        json.dump(en, f, ensure_ascii=False, indent=2)
        f.write("\n")
    print(f"Wrote {en_path}: added {len(NEW_EN)} keys")


if __name__ == "__main__":
    main()
