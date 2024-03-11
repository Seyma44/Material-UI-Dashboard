import { render, screen } from '@testing-library/react';
import TodayAppointments from './TodayAppointments';

describe('TodayAppointments component', () => {
  test('renders table with correct headers and data', () => {
    render(<TodayAppointments />);
  // Check if the table headers are rendered
    expect(screen.getByText('Image')).toBeInTheDocument();
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Time')).toBeInTheDocument();
    expect(screen.getByText('Location')).toBeInTheDocument();
    expect(screen.getByText('Action')).toBeInTheDocument();
  
    const officeElements = screen.getAllByText('Office');
    expect(officeElements.length).toBeGreaterThan(0);
    officeElements.forEach((officeElement) => {
      expect(officeElement).toBeInTheDocument();
    });

  });
});
