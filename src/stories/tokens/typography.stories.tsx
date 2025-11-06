import React from 'react';
import { typography } from '../../tokens/typography';

export default {
  title: 'Tokens/Tipografia',
};

export const Fontes = () => (
  <div style={{ fontFamily: typography.fontFamily, display: 'flex', flexDirection: 'column', gap: '12px' }}>
    <p style={{ fontSize: typography.sizes.body, color: typography.colors.green }}>
      Corpo - {typography.sizes.body}
    </p>
    <p style={{ fontSize: typography.sizes.subtitle, color: typography.colors.dark }}>
      Subtítulo - {typography.sizes.subtitle}
    </p>
    <p style={{ fontSize: typography.sizes.title, color: typography.colors.white, background: typography.colors.dark, padding: '4px 8px' }}>
      Título - {typography.sizes.title}
    </p>
  </div>
);
