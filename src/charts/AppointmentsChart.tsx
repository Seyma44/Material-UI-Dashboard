import { useEffect, useState } from 'react';
import { ApexOptions } from 'apexcharts';
import ReactApexChart from 'react-apexcharts';
import  theme  from '../theme';

const AppointmentsChart = () => {
  
  const [options, setOptions] = useState<ApexOptions>({
    chart: {
      type: 'polarArea', 
      height: 300,
    },
    labels: ['Upcoming Appointments', 'Completed Appointments', 'Canceled Appointments'],
    fill: {
      opacity: 1,
    },
    stroke: {
      width: 1,
      colors: undefined,
    },
    yaxis: {
      show: false,
    },
    legend: {
      position: 'bottom',
    },
    plotOptions: {
      polarArea: {
        rings: {
          strokeWidth: 0,
        },
        spokes: {
          strokeWidth: 0,
        },
      },
    },
    colors: [theme.palette.warning.main, theme.palette.info.main, theme.palette.error.main],
  });
  

  useEffect(() => {
    setOptions((prevOptions) => ({
      ...prevOptions,
     
    }));
  }, []);

  const [series, setSeries] = useState([52, 47, 42]);

  useEffect(() => {
    // Update the series data when needed
    setSeries([52, 47, 42]);
  }, []);

  return (
    <div id="chart">
      <ReactApexChart style={{ marginBottom: '29px' }} options={options} series={series} type="polarArea" height={300} />
    </div>
  );
};

export default AppointmentsChart;
