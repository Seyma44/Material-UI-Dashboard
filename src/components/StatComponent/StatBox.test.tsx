import React from 'react';
import { render, screen } from '@testing-library/react';
import StatBox from './StatBox'; // Update the path accordingly

describe('StatBox Component', () => {
  const testProps = {
    icon: <svg />, 
    amount: '100',
    label: 'Test Label',
    change: '+10',
    bgColor: '#007bff',
  };

  it('renders with given props', () => {
    render(<StatBox {...testProps} />);
    expect(screen.getByText('100')).toBeInTheDocument();
    expect(screen.getByText('Test Label')).toBeInTheDocument();
    expect(screen.getByText('+10')).toBeInTheDocument();
  });


  it('renders amount with correct variant', () => {
    render(<StatBox {...testProps} />);
    const amount = screen.getByText('100');
    expect(amount).toHaveClass('MuiTypography-h6');
  });

  it('renders change with correct color based on its value', () => {
    render(<StatBox {...testProps} />);
    const change = screen.getByText('+10');
    expect(change).toHaveStyle('color: rgb(46, 125, 50)'); 
  });

  jest.mock('@mui/material', () => ({
    ...jest.requireActual('@mui/material'),
    useMediaQuery: jest.fn().mockReturnValue(true),
  }));

 
});
