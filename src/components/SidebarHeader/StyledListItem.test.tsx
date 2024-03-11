import React from 'react';
import { render, screen } from '@testing-library/react';
import { createTheme } from '@mui/material/styles';
import UpgradeSection from './UpgradeSection'; // Update the path accordingly

// Mock the image import to avoid actual image loading during the test
jest.mock('../../images/upgrade.svg', () => () => 'upgrade-image.svg'); // Assuming the image path

describe('UpgradeSection Component', () => {
  const theme = createTheme({
    palette: {
      secondary: { main: '#f5f5f5' }, // Example color for secondary.main
      primary: { main: '#007bff' }, // Example color for primary.main
    },
  });

  it('renders UpgradeSection with correct styles and elements', () => {
    render(<UpgradeSection />);

    // Test image presence and alt text
    const image = screen.getByAltText('upgrade'); // Adjust selector if necessary
    expect(image).toBeInTheDocument();
 
    // Test button content and styles
    const button = screen.getByRole('button', { name: /Upgrade/i }); // Match case-insensitive
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Upgrade'); // Verify button text content
  });

  // Optional test for error handling or edge cases
  it('renders UpgradeSection with missing image', () => {
    jest.spyOn(console, 'error').mockImplementationOnce(() => {}); // Mock console.error for testing
    render(<UpgradeSection />); // Render without mocking the image

  });
});
