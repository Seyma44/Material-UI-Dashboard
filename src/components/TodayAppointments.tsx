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


function createData(
  name: string,
  fat: string,
  carbs: string,
  protein: string,
) {
  return { name, fat, carbs, protein };
}

// Sample data rows
const rows = [
  createData('Suzi Lorem', '9:30', 'Office', 'Keto Diet'),
  createData('Ivan Tylor', '12:00', 'Online', 'Gluten Free Diet'),
  createData('Arthur Giga', '16:15', 'Hospital', 'Gain Weight'),
  createData('Arthur Giga', '16:15', 'Office', 'Gain Weight'),
];

const LocationChips = ({ location }: { location: string }) => {
  // Define chipColor based on the status
  const chipColor =
  location === 'Office' ? 'warning' :
  location === 'Online' ? 'error' :
  'info';

  const chipStyles = {
    label: {
      color: '#FFFFFF', 
    },
    chip: {
      borderRadius: '4px',
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

export default function TodayAppointments() {
  return (
    <div style={{ height: '300px', overflowY: 'scroll' }}> 
      <TableContainer component={Paper} sx={{ borderRadius: 3, boxShadow: 'none' }} style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
        <Table >
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }}>Image</TableCell>
              <TableCell align="left" sx={{ fontWeight: 'bold' }}>Name</TableCell>
              <TableCell align="center" sx={{ fontWeight: 'bold' }}>Time</TableCell>
              <TableCell align="center" sx={{ fontWeight: 'bold' }}>Location</TableCell>
              <TableCell align="right" sx={{ fontWeight: 'bold' }}>Action</TableCell> 
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  <Avatar sx={{ borderRadius: '5px' }}>{row.name.charAt(0)}</Avatar>
                </TableCell>
                <TableCell align="left">{row.name}</TableCell>
                <TableCell align="center">{row.fat}</TableCell>
                <TableCell align="center"> <LocationChips location={row.carbs} /></TableCell>
                <TableCell align="right">
                  <Button variant="contained" color="primary">
                    Details
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
