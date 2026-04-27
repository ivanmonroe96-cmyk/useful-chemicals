# UE Chemicals Redesign Style Guide

## High-Fidelity Mockups

The production Astro pages now serve as the high-fidelity interactive mockups for the redesign:

- Homepage: `/`
- About Us: `/about/`
- Contact Us: `/contact/`
- FAQs: `/faq/`
- Footer: shared globally through `src/components/Footer.astro`

Localized versions under `/:lang/` use the same visual system and layout treatment.

## Brand Direction

The redesign positions UE Chemicals as technical, safety-minded, responsive, and globally capable. The interface uses real facility and product imagery, restrained industrial surfaces, and trust signals near primary decisions so buyers can evaluate products and contact the team with less friction.

## Color System

Primary colors:

- Primary: `#0F4C5C` for industrial teal-blue emphasis.
- Primary Dark: `#08353F` for hero overlays, footer, and premium dark sections.
- Secondary: `#FC5220` for official brand emphasis and logo alignment.
- Accent: `#FC5220` for calls to action, active states, and key links.

Supporting colors:

- Surface: `#F5F8F7` for quiet page sections.
- Surface Alt: `#EAF2F0` for soft split panels.
- Border: `#DCE7E4` and Border Light: `#E7EFED`.
- Body Text: `#40514E`.
- Warning: `#D97706` for restrained caution states.

## Typography

- Typeface: Manrope.
- Headings: uppercase, strong weight, compact line-height for technical confidence.
- Body copy: regular weight, generous line-height, neutral color for readability.
- Labels: uppercase, small size, teal accent marker.

Do not scale text directly with viewport width outside existing `clamp()` heading rules. Keep letter spacing at normal or positive values only.

## Components

Buttons:

- Border radius: 8px.
- Primary buttons use `--primary-dark` and shift to accent on hover.
- Accent buttons use `--accent` and shift to dark primary on hover.
- Icon buttons keep clear hover/focus states.

Cards:

- Border radius: 8px maximum.
- Use subtle borders and `--shadow-sm` or `--shadow-md` only where elevation clarifies hierarchy.
- Product cards include image, product number, short description, and a clear text link.

Hero sections:

- Full-width imagery with dark teal overlay.
- Trust stats sit in translucent panels with strong contrast.
- Primary action appears before secondary action.

Forms:

- Inputs use soft surface backgrounds, 8px corners, and visible teal focus rings.
- Form status messages use high-contrast success/error styling.
- Mobile layout stacks fields into a single column.

Accordions:

- FAQ buttons expose `aria-expanded` and update state through existing JavaScript.
- Active items use accent border and an icon state change.
- Category navigation remains sticky on desktop and collapses naturally on smaller screens.

Footer:

- Dark teal gradient with a subtle technical grid texture.
- Top proof row surfaces purity, product range, and shipping network.
- Link groups include icons for faster scanning.
- Legal links remain available at the bottom.

## Responsive Rules

- Desktop layouts use 2-4 column grids only where scanability improves.
- Tablet layouts collapse product, content, and FAQ grids to avoid cramped text.
- Mobile CTAs stack full-width.
- Contact cards collapse before text becomes crowded.
- Footer proof chips stack on narrow screens.

## Accessibility Notes

- Focus states use a visible teal outline.
- Dark hero/footer sections keep white text over high-opacity overlays.
- Interactive controls keep semantic elements: links for navigation, buttons for accordion/form behavior.
- Existing translation keys are preserved so localized pages remain consistent.
