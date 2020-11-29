import React, { useEffect, useRef } from 'react';
import Chartjs from 'chart.js';
import { chartOptions } from '../configs/chartConfig';

const PriceChart = (props) => {

    const chartRef = useRef();

    useEffect(() => {
      if (chartRef && chartRef.current) {

        const chart = new Chartjs(chartRef.current, {
          type: 'line',
          data: {
              labels: "# of votes",
              datasets: [{
                  label: '# of Votes',
                  data: [{x: 1, y: 15}, {x: 2, y: 12}, {x: 3, y: 18}],
                  backgroundColor: 'rgba(75, 192, 192, 0.5)',
                  pointRadius: 0,
                  borderWidth: 1
              }],
          },
          options: chartOptions
      })
      }
    })

    return (
        <div className="bg-white border rounded p-3 chartDiv">
          <div></div>
          <div>
              <canvas ref={chartRef} id ="myChart" height={250} width={250}></canvas>
          </div>
        </div>
      );
}
 
export default PriceChart;