import { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const CustomersBarChart = () => {
  const [options, setOptions] = useState({
    chart: {
      type: 'polarArea',
      height: 300,
    },
    labels: ['Bekleyen Randevu', 'Onaylanmış Randevu','İptal Edilen Randevu'],
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
    
    colors: ['#ff9800','#2e96ff', '#b800d8'],
  });

  useEffect(() => {
    // You can update the options dynamically here if needed
    setOptions((prevOptions) => ({
      ...prevOptions,
     
    }));
  }, [/* Add dependencies for dynamic updates here */]);

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

export default CustomersBarChart;
