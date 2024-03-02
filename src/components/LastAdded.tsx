import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';

// Function to create sample data rows
function createData(
  name: string,
  fat: string,
carbs:string,  
  protein: string,
) {
  return { name, fat, carbs,protein };
}

// Sample data rows
const rows = [
  createData('Suzi Lorem',  '9:30', 'Office', 'Keto Diet'),
  createData('Ivan Tylor',  '12:00', 'Online', 'Gluten Free Diet'),
  createData('Arthur Giga',  '16:15', 'Office', 'Gain Weight'),
];
const LocationChips = ({ location }: { location: string }) => {
  // Define chipColor based on the status
  const chipColor = location === 'Office' ? 'info' : 'error';

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
      label={location}
      color={chipColor}
      style={chipStyles.chip}
      sx={{ color: chipStyles.label.color }}
    />
  );
};

export default function AccessibleTable() {
  return (
    <TableContainer component={Paper} sx={{ borderRadius: 5}}  style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
    <Table >
      <TableHead>
        <TableRow>
          <TableCell sx={{ fontWeight: 'bold' }}>Image</TableCell>
          <TableCell align="left" sx={{ fontWeight: 'bold' }}>Name</TableCell>
          <TableCell align="center" sx={{ fontWeight: 'bold' }}>Time</TableCell>
          <TableCell align="center" sx={{ fontWeight: 'bold' }}>Location</TableCell>
          <TableCell align="right" sx={{ fontWeight: 'bold' }}>Action</TableCell> {/* New column for actions */}
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.name}>
            <TableCell component="th" scope="row">
              {/* Add avatar to the first column */}
              <Avatar sx={{ borderRadius: '5px' }}>{row.name.charAt(0)}</Avatar>
            </TableCell>
            <TableCell align="left">{row.name}</TableCell>
            <TableCell align="center">{row.fat}</TableCell>
            <TableCell align="center"> <LocationChips location={row.carbs} /></TableCell>
            <TableCell align="right">
              {/* Add Edit and Delete buttons */}
              <Button variant="contained" color="primary">
                Details
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  );
}
