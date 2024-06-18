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

// console.log(randomNumGenerator({}));
// console.log(generateRandomNumArr({}));
