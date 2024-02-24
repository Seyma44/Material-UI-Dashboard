import React from 'react';
import MainCard from '../components/MainCard';
import { Typography, Divider, Grid, Button,Box } from '@mui/material';

const ProfilePage: React.FC = () => {
  const handleButtonClick = () => {
    console.log('Button clicked');
    // Handle button click logic here
  };
  return (
    <MainCard header="My Profile"    buttonLabel="Update"
    buttonOnClick={handleButtonClick}>
     <Box sx={{ padding: '0 20px' }}>
  <Grid container spacing={2}>
    <Grid item xs={12} md={6}>
      {/* Left side: Profile image */}
      <img src="team-2.png" alt="Profile" style={{ width: '50%', borderRadius:'5px' }} />
    </Grid>
    <Grid item xs={12} md={6}>
      {/* Right side: Profile details */}
      <Grid container spacing={2}>
        {/* First row: Name, Surname, Contact */}
        <Grid item xs={4}>
          <Typography fontWeight="bold">Name:</Typography>
          <Typography fontWeight="bold">Surname:</Typography>
          <Typography fontWeight="bold">Contact:</Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography>John</Typography>
          <Typography>Doe</Typography>
          <Typography>123-456-7890</Typography>
        </Grid>
        {/* Second row: Email, Age, Sex */}
        <Grid item xs={4}>
          <Typography fontWeight="bold">Email:</Typography>
          <Typography fontWeight="bold">Age:</Typography>
          <Typography fontWeight="bold">Sex:</Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography>john.doe@example.com</Typography>
          <Typography>30</Typography>
          <Typography>Male</Typography>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
  {/* Divider */}
  <Divider style={{ margin: '20px 0' }} />
  {/* Additional details */}
  <Typography variant="body1" fontWeight="bold">Additional Details</Typography>
  <Typography variant="body2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Typography>
  {/* Divider */}
  <Divider style={{ margin: '20px 0' }} />
  {/* Other details */}
  <Typography variant="body1" fontWeight="bold">Other Details</Typography>
  <Typography variant="body2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Typography>
     </Box>
    </MainCard>
  );
};

export default ProfilePage;
