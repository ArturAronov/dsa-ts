import {
  BinarySearchPropsT,
  BinarySearchReturnT,
} from "../src/algorithms/binarySearch";
import { testBubbleSort } from "../src/test/testBubbleSort";
import { testBinarySearch } from "../src/test/testBinarySearch";

// bubble sort
const practiceBubbleSort = (arr: number[]) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
};

// binary search
const practiceBinarySearch = ({
  pin,
  arr,
}: BinarySearchPropsT): BinarySearchReturnT => {
  let low = 0;
  let high = arr.length;
  let iterations = 0;

  while (low < high) {
    const mid = Math.floor((low + high) / 2);
    const value = arr[mid];
    iterations++;

    if (value === pin) {
      return { iterations, pinIndex: mid };
    } else if (value > pin) {
      high = mid;
    } else {
      low = mid + 1;
    }
  }

  return { iterations };
};

testBubbleSort(4200, practiceBubbleSort);
testBinarySearch(4200, practiceBinarySearch);
