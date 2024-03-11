import React from 'react';
import { render, screen } from '@testing-library/react';
import DashboardCard from './DashboardCard';

describe('DashboardCard component', () => {
  test('renders with title and content', () => {
    render(
      <DashboardCard
        title="Sample Title"
        contentSX={{ padding: 2 }}
      >
        <div>Sample Content</div>
      </DashboardCard>
    );

    // Check if the title and content are rendered
    expect(screen.getByText('Sample Title')).toBeInTheDocument();
    expect(screen.getByText('Sample Content')).toBeInTheDocument();
  });

  test('renders with dark title', () => {
    render(
      <DashboardCard
        title="Sample Dark Title"
        darkTitle
      >
        <div>Sample Content</div>
      </DashboardCard>
    );

    // Check if the dark title is rendered
    expect(screen.getByText('Sample Dark Title')).toBeInTheDocument();
  });

  test('renders without content', () => {
    render(
      <DashboardCard
        title="Sample Title"
        content={false}
        children={null}
      />
    );

    // Check if the title is rendered without content
    expect(screen.getByText('Sample Title')).toBeInTheDocument();
    expect(screen.queryByText('Sample Content')).toBeNull();
  });
});
