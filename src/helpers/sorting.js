// Sorts based on 24h prices using mergesort
export const mergeSortPrices = (arr) => {
    console.log(mergeSort(arr))
    return mergeSort(arr);
}

function merge(arr1, arr2) {
    let sorted = [];

    while (arr1.length !== 0 && arr2.length !== 0) {
        if (arr1[0]['current_price'] > arr2[0]['current_price']) {sorted.push(arr1.shift())}
        else {sorted.push(arr2.shift())}
    }

    return sorted.concat(arr1).concat(arr2);
}

function mergeSort(arr) {
    let midPoint = arr.length / 2;
    let firstHalf = arr.slice(0, midPoint);
    let secondHalf = arr.slice(midPoint, arr.length);

    if (arr.length < 2) {
        return arr;
    } else {
        return merge(mergeSort(firstHalf), mergeSort(secondHalf));
    }
}


// Sorts based on market capitalization using insertion sort
export const insertionSortMarketCap = (arr) => {
    let newMin;
    let sorted = [];
    while (arr.length !== 0) {
      newMin = minAndRemove(arr);
      sorted.push(newMin);
    }
    return sorted;
}

function minAndRemove(arr) {
    let min = arr[0];
    let minIndex = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i]['market_cap'] < min['market_cap']) {
        min = arr[i];
        minIndex = i;
      }
    }
    arr.splice(minIndex, 1);
    return min;
  }

