import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import MainCard from '../components/MainCard';
import Button from '@mui/material/Button';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar } from '@mui/material';
import Chip from '@mui/material/Chip';
import { SelectChangeEvent } from '@mui/material/Select';
import Typography from '@mui/material/Typography';

// Function to create sample data rows
function createData(
  id: number,
  name: string,
  age: number,
  gender: string,
  plan: string,
  status: string,
) {
  return { id, name, age, gender, plan, status };
}

// Sample data rows
const rows = [
  createData(1, 'Suzi Lorem', 32, 'Female', 'Keto Diet', 'Aktive'),
  createData(2, 'Ivan Tylor', 19, 'Male', 'Gluten Free Diet', 'Passive'),
  createData(3, 'Arthur Giga', 27, 'Male', 'Gain Weight', 'Aktive'),
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
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    plan: '',
    status: '',
  });

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | React.ChangeEvent<{ name?: string; value: unknown }> | SelectChangeEvent<string>,
  ) => {
    if ('target' in e) {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name as string]: value,
      }));
    } else {
      const { name, value } = e;
      setFormData((prevData) => ({
        ...prevData,
        [name as string]: value,
      }));
    }
  };
  



  const handleFormSubmit = () => {
    // Handle form submission logic here
    console.log(formData);
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

  return (
    <>
      <MainCard header="Consultants" buttonLabel="Add New" buttonOnClick={handleOpenModal}>
        <TableContainer component={Paper} sx={{ borderRadius: 5 }} style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
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
              {rows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    <Avatar sx={{ borderRadius: '5px' }}>{row.name.charAt(0)}</Avatar>
                  </TableCell>
                  <TableCell align="left">{row.name}</TableCell>
                  <TableCell align="center">{row.age}</TableCell>
                  <TableCell align="center">{row.gender}</TableCell>
                  <TableCell align="center">{row.plan}</TableCell>
                  <TableCell align="center"> <LocationChips status={row.status} /></TableCell>
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
      </MainCard>

      {/* Modal for adding new entry */}
      <Modal
        open={modalOpen}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
  >
  <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4, borderRadius: 4 }}>
  <Typography variant="h4" id="modal-modal-title" sx={{ mb: 2 }}>Add New Consultan</Typography>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField fullWidth label="Name" name="name" value={formData.name} onChange={handleFormChange} />
      </Grid>
      <Grid item xs={12}>
        <TextField fullWidth label="Age" name="age" value={formData.age} onChange={handleFormChange} />
      </Grid>
      <Grid item xs={12}>
          <TextField fullWidth label="Gender" select name="gender" value={formData.gender} onChange={handleFormChange}>
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
          </TextField>
      </Grid>
      <Grid item xs={12}>
        <TextField fullWidth label="Plan" select name="plan" value={formData.plan} onChange={handleFormChange}>
            <MenuItem value="Keto Diet">Keto Diet</MenuItem>
            <MenuItem value="Gluten Free Diet">Gluten Free Diet</MenuItem>
            <MenuItem value="Gain Weight">Gain Weight</MenuItem>
          </TextField>
      </Grid>
      <Grid item xs={12}>
        <TextField fullWidth label="Status" select name="status" value={formData.status} onChange={handleFormChange}>
            <MenuItem value="Aktive">Active</MenuItem>
            <MenuItem value="Passive">Passive</MenuItem>
        </TextField>
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
