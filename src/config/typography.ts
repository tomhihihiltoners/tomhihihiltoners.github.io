/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * ============================================================================
 * ACCIDENTAL IMMORTALITY — CENTRALIZED TYPOGRAPHY CONFIGURATION
 * ============================================================================
 *
 * To customize the fonts across the entire longread, edit the font-family
 * strings below. Changes here will immediately propagate to all components,
 * sections, interactive models, and metadata through CSS variables.
 *
 * FONT LOADING:
 * Web fonts are loaded in `/index.html`. If you introduce a new Google Font
 * or custom web font, ensure it is linked in `/index.html` <head>.
 *
 * PRESET SUGGESTIONS:
 * - Editorial Archival:
 *     headingFont:  "'Cormorant Garamond', Georgia, serif"
 *     bodyFont:     "'Source Serif 4', Georgia, serif"
 *     metadataFont: "'Space Mono', Consolas, monospace"
 *
 * - Contemporary Modernist:
 *     headingFont:  "'Outfit', -apple-system, sans-serif"
 *     bodyFont:     "'Plus Jakarta Sans', -apple-system, sans-serif"
 *     metadataFont: "'Space Mono', monospace"
 *
 * - High-Contrast Literary:
 *     headingFont:  "'Playfair Display', Georgia, serif"
 *     bodyFont:     "'Lora', Georgia, serif"
 *     metadataFont: "'Outfit', sans-serif"
 * ============================================================================
 */

export interface TypographyTheme {
  /** Applied to all major titles, chapter titles, and section headings */
  headingFont: string;
  /** Applied to all body paragraphs, long-form prose, and explanatory decks */
  bodyFont: string;
  /** Applied to timestamps, accession codes, captions, coordinate displays, and tech badges */
  metadataFont: string;
}

export const typographyConfig: TypographyTheme = {
  // 1. Heading font family (Serif with curatorial archival character)
  headingFont: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",

  // 2. Body font family (Refined literary book serif engineered for reading cadence)
  bodyFont: "'Source Serif 4', 'Lora', Georgia, serif",

  // 3. Metadata, caption, and accession font family (Monospaced retro-telemetry)
  metadataFont: "'Space Mono', Menlo, Monaco, Consolas, monospace",
};

/**
 * Inject the typography configuration into the document's root CSS custom properties.
 * Call this once during app initialization.
 */
export function applyTypographyConfig(theme: TypographyTheme = typographyConfig): void {
  if (typeof document === 'undefined') return;
  const root = document.documentElement;
  root.style.setProperty('--font-heading', theme.headingFont);
  root.style.setProperty('--font-body', theme.bodyFont);
  root.style.setProperty('--font-caption', theme.metadataFont);
  root.style.setProperty('--font-metadata', theme.metadataFont);
}
