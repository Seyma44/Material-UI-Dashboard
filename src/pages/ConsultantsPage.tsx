import React, { useState,useEffect } from 'react';
import MainCard from '../components/MainCard';
import { useQuery, useMutation, gql } from '@apollo/client';
import {
  Box,
  Button,
  MenuItem,
  Grid,
  Modal,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  TablePagination,
  Typography
} from '@mui/material';
import CustomChip from '../components/CustomChip';
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../reducers/store';
import { setDeleteModalOpen, setRows } from '../reducers/actions';
import { useCommonContext } from '../Context/CommonContext';

const GET_CONSULTANTS = gql`
  query GetConsultants {
    consultants {
      id
      name
      age
      gender
      plan
      status
    }
    dietOptions
  }
`;

const ADD_CONSULTANT = gql`
  mutation AddConsultant($id: ID!,$name: String!, $age: Int!, $gender: String!, $plan: String!, $status: String!) {
    addConsultant(id: $id,name: $name, age: $age, gender: $gender, plan: $plan, status: $status) {
      id
      name
      age
      gender
      plan
      status
    }
  }
`;

const DELETE_CONSULTANT = gql`
  mutation DeleteConsultant($id: ID!) {
    deleteConsultant(id: $id) {
      id
      name
      age
      gender
      plan
      status
    }
  }
`;

export default function ConsultantsPage() {

  const [name, setName] = useState(''); 
  const [age, setAge] = useState('');
  const [gender, setGender] = useState<string>('');
  const [plan, setPlan] = useState<string>('');
  const [status, setStatus] = useState<string>('');
  const [selectedConsultant, setSelectedConsultant] = useState('');

  const { loading, error, data,refetch } = useQuery(GET_CONSULTANTS);
  const [deleteConsultant] = useMutation(DELETE_CONSULTANT);
  const [addConsultant] = useMutation(ADD_CONSULTANT);

  const { open, deleteModalOpen, page, rows, rowsPerPage } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  const { handleButtonClick, handleCloseModal, handleCloseDeleteModal, handleChangePage, handleChangeRowsPerPage } = useCommonContext();

 
  const handleFormSubmit = async () => {
    try {
      await addConsultant({
        variables: {
          id: uuidv4(), // Generate a random UUID
          name,
          age:parseInt(age),
          gender,
          plan,
          status
        }
      });
      // After adding a new appointment, refetch the data to update the table
      refetch();
      // Clear form inputs
      setName('');
      setAge('');
      setGender('');
      setPlan('');
      setStatus('');
    } catch (error) {
      console.error('Error adding appointment:', error);
    }
    handleCloseModal();
  };
  

  const handleDeleteButtonClick = (consultantId: any) => {
    setSelectedConsultant(consultantId);
    dispatch(setDeleteModalOpen(true));
  };
  
 
  const handleDeleteConfirm = async () => {
    try {
      await deleteConsultant({ variables: { id: selectedConsultant } });
      // After deleting the appointment, refetch the data to update the table
      refetch();
    } catch (error) {
      console.error('Error deleting appointment:', error);
    }
    // Close the delete modal after confirming
    handleCloseDeleteModal();
  };
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        await refetch(); // Refetch data from the server
      } catch (error) {
        console.error('Error refetching data:', error);
      }
    };
    //to fetch dietOptions dynamically
    fetchData(); // Call the fetchData function when the component mounts 
  }, [refetch]);

  useEffect(() => {
    if (!loading && data) {
      dispatch(setRows(data.consultants));
    }
  }, [loading, data,dispatch]);
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  //before return
  const dietOptions = data?.dietOptions || []; 
  const reversedRows = [...rows].reverse();

  return (
    <>
      <MainCard header="Consultants" buttonLabel="Add New" buttonOnClick={handleButtonClick}>
        <TableContainer component={Paper} sx={{ borderRadius: 5 }} style={{ whiteSpace: 'nowrap',  textOverflow: 'ellipsis' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold' }}>Image</TableCell>
                <TableCell align="left" sx={{ fontWeight: 'bold' }}>Name</TableCell>
                <TableCell align="center" sx={{ fontWeight: 'bold' }}>Age</TableCell>
                <TableCell align="center" sx={{ fontWeight: 'bold' }}>Gender</TableCell>
                <TableCell align="center" sx={{ fontWeight: 'bold' }}>Plan</TableCell>
                <TableCell align="center" sx={{ fontWeight: 'bold' }}>Status</TableCell>
                <TableCell align="right" sx={{ fontWeight: 'bold' }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {(rowsPerPage > 0
              ? reversedRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : reversedRows
            ).map((consultant: any) => (
                <TableRow key={consultant.id}>
                  <TableCell component="th" scope="row">
                    <Avatar sx={{ borderRadius: '5px' }}>{consultant.name.charAt(0)}</Avatar>
                  </TableCell>
                  <TableCell align="left">{consultant.name}</TableCell>
                  <TableCell align="center">{consultant.age}</TableCell>
                  <TableCell align="center">{consultant.gender}</TableCell>
                  <TableCell align="center">{consultant.plan}</TableCell> 
                  <TableCell align="center"> <CustomChip type="status" label={consultant.status} /></TableCell>
                  <TableCell align="right">
                    <Button variant="contained" color="primary" style={{ marginRight: 8 }}>
                      Details
                    </Button>
                    <Button variant="outlined" color="primary" style={{ marginRight: 8 }}>
                      Edit
                    </Button>
                    <Button variant="outlined" color="secondary"onClick={() => handleDeleteButtonClick(consultant.id)}>
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

      {/* Modal for adding new entry */}
      <Modal
        open={open}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '80%', 
            maxWidth: 400,  bgcolor: 'background.paper', boxShadow: 24, p: 4, borderRadius: 4 }}>
          <Typography variant="h4" id="modal-modal-title" sx={{ mb: 2 }}>Add New Consultant</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField fullWidth label="Name" name="name" value={name}  onChange={(e) => setName(e.target.value)}  />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Age" name="age" value={age} type="number" onChange={(e) => setAge(e.target.value)} />
            </Grid>
            <Grid item xs={12}>
                <TextField fullWidth label="Gender" select name="gender" value={gender} onChange={(e) => setGender(e.target.value)} >
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
                </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Plan"
                select
                name="plan"
                value={plan}
                onChange={(e) => setPlan(e.target.value)}
              >
                {dietOptions.map((option: string) => ( // Map through dietOptions
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Status" select name="status" value={status} onChange={(e) => setStatus(e.target.value)}>
                  <MenuItem value="Aktive">Active</MenuItem>
                  <MenuItem value="Passive">Passive</MenuItem>
              </TextField>
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
