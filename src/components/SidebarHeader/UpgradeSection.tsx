import React from 'react';
import Button from '@mui/material/Button';
import UpradeImage from '../../images/upgrade.svg'
import { useTheme } from '@mui/material/styles';

const UpgradeSection: React.FC = () => {
  const theme = useTheme();

  const containerStyle: React.CSSProperties = {
    position: 'relative',
    width: '100%', 
    margin: '150px auto 10px',
  };

  const buttonStyle: React.CSSProperties = {
    position: 'absolute',
    bottom: 20,
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 1,
  };

  const upgradeImageStyle: React.CSSProperties = {
    width: '50%', 
    height: 'auto',
    borderRadius: 8,
    padding: '0 30px 60px',
    background: theme.palette.secondary.main,
    margin: '0 0 0 30px',
  };

  return (
    <div style={containerStyle}>
      <img src={UpradeImage} alt="upgrade" style={upgradeImageStyle} />
      <Button variant="contained" color="primary" style={buttonStyle}>
        Upgrade
      </Button>
    </div>
  );
}

export default UpgradeSection;
