import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import MainCard from '../components/MainCard';

// Function to create sample data rows
function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

// Sample data rows
const rows = [
  createData('Gluten Free Diet', 159, 6.0, 24, 60),
  createData('Keto Diet', 237, 9.0, 37, 68),
  createData('Gain Weight Program', 262, 16.0, 24, 44),
];

export default function AccessibleTable() {
  const handleButtonClick = () => {
    console.log('Button clicked');
    // Handle button click logic here
  };
  return (
    <>
      <MainCard header="Diet Lists"  buttonLabel="New List"
        buttonOnClick={handleButtonClick}>
     <TableContainer component={Paper} sx={{ borderRadius: 5, }}  style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
      <Table sx={{ minWidth: 650 }} >
        <TableHead>
          <TableRow>
          <TableCell sx={{ fontWeight: 'bold' }}>Diet List</TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Calories&nbsp;(kcal)</TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Fat&nbsp;(g)</TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Carbs&nbsp;(g)</TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Protein&nbsp;(g)</TableCell>
            <TableCell align="right" sx={{ fontWeight: 'bold' }}>Actions</TableCell> {/* New column for actions */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="center">{row.calories}</TableCell>
              <TableCell align="center">{row.fat}</TableCell>
              <TableCell align="center">{row.carbs}</TableCell>
              <TableCell align="center">{row.protein}</TableCell>
              <TableCell align="right">
                {/* Add Edit and Delete buttons */}
                <Button variant="contained" color="primary" style={{ marginRight: 8 }}>
                  Details
                </Button>
                <Button variant="outlined" color="primary" style={{ marginRight: 8 }}>
                  Edit
                </Button>
                <Button variant="outlined" color="secondary">
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </MainCard>
    </>
  );
}
