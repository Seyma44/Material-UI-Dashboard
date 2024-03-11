import React from 'react';
import { render, screen } from '@testing-library/react';
import { createTheme } from '@mui/material/styles';
import StatsRow from './index'; // Update the path accordingly



jest.mock('../../icons', () => ({
  EventAvailable: jest.fn(() => <div data-testid="event-icon" />),
  People: jest.fn(() => <div data-testid="people-icon" />),
  AttachMoney: jest.fn(() => <div data-testid="money-icon" />),
  ArrowUpward: jest.fn(() => <div data-testid="arrow-icon" />),
}));

describe('StatsRow Component', () => {
  const theme = createTheme({
    palette: {
      info: { main: '#1779d1' }, // Example color for info.main
      customPurple: '#7c4dff', // Example custom color
      warning: { main: '#ffc107' }, // Example color for warning.main
      primary: { main: '#007bff' }, // Example color for primary.main
    },
  });

  it('renders all stat boxes with correct props', () => {
    render(<StatsRow />);

    // Test first StatBox
    expect(screen.getByText('47')).toBeInTheDocument();
    expect(screen.getByText('Total Meetings')).toBeInTheDocument();
    expect(screen.getByText('-8%')).toBeInTheDocument();
    expect(screen.getByText('-8%')).toHaveStyle({ color: theme.palette.error.main }); // Assuming error.main for negative change
  });
});
