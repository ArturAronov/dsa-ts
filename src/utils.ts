type randomNumGeneratorT = {
  min?: number;
  max?: number;
};

type generateRandomNumArrT = {
  arrLength?: number;
  min?: number;
  max?: number;
};

export const randomNumGenerator = (data: randomNumGeneratorT) => {
  let { min, max } = data;

  if (!min) min = 0;
  if (!max) max = 420;

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const generateRandomNumArr = (data: generateRandomNumArrT) => {
  let { arrLength, min, max } = data;

  if (!min) min = 0;
  if (!max) max = randomNumGenerator({ max: 100 });
  if (!arrLength) arrLength = randomNumGenerator({ min: 7, max: 42 });

  const arr = [];

  for (let i = 0; i < arrLength; i++) {
    arr.push(randomNumGenerator({ min, max }));
  }

  return arr;
};

export const compareTwoArrays = (arr1: any[], arr2: any[], log?: boolean) => {
  if (arr1.length !== arr2.length) {
    console.log("Two arrays have mismatch length");
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log(
        `Arrays don't match in index ${i} array 1 value: ${arr1[i]} vs ${arr2[i]}`
      );
      return false;
    }
  }

  if (log) {
    console.log("Both arrays match");
  }

  return true;
};

// console.log(randomNumGenerator({}));
// console.log(generateRandomNumArr({}));
