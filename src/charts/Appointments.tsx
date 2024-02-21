
import { PieChart,pieArcLabelClasses } from '@mui/x-charts/PieChart';
const pieParams = { height: 400, margin: { right: 5 } };
export default function BasicPie() {
  return (
    <PieChart
    series={[
      { data: [{ value: 10, color: 'orange',label: 'A' }, { value: 15,label: 'B' }, { value: 20,label: 'C' }],  
      arcLabel: (item) => `${item.label} (${item.value})`,
      arcLabelMinAngle: 45, 
      innerRadius: 30,
      outerRadius: 100,
      paddingAngle: 5,
      cornerRadius: 5,
      startAngle: -90,
      endAngle: 180,
      cx: 150,
      cy: 150,},  
    ]}
    sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fill: 'white',
          fontWeight: 'bold',
        },
      }}

    {...pieParams}
  />
  
    
  );
}