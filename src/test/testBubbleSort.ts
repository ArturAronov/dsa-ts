import { bubbleSort } from "../algorithms/bubbleSort";
import { compareTwoArrays, generateRandomNumArr } from "../utils";

export const testBubbleSort = (
  iterations: number,
  practice: (arr: number[]) => number[]
) => {
  for (let i = 0; i < iterations; i++) {
    const unsortedArrMaster = generateRandomNumArr({});
    const unsortedPractice = unsortedArrMaster.slice();
    const unsortedBase = unsortedArrMaster.slice();

    const isCorrect = compareTwoArrays(
      practice(unsortedPractice),
      bubbleSort(unsortedBase)
    );

    if (!isCorrect) {
      console.log("Arrays not matching in iteration ", i);
      break;
    }
  }
  console.log("testBubbleSort: Test case is correct");
};
