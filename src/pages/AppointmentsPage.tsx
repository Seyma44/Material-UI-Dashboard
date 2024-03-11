import  { useState,useEffect } from 'react';
import MainCard from '../components/MainCard';
import CustomChip from '../components/CustomChip';
import { useQuery, useMutation, gql } from '@apollo/client';
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
import dayjs from 'dayjs';
import 'dayjs/locale/en'; 
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../reducers/store';
import { setDeleteModalOpen, setRows } from '../reducers/actions';
import { useCommonContext } from '../Context/CommonContext';
// GraphQL queries
const GET_APPOINTMENTS = gql`
  query GetAppointments {
    appointments {
      id
      name
      date
      time
      location
      dietname
    }
    options
  }
`;

// GraphQL mutations
const ADD_APPOINTMENT = gql`
  mutation AddAppointment($id: ID!,$name: String!, $date: String!, $time: String!, $location: String!, $dietname: String!) {
    addAppointment(id: $id,name: $name, date: $date, time: $time, location: $location, dietname: $dietname) {
      id
      name
      date
      time
      location
      dietname
    }
  }
`;

const DELETE_APPOINTMENT = gql`
  mutation DeleteAppointment($id: ID!) {
    deleteAppointment(id: $id) {
      id
      name
      date
      time
      location
      dietname
    }
  }
`;

export default function AppointmentsPage() {

  const [name, setName] = useState<string>(''); 
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const formattedDate = dayjs(date).format('DD/MM/YYYY');
  const formattedTime = dayjs(time).format('HH:mm');
  const [selectedAppointment, setSelectedAppointment] = useState('');

  const { loading, error, data, refetch } = useQuery(GET_APPOINTMENTS);
  const [addAppointment] = useMutation(ADD_APPOINTMENT);
  const [deleteAppointment] = useMutation(DELETE_APPOINTMENT);

  const { options } = data || { options: [] };
  const { open, deleteModalOpen, page, rows, rowsPerPage } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  const { handleButtonClick, handleCloseModal, handleCloseDeleteModal, handleChangePage, handleChangeRowsPerPage } = useCommonContext();

  const handleLocationChange = (event:any) => {
    setLocation(event.target.value);
  };


  const handleFormSubmit = async () => {
    try {
      await addAppointment({
        variables: {
          id: uuidv4(), // Generate a random UUID
          name,
          date: formattedDate, // Use formatted date
          time: formattedTime, // Use formatted time
          location,
          dietname:'sample'
        }
      });
      // After adding a new appointment, refetch the data to update the table
      refetch();
      // Clear form inputs
      setName('');
      setDate('');
      setTime('');
      setLocation('');
    } catch (error) {
      console.error('Error adding appointment:', error);
    }
    handleCloseModal();
  };
  


  const handleDeleteButtonClick = (appointmentId: any) => {
    setSelectedAppointment(appointmentId);
    dispatch(setDeleteModalOpen(true));
  };
  
  
  const handleDeleteConfirm = async () => {
    try {
      await deleteAppointment({ variables: { id: selectedAppointment } });
      // After deleting the appointment, refetch the data to update the table
      refetch();
    } catch (error) {
      console.error('Error deleting appointment:', error);
    }
    // Close the delete modal after confirming
    handleCloseDeleteModal();
  };
  
 
  useEffect(() => {
    if (!loading && data) {
      dispatch(setRows(data.appointments));
    }
  }, [loading, data,dispatch]);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  
  //before return
  const reversedRows = [...rows].reverse();

  return (
    <>
      <MainCard header="Appointments" buttonLabel="Create New" buttonOnClick={handleButtonClick}>

        <TableContainer component={Paper} sx={{ borderRadius: 5, }} style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
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
                {rowsPerPage > 0 ? (
                  reversedRows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, index) => (
                      <TableRow key={row.name + index}>
                      <TableCell component="th" scope="row">
                        {/* Add avatar to the first column */}
                        <Avatar sx={{ borderRadius: '5px' }}>{row.name.charAt(0)}</Avatar>
                      </TableCell>
                      <TableCell align="left">{row.name}</TableCell>
                      <TableCell align="center">{row.date}</TableCell>
                      <TableCell align="center">{row.time}</TableCell>
                      <TableCell align="center"> <CustomChip type="location" label={row.location} /></TableCell>
                      <TableCell align="right">
                        {/* Add Edit and Delete buttons */}
                        <Button variant="contained" color="primary" style={{ marginRight: 8 }}>
                          Details
                        </Button>
                        <Button variant="outlined" color="primary" style={{ marginRight: 8 }}>
                          Edit
                        </Button>
                        <Button variant="outlined" color="secondary" onClick={() => handleDeleteButtonClick(row.id)}>
                          Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                    ))
                ) : (
                  reversedRows
                  .slice()
                    .map((row, index) => (
                      <TableRow key={row.name + index}>
                      <TableCell component="th" scope="row">
                        {/* Add avatar to the first column */}
                        <Avatar sx={{ borderRadius: '5px' }}>{row.name.charAt(0)}</Avatar>
                      </TableCell>
                      <TableCell align="left">{row.name}</TableCell>
                      <TableCell align="center">{row.date}</TableCell>
                      <TableCell align="center">{row.time}</TableCell>
                      <TableCell align="center"> <CustomChip type="location" label={row.location} /></TableCell>
                      <TableCell align="right">
                        {/* Add Edit and Delete buttons */}
                        <Button variant="contained" color="primary" style={{ marginRight: 8 }}>
                          Details
                        </Button>
                        <Button variant="outlined" color="primary" style={{ marginRight: 8 }}>
                          Edit
                        </Button>
                        <Button variant="outlined" color="secondary" onClick={() => handleDeleteButtonClick(row.id)}>
                          Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                    ))
                )}
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
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '80%',
          maxWidth: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4, borderRadius: 4 }}>
          <Typography variant="h4" id="modal-modal-title" sx={{ mb: 2 }}>New Appointment</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              {/* Name TextField */}

              <Autocomplete
                fullWidth
                options={options}
                value={name}
                onChange={(event, newValue) => {
                  if (newValue !== null) {
                    setName(newValue); // Update the state with the selected option
                  }
                }}
                renderInput={(params) => <TextField {...params} label="Name" />}
              />

            </Grid>
            <Grid item xs={12} >
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker']}>
                  <DatePicker label="Date" sx={{ width: '100%' }}  value={date} onChange={(newDate: string | null) => {
                    if (newDate) {
                      setDate(newDate);
                    }
                  }}/>
                </DemoContainer>
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12} >
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['TimePicker']}>
                  <TimePicker label="Time" sx={{ width: '100%' }}  value={time}  onChange={(newTime: string | null) => {
                      if (newTime) {
                        setTime(newTime);
                      }
                    }} />
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
                  <FormControlLabel value="Online" control={<Radio />} label="Online" />
                  <FormControlLabel value="Office" control={<Radio />} label="Office" />
                  <FormControlLabel value="Hospital" control={<Radio />} label="Hospital" />
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
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '80%',
          maxWidth: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4, borderRadius: 4 }}>
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
