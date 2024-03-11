import React from 'react';
import { render, screen } from '@testing-library/react';
import CustomChip from './CustomChip';

describe('CustomChip component', () => {
  test('renders chip with correct label and color for location type', () => {
    render(<CustomChip label="Office" type="location" />);
    const chip = screen.getByText('Office');
    expect(chip).toBeInTheDocument();
  });

  test('renders chip with correct label and color for status type', () => {
    render(<CustomChip label="Aktive" type="status" />);
    const chip = screen.getByText('Aktive');
    expect(chip).toBeInTheDocument(); 
  });

});
