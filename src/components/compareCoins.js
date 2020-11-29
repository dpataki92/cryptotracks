import React, { useEffect, useRef, useState } from 'react';
import Chartjs from 'chart.js';
import { chartOptions } from '../configs/chartConfig';
import coinGecko from '../apis/coinGecko.js';

const CompareCoins = () => {
    const chartRef = useRef();
    const [isLoading, setIsLoading] = useState(false);
    const [coinsToCompare, setCoinsToCompare] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            const response = await coinGecko.get('/coins/markets', {
                params: {
                    vs_currency: 'usd',
                    ids: ""
                }
            });
            setCoinsToCompare(response.data);
            setIsLoading(false);
        }

        if (!coinsToCompare) {
            fetchData();
        }
        
        if (coinsToCompare) {
            console.log(coinsToCompare.slice(0,5))
            
            const chart = new Chartjs(chartRef.current, {
                type: 'line',
                data: {
                    datasets: [{
                        label: `Current price`,
                        data: coinsToCompare.slice(0,5),
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        pointRadius: 0,
                        borderWidth: 1
                    }],
                },
                options: {
                  ...chartOptions
                }
            })
        }
            

        

      }, [coinsToCompare]);

      return (
        <div className="bg-white border rounded p-3 chartDiv">
          <div>
            <canvas ref={chartRef} id="myChart" width={250} height={250}></canvas>
          </div>
          <div className="chart-button mt-1">
            <button
              onClick={() => ("24h")}
              className="btn btn-outline-secondary btn-sm"
            >
              Current price
            </button>
            <button
              onClick={() => ("7d")}
              className="btn btn-outline-secondary btn-sm mx-1"
            >
              24H Volume
            </button>
            <button
              onClick={() => ("1y")}
              className="btn btn-outline-secondary btn-sm"
            >
              Market capitalization
            </button>
          </div>
        </div>
      );
}
 
export default CompareCoins;