import { Box, useTheme } from '@mui/material';
import * as Icons from '../../icons';
import StatBox from './StatBox';

const StatsRow = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: 2,
        p: 1,
      }}
    >
      <StatBox
        icon={<Icons.EventAvailable />}
        amount="$1k"
        label="Total Sales"
        change="+8%"
        bgColor={theme.palette.info.main} 
      />
      <StatBox
        icon={<Icons.People />}
        amount="$2k"
        label="New Customers"
        change="-5%"
        bgColor={theme.palette.error.main} 
      />
      <StatBox
        icon={<Icons.AttachMoney />}
        amount="$5k"
        label="Total Revenue"
        change="+15%"
        bgColor={theme.palette.warning.main} 
      />
      <StatBox
        icon={<Icons.ArrowUpward />}
        amount="$3k"
        label="Total Profit"
        change="+20%"
        bgColor={theme.palette.primary.main} 
      />
    </Box>
  );
};

export default StatsRow;
