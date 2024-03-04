import React, { useState } from 'react';
import MainCard from '../components/MainCard';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {
  Autocomplete,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  TablePagination,
  Button,
  Chip,
  Modal,
  TextField,
  Grid,
  Box,
  Typography,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio
} from '@mui/material';

// Function to create sample data rows
function createData(
  name: string,
  calories: string,
  fat: string,
  location: string,
  protein: string,
) {
  return { name, calories, fat, location, protein };
}

// Sample data rows
const rows = [
  createData('Suzi Lorem', '12/03/2024', '12:30', 'Office', 'Keto Diet'),
  createData('Ivan Tylor', '14/03/2024', '08:00', 'Online', 'Gluten Free Diet'),
  createData('Arthur Giga', '15/03/2024', '16:15', 'Hospital', 'Gain Weight'),
];
const LocationChips = ({ location }: { location: string }) => {
  // Define chipColor based on the status
  const chipColor =
  location === 'Office' ? 'warning' :
  location === 'Online' ? 'error' :
  'info';

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

export default function AppointmentsPage() {
  const [open, setOpen] = useState(false);
  const [location, setLocation] = useState<string>('');


  const handleLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value);
  };

  const handleButtonClick = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const handleFormSubmit = () => {
    // Handle form submission logic here
    handleCloseModal();
  };

  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  const handleDeleteButtonClick = () => {
    setDeleteModalOpen(true);
  };

  const handleCloseDeleteModal = () => {
    setDeleteModalOpen(false);
  };

  const handleDeleteConfirm = () => {
    // Handle delete confirmation logic here
    handleCloseDeleteModal();
  };

  const options = ["Suzi Lorem", "Ivan Tylor", "Arthur Giga"];
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
    <MainCard header="Appointments"  buttonLabel="Create New"
        buttonOnClick={handleButtonClick}>
    
        <TableContainer component={Paper} sx={{ borderRadius: 5, }}  style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
          <Table >
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold' }}>Image</TableCell>
                <TableCell align="left" sx={{ fontWeight: 'bold' }}>Name</TableCell>
                <TableCell align="center" sx={{ fontWeight: 'bold' }}>Date</TableCell>
                <TableCell align="center" sx={{ fontWeight: 'bold' }}>Time</TableCell>
                <TableCell align="center" sx={{ fontWeight: 'bold' }}>Location</TableCell>
                <TableCell align="right" sx={{ fontWeight: 'bold' }}>Actions</TableCell> {/* New column for actions */}
              </TableRow>
            </TableHead>
            <TableBody>
            {(rowsPerPage > 0
              ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : rows
            ).map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {/* Add avatar to the first column */}
                    <Avatar sx={{ borderRadius: '5px' }}>{row.name.charAt(0)}</Avatar>
                  </TableCell>
                  <TableCell align="left">{row.name}</TableCell>
                  <TableCell align="center">{row.calories}</TableCell>
                  <TableCell align="center">{row.fat}</TableCell>
                  <TableCell align="center">  <LocationChips location={row.location} /></TableCell>
                  <TableCell align="right">
                    {/* Add Edit and Delete buttons */}
                    <Button variant="contained" color="primary" style={{ marginRight: 8 }}>
                      Details
                    </Button>
                    <Button variant="outlined" color="primary" style={{ marginRight: 8 }}>
                      Edit
                    </Button>
                    <Button variant="outlined" color="secondary"  onClick={handleDeleteButtonClick}>
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </MainCard>
    <Modal
  open={open}
  onClose={handleCloseModal}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',  width: '80%', 
            maxWidth: 400,  bgcolor: 'background.paper', boxShadow: 24, p: 4, borderRadius: 4 }}>
    <Typography variant="h4" id="modal-modal-title" sx={{ mb: 2 }}>New Appointment</Typography>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        {/* Name TextField */}

      <Autocomplete
        fullWidth
        options={options}
        renderInput={(params) => <TextField {...params} label="Name" />}
      />
  
      </Grid> 
      <Grid item xs={12} >
         <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['DatePicker']}>
              <DatePicker label="Date" sx={{ width:'100%' }} />
          </DemoContainer>
        </LocalizationProvider>
      </Grid>
      <Grid item xs={12} >
         <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['TimePicker']}>
              <TimePicker label="Time" sx={{ width:'100%' }}/>
          </DemoContainer>
        </LocalizationProvider>
      </Grid>
      <Grid item xs={12}>
        {/* Radio Buttons */}
        <FormControl component="fieldset">
          <FormLabel component="legend">Choose Location</FormLabel>
          <RadioGroup
            aria-label="location"
            name="location"
            value={location}
            onChange={handleLocationChange}
            row
          >
            <FormControlLabel value="online" control={<Radio />} label="Online" />
            <FormControlLabel value="office" control={<Radio />} label="Office" />
            <FormControlLabel value="hospital" control={<Radio />} label="Hospital" />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <Grid container justifyContent="flex-end" spacing={2}>
          <Grid item>
            <Button variant="contained" color="primary" onClick={handleFormSubmit}>Add</Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" onClick={handleCloseModal}>Cancel</Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Box>
</Modal>

      {/* Modal for delete */}
      <Modal
        open={deleteModalOpen}
        onClose={handleCloseDeleteModal}
        aria-labelledby="delete-modal-title"
        aria-describedby="delete-modal-description"
      >
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',  width: '80%', 
            maxWidth: 400,  bgcolor: 'background.paper', boxShadow: 24, p: 4, borderRadius: 4 }}>
        <Typography variant="h4" id="delete-modal-title" sx={{ mb: 2 }}>Delete Confirmation</Typography>
<Typography variant="body1" id="delete-modal-description" sx={{ mb: 4 }}>Are you sure you want to delete this item?</Typography>

          <Grid container justifyContent="flex-end" spacing={2}>
          <Grid item>
          <Button variant="contained" color="primary" onClick={handleDeleteConfirm}>Confirm</Button>
          </Grid>
          <Grid item>
          <Button variant="outlined" onClick={handleCloseDeleteModal}>Cancel</Button>
          </Grid>
        </Grid>
        </Box>
      </Modal>
    </>
  );
}
