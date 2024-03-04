import * as React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import { styled, useTheme } from '@mui/material/styles';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { Box, List, Toolbar, Drawer,IconButton } from '@mui/material';
import { GridMenuIcon } from '@mui/x-data-grid';

import ROUTES from '../../routes/MainRoutes';
import AppRoutes from '../../routes/AppRoutes';
import RightTopTooltip from '../RightTopTooltip';
import SearchBar from './SearchBar';
import StyledListItem from './StyledListItem';
import UpgradeSection from './UpgradeSection';
import HeaderContainer from './HeaderContainer';
import DrawerHeader from './DrawerHeader';


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

const SidebarHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
  scrolled: boolean;
}



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
const location = useLocation();
const [selectedRoute, setSelectedRoute] = useState(location.pathname); // Initialize selectedRoute state variable


  const theme = useTheme();
  const [open, setOpen] = React.useState(true); // Drawer is open by default
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('md')); // Adjust breakpoint as needed
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate(); 

 
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
    setSelectedRoute(route); 
  };  
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <AppBar position="fixed" open={open} scrolled={scrolled}>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            {!open && ( // Show open drawer button only if it's closed in mobile view
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{ mr: 2, backgroundColor: 'purple', borderRadius: '5px', padding: '0.3rem 0.7rem', display: 'flex', alignItems: 'center' }}
              >
                <GridMenuIcon />
              </IconButton>
            )}
            <>
              {isLargeScreen && (
               <HeaderContainer />
              )}
            </>
            <SearchBar isMobile={isMobile} showSearchBar={!isMobile} searchPlaceholder="Search..." />
            <RightTopTooltip />
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
          <DrawerHeader onDrawerClose={handleDrawerClose} />


          <img src="logo-main.png" alt="Logo" style={{ width: '85%', padding: '8px', margin: '0 auto 40px', borderRadius: '15px' }} />
          <List>
  {ROUTES.map((route: any) => (
  <StyledListItem
  selected={selectedRoute === route.path}
  onClick={() => handleNavigation(route.path)}
  primary={route.name}
  icon={<route.icon />}
/>
  ))}
</List>

        <UpgradeSection/>
        </Drawer>
        <Main open={open}>
        <SidebarHeader/>

          <AppRoutes />
        </Main>
      </Box>
    </>

  );
}




