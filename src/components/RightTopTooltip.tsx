import * as React from 'react';
import { Box, Avatar, Menu, MenuItem, ListItemIcon, Divider, IconButton, Typography, Tooltip, Badge } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom'; 
import * as Icons from '../icons';

export default function RightTopTooltip() {
  const theme = useTheme();
  const navigate = useNavigate();

  const [accountMenuAnchorEl, setAccountMenuAnchorEl] = React.useState<HTMLElement | null>(null);
  const [notificationMenuAnchorEl, setNotificationMenuAnchorEl] = React.useState<HTMLElement | null>(null);

  const open = Boolean(accountMenuAnchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAccountMenuAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAccountMenuAnchorEl(null);
  };

  const handleClickNofication = (event: React.MouseEvent<HTMLElement>) => {
    setNotificationMenuAnchorEl(event.currentTarget);
  };

  const handleCloseNofication = () => {
    setNotificationMenuAnchorEl(null);
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
        <Tooltip title="Wallet">
          <IconButton size="small" sx={{ ml: 2, display: 'flex', alignItems: 'right',  borderRadius:'10%' }}>
            <Icons.Wallet sx={{ color: 'purple', mr: 0 }} />
            <Typography sx={{ color: 'purple', fontSize: '12px' }}>750$</Typography>
          </IconButton>
        </Tooltip>
        <Tooltip title="Notifications">
          <IconButton onClick={handleClickNofication} size="small" sx={{ ml: 2,borderRadius:'10%'  }}>
            <Badge badgeContent={3} color="secondary">
              <Icons.Notifications  sx={{ color:'primary.main'}}/>
            </Badge>
          </IconButton>
        </Tooltip>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2, borderRadius:'10%'  }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar src="team-2.png" sx={{ width: 32, height: 32, }} variant="rounded">M</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={accountMenuAnchorEl}
        id="account-menu"
        open={Boolean(accountMenuAnchorEl)}
        onClose={handleClose}
        slotProps={{
          paper: {
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
            <Icons.PersonAddIcon fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Icons.SettingsIcon fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <Icons.LogoutIcon fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
      <Menu
        anchorEl={notificationMenuAnchorEl}
        id="notification-menu"
        open={Boolean(notificationMenuAnchorEl)}
        onClose={handleCloseNofication}
        onClick={handleCloseNofication}
        slotProps={{
          paper: {
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
        },
        
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleCloseNofication}>
          <ListItemIcon style={{ marginRight: '12px' }}> 
            <Icons.CakeTwoTone 
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
          <ListItemIcon style={{ marginRight: '12px' }}> 
            <Icons.CelebrationTwoTone 
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
          <ListItemIcon style={{ marginRight: '12px' }}> 
          <Icons.GroupAddTwoTone 
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