import React, { useState } from 'react';
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
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import MenuItem from '@mui/material/MenuItem';
import Autocomplete from '@mui/material/Autocomplete';
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
  createData('Arthur Giga', '15/03/2024', '16:15', 'Office', 'Gain Weight'),
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

  return (
    <>
    <MainCard header="Appointments"  buttonLabel="Create New"
        buttonOnClick={handleButtonClick}>
    
        <TableContainer component={Paper} sx={{ borderRadius: 5, }}  style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
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
              {rows.map((row) => (
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
  
    </MainCard>
    <Modal
  open={open}
  onClose={handleCloseModal}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4, borderRadius: 4 }}>
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
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <Grid container justifyContent="flex-end" spacing={2}>
          <Grid item>
            <Button variant="contained" color="primary" onClick={handleFormSubmit}>Submit</Button>
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
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4, borderRadius: 4 }}>
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
