import React, { useEffect, useRef, useState } from 'react';
import Chartjs from 'chart.js';
import coinGecko from '../apis/coinGecko.js';
import {decideSort} from '../helpers/updateCompareCanvas.js';
import { Link } from 'react-router-dom';
import { compareChartOptions } from '../configs/chartConfig';


const CompareCoins = () => {
    const chartRef = useRef();
    const [isLoading, setIsLoading] = useState(false);
    const [coinsToCompare, setCoinsToCompare] = useState(false);
    const [sortCondition, setSortCondition] = useState("current_price");
    const [sortSize, setSortSize] = useState(5);
    const [currentChart, setCurrentChart] = useState("current_price");
    

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
          let sorted = decideSort(coinsToCompare, sortCondition, sortSize);
          
            const chart = new Chartjs(chartRef.current, {
                type: 'bar',
                data: {
                  labels: sorted.map(c => c.name),
                    datasets: [{
                        label: sortCondition[0].toUpperCase() + sortCondition.replace(/_/g, " ").slice(1),
                        data: sorted.map(c => c[sortCondition]), 
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.5)',
                            'rgba(54, 162, 235, 0.5)',
                            'rgba(255, 206, 86, 0.5)',
                            'rgba(75, 192, 192, 0.5)',
                            'rgba(153, 102, 255, 0.5)',
                            'rgba(255, 99, 132, 0.5)',
                            'rgba(54, 162, 235, 0.5)',
                            'rgba(255, 206, 86, 0.5)',
                            'rgba(75, 192, 192, 0.5)',
                            'rgba(153, 102, 255, 0.5)'
                        ]
                    }],
                },
                options: {
                  ...compareChartOptions
                }
            })
            setCurrentChart(chart);  
        }
            

        

      }, [coinsToCompare]);

      const handleClick = (e) => {
        currentChart.destroy();
        setCoinsToCompare(false);
        setSortCondition(e.target.id);
      }

      const handleSizeClick = (e) => {
        currentChart.destroy();
        setCoinsToCompare(false);
        setSortSize(parseInt(e.target.id));
      }

      return (
        <div className="bg-white border rounded p-3 chartDiv">

          <div id="canvas-div">
            <canvas ref={chartRef} id="myChart" width={250} height={250}></canvas>
          </div>
          <div className="chart-button mt-1">
            <button
              onClick={handleClick}
              className="btn btn-outline-secondary btn-sm"
              id="current_price"
            >
              Current price
            </button>
            <button
              onClick={handleClick}
              className="btn btn-outline-secondary btn-sm"
              id="market_cap"
            >
              Market capitalization
            </button>
            <button
              onClick={handleClick}
              className="btn btn-outline-secondary btn-sm mx-1"
              id="total_volume"
            >
              24H Volume
            </button>
            <button
              onClick={handleClick}
              className="btn btn-outline-secondary btn-sm mx-1"
              id="high_24h"
            >
              24H High
            </button>
            <button
              onClick={handleSizeClick}
              className="btn btn-outline-secondary btn-sm mx-1"
              id="5"
            >
              Top 5
            </button>
            <button
              onClick={handleSizeClick}
              className="btn btn-outline-secondary btn-sm mx-1"
              id="10"
            >
              Top 10
            </button>
            <Link to="/" className="btn btn-outline-secondary btn-sm" style={{float: 'right'}}>
            ← Back
          </Link>
          </div>
        </div>
      );
}
 
export default CompareCoins;