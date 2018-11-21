//It is much faster than linear searching
//Works only on sorted array
//removes half of the array at once

function binarySearch(arr, elem) {
  var start = 0;
  var end = arr.length - 1;
  var middle = Math.floor((start + end) / 2);
  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  if (arr[middle] === elem) {
    return middle;
  }
  return -1;
}

binarySearch([1, 3, 4, 5, 7, 9, 11, 12, 15, 19, 22, 25, 55], 25);
