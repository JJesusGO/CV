import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('render app', () => {
  expect(render(<App />)).toBeDefined();
});
