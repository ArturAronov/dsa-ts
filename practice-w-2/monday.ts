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
        const temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }

  return arr;
};

// compareTwoArrays(
//   practiceBubbleSort(unsortedPractice),
//   bubbleSort(unsortedBase)
// );

// binary search
const { pin, arr } = generateBinarySearchData();

const practiceBinarySearch = () => {
  console.log("Finding pin: ", pin, " in array ", arr);

  let low = 0;
  let high = arr.length;
  let iterations = 0;
  let pinLocation;

  while (low < high) {
    iterations++;
    const mid = Math.floor((high + low) / 2);

    if (arr[mid] === pin) {
      console.log("Found pin in index: ", mid, " value: ", arr[mid]);
      console.log("Total iterations: ", iterations);
      console.log("================================");
      return true;
    } else if (arr[mid] > pin) {
      high = mid;
    } else {
      low = mid + 1;
    }
  }

  console.log("Total iterations: ", iterations);
  console.log("No pin found in array");

  console.log("================================");
  return false;
};

practiceBinarySearch();
const testCase = binarySearch({ pin, arr });
console.log("Test case: ", testCase);
