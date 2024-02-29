import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import MainCard from '../components/MainCard';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
// Function to create sample data rows
function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: string,
  status:string,
) {
  return { name, calories, fat, carbs, protein,status };
}

// Sample data rows
const rows = [
  createData('Suzi Lorem', 32, 6.0, 24, 'Keto Diet','Aktive'),
  createData('Ivan Tylor', 19, 9.0, 37, 'Gluten Free Diet','Passive'),
  createData('Arthur Giga', 27, 16.0, 24, 'Gain Weight','Aktive'),
];
const LocationChips = ({ status }: { status: string }) => {
  // Define chipColor based on the status
  const chipColor = status === 'Aktive' ? 'success' : 'warning';

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
      label={status}
      color={chipColor}
      style={chipStyles.chip}
      sx={{ color: chipStyles.label.color }}
    />
  );
};

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
                <TableCell sx={{ fontWeight: 'bold' }}>Image</TableCell>
                <TableCell align="left" sx={{ fontWeight: 'bold' }}>Name</TableCell>
                <TableCell align="center" sx={{ fontWeight: 'bold' }}>Age</TableCell>
                <TableCell align="center" sx={{ fontWeight: 'bold' }}>Gender</TableCell>
                <TableCell align="center" sx={{ fontWeight: 'bold' }}>Plan</TableCell>
                <TableCell align="center" sx={{ fontWeight: 'bold' }}>Status</TableCell>
                <TableCell align="right" sx={{ fontWeight: 'bold' }}>Actions</TableCell> {/* New column for actions */}
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
                  <TableCell align="center"> <LocationChips status={row.status} /></TableCell>
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
