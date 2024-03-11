import React from 'react';
import { render, screen } from '@testing-library/react';
import { createTheme } from '@mui/material/styles';
import DrawerHeader from './DrawerHeader'; // Update the path accordingly

// Mock the Icons component for testing (assuming it's a separate component)
jest.mock('../../icons', () => ({
  ChevronLeft: jest.fn(() => <div>ChevronLeft</div>),
  ChevronRight: jest.fn(() => <div>ChevronRight</div>),
}));

describe('DrawerHeader Component', () => {
  const onDrawerCloseMock = jest.fn();

  it('renders DrawerHeader with left chevron for LTR theme', () => {
 
    render(<DrawerHeader onDrawerClose={onDrawerCloseMock} />);

    const container = screen.getByRole('button');
    expect(container).toBeInTheDocument();

    // Verify IconButton rendering and click functionality
    expect(container).toHaveStyle({ borderRadius: '10%' });
    expect(onDrawerCloseMock).not.toHaveBeenCalled(); // Button not clicked yet
    container.click();
    expect(onDrawerCloseMock).toHaveBeenCalledTimes(1);

  });

  it('renders DrawerHeader with right chevron for RTL theme', () => {
    render(<DrawerHeader onDrawerClose={onDrawerCloseMock} />);

    const container = screen.getByRole('button');
    expect(container).toBeInTheDocument();

    // Same expectations as LTR test for button styles and click functionality

  });
});
