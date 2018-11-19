//Make a function to accept sorted array to return pair if the sum is zero

/** Naive Solution. Time Complexity:O(N^2)**/
makeZero([-3, -2, -1, 0, 1, 2, 3]);

function makeZero(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

/*Code Refactoring Using*/

function makeZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}
