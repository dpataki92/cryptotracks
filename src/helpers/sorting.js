// Sorts 24h prices using mergesort
export const mergeSortPrices = (day) => {
    console.log(mergeSort(day))
    return mergeSort(day);
}

function merge(arr1, arr2) {
    let sorted = [];

    while (arr1.length !== 0 && arr2.length !== 0) {
        if (parseFloat(arr1[0]['y']) < parseFloat(arr2[0]['y'])) {sorted.push(arr1.shift())}
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



export const insertionSortPriceChanges = (day) => {
    
}

