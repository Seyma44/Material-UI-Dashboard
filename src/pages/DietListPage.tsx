import React, { useState } from 'react';
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
  createData('Gain Weight Program', 262, 16.0, 24, 44),
  createData('Gain Weight Program', 262, 16.0, 24, 44),
  createData('Gain Weight Program', 262, 16.0, 24, 44),
  createData('Gain Weight Program', 262, 16.0, 24, 44),
];

export default function DietListPage() {
  const [open, setOpen] = useState(false);

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
            {(rowsPerPage > 0
              ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : rows
            ).map((row) => (
              <TableRow key={row.name}>
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
                  <Button variant="outlined" color="secondary" onClick={handleDeleteButtonClick}>
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
              <TextField fullWidth label="Name" />
            </Grid>
            <Grid item xs={6}>
              <TextField fullWidth label="Calories" />
            </Grid>
            <Grid item xs={6}>
              <TextField fullWidth label="Fat" />
            </Grid>
            <Grid item xs={6}>
              <TextField fullWidth label="Carbs" />
            </Grid>
            <Grid item xs={6}>
              <TextField fullWidth label="Protein" />
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
