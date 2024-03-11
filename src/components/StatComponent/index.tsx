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
        amount="47"
        label="Total Meetings"
        change="-8%"
        bgColor={theme.palette.info.main} 
      />
      <StatBox
        icon={<Icons.People />}
        amount="6"
        label="New Clients"
        change="+25%"
        bgColor={theme.palette.customPurple || 'defaultFallbackColor'} 
      />
      <StatBox
        icon={<Icons.AttachMoney />}
        amount="$5k"
        label="Total Profit"
        change="+15%"
        bgColor={theme.palette.warning.main} 
      />
      <StatBox
        icon={<Icons.ArrowUpward />}
        amount="$3k"
        label="Total Revenue"
        change="+20%"
        bgColor={theme.palette.primary.main} 
      />
    </Box>
  );
};

export default StatsRow;
