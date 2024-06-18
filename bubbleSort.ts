import { generateRandomNumArr } from "./utils";

const bubbleSort = () => {
  const unsortedArr = generateRandomNumArr({});

  console.log("Sorting array: ", unsortedArr);

  for (let i = 0; i < unsortedArr.length; i++) {
    for (let j = 0; j < unsortedArr.length - 1 - i; j++) {
      if (unsortedArr[j] > unsortedArr[j + 1]) {
        const temp = unsortedArr[j];
        unsortedArr[j] = unsortedArr[j + 1];
        unsortedArr[j + 1] = temp;
      }
    }
  }

  console.log("Sorted array: ", unsortedArr);
  return unsortedArr;
};

bubbleSort();

/* 
After each iteration, largest number always ends up at the end of the array
i = 0   =>    1   3   7   4   2   :  arr.length
i = 1   =>    1   3   4   2 | 7   :  arr.length - i
i = 2   =>    1   3   2 | 4   7   :  arr.length - i
i = 3   =>    1   3 | 2   4   7   :  arr.length - i
i = 4   =>    1 | 2   3   4   7   :  arr.length - i
*/
