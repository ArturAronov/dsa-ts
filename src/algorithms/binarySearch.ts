import { bubbleSort } from "./bubbleSort";
import { randomNumGenerator } from "../utils";

export const generateBinarySearchData = (): {
  pin: number;
  arr: number[];
  doesContainNum: boolean;
} => {
  // Generate random sorted array and generate the pin
  const doesContainNum = !!Math.floor(Math.random() * 2);
  const arr = bubbleSort();
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

  return { pin, arr, doesContainNum };
};

const binarySearch = () => {
  const { pin, arr } = generateBinarySearchData();
  let totalIterations = 0;
  let low = 0;
  let high = arr.length;
  let foundIndex;

  console.info("Finding pin: ", pin, " in array: ", arr);

  while (low < high) {
    totalIterations++;
    const mid = Math.floor(low + (high - low) / 2);
    const value = arr[mid];

    if (value === pin) {
      foundIndex = mid;
      console.info(
        "Found pin in index: ",
        foundIndex,
        " value: ",
        arr[foundIndex]
      );
      console.log("Total iterations: ", totalIterations);

      return true;
    } else if (value > pin) {
      high = mid;
    } else {
      low = mid + 1;
    }
  }

  console.log("Total iterations: ", totalIterations);
  console.info("No pin found in array");
  return false;
};

binarySearch();

/* 
  Find midpoint:
  m = ⌊ low + (high - low) / 2 ⌋
        |          |
      offset    midpoint

  ⌊⌋ -> Math floor
*/
