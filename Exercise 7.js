let numbers = [3, -5, 8, -2, 4, -9];
let final = numbers.reduce(positivesum);
function positivesum(total, value, index, array) {
  if (value > 0) {
    return total + value;
  } else {
    return total;
  }
}
