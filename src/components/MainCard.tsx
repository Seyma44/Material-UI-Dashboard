import React, { ReactNode } from 'react';
import { Box, Button } from '@mui/material';

interface MainCardProps {
  header: string;
  buttonLabel: string;
  buttonOnClick: () => void;
  children?: ReactNode; 
}

const MainCard: React.FC<MainCardProps> = ({ header, buttonLabel, buttonOnClick, children }) => {
  
  return (
    <Box
      sx={{
        boxShadow: '0px 3px 3px -2px rgba(217, 217, 217, 0.20), 0px 3px 4px 0px rgba(248, 248, 248, 0.14), 0px 1px 8px 0px rgba(96, 96, 96, 0.12)',
      }}
      bgcolor="white"
      p={3}
      borderRadius={8}
      boxShadow={3}
      marginBottom={10}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
        <h2>{header}</h2>
        <Button variant="contained" color="primary" onClick={buttonOnClick}>{buttonLabel}</Button>
      </div>
      {children}
    </Box>
  );
};

export default MainCard;
