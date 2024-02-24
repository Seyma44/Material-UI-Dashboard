import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import WalletIcon from '@mui/icons-material/AccountBalanceWallet';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';
import CakeTwoToneIcon from '@mui/icons-material/CakeTwoTone';
import CelebrationTwoToneIcon from '@mui/icons-material/CelebrationTwoTone';
import GroupAddTwoToneIcon from '@mui/icons-material/GroupAddTwoTone';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom'; 

export default function Header() {
  const theme = useTheme();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [anchorEl2, setAnchorEl2] = React.useState<null | HTMLElement>(null);
  const open2 = Boolean(anchorEl2);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClickNofication = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleCloseNofication = () => {
    setAnchorEl2(null);
  };
  const handleLogout = () => {
    handleClose();
    navigate('/login');

  };
  const goProfile = () => {
    handleClose();
    navigate('/profile');

  };
  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <WalletIcon sx={{ color: 'purple', mr:-4}} />
        <Typography sx={{ minWidth: 100, color:'purple', fontSize:'12px' }}>750$</Typography>
        <Tooltip title="Notifications">
          <IconButton onClick={handleClickNofication} size="small" sx={{ ml: 2 }}>
            <Badge badgeContent={3} color="secondary">
              <NotificationsIcon  sx={{ color:'primary.main'}}/>
            </Badge>
          </IconButton>
        </Tooltip>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar src="team-2.png" sx={{ width: 32, height: 32, }} variant="rounded">M</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&::before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={goProfile}>
          <Avatar sx={{ backgroundColor: theme.palette.primary.main }} variant="rounded"/> My Profile
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
      <Menu
  anchorEl={anchorEl2}
  id="notification-menu"
  open={open2}
  onClose={handleCloseNofication}
  onClick={handleCloseNofication}
  PaperProps={{
    elevation: 0,
    sx: {
      overflow: 'visible',
      filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
      mt: 1.5,
      width: '300px',
      '& .MuiAvatar-root': {
        width: 32,
        height: 32,
        ml: -0.5,
        mr: 1,
      },
      '&::before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        top: 0,
        right: 14,
        width: 10,
        height: 10,
        bgcolor: 'background.paper',
        transform: 'translateY(-50%) rotate(45deg)',
        zIndex: 0,
      },
    },
  }}
  transformOrigin={{ horizontal: 'right', vertical: 'top' }}
  anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
>
  <MenuItem onClick={handleCloseNofication}>
    <ListItemIcon style={{ marginRight: '12px' }}> {/* Add margin to the right */}
      <CakeTwoToneIcon 
      fontSize="small" 
      sx={{ 
        color: theme.palette.warning.main, 
        border: `1.5px solid ${theme.palette.warning.main}`,
        padding: '8px', 
        borderRadius: '8%',
        background:theme.palette.warning.light
      }} 
      />
    </ListItemIcon>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'wrap' }}>
        <Typography variant="subtitle1" color="textSecondary">Alisa's birthday today. Celebrate it now</Typography>
      </div>
      <div>
        <Typography variant="subtitle2">Just now</Typography>
      </div>
    </div>
  </MenuItem>
  <Divider />
  <MenuItem onClick={handleCloseNofication}>
    <ListItemIcon style={{ marginRight: '12px' }}> {/* Add margin to the right */}
      <CelebrationTwoToneIcon 
      fontSize="small" 
      sx={{ 
        color: theme.palette.success.main, 
        border: `1.5px solid ${theme.palette.success.main}`,
        padding: '8px', 
        borderRadius: '8%',
        background:theme.palette.success.light
      }}   
      />
    </ListItemIcon>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
      <div>
        <Typography variant="subtitle1" color="textSecondary">John complated his target</Typography>
      </div>
      <div>
        <Typography variant="subtitle2">1 hour ago</Typography>
      </div>
    </div>
  </MenuItem>
  <Divider />
  <MenuItem onClick={handleCloseNofication}>
    <ListItemIcon style={{ marginRight: '12px' }}> {/* Add margin to the right */}
    <GroupAddTwoToneIcon 
  fontSize="small" 
  sx={{ 
    color: theme.palette.info.main, 
    border: `1.5px solid ${theme.palette.info.main}`,
    padding: '8px', 
    borderRadius: '8%',
    background:theme.palette.info.light
  }} 
/>
    </ListItemIcon>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
      <div>
        <Typography variant="subtitle1" color="textSecondary">You have new consultant.</Typography>
      </div>
      <div>
        <Typography variant="subtitle2">2 hours ago</Typography>
      </div>
    </div>
  </MenuItem>
      </Menu>




    </React.Fragment>
  );
}