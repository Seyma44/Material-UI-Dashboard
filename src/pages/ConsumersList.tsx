import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import MainCard from '../components/MainCard';
import { Button,Box } from '@mui/material';
// Function to create sample data rows
function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: string,
) {
  return { name, calories, fat, carbs, protein };
}

// Sample data rows
const rows = [
  createData('Suzi Lorem', 32, 6.0, 24, 'Keto Diet'),
  createData('Ivan Tylor', 19, 9.0, 37, 'Gluten Free Diet'),
  createData('Arthur Giga', 27, 16.0, 24, 'Gain Weight'),
];

export default function AccessibleTable() {
  const handleButtonClick = () => {
    console.log('Button clicked');
    // Handle button click logic here
  };
  return (
    <>
    <MainCard header="Consultants"  buttonLabel="Add New"
        buttonOnClick={handleButtonClick}>
    
        <TableContainer component={Paper} sx={{ borderRadius: 5, }}  style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          <Table >
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell align="left">Name</TableCell>
                <TableCell align="center">Age</TableCell>
                <TableCell align="center">Sex</TableCell>
                <TableCell align="center">Plan</TableCell>
                <TableCell align="center">Actions</TableCell> {/* New column for actions */}
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
                  <TableCell align="center">{row.calories}</TableCell>
                  <TableCell align="center">{row.fat}</TableCell>
                  <TableCell align="center">{row.protein}</TableCell>
                  <TableCell align="center">
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
