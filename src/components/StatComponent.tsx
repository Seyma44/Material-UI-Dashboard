import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { SvgIconProps } from '@mui/material/SvgIcon';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

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
      <Typography variant="body2" sx={{ color: change.startsWith('+') ? 'success.main' : 'error.main' }}>
        {change}
      </Typography>
    </Box>
  );
};

const StatsRow = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end', // Aligns children to the bottom
        flexDirection: { xs: 'column', sm: 'row' },
        gap: 2,
        p: 1,
      }}
    >
      <StatBox
        icon={<ShoppingCartIcon />}
        amount="$1k"
        label="Total Sales"
        change="+8%"
        bgColor="#2e96ff"
      />
      <StatBox
        icon={<PeopleIcon />}
        amount="$2k"
        label="New Customers"
        change="-5%"
        bgColor="#b800d8"
      />
      <StatBox
        icon={<AttachMoneyIcon />}
        amount="$5k"
        label="Total Revenue"
        change="+15%"
        bgColor="orange"
      />
      <StatBox
        icon={<ArrowUpwardIcon />}
        amount="$3k"
        label="Total Profit"
        change="+20%"
        bgColor="purple"
      />
    </Box>
  );
};

export default StatsRow;
