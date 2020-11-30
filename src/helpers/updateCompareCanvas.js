import {mergeSortPrices, insertionSortMarketCap, bubbleSort24HourHigh, selectionSort24HourVolume} from './sorting.js';

export const decideSort = (arr, condition = null, sortSize) => {
    if (condition === "current_price" || !condition) {
        return mergeSortPrices(arr).slice(0,sortSize);
    }
    else if (condition === "market_cap") {
        return insertionSortMarketCap(arr).slice(0,sortSize);
    } 
    else if (condition === "high_24h") {
        return bubbleSort24HourHigh(arr).slice(-sortSize).reverse();
    } 
    else if (condition === "total_volume") {
        return selectionSort24HourVolume(arr).slice(0,sortSize).reverse();
    }
}

