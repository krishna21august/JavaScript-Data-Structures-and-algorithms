//Check if the square of each value exists in the second array. frequency matters not the order.(return true if the square of each value exists in second array.)
//array1 = [1,2,3],array2 = [4,1,9] returns true
//array1 = [1,2,3], array2 = [1,9] return false beacuse square of each value doesn't exist in second array.

//Naive solution

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (i = 0; i < arr1.length; i++) {
    //get index of square from second array
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex == -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
}

same([1, 2, 3], [9, 1, 4]);

/*-----------------------------------------------------------------*/

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  //get count of each element in respective array
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    //check if the square of key exists in other array
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }

    //check if any extra value in second array
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

same([1, 2, 3, 2, 5], [9, 1, 4, 4, 11]);
