import { generateRandomNumArr } from "../utils";

const unsortedArr = generateRandomNumArr({});

export const bubbleSort = (arr: number[]) => {
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

bubbleSort(unsortedArr);

/* 
  After each iteration, largest number always ends up at the end of the array
  i = 0   =>    1   3   7   4   2   :  arr.length
  i = 1   =>    1   3   4   2 | 7   :  arr.length - i
  i = 2   =>    1   3   2 | 4   7   :  arr.length - i
  i = 3   =>    1   3 | 2   4   7   :  arr.length - i
  i = 4   =>    1 | 2   3   4   7   :  arr.length - i
*/
