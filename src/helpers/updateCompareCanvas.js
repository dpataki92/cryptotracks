import {mergeSortPrices, insertionSortMarketCap, bubbleSort24HourHigh} from './sorting.js';

export const decideSort = (arr, condition = null) => {
    if (condition === "current_price" || !condition) {
        return mergeSortPrices(arr).slice(0,5);
    }
    else if (condition === "market_cap") {
        return insertionSortMarketCap(arr).slice(0,5);
    } else if (condition === "high_24h") {
        return bubbleSort24HourHigh(arr).slice(-5);
    }
}

