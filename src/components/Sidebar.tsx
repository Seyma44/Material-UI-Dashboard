import * as React from 'react';
import ROUTES from '../routes/routes';
import AppRoutes from '../routes/AppRoutes';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';
import Drawer from '@mui/material/Drawer';
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
import { useNavigate } from 'react-router-dom';

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
  marginLeft: `-${drawerWidth}px`, // Default margin
  overflowY: 'auto', // Enable vertical scrolling

  // Set a fixed height for the Main component
  height: 'calc(100vh - 0)', // Adjust as needed, subtracting app bar height
  ...(open && {
    marginLeft: 0, // Adjust margin when drawer is open
  }),
  [theme.breakpoints.down('xs')]: {
    marginLeft: 0, // Adjust margin for screens smaller than 480px
    padding: theme.spacing(2), // Adjust padding for screens smaller than 480px
  },

  [theme.breakpoints.down('sm')]: {
    marginLeft: 0, // Adjust margin for small screens and mobile devices
    padding: theme.spacing(5), // Adjust padding for small screens and mobile devices
  },
  [theme.breakpoints.down('md')]: {
    marginLeft: 0, // Adjust margin for small screens and mobile devices
    padding: theme.spacing(2), // Adjust padding for small screens and mobile devices
  },
}));


interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
  scrolled: boolean;
}

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function Sidebar() {

  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })<AppBarProps>(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      width: `calc(100% - ${drawerWidth}px - 10px)`,
      marginLeft: `${drawerWidth}px`,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
    borderRadius:'15px',
    backgroundColor: scrolled ? '#fff' : 'transparent',
    boxShadow: scrolled ? '0px 4px 6px rgba(0, 0, 0, 0.1)' : 'none',
  }));
  
  const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    const isScrolled = window.scrollY > 0;
    setScrolled(isScrolled);
  };

  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);

  const theme = useTheme();
  const [open, setOpen] = React.useState(true); // Drawer is open by default
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('md')); // Adjust breakpoint as needed
  const navigate = useNavigate(); 
  // Define the width of the search input based on screen size
  const searchInputWidth = isLargeScreen ? '300px' : '200px';
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    setOpen(isLargeScreen); // Set drawer state based on screen size
  }, [isLargeScreen]); // Re-run effect when screen size changes

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleNavigation = (route: any) => {
    navigate(route); // Navigate to the specified route
    if (!isLargeScreen) {
      // Close the drawer if it's not a large screen (mobile view)
      handleDrawerClose();
    }
  };
  
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <AppBar position="fixed" open={open} scrolled={scrolled}>
          <Toolbar>
            {!open && ( // Show open drawer button only if it's closed in mobile view
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{ mr: 2,  backgroundColor: 'purple', borderRadius: '5px', padding: '0.3rem 0.7rem',display: 'flex', alignItems: 'center' }}
              >
                <GridMenuIcon />
              </IconButton>
            )}
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
                    width: '100%', // Always occupy full width in mobile view
                    transition: theme.transitions.create('width', {
                      easing: theme.transitions.easing.sharp,
                      duration: theme.transitions.duration.enteringScreen,
                    }),
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
          variant={isLargeScreen ? "persistent" : "temporary"} // Change variant based on screen size
          anchor="left"
          open={open}
          onClose={handleDrawerClose} // Close drawer on mobile view when clicked outside
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </DrawerHeader>

          <img src="logo-main.png" alt="Logo" style={{ width: '85%', padding: '8px', margin: '0px auto 10px', borderRadius: '15px' }} />
          <List>
            {ROUTES.map((route:any) => (
              <ListItemButton onClick={() => handleNavigation(route.path)} key={route.name}>
                <ListItemIcon>{route.icon}</ListItemIcon>
                <ListItemText primary={route.name} />
              </ListItemButton>
            ))}
          </List>
          <div style={{ position: 'absolute', bottom: -185, left: '50%', transform: 'translateX(-50%)', zIndex: 1 }}>
            <Button variant="contained" color="primary">
              Upgrade
            </Button>
          </div>
          <img src="upgrade.svg" alt="upgrade" style={{ width: '50%', height: 'auto', margin: '180px auto 20px', padding: '0 30px 60px', background: theme.palette.secondary.main, borderRadius: 8 }} />
        </Drawer>
        <Main open={open}>
          <DrawerHeader />
          <AppRoutes />
        </Main>
      </Box>
    </>

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
