import React from 'react';
import { SvgIconProps, useTheme, useMediaQuery, Box, Typography } from '@mui/material';

interface StatBoxProps {
  icon: React.ReactElement<SvgIconProps>;
  amount: string;
  label: string;
  change: string;
  bgColor: string;
}

const StatBox: React.FC<StatBoxProps> = ({ icon, amount, label, change, bgColor }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        padding: matches ? 1 : 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        bgcolor: bgColor,
        color: 'white',
        borderRadius: 2,
        flexGrow: 1,
        maxWidth: '100%',
      }}
    >
      {React.cloneElement(icon, { style: { fontSize: matches ? '1.5rem' : '2rem', color: 'inherit' } })}
      <Typography variant={matches ? 'subtitle1' : 'h6'} component="div">
        {amount}
      </Typography>
      <Typography variant="body2">{label}</Typography>
      <Typography variant="body2" sx={{ background:'white', padding:'2px 5px', borderRadius:1, mt:1, color: change.startsWith('+') ? 'success.main' : 'error.main' }}>
        {change}
      </Typography>
    </Box>
  );
};

export default StatBox;
