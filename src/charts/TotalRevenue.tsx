import * as React from 'react';
import Box from '@mui/material/Box';
import { BarChart } from '@mui/x-charts/BarChart';

export default function BarAnimation() {


  return (
    <Box sx={{ width: '100%' }}>
      <BarChart
        height={300}
        series={series
          .slice(0, 3)
          .map((s) => ({ ...s, data: s.data.slice(0, 7) , color: getColorForSeries(s.label),}))}

      />
    </Box>
  );
}

const highlightScope = {
  highlighted: 'series',
  faded: 'global',
} as const;

const series = [
  {
    label: 'series 1',
    data: [
      2423, 2210, 764, 1879, 1478, 1373, 1891, 2171, 620, 1269, 724, 1707, 1188,
      1879, 626, 1635, 2177, 516, 1793, 1598,
    ],
  },
  {
    label: 'series 2',
    data: [
      2362, 2254, 1962, 1336, 586, 1069, 2194, 1629, 2173, 2031, 1757, 862, 2446,
      910, 2430, 2300, 805, 1835, 1684, 2197,
    ],
  },
  {
    label: 'series 3',
    data: [
      1145, 1214, 975, 2266, 1768, 2341, 747, 1282, 1780, 1766, 2115, 1720, 1057,
      2000, 1716, 2253, 619, 1626, 1209, 1786,
    ],
  }, 

].map((s) => ({ ...s, highlightScope }));

const getColorForSeries = (label: string) => {
    switch (label) {
      case 'series 1':
        return '#b800d8'; // Orange color
      case 'series 2':
        return '#2e97ff'; // Indigo color
        case 'series 3':
          return 'orange'; // Indigo color
      default:
        return 'primary'; 
    }
  };