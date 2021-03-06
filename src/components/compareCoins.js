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
                            'rgba(255, 99, 132, 0.7)',
                            'rgba(54, 162, 235, 0.7)',
                            'rgba(255, 206, 86, 0.7)',
                            'rgba(75, 192, 192, 0.7)',
                            'rgba(153, 102, 255, 0.7)',
                            'rgba(255, 99, 132, 0.7)',
                            'rgba(54, 162, 235, 0.7)',
                            'rgba(255, 206, 86, 0.7)',
                            'rgba(75, 192, 192, 0.7)',
                            'rgba(153, 102, 255, 0.7)'
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

      const handleSortClick = (e) => {
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

          <div className="compare-container">

            <div className="chart-button mt-1 sort-buttons">
              <button
                onClick={handleSortClick}
                className="btn btn-outline-secondary btn-sm mx-1"
                id="current_price"
              >
                Current price
              </button>
              <button
                onClick={handleSortClick}
                className="btn btn-outline-secondary btn-sm mx-1"
                id="market_cap"
              >
                Market capitalization
              </button>
              <button
                onClick={handleSortClick}
                className="btn btn-outline-secondary btn-sm mx-1"
                id="total_volume"
              >
                24H Volume
              </button>
              <button
                onClick={handleSortClick}
                className="btn btn-outline-secondary btn-sm mx-1"
                id="high_24h"
              >
                24H High
              </button>
            </div>

            <div className="chart-button mt-1">
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
            </div>

            <div className="chart-button mt-1">
              <Link to="/cryptotracks" className="btn btn-outline-secondary btn-sm">
                ← Back
              </Link>
            </div>
          </div>
        </div>
      );
}
 
export default CompareCoins;