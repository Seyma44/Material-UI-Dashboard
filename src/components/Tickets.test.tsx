import { render, screen } from '@testing-library/react';
import Tickets from './Tickets';

describe('Tickets component', () => {
    test('renders list items with correct content', () => {
        render(<Tickets />);
        
        // Check if the list items are rendered with correct content
        const listItems = screen.getAllByRole('listitem');
        
        expect(listItems).toHaveLength(3); // Ensure all list items are rendered
        
        const expectedContent = [
          { primary: 'Meeting this weekend?', secondary: "Remy Sharp — I'll be in your office for checking this…" },
          { primary: 'Diet List', secondary: 'Travis Howard" — I have questions about the new diet list…' },
          { primary: 'Keto Diet', secondary: 'Cindy Baker — Do you have Keto recommendations? Have…' }
        ];
        
        // Verify the content of each list item
        listItems.forEach((listItem, index) => {
          console.log('List Item:', listItem.textContent);
          const primaryText = screen.getByText(expectedContent[index].primary);
          
          expect(primaryText).toBeInTheDocument();
         
        });
      });
      

  test('renders buttons with "Details" text', () => {
    render(<Tickets />);
    
    // Check if all buttons are rendered with the "Details" text
    const buttons = screen.getAllByRole('button', { name: 'Details' });
    expect(buttons).toHaveLength(3); // Ensure all buttons are rendered
    
    buttons.forEach((button) => {
      expect(button).toBeInTheDocument();
    });
  });
});
