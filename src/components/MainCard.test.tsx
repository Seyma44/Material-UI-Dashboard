import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MainCard from './MainCard';

describe('MainCard component', () => {
  test('renders with header, button, and children', () => {
    render(
      <MainCard
        header="Sample Header"
        buttonLabel="Click Me"
        buttonOnClick={() => {}}
      >
        <div>Sample Content</div>
      </MainCard>
    );

    // Check if the header, button, and children are rendered
    expect(screen.getByText('Sample Header')).toBeInTheDocument();
    expect(screen.getByText('Click Me')).toBeInTheDocument();
    expect(screen.getByText('Sample Content')).toBeInTheDocument();
  });

  test('button click event', () => {
    const handleClick = jest.fn();
    render(
      <MainCard
        header="Sample Header"
        buttonLabel="Click Me"
        buttonOnClick={handleClick}
      />
    );

    // Simulate button click
    fireEvent.click(screen.getByText('Click Me'));

    // Ensure that the button click handler is called
    expect(handleClick).toHaveBeenCalled();
  });
});
