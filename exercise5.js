let numbers = [6, 7, 3, 8, 1, 9];
let final = [min(numbers), max(numbers)];
function max(x) {
    return Math.max.apply(null, x);
}
function min(y) {
    return Math.min.apply(null, y);
}

// generally good idea here, but the whole thing isn't a function --
// you should create a function to "wrap around" the two functions
// you've written

// Also, no problem using `apply` if you understand what it does, but,
// if you don't, could you write this using a for loop instead?
