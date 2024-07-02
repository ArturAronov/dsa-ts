import { bubbleSort } from "./bubbleSort";
import { generateRandomNumArr, randomNumGenerator } from "../utils";

export type BinarySearchReturnT = {
  pinIndex?: number;
  iterations: number;
};

export type BinarySearchPropsT = {
  pin: number;
  arr: number[];
};

const unsortedArr = generateRandomNumArr({});

export const generateBinarySearchData = (): {
  pin: number;
  arr: number[];
} => {
  // Generate random sorted array and generate the pin
  const doesContainNum = !!Math.floor(Math.random() * 2);
  const arr = bubbleSort(unsortedArr);
  let pin;

  while (!pin) {
    if (doesContainNum) {
      const pinPosition = Math.floor(Math.random() * (arr.length - 0 + 1)) + 0;
      pin = arr[pinPosition];
    } else {
      const randomNum = randomNumGenerator({});
      if (!arr.includes(randomNum)) pin = randomNum;
    }
  }

  return { pin, arr };
};

const { pin, arr } = generateBinarySearchData();

export const binarySearch = ({
  pin,
  arr,
}: BinarySearchPropsT): BinarySearchReturnT => {
  let iterations = 0;
  let low = 0;
  let high = arr.length;
  let pinIndex;

  while (low < high) {
    iterations++;
    const mid = Math.floor(low + (high - low) / 2);
    const value = arr[mid];

    if (value === pin) {
      pinIndex = mid;
      // console.info("Found pin in index: ", pinIndex, " value: ", arr[pinIndex]);

      return { iterations, pinIndex };
    } else if (value > pin) {
      high = mid;
    } else {
      low = mid + 1;
    }
  }

  // console.log("Total iterations: ", iterations);
  // console.info("No pin found in array");
  return { iterations };
};

// binarySearch({ pin, arr });

/* 
  Find midpoint:
  m = ⌊ low + (high - low) / 2 ⌋
         |          |
      offset    midpoint

  ⌊⌋ -> Math floor
*/
