import {mergeSortPrices, insertionSortMarketCap} from './sorting.js';

export const decideSort = (arr, condition = null) => {
    if (condition === "current_price" || !condition) {
        return mergeSortPrices(arr);
    }
    else if (condition === "market_cap") {
        return insertionSortMarketCap(arr);
    }
}

