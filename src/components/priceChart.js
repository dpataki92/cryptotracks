import React, { useEffect, useRef, useState } from 'react';
import Chartjs from 'chart.js';
import { chartOptions } from '../configs/chartConfig';

const PriceChart = ({data}) => {

    const {day, week, year, detail} = data;
    const [timeFormat, setTimeFormat] = useState("24h");

    const determineTimeFormat = () => {
      switch (timeFormat) {
        case "24h":
          return day;
        case "7d":
          return week;
        case "1y":
          return year;
        default:
          return day;
      }
    };

    const chartRef = useRef();

    useEffect(() => {
      if (chartRef && chartRef.current && detail) {

        const chart = new Chartjs(chartRef.current, {
          type: 'line',
          data: {
              datasets: [{
                  label: `${detail.name} price`,
                  data: determineTimeFormat(),
                  backgroundColor: 'rgba(75, 192, 192, 0.5)',
                  pointRadius: 0,
                  borderWidth: 1
              }],
          },
          options: {
            ...chartOptions
          }
      })
      }
    });

    const renderPrice = () => {
      if (detail) {
        return (
          <React.Fragment>
            <p className="my-0"><img src={detail.image} style={{width: "30px", height: "30px"}} alt=""/></p>
            <p className="my-0"><strong>${detail.current_price.toFixed(2)}</strong></p>
            <p
              className={
                detail.price_change_24h < 0
                  ? "text-danger my-0"
                  : "text-success my-0"
              }
            >
              {detail.price_change_percentage_24h.toFixed(2)}%
            </p>
          </React.Fragment>
        );
      }
    };
    return (
      <div className="bg-white border rounded p-3 chartDiv">
        <div>{renderPrice()}</div>
        <div>
          <canvas ref={chartRef} id="myChart" width={250} height={250}></canvas>
        </div>
        <div className="chart-button mt-1">
          <button
            onClick={() => setTimeFormat("24h")}
            className="btn btn-outline-secondary btn-sm"
          >
            24h
          </button>
          <button
            onClick={() => setTimeFormat("7d")}
            className="btn btn-outline-secondary btn-sm mx-1"
          >
            7d
          </button>
          <button
            onClick={() => setTimeFormat("1y")}
            className="btn btn-outline-secondary btn-sm"
          >
            1y
          </button>
        </div>
      </div>
    );
}
 
export default PriceChart;