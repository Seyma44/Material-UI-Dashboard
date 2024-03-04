import React from 'react';
import { IconButton, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import * as Icons from '../../icons';

const StyledDrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

interface DrawerHeaderProps {
  onDrawerClose: () => void;
}

const DrawerHeader: React.FC<DrawerHeaderProps> = ({ onDrawerClose }) => {
  const theme = useTheme(); 

  return (
    <StyledDrawerHeader>
      <IconButton onClick={onDrawerClose} sx={{ borderRadius: '10%'}}>
        {theme.direction === 'ltr' ? <Icons.ChevronLeft /> : <Icons.ChevronRight />}
      </IconButton>
    </StyledDrawerHeader>
  );
};

export default DrawerHeader;
