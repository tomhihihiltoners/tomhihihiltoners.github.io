/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type { TypographyTheme } from './config/typography.ts';

export interface TimelineEvent {
  year: string;
  date?: string;
  title: string;
  description: string;
  impact: string;
  tag?: string;
}

export interface ComparisonDimension {
  dimension: string;
  rickAstley: {
    title: string;
    description: string;
    detail: string;
  };
  bliss: {
    title: string;
    description: string;
    detail: string;
  };
}

export interface CitationItem {
  id: string;
  title: string;
  authorOrSource: string;
  year: string;
  url?: string;
  type: 'interview' | 'article' | 'archive' | 'patent' | 'documentary';
  annotation: string;
}
