import React from 'react';
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  margin: '0 1rem',
  '&.Mui-selected, &.Mui-selected:hover': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    borderRadius: 5,
  },
}));

const StyledListItemIcon = styled(ListItemIcon)(({ theme }) => ({
  color: theme.palette.secondary.main,
  '&.Mui-selected': {
    color: theme.palette.common.white,
  },
}));

const StyledListItemText = styled(ListItemText)(({ theme }) => ({
  color: 'inherit',
}));

interface StyledListItemProps {
  selected: boolean;
  onClick: () => void;
  primary: string;
  icon: React.ReactElement;
}

const StyledListItem: React.FC<StyledListItemProps> = ({ selected, onClick, primary, icon }) => {
  return (
    <StyledListItemButton onClick={onClick} selected={selected}>
      <StyledListItemIcon>{icon}</StyledListItemIcon>
      <StyledListItemText primary={primary} />
    </StyledListItemButton>
  );
};

export default StyledListItem;
