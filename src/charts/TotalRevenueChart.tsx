import Box from '@mui/material/Box';
import theme from '../theme';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

export default function TotalRevenueChart() {
  
  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat','Sun'];
  const series = [
    {
      name: 'Online',
      data: [24, 22, 7, 18, 14, 13, 18],
      color: theme.palette.customPurple,
    },
    {
      name: 'Hospital',
      data: [23, 22, 19, 13, 5, 10, 21],
      color: theme.palette.info.main,
    },
    {
      name: 'Office',
      data: [11, 12, 9, 22, 17, 23, 7],
      color: theme.palette.warning.main,
    },
  ];

  const options: ApexOptions = {
    chart: {
      type: 'bar',
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        borderRadius: 5, 
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: daysOfWeek,
    },
    colors: series.map((s) => s.color),
    legend: {
      position: 'top',
    },
  };

  return (
    <Box sx={{ width: '100%', height: '300px' }}>
      <ReactApexChart options={options} series={series.map((s) => ({ name: s.name, data: s.data }))} type="bar" height={300} />
    </Box>
  );
}
