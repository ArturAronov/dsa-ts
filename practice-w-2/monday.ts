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

compareTwoArrays(
  practiceBubbleSort(unsortedPractice),
  bubbleSort(unsortedBase)
);

// binary search
