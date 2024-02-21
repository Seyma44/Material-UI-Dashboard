import React, { ReactNode } from 'react';
import { Box } from '@mui/material';

interface MainCardProps {
  header: string;
  children?: ReactNode; 
}

const MainCard: React.FC<MainCardProps> = ({ header, children }) => {
  return (
    <Box
    sx={{
        boxShadow: '0px 3px 3px -2px rgba(217, 217, 217, 0.20), 0px 3px 4px 0px rgba(248, 248, 248, 0.14), 0px 1px 8px 0px rgba(96, 96, 96, 0.12)',
      }}
      bgcolor="white"
      p={3}
      borderRadius={8}
      boxShadow={3}
      marginBottom={2}
    >
      <h2>{header}</h2>
      {children}
    </Box>
  );
};

export default MainCard;
