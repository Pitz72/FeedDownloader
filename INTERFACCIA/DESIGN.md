# Design System Document: High-End Enterprise Desktop (2026)

## 1. Overview & Creative North Star
**Creative North Star: "The Obsidian Command"**

This design system is engineered for the 2026 pro-sumer—a user who demands the information density of a cockpit with the aesthetic refinement of a luxury timepiece. We are moving away from the "flat web" era into **Spatial Editorialism**. 

The goal is to break the "template" look. We achieve this through:
*   **Intentional Asymmetry:** Using Bento-box layouts where card sizes vary to create a visual rhythm.
*   **Tonal Depth:** Replacing 2010-era borders with 2026-era layering.
*   **Luminous Precision:** High-contrast neon accents against an OLED-optimized void, creating a sense of depth that feels like looking through glass into a digital engine.

## 2. Colors
Our palette is anchored in `#131313` (Surface), designed to melt into high-end OLED displays.

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders to section off the UI. 
Boundaries must be defined by background shifts. To separate a sidebar from a main content area, place a `surface_container_low` (#1b1b1b) panel against the `background` (#131313). High-density data clusters should be separated by `surface_container_high` (#2a2a2a) "islands" rather than lines.

### Surface Hierarchy & Nesting
Treat the UI as a physical stack of semi-transparent materials.
*   **Base Layer:** `surface` (#131313)
*   **Secondary Content:** `surface_container` (#1f1f1f)
*   **Active/Floating Elements:** `surface_container_highest` (#353535) with 60% opacity and a 20px backdrop-blur.

### The "Glass & Gradient" Rule
For primary actions and high-level navigation, use a signature gradient:
*   **Electric Primary:** Transition from `primary` (#adc6ff) to `primary_container` (#4b8eff) at a 135° angle.
*   **Neon Accent:** Use `secondary` (#e9b3ff) for notifications and status indicators to provide "visual soul."

## 3. Typography
We use a tri-font strategy to balance editorial authority with technical precision.

*   **Display & Headlines (Epilogue):** Used for large data points and section headers. Bold weights and tight letter-spacing create an "Editorial" feel.
*   **Body & UI (Inter):** The workhorse. Use `body-md` for standard density and `body-sm` for high-density enterprise grids.
*   **Metadata (Space Grotesk):** Applied to all `label-md` and `label-sm` tokens. This monospace-leaning font conveys technical accuracy for timestamps, IDs, and financial figures.

**Hierarchy Note:** Always pair a `headline-sm` in Epilogue Bold with a `label-sm` in Space Grotesk Regular to create the "Pro-sumer" contrast.

## 4. Elevation & Depth
Depth is not a drop shadow; it is a mathematical expression of light.

### The Layering Principle
Stacking tiers is the primary method of hierarchy. 
*   *Example:* A Bento-Box card (`surface_container_low`) contains an inner metric card (`surface_container_lowest`). This creates a "recessed" look that implies the inner data is nested safely within the parent.

### Ambient Shadows
For floating modals or context menus, use a "Luminous Shadow":
*   **Color:** `on_surface` (#e2e2e2) at 4% opacity.
*   **Blur:** 40px to 60px.
*   **Spread:** -5px.
This creates a soft glow rather than a muddy dark shadow.

### The "Ghost Border" Fallback
If a container requires a border for accessibility (e.g., input fields), use the **Ghost Border**:
*   `outline_variant` (#414755) at 20% opacity. This must be an inner border to maintain the "Spatial" feel.

## 5. Components

### Bento-Box Cards
*   **Style:** No external borders. Use `surface_container_low` for the card body. 
*   **Inner Glow:** Apply a 1px inner stroke using `outline_variant` at 15% opacity to catch the "light" at the edges.
*   **Spacing:** Use `spacing-4` (0.9rem) for internal padding to maintain high density without feeling cramped.

### Buttons
*   **Primary:** Gradient fill (`primary` to `primary_container`). White text (`on_primary_fixed`). 0.25rem corner radius.
*   **Secondary (Glass):** `surface_bright` at 10% opacity with `backdrop-blur`.
*   **States:** On hover, increase the `surface_tint` opacity by 5%.

### Input Fields
*   **Structure:** Minimalist. No bottom line. Use `surface_container_highest` as the background.
*   **Focus:** An outer "glow" using the `primary` token at 10% opacity, extending 4px.

### Lists & Data Grids
*   **Rule:** Forbid divider lines. 
*   **Separation:** Use alternating row colors (e.g., `surface` and `surface_container_lowest`) or a 0.2rem vertical gap between list items to allow the background to "breathe" through the data.

### Chips (Metadata Tags)
*   **Style:** `label-sm` (Space Grotesk). 
*   **Color:** Use `secondary_container` (#7d01b1) with `on_secondary_container` (#e5a9ff) text for high-priority metadata.

## 6. Do’s and Don’ts

### Do
*   **Do** use `spaceGrotesk` for any string containing numbers or technical IDs.
*   **Do** rely on the spacing scale (specifically `0.5` and `1`) for micro-adjustments in high-density tables.
*   **Do** use `surface_container_highest` for hover states on interactive cards to "lift" them closer to the user.

### Don’t
*   **Don't** use a pure black (#000000) for anything other than the deepest background layer. 
*   **Don't** use high-contrast white text for body copy; use `on_surface_variant` (#c1c6d7) to reduce eye strain in dark environments.
*   **Don't** use traditional "Material" rounded corners (e.g., 16px). Stick to the `md` (0.375rem) or `lg` (0.5rem) tokens for a sharper, more professional edge.

### Interaction Note
All transitions between surface tiers (e.g., hovering over a Bento card) should use a 200ms `cubic-bezier(0.2, 0, 0, 1)` easing to mimic the physical movement of light and glass.