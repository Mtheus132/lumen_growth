---
name: Lumen Digital
colors:
  surface: '#111415'
  surface-dim: '#111415'
  surface-bright: '#373a3b'
  surface-container-lowest: '#0c0f10'
  surface-container-low: '#191c1d'
  surface-container: '#1d2021'
  surface-container-high: '#282a2b'
  surface-container-highest: '#323536'
  on-surface: '#e1e3e4'
  on-surface-variant: '#baccb0'
  inverse-surface: '#e1e3e4'
  inverse-on-surface: '#2e3132'
  outline: '#85967c'
  outline-variant: '#3c4b35'
  surface-tint: '#2ae500'
  primary: '#efffe3'
  on-primary: '#053900'
  primary-container: '#39ff14'
  on-primary-container: '#107100'
  inverse-primary: '#106e00'
  secondary: '#c9c6c5'
  on-secondary: '#313030'
  secondary-container: '#4a4949'
  on-secondary-container: '#bab8b7'
  tertiary: '#fdf9f9'
  on-tertiary: '#313030'
  tertiary-container: '#e0dddc'
  on-tertiary-container: '#626161'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#79ff5b'
  primary-fixed-dim: '#2ae500'
  on-primary-fixed: '#022100'
  on-primary-fixed-variant: '#095300'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c9c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474646'
  tertiary-fixed: '#e5e2e1'
  tertiary-fixed-dim: '#c8c6c5'
  on-tertiary-fixed: '#1c1b1b'
  on-tertiary-fixed-variant: '#474746'
  background: '#111415'
  on-background: '#e1e3e4'
  surface-variant: '#323536'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 64px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Montserrat
    fontSize: 40px
    fontWeight: '800'
    lineHeight: '1.2'
  headline-lg:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.3'
  headline-md:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 24px
---

## Brand & Style

The design system is built upon the "Green Lumen" aesthetic—a high-energy, dark-mode-first visual language that positions the brand as a cutting-edge leader in digital marketing. The brand personality is professional yet electrifying, combining the precision of data-driven SEO with the creative spark of modern advertising.

The visual style is a fusion of **Minimalism** and **Glassmorphism**, set against a backdrop of deep obsidian. It utilizes high-contrast neon accents to draw the eye to critical performance metrics and calls to action. The interface should feel like a high-end command center: sleek, immersive, and results-oriented.

## Colors

The palette is anchored in **Obsidian (#0B0B0B)** and **Charcoal (#1A1A1A)**, creating a sophisticated "void" that allows the brand's signature **Neon Green (#39FF14)** to achieve maximum vibrance.

- **Primary (Neon Green):** Reserved for primary actions, success states, and growth indicators (SEO spikes, conversion wins).
- **Secondary/Tertiary (Dark Neutrals):** Used for layering surfaces to create depth without relying on traditional shadows.
- **Accents:** Use semi-transparent versions of the primary green for glows and glassmorphic refractions to simulate light passing through digital lenses.

## Typography

Typography balances the bold confidence of **Montserrat** for headings with the systematic clarity of **Inter** for data-heavy content. 

- **Headlines:** Should be tight-leaded and slightly tracked in to feel impactful and modern. Use the "Display" styles for hero sections and key marketing claims.
- **Body:** Prioritize legibility on dark backgrounds by utilizing a slightly higher line-height and medium weights to prevent "light bleed" on high-brightness screens.
- **Labels:** Use uppercase tracking for navigation and small data labels to maintain an organized, technical feel.

## Layout & Spacing

This design system utilizes a **12-column fluid grid** for desktop and a **4-column grid** for mobile. The layout philosophy is built on "Negative Space as Luxury"—generous margins ensure that the neon elements do not overwhelm the user.

- **Grid:** Content should be centered within a max-width container. 
- **Rhythm:** All spacing (padding, margins, gap) must be multiples of the 8px base unit to maintain technical precision.
- **Reflow:** On mobile, complex data dashboards should pivot to vertical stacks, while marketing cards should maintain a horizontal scroll (carousel) to preserve the "high-tech" feel.

## Elevation & Depth

Depth is achieved through **Glassmorphism** and **Light Emission** rather than traditional physical shadows.

- **Surface Levels:** 
  - **Level 0 (Base):** Obsidian (#0B0B0B).
  - **Level 1 (Cards):** Charcoal (#1A1A1A) with a 1px subtle border (#FFFFFF10).
  - **Level 2 (Overlays):** Semi-transparent Charcoal with a `backdrop-filter: blur(12px)`.
- **Glows:** Higher-priority elements (like active CTA buttons) should have an ambient outer glow using the `accent_glow_hex` to simulate the effect of a neon tube reflecting on a dark surface.

## Shapes

The shape language is "Soft-Tech." While the brand is aggressive and results-oriented, the UI uses rounded corners to feel premium and accessible.

- **Base Corner Radius:** 0.5rem (8px). Use this for standard cards and inputs.
- **Large Radius:** 1rem (16px). Reserved for major section containers or hero images.
- **Interactive Elements:** Buttons and tags should follow the base radius or be fully pill-shaped (rounded-full) when used for filtering.

## Components

- **Buttons:**
  - **Primary:** Solid Neon Green background with Obsidian text. No shadow, but a 4px glow on hover.
  - **Secondary:** Transparent background with a 1px Neon Green border and Neon Green text.
- **Glass Cards:** Used for SEO metrics and case studies. Feature a subtle linear gradient border (top-left to bottom-right) from #FFFFFF20 to #FFFFFF00.
- **Inputs:** Deep Charcoal background with a 1px border that transitions to solid Neon Green on `:focus`. Include a faint green outer glow when active.
- **Chips/Badges:** Small, pill-shaped elements with low-opacity green backgrounds (10% opacity) and solid green text to categorize marketing channels (e.g., "PPC", "SEO").
- **Glow-Lines:** Use horizontal 1px lines that fade out at the edges as section dividers to reinforce the "Lumen" theme.