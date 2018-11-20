//Linear Searching : Navigate through all elements of array and check if we expect the value

function linearSearch(strArray, val) {
  for (i = 0; i < strArray.length; i++) {
    if (strArray[i] === val) return i;
  }
  return -1;
}

linearSearch([3, 2, 4, 4, 1], 2);
