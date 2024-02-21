import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Appointments from '../charts/Appointments'
import TotalRevenue from '../charts/TotalRevenue'
import Tickets  from '../components/Tickets'
import StatsComponent from '../components/StatComponent';
import LastAdded from '../components/LastAdded'
const HomePage: React.FC = () => {
 
  return (
    <>
      <Typography variant="h6">Dashboard</Typography>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={12}  md={8}>
            <Paper style={{ height: 400, width: '100%', borderRadius:20 }}   sx={{
        boxShadow: '0px 3px 3px -2px rgba(217, 217, 217, 0.20), 0px 3px 4px 0px rgba(248, 248, 248, 0.14), 0px 1px 8px 0px rgba(96, 96, 96, 0.12)',
      }}>
            <Typography variant="h6">Dashboard</Typography>
            <Typography variant="subtitle1">Week Summary</Typography>
            <StatsComponent />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Paper style={{ height: 400, width: '100%',borderRadius:20 }}   sx={{
        boxShadow: '0px 3px 3px -2px rgba(217, 217, 217, 0.20), 0px 3px 4px 0px rgba(248, 248, 248, 0.14), 0px 1px 8px 0px rgba(96, 96, 96, 0.12)',
      }}>
            <Typography variant="h6">Dashboard</Typography>
            <Appointments  />
            </Paper>
          </Grid>
        </Grid> 
      </Box>
      <Box sx={{ flexGrow: 1, marginTop:5 }}>
        <Grid container spacing={5}>
        <Grid item xs={12} sm={12} md={6}>
            <Paper style={{ height: 400, width: '100%',borderRadius:20 }}   sx={{
        boxShadow: '0px 3px 3px -2px rgba(217, 217, 217, 0.20), 0px 3px 4px 0px rgba(248, 248, 248, 0.14), 0px 1px 8px 0px rgba(96, 96, 96, 0.12)',
      }}>
            <Typography variant="h6">Dashboard</Typography>
              <TotalRevenue />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12}  md={6}>
            <Paper style={{ height: 400, width: '100%', borderRadius:20 }}   sx={{
        boxShadow: '0px 3px 3px -2px rgba(217, 217, 217, 0.20), 0px 3px 4px 0px rgba(248, 248, 248, 0.14), 0px 1px 8px 0px rgba(96, 96, 96, 0.12)',
      }}>
            <Typography variant="h6">Dashboard</Typography>
              <Tickets />
            </Paper>
          </Grid>
         
        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1, marginTop:5 }}>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={12}  md={12}>
            <Paper style={{ height: 400, width: '100%', borderRadius:20 }}   sx={{
        boxShadow: '0px 3px 3px -2px rgba(217, 217, 217, 0.20), 0px 3px 4px 0px rgba(248, 248, 248, 0.14), 0px 1px 8px 0px rgba(96, 96, 96, 0.12)',
      }}>
            <Typography variant="h6">Dashboard</Typography>
            <LastAdded />
            </Paper>
          </Grid>
        
        </Grid>
      </Box>
    </>
  );
};

export default HomePage;
