let numbers = [6, 4, 9, 3, 1, 7, 8, 4];
let i;
let j;
function exercise(x) {
  for (i = 0; i < numbers.length; i++) {
    for (j = i + 1; j < numbers.length; j++) {
      if (x[i] == x[j]) {
        return true;
      }
    }
  }
  return false;
}
