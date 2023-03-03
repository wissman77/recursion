#!/usr/bin/node

function mergeSort(array) {
  if (array.length < 2) return array;

  // find middle and split the array
  const middle = Math.floor(array.length / 2);
  const leftArray = array.slice(0, middle);
  const rightArray = array.slice(middle);

  return merge(mergeSort(leftArray), mergeSort(rightArray));
}

function merge(leftArray, rightArray) {
  const sortedArray = [];

  while (leftArray.length && rightArray.length) {
    const minElement =
      leftArray[0] <= rightArray[0] ? leftArray.shift() : rightArray.shift();
    sortedArray.push(minElement);
  }
  return [...sortedArray, ...leftArray, ...rightArray];
}

// Test Cases
const sampleSortedArray = mergeSort([3, -2, 7, 99, 6, 4, 5, 0]);
console.log(sampleSortedArray); // [-2, 0, 3, 4, 5, 6, 7, 99]
console.log(mergeSort([-9, -99, 0, 1, 5, 88, 999, 55, 8888, 5])); // [-99, -9, 0, 1, 5, 5, 55, 88, 999, 8888]
// empty array
console.log(mergeSort([])); // []
