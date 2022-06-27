import { useEffect, useRef } from "react";
import * as echarts from "echarts";
import './index.css';

function RadarChart() {
  const chartRef = useRef(null);

  useEffect(() => {
    let chartInstance = echarts.init(chartRef.current);

    const option = {
        // title: {
        //   text: 'Basic Radar Chart'
        // },
        legend: {
          data: ['Allocated Budget', 'Actual Spending']
        },
        radar: {
          // shape: 'circle',
          indicator: [
            { name: 'Papers', max: 6500 },
            { name: 'Administration', max: 16000 },
            { name: 'Information Technology', max: 30000 },
            { name: 'Customer Support', max: 38000 },
            { name: 'Development', max: 52000 },
            { name: 'Marketing', max: 25000 }
          ]
        },
        series: [
          {
            name: 'Budget vs spending',
            type: 'radar',
            data: [
              {
                value: [4200, 3000, 20000, 35000, 50000, 18000],
                name: 'Allocated Budget'
              },
              {
                value: [5000, 14000, 28000, 26000, 42000, 21000],
                name: 'Actual Spending'
              }
            ]
          }
        ]
      };
    chartInstance.setOption(option);
  }, []);

  return (
    <div style={{ textAlign: "center" }} className='radar-chart'>
      <div ref={chartRef} style={{ height: "400px" }}></div>
    </div>
  );
}

export default RadarChart;
