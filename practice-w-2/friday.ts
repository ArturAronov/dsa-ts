import {
  binarySearch,
  generateBinarySearchData,
} from "../src/algorithms/binarySearch";
import { bubbleSort } from "../src/algorithms/bubbleSort";
import { compareTwoArrays, generateRandomNumArr } from "../src/utils";

// bubble sort
const unsortedArrMaster = generateRandomNumArr({});
const unsortedPractice = unsortedArrMaster.slice();
const unsortedBase = unsortedArrMaster.slice();

const practiceBubbleSort = (arr: number[]) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};

compareTwoArrays(
  practiceBubbleSort(unsortedPractice),
  bubbleSort(unsortedBase)
);

console.log("===============================");
console.log("hello");

// binary search
const { pin, arr } = generateBinarySearchData();

const practiceBinarySearch = () => {
  let low = 0;
  let high = arr.length;
  let iterations = 0;

  while (low < high) {
    const mid = Math.floor((low + high) / 2);
    const value = arr[mid];
    iterations++;

    if (value === pin) {
      console.log(
        "practiceBinarySearch: Found pin in index: ",
        mid,
        " value: ",
        arr[mid]
      );
      console.log("practiceBinarySearch: Total iterations: ", iterations);
      console.log("================================");
      return true;
    } else if (value > pin) {
      high = mid;
    } else {
      low = mid + 1;
    }
  }
  return false;
};

practiceBinarySearch();
const testCase = binarySearch({ pin, arr });
console.log("Test case: ", testCase);
