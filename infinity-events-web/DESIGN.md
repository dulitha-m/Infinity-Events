---
name: Celestial Immersion
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#d0c6ab'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#999077'
  outline-variant: '#4d4732'
  surface-tint: '#e9c400'
  primary: '#fff6df'
  on-primary: '#3a3000'
  primary-container: '#ffd700'
  on-primary-container: '#705e00'
  inverse-primary: '#705d00'
  secondary: '#ddb8ff'
  on-secondary: '#490081'
  secondary-container: '#62259b'
  on-secondary-container: '#d1a1ff'
  tertiary: '#fff4eb'
  on-tertiary: '#452b00'
  tertiary-container: '#ffd298'
  on-tertiary-container: '#7f5719'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffe16d'
  primary-fixed-dim: '#e9c400'
  on-primary-fixed: '#221b00'
  on-primary-fixed-variant: '#544600'
  secondary-fixed: '#f0dbff'
  secondary-fixed-dim: '#ddb8ff'
  on-secondary-fixed: '#2c0051'
  on-secondary-fixed-variant: '#62259b'
  tertiary-fixed: '#ffddb4'
  tertiary-fixed-dim: '#f2bd75'
  on-tertiary-fixed: '#291800'
  on-tertiary-fixed-variant: '#633f00'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
  surface-base: '#111111'
  surface-elevated: '#1A1A1A'
  border-subtle: '#2A2A2A'
  text-primary: '#FFFFFF'
  text-muted: '#9CA3AF'
typography:
  display-xl:
    fontFamily: Cinzel
    fontSize: 80px
    fontWeight: '700'
    lineHeight: 90px
    letterSpacing: 0.05em
  headline-lg:
    fontFamily: Cinzel
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: 0.03em
  headline-lg-mobile:
    fontFamily: Cinzel
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: 0.03em
  headline-md:
    fontFamily: Cinzel
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 40px
    letterSpacing: 0.02em
  body-lg:
    fontFamily: DM Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: DM Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-accent:
    fontFamily: DM Sans
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.2em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  container-max: 1440px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 80px
  stack-section: 120px
---

## Brand & Style

The design system is engineered to evoke the awe-inspiring, high-production atmosphere of global luxury festivals. It is a **Cinematic / Glassmorphic** hybrid that leverages deep atmospheric depth and premium textures to position the brand as a world-class entertainment authority.

The aesthetic centers on "The Great Dark"—using absolute black backgrounds to allow gold accents and vibrant imagery to pop with maximum contrast. Visuals should feel curated, expensive, and exclusive. Elements of glassmorphism are used sparingly to suggest high-tech sophistication, while the overall structure remains rigid and architectural to maintain a sense of legacy and permanence.

- **Tone:** Prestigious, mystical, high-energy, and world-class.
- **Visual Style:** Minimalist structure with maximalist lighting effects. Deep shadows, grain textures, and subtle light leaks are encouraged to create a sense of being "on stage."

## Colors

The palette is rooted in a "Deep Space" concept. The primary color is a vivid **Gold (#FFD700)**, reserved for calls to action, highlights, and the most critical brand moments. A **Soft Purple (#C084FC)** acts as a secondary accent to introduce a modern, rhythmic energy reminiscent of stage lighting.

- **Base Background:** Use `#0A0A0A` for all page-level backgrounds to ensure the deepest possible blacks.
- **Surface Strategy:** Use `#111111` for primary card backgrounds and `#1A1A1A` for hover states or nested elements.
- **Contrast:** Maintain high contrast between `#FFFFFF` text and the dark surfaces. Use `#9CA3AF` for metadata and secondary labels to preserve the visual hierarchy.
- **Border Logic:** Borders should be subtle (`#2A2A2A`) to define edges without breaking the immersive flow.

## Typography

This design system uses a sharp contrast between an authoritative serif and a utilitarian sans-serif.

- **Cinzel (Headings):** Must always be rendered in **Uppercase**. This is the voice of the brand—dramatic, cinematic, and institutional. Increase letter-spacing as the font size grows to maintain legibility and prestige.
- **DM Sans (Body & Labels):** Used for all functional text. It provides a modern, clean counterpoint to the dramatic headings.
- **Accent Labels:** Small, all-caps snippets of text should use `label-accent` with aggressive letter-spacing (20%) to denote categories, dates, or small tags.

## Layout & Spacing

The layout philosophy is **Atmospheric & Expansive**. It utilizes a 12-column grid but encourages "broken grid" elements where imagery or background textures bleed to the screen edges.

- **Desktop:** Massive 80px margins and 120px vertical spacing between sections to allow content to "breathe" in the dark space.
- **Full-Width Immersion:** Hero sections and gallery components should always span the full width of the viewport.
- **Reflow:** On mobile, margins shrink to 20px, and section spacing reduces to 60px. Headlines should scale down significantly to avoid awkward wrapping of the long serif characters.

## Elevation & Depth

Depth is created through **Luminosity** rather than traditional drop shadows.

- **Tonal Layers:** Since the background is `#0A0A0A`, surfaces like `#111111` naturally appear closer to the user.
- **Atmospheric Glow:** Instead of black shadows, use soft, low-opacity outer glows in Gold or Purple to highlight active elements or featured cards.
- **Glassmorphism:** Navigation bars and overlays should use a backdrop blur (20px) with a semi-transparent `#111111` (80% opacity) background and a 1px border of `#2A2A2A`.
- **The "Stage Light" Effect:** Use radial gradients in the background (centered behind cards) to create a subtle spotlight effect, subtly differentiating sections without harsh lines.

## Shapes

The shape language is **Structured and Sharp**. 

- **Corners:** Use a consistent 4px (`0.25rem`) radius for cards and buttons. This "Soft" setting maintains a professional, architectural feel while avoiding the clinical coldness of 0px corners.
- **Icons:** Use thin-stroke, linear icons to match the sophistication of the `DM Sans` typeface.
- **Logo Treatment:** The "Infinity Circle" logo is a strict geometric circle, providing a singular point of organic contrast against the otherwise rectilinear grid.

## Components

- **Buttons:**
  - *Primary:* Solid Gold (#FFD700) with Black text. Bold weight, uppercase `label-accent` style. Hover state: slight scale up (1.02) and increased outer glow.
  - *Secondary:* Transparent with a 1px White border. White text. 
- **Cards:**
  - Deep surface (#111111) with a 1px border (#2A2A2A). Images should use a subtle zoom-on-hover effect.
- **Inputs:**
  - Dark backgrounds (#0A0A0A) with a bottom-only border for a more "editorial" look. Labels use the `label-accent` typography.
- **Navbar:**
  - Fixed positioning. Transparent on load, transitioning to blurred glass (#111111 w/ blur) on scroll. Gold "Get a Quote" button is the singular focal point.
- **Chips/Badges:**
  - Small, thin-bordered rectangles with high letter-spacing. Use the Purple accent for status or category indicators to differentiate from the Gold "Action" color.
- **Footer:**
  - Minimalist and grounded. Use `#111111` background. All secondary links in `text-muted` color.