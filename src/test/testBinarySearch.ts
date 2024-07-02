import {
  BinarySearchPropsT,
  BinarySearchReturnT,
  binarySearch,
  generateBinarySearchData,
} from "../algorithms/binarySearch";

export const testBinarySearch = (
  funcIterations: number,
  practice: ({ pin, arr }: BinarySearchPropsT) => BinarySearchReturnT
) => {
  for (let i = 0; i < funcIterations; i++) {
    const { pin, arr } = generateBinarySearchData();
    const { pinIndex: testPinIndex } = binarySearch({ pin, arr });
    const { pinIndex: practicePinIndex } = practice({ pin, arr });

    if (practicePinIndex !== testPinIndex) {
      console.log("testBinarySearch: results are not matching");
      console.log(
        "practicePinIndex: ",
        practicePinIndex,
        " testPinIndex: ",
        testPinIndex
      );
      return;
    }
  }

  console.log("testBinarySearch: Test case is correct");
};
