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
    let newMax;
    let sorted = [];
    while (arr.length !== 0) {
      newMax = maxAndRemove(arr);
      sorted.push(newMax);
    }
    return sorted;
}

function maxAndRemove(arr) {
    let max = arr[0];
    let maxIndex = 0;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i]['market_cap_rank'] < max['market_cap_rank']) {
        max = arr[i];
        maxIndex = i;
      }
    }
    arr.splice(maxIndex, 1);
    return max;
  }

// Sorts based on 24H price high using bubble sort
export const bubbleSort24HourHigh = (arr) => {
    for (let i = arr.length; i > 0; i--) {
        for (let x = 0; x < i-1; x++) {
            if(arr[x]["high_24h"] > arr[x+1]["high_24h"]) {
                swap(arr, x, x+1);
            }
        }
    }
    return arr;
}

function swap(arr, i1, i2) {
    let temp = arr[i1];
    arr[i1] = arr[i2];
    arr[i2] = temp;
}

//Sorts based on 24H volume using selection sort
export const selectionSort24HourVolume = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let lowest = i;
        for (let x = i+1; x < arr.length; x++) {
            if(arr[lowest]["total_volume"] > arr[x]["total_volume"]) {
                lowest = x;   
            }
        }
        if (i !== lowest) {
            let temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
        }
    }
    return arr;
}