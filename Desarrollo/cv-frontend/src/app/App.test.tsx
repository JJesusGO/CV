import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('Se renderiza la App', () => {
    expect(render(<App />)).toBeDefined();
  });
});

