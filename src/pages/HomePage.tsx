import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Appointments from '../charts/Appointments'
import TotalRevenue from '../charts/TotalRevenue'
import Tickets  from '../components/Tickets'
import StatsComponent from '../components/StatComponent';
import LastAdded from '../components/LastAdded'
import illustrationImage from '../images/home.svg';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import {
 
  Stack,
Divider,
  Card,
  CardMedia,
  CardContent, 
  IconButton
} from '@mui/material';
import DashboardCard from '../components/DashboardCard'
const HomePage: React.FC = () => {
 
  return (
    <>
   {/*  <Typography variant="h6">Dashboard</Typography>
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
      </Box> */}

      <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />
        {/* Left Grid */}
        <Grid item xs={12} md={7} lg={8}>
          <DashboardCard sx={{ mt: 2 }}>
            <Box>
            <Card sx={{ display: 'flex', boxShadow: 'none', border: 'none', p: 0, margin: -1 }}>
              <CardContent sx={{ flex: '1 0 auto', margin: -1 }}>
                <Typography variant="h3" color="text.default">
                  Diyet360 Uzman Paneli
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
                  Sonraki randevularınızı ve etkinliğinizi kontrol edin.
                </Typography>
              </CardContent>
              <CardMedia
                component="img"
                sx={{
                  width: { xs: 0, sm: 131 }, 
                  display: { xs: 'none', sm: 'block' }, 
                }}
                image={illustrationImage}
                alt="Live from space album cover"
              />
            </Card>
            </Box>
          </DashboardCard>
          {/** Today appointment */}
          <DashboardCard sx={{ mt: 2 }} content={false}>
            <Box sx={{ p: 3, pb: 1}}>
              <Stack spacing={2}>
                <Typography variant="h3" color="textSecondary">
                  Bugünkü Randevularınız
                </Typography>
          
                <StatsComponent />
              </Stack>
            </Box>
          </DashboardCard>
          {/** Next Appointment */}
          <DashboardCard sx={{ mt: 2 }} content={false}>
            <Box sx={{ p: 3, pb: 1}}>
              <Stack spacing={2}>
                <Typography variant="h3" color="textSecondary">
                  Gelecek Randevularınız
                </Typography>
                <TotalRevenue />
              
              </Stack>
            </Box>
          </DashboardCard>
          <DashboardCard sx={{ mt: 2 }} content={false}>
            <Box sx={{ p: 3, pb: 1}}>
              <Stack spacing={2}>
                <Typography variant="h3" color="textSecondary">
                  Gelecek Randevularınız
                </Typography>
                <LastAdded />
              
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
                  Haftanın İstatistikleri
                </Typography>
              </Stack>
            </Box>
            <Appointments  />
            <Box sx={{ p: 2, pb: 0, textAlign: 'center' }}>
              <Stack spacing={2}>
                <Typography variant="subtitle2" color="text.primary">Randevu gerçekleştirildi.</Typography>
              </Stack>
            </Box>
            <Divider/>
            <Box sx={{ p: 1, mb:3, textAlign: 'center' }}>
              <Stack spacing={2}>
                <Typography variant="subtitle2" color="text.primary">
                  5 yeni danışan eklendi
                  <IconButton
                    disableRipple
                    color="secondary"
                    title="Danışan"
                    sx={{ color: 'green', bgcolor: 'success.light', width:'55px',fontSize:'12px',marginLeft: '3px',height:28,  borderRadius:1,}}
                  >
                  <TrendingUpIcon style={{marginRight:'3px',color:'green', fontSize:'15px'}}/>60%
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
                  Açık Biletler
                </Typography>
                <Typography variant="subtitle2" color="text.secondary"> Açık biletlerinizi buradan yanıtlayabilirsiniz</Typography>
              </Stack>
            </Box>
            <Tickets />
          </DashboardCard>
        </Grid> 
    </Grid>
    </>
  );
};

export default HomePage;
