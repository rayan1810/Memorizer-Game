export const generateRandomArrayfromAtoH = (length: number) => {
  const array = [];
  for (let i = 0; i < length; i++) {
    array.push(String.fromCharCode(65 + i));
  }
  return array;
};
export const shuffleArrayRandomly = (array: Array<Object>) => {
  const shuffledArray = [];
  while (array.length > 0) {
    const randomIndex = Math.floor(Math.random() * array.length);
    shuffledArray.push(array[randomIndex]);
    array.splice(randomIndex, 1);
  }
  return shuffledArray;
};

export const organizeArrayData = (array: Array<Object>, boardSize: number) => {
  const newArray = [];
  for (let i = 0; i < boardSize; i++) {
    let temp = { id: i, value: array[i], status: "" };
    let temp1 = { id: i, value: array[i], status: "" };
    newArray.push(temp);
    newArray.push(temp1);
  }
  return newArray;
};

export const generateGameData: any = (boardSize: number) => {
  const array = generateRandomArrayfromAtoH(boardSize);
  const data = organizeArrayData(array, boardSize);
  const gameData = shuffleArrayRandomly(data);
  return gameData;
};
