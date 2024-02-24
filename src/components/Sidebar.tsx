import * as React from 'react';
import ROUTES from '../routes/routes';
import AppRoutes from '../routes/AppRoutes';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { BrowserRouter as Router} from 'react-router-dom';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Search } from '@mui/icons-material';
import InputBase from '@mui/material/InputBase';
import { GridMenuIcon } from '@mui/x-data-grid';
import Header from './Header';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Button } from '@mui/material';
const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  backgroundColor: 'transparent', // Set the background to transparent
  boxShadow: 'none', // Remove the boxShadow
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function Sidebar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true); // Drawer is open by default
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('md')); // Adjust breakpoint as needed

  // Define the width of the search input based on screen size
  const searchInputWidth = isLargeScreen ? '300px' : '200px';
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Router>
      <Box sx={{ display: 'flex' }}>
        <AppBar position="fixed" open={open}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: 'none' }), backgroundColor:'purple', borderRadius:'5px',padding:'0.3rem 0.7rem' }}
            >
              <GridMenuIcon/>
            </IconButton>
            <HeaderContainer>
            <HourglassTopIcon sx={{ fontSize: 12, color: 'purple' }} />
              <Typography variant="body2" noWrap component="div">
                25 days remain
              </Typography>
            </HeaderContainer>
            <AppBarContent>
            <SearchContainer>
            <SearchIconWrapper>
              <Search sx={{ color: 'purple' }} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search..."
              sx={{
                width: searchInputWidth,
                transition: theme.transitions.create('width', {
                  easing: theme.transitions.easing.sharp,
                  duration: theme.transitions.duration.enteringScreen,
                }),
                [theme.breakpoints.down('sm')]: {
                  width: '100%', // For small screens, occupy full width
                },
              }}
              />
    </SearchContainer>
              <Header />
            </AppBarContent>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
              borderRight: 'none',
              boxShadow: '0px 3px 3px -2px rgb(0 0 0 / 15%), 0px 3px 4px 0px rgb(0 0 0 / 0%), 0px 1px 8px 0px rgba(0, 0, 0, 0.12)',
              borderTopRightRadius: '26px', 
              borderBottomRightRadius: '26px',
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </DrawerHeader>
         
          <img src="logo-main.png" alt="Logo" style={{ width: '85%',  padding: '8px',margin: '0px auto 10px', borderRadius:'15px' }} />
          <List>
       
<ListItemButton component="a" href={ROUTES.HOME} key="Home">
  <ListItemIcon><InboxIcon /></ListItemIcon>
  <ListItemText primary="Home" />
</ListItemButton>
<ListItemButton component="a" href={ROUTES.ABOUT} key="About">
  <ListItemIcon><MailIcon /></ListItemIcon>
  <ListItemText primary="About" />
</ListItemButton>
<ListItemButton component="a" href={ROUTES.CONSUMERS_LIST} key="Consultants">
  <ListItemIcon><MailIcon /></ListItemIcon>
  <ListItemText primary="Consultants" />
</ListItemButton>
<ListItemButton component="a" href={ROUTES.DIET_LIST} key="DietList">
  <ListItemIcon><MailIcon /></ListItemIcon>
  <ListItemText primary="DietList" />
</ListItemButton>
<ListItemButton component="a" href={ROUTES.APPOINTMENTS} key="Appointments">
  <ListItemIcon><MailIcon /></ListItemIcon>
  <ListItemText primary="Appointments" />
</ListItemButton>

          </List>
          <div style={{ position: 'absolute', bottom: -185, left: '50%', transform: 'translateX(-50%)', zIndex: 1 }}>
    <Button variant="contained" color="primary">
      Upgrade
    </Button>
  </div>
  <img src="upgrade.svg" alt="upgrade" style={{ width: '50%', height: 'auto',  margin: '180px auto 20px', padding:'0 30px 60px',  background: theme.palette.secondary.main, borderRadius:8}} />
        </Drawer>
        <Main open={open}>
          <DrawerHeader />
          <AppRoutes /> 
        </Main>
      </Box>
    </Router>
  
  );
}


const SearchContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: 'white', // Set the search box color to purple
  borderRadius: '5px',
  padding: '1px',
});

const SearchIconWrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  padding: '5px 10px',
  '& svg': {
    color: 'purple', // Set the color of the search icon to purple
  },
});

const StyledInputBase = styled(InputBase)({
  color: '#726868', 
  '& .MuiInputBase-input': {
    padding: '7px 20px',
    borderRadius: '5px',
    backgroundColor:  'rgba(128,0,128,0.2)', // Set the input background color to white
    '&::placeholder': {
      opacity: 0.6,
    },
  },
});
const AppBarContent = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
});

const HeaderContainer = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginRight:20,
  borderRadius:5,
  color:'black',
  background: 'rgba(128,0,128,0.2)', // Purple background with 50% opacity
  padding: '8px 16px', // Adjust padding as needed
});
