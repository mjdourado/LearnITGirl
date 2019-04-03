let arrayOne = [2, 4, 6];
let arrayTwo = [3, 5, 7];
let finalArray = [];
let i;
function finalArr() {
  for (i = 0; i < arrayOne.length; i++) {
    finalArray[i] = arrayOne[i] + arrayTwo[i];
  }
  return finalArray;
}
