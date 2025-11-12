import React from 'react';
import { spacing } from '../../tokens/spacing';

export default {
  title: 'Tokens/Espaçamento',
};

export const Escala = () => (
  <div style={{ display: 'flex', alignItems: 'flex-end', gap: '8px', fontFamily: 'Poppins, sans-serif' }}>
    {Object.entries(spacing).map(([key, value]) => (
      <div
        key={key}
        style={{
          background: '#9AAB89',
          width: '20px',
          height: value,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          fontSize: '10px',
          fontWeight: 700,
          borderRadius: 4,
        }}
      >
        {key}
      </div>
    ))}
  </div>
);
