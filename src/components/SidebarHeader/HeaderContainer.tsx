import React from 'react';
import { Typography } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import * as Icons from '../../icons';

const Container = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginRight: 20,
  borderRadius: 5,
  color: theme.palette.common.black, // Use primary color from the theme
  background: theme.palette.secondary.main, // Use secondary color from the theme
  padding: '8px 16px', // Adjust padding as needed
}));

const HeaderContainer: React.FC = () => {
  const theme = useTheme(); // Access the theme object

  return (
    <Container>
      <Icons.HourglassTop sx={{ fontSize: 14, color: theme.palette.primary.main, marginRight:0.5}} /> 
      <Typography variant="body2" noWrap component="div">
        25 days left
      </Typography>
    </Container>
  );
};

export default HeaderContainer;
