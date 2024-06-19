import { generateRandomNumArr } from "../src/utils";

// bubble sort
const bubbleSort = () => {
  const arr = generateRandomNumArr({});
  console.log("Sorting array: ", arr);
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  console.log("Sorted array: ", arr);
  return arr;
};

bubbleSort();

// binary search
