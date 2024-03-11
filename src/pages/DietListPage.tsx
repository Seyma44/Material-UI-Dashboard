import React, { useState, useEffect } from 'react';
import MainCard from '../components/MainCard';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Modal,
  TextField,
  Grid,
  Box,
  Typography,
  TablePagination
} from '@mui/material';
import { useQuery, useMutation, gql } from '@apollo/client';
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../reducers/store';
import { setDeleteModalOpen, setRows } from '../reducers/actions';
import { useCommonContext } from '../Context/CommonContext';
 const GET_DIETS = gql`
  query GetDiets {
    diets {
      id
      name
      calories
      fat
      carbs
      protein
    }
  }
`;

const ADD_DIET = gql`
  mutation AddDiet($id: ID!,$name: String!, $calories: Int!, $fat: Float!, $carbs: Float!, $protein: Float!) {
    addDiet(id: $id,name: $name, calories: $calories, fat: $fat, carbs: $carbs, protein: $protein) {
      id
      name
      calories
      fat
      carbs
      protein
    }
  }
`;

const DELETE_DIET = gql`
  mutation DeleteDiet($id: ID!) {
    deleteDiet(id: $id) {
      id
      name
      calories
      fat
      carbs
      protein
    }
  }
`;


export default function DietListPage() {

  const [name, setName] = useState('');
  const [calories, setCalories] = useState('');
  const [fat, setFat] = useState('');
  const [carbs, setCarbs] = useState('');
  const [protein, setProtein] = useState('');
  const [selectedDietName, setSelectedDietName] = useState('');

  const { loading, error, data, refetch } = useQuery(GET_DIETS);
  const [deleteDiet] = useMutation(DELETE_DIET);
  const [addDiet] = useMutation(ADD_DIET);

  const { open, deleteModalOpen, page, rows, rowsPerPage } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  const { handleButtonClick, handleCloseModal, handleCloseDeleteModal, handleChangePage, handleChangeRowsPerPage } = useCommonContext();
  
  const handleDeleteConfirm = async () => {
    try {
      await deleteDiet({ variables: { id: selectedDietName } });
      // After deleting the diet, refetch the data to update the table
      refetch();
    } catch (error) {
      console.error('Error deleting diet:', error);
    }
    handleCloseDeleteModal();
  };

  const handleDeleteButtonClick = (dietId:any) => {
    setSelectedDietName(dietId);
    dispatch(setDeleteModalOpen(true));
  };


  useEffect(() => {
      if (!loading && data) {
        dispatch(setRows(data.diets));
      }
  }, [loading, data,dispatch]);


  const handleFormSubmit = async () => {
    try {
      await addDiet({
        variables: {
          id: uuidv4(), // Generate a random UUID
          name,
          calories: parseInt(calories),
          fat: parseFloat(fat),
          carbs: parseFloat(carbs),
          protein: parseFloat(protein)
        }
      });
      // After adding a new diet, refetch the data to update the table
      refetch();
      // Clear form inputs
      setName('');
      setCalories('');
      setFat('');
      setCarbs('');
      setProtein('');
    } catch (error) {
      console.error('Error adding diet:', error);
    }
    handleCloseModal();
  };
  

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  //before return
  const reversedRows = [...rows].reverse();

  return (
    <>
      <MainCard
        header="Diet List"
        buttonLabel="New List"
        buttonOnClick={handleButtonClick}
      >
        <TableContainer
          component={Paper}
          sx={{ borderRadius: 5 }}
          style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}
        >
          <Table sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold' }}>Diet List</TableCell>
                <TableCell align="center" sx={{ fontWeight: 'bold' }}>Calories&nbsp;(kcal)</TableCell>
                <TableCell align="center" sx={{ fontWeight: 'bold' }}>Fat&nbsp;(g)</TableCell>
                <TableCell align="center" sx={{ fontWeight: 'bold' }}>Carbs&nbsp;(g)</TableCell>
                <TableCell align="center" sx={{ fontWeight: 'bold' }}>Protein&nbsp;(g)</TableCell>
                <TableCell align="right" sx={{ fontWeight: 'bold' }}>Actions</TableCell>
              </TableRow>
            </TableHead>
 
              <TableBody>
                {rowsPerPage > 0 ? (
                  reversedRows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, index) => (
                      <TableRow key={row.name + index}>
                        <TableCell align="left">{row.name}</TableCell>
                        <TableCell align="center">{row.calories}</TableCell>
                        <TableCell align="center">{row.fat}</TableCell>
                        <TableCell align="center">{row.carbs}</TableCell>
                        <TableCell align="center">{row.protein}</TableCell>
                        <TableCell align="right">
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
                        <TableCell align="left">{row.name}</TableCell>
                        <TableCell align="center">{row.calories}</TableCell>
                        <TableCell align="center">{row.fat}</TableCell>
                        <TableCell align="center">{row.carbs}</TableCell>
                        <TableCell align="center">{row.protein}</TableCell>
                        <TableCell align="right">
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

      {/* Modal for new list */}
      <Modal
        open={open}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
      <Box 
        sx={{ 
          position: 'absolute', 
          top: '50%', 
          left: '50%', 
          transform: 'translate(-50%, -50%)', 
          width: '80%', // Adjusted to be 90% of the viewport width
          maxWidth: 400, // Maximum width to maintain readability
          bgcolor: 'background.paper', 
          boxShadow: 24, 
          p: 4, 
          borderRadius: 4 }}>
        <Typography variant="h4" id="modal-modal-title" sx={{ mb: 2 }}>New List</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
            <TextField fullWidth label="Name" value={name} onChange={(e) => setName(e.target.value)} />
            </Grid>
            <Grid item xs={6}>
            <TextField fullWidth label="Calories" value={calories} type="number"onChange={(e) => setCalories(e.target.value)} />
            </Grid>
            <Grid item xs={6}>
            <TextField fullWidth label="Fat" value={fat}type="number" onChange={(e) => setFat(e.target.value)} />
            </Grid>
            <Grid item xs={6}>
            <TextField fullWidth label="Carbs" value={carbs} type="number"onChange={(e) => setCarbs(e.target.value)} />
            </Grid>
            <Grid item xs={6}>
            <TextField fullWidth label="Protein" value={protein} type="number" onChange={(e) => setProtein(e.target.value)} />
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
        <Box 
          sx={{ 
            position: 'absolute', 
            top: '50%', 
            left: '50%', 
            transform: 'translate(-50%, -50%)', 
            width: '80%', 
            maxWidth: 400, 
            bgcolor: 'background.paper', 
            boxShadow: 24, 
            p: 4, 
            borderRadius: 4 }}>
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
