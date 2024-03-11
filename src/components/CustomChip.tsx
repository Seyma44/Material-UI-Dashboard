import React from 'react';
import Chip from '@mui/material/Chip';

interface ChipProps {
  label: string;
  type: 'location' | 'status';
}

const CustomChip: React.FC<ChipProps> = ({ label, type }) => {
  // Define chipColor based on the type and label
  let chipColor: 'primary' | 'secondary' | 'warning' | 'success' | 'info' = 'info';

  if (type === 'location') {
    chipColor = label === 'Office' ? 'warning' : label === 'Online' ? 'secondary' : 'info';
  } else if (type === 'status') {
    chipColor = label === 'Aktive' ? 'success' : 'warning';
  }

  // Define styles for the chip label and border radius
  const chipStyles = {
    label: {
      color: '#FFFFFF', // Set text color to white for all chip labels
    },
    chip: {
      borderRadius: '4px', // Set the border radius to 20px (adjust as needed)
    },
  };

  return (
    <Chip
      label={label}
      color={chipColor}
      style={chipStyles.chip}
      sx={{ color: chipStyles.label.color }}
    />
  );
};

export default CustomChip;
