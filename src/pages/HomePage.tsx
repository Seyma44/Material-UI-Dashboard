import React from 'react';
import AppointmentsChart from '../charts/AppointmentsChart'
import TotalRevenueChart from '../charts/TotalRevenueChart'
import Tickets  from '../components/Tickets'
import StatsComponent from '../components/StatComponent';
import TodayAppointments from '../components/TodayAppointments'
import DashboardCard from '../components/DashboardCard'
import illustrationImage from '../images/home.svg';
import * as Icons from '../icons';
import {
  Grid,
  Typography,
  Stack,
  Box,    
  Divider,
  Card,
  CardMedia,
  CardContent, 
  IconButton
} from '@mui/material';

const HomePage: React.FC = () => {
 
  return (
    <>
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />
        {/* Left Grid */}
        <Grid item xs={12} md={7} lg={8}>
          <DashboardCard sx={{ mt: 2 }}>
            <Box>
            <Card sx={{ display: 'flex', boxShadow: 'none', border: 'none', p: 0, margin: -1 }}>
              <CardContent sx={{ flex: '1 0 auto', margin: -1 }}>
                <Typography variant="h3" color="text.default">
                  Fitzone Nutritionist Panel
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="text.primary"
                  component="div"
                  sx={{
                    mt: 2,
                    width: '60%', 
                    overflowWrap: 'break-word',
                    lineHeight: '1.0',
                  }}
                >
                 Manage your upcoming appointments, clients, and events.
                </Typography>
              </CardContent>
              <CardMedia
                component="img"
                sx={{
                  width: { xs: 0, sm: 131 }, 
                  display: { xs: 'none', sm: 'block' }, 
                }}
                image={illustrationImage}
                alt="Fitzone cover image"
              />
            </Card>
            </Box>
          </DashboardCard>
          {/** Today appointment */}
          <DashboardCard sx={{ mt: 2 }} content={false}>
            <Box sx={{ p: 3, pb: 1}}>
              <Stack spacing={2}>
                <Typography variant="h4" color="textSecondary">
                  Statistics for April
                </Typography>
                <Typography variant="subtitle2" color="text.secondary">Check your feedback and revenue</Typography>
                <StatsComponent />
              </Stack>
            </Box>
          </DashboardCard>
          {/** Next Appointment */}
          <DashboardCard sx={{ mt: 2 }} content={false}>
            <Box sx={{ p: 3, pb: 1}}>
              <Stack spacing={2}>
                <Typography variant="h4" color="textSecondary">
                  Weekly Appointments
                </Typography>
                <Typography variant="subtitle2" color="text.secondary">Check weekly appointment schedule</Typography>
                <TotalRevenueChart />
              </Stack>
            </Box>
          </DashboardCard>
          <DashboardCard sx={{ mt: 2 }} content={false}>
            <Box sx={{ p: 3}}>
              <Stack spacing={3}>
                <Typography variant="h4" color="textSecondary">
                  Today's Appointments
                </Typography>
                <Typography variant="subtitle2" color="text.secondary">Check your appointments for the day</Typography>
                <TodayAppointments />   
              </Stack>
            </Box>
          </DashboardCard>
        </Grid>
        {/** Right Grid  */}
        <Grid item xs={12} md={5} lg={4}>
          <DashboardCard sx={{ mt: 2 }} content={false}>
          <Box sx={{ p: 3, pb: 0, textAlign: 'center' }}>
              <Stack spacing={2}>
                <Typography variant="h4" color="textSecondary">
                  Monthly Statistics
                </Typography>
                <Typography variant="subtitle2" color="text.secondary">Your monthly workload</Typography>
              </Stack>
            </Box>
            <AppointmentsChart  />
            <Box sx={{ p: 2,  textAlign: 'center' }}>
              <Stack spacing={2}>47
                <Typography variant="subtitle2" color="text.primary">appointments have been completed</Typography>
              </Stack>
            </Box>
            <Divider/>
            <Box sx={{ p: 1, mb:2, mt:2, textAlign: 'center' }}>
              <Stack spacing={2}>
                <Typography variant="subtitle2" color="text.primary">
                  6 new clients have been added.
                  <IconButton
                    disableRipple
                    color="secondary"
                    title="Danışan"
                    sx={{ color: 'green', bgcolor: 'success.light', width:'55px',fontSize:'12px',marginLeft: '7px',height:28,  borderRadius:1,}}
                  >
                  <Icons.TrendingUp style={{marginRight:'3px', color:'green', fontSize:'15px'}}/>25%
                  </IconButton>
                </Typography>
              </Stack>
            </Box>
          </DashboardCard>
          {/**Ticket  section*/}
          <DashboardCard sx={{ mt: 2 }} content={false}>
            <Box sx={{ p: 2, pb: 1, textAlign: 'center' }}>
              <Stack spacing={2}>
                <Typography variant="h4" color="textSecondary">
                  Open Tickets
                </Typography>
                <Typography variant="subtitle2" color="text.secondary">You can respond to your open tickets here.</Typography>
              </Stack>
            </Box>
            <Divider/>
            <Tickets />
          </DashboardCard>
        </Grid> 
    </Grid>
    </>
  );
};

export default HomePage;
