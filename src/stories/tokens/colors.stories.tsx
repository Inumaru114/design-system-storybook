import React from 'react';
import { colors } from '../../tokens/colors';

export default {
  title: 'Tokens/Cores',
};

export const Paleta = () => (
  <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', fontFamily: 'Poppins, sans-serif' }}>
    {Object.entries(colors).map(([name, value]) => (
      <div key={name} style={{ textAlign: 'center' }}>
        <div
          style={{
            width: 60,
            height: 60,
            backgroundColor: value,
            borderRadius: 8,
            border: '1px solid #ccc',
          }}
        />
        <p style={{ fontWeight: 700 }}>{name}</p>
        <code style={{ fontWeight: 700 }}>{value}</code>
      </div>
    ))}
  </div>
);