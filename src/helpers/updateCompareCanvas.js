import {mergeSortPrices, insertionSortMarketCap} from './sorting.js';
import Chartjs from 'chart.js';
import { compareChartOptions } from '../configs/chartConfig';

export const decideSort = (arr, condition = null) => {
    if (condition === "current_price" || !condition) {
        return mergeSortPrices(arr);
    }
    else if (condition === "market_cap") {
        return insertionSortMarketCap(arr);
    }
}

export const updateCompareCanvas = (arr, condition) => {
    const canvas = document.getElementById("myChart");
    canvas.remove();

    const newCanvas = document.createElement("canvas");
    newCanvas.id = 'myChart';
    document.getElementById("canvas-div").appendChild(newCanvas);
    let context = newCanvas.getContext("2d");

    let updatedArr = decideSort(arr, condition).slice(0,5);

    const chart = new Chartjs(context, {
        type: 'bar',
        data: {
          labels: updatedArr.map(c => c.name),
            datasets: [{
                label: `Current price`,
                data: updatedArr.map(c => c[condition]), 
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)'
                ]
            }],
        },
        options: {
          ...compareChartOptions
        }
    })
}

