import React from 'react';
import { render, screen } from '@testing-library/react';
import { createTheme } from '@mui/material/styles';
import UpgradeSection from './UpgradeSection'; // Update the path accordingly

jest.mock('../../images/upgrade.svg', () => () => 'upgrade-image.svg'); // Mock image import

describe('UpgradeSection Component', () => {
  const theme = createTheme({
    palette: {
      secondary: { main: '#f5f5f5' }, // Example color for secondary.main
      primary: { main: '#007bff' }, // Example color for primary.main
    },
  });

  it('renders UpgradeSection with correct styles', () => {
    render(<UpgradeSection />);


    // Test image presence and alt text
    const image = screen.getByAltText('upgrade');
    expect(image).toBeInTheDocument();

    // Test button content and styles
    const button = screen.getByRole('button', { name: /Upgrade/i }); // Match button with text (case-insensitive)
    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle({
      position: 'absolute',
      bottom: '20px',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 1,
    });

  });
});
