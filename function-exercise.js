//Exercise - Minimum
let greaterValue = (a, b) => {
    switch (a, b) {
        case a > b:
            return a;
        case a < b:
            return b;
        default:
            return a;
    }
}
console.log(greaterValue(1000, -9));
//Exercise - Recursion
// Requirement => Zero is even, one is odd, for any other number N, its evenness is the same as N-2
let isEven = (number) => {
    if (number == 0) {
        return true;
    } else if (number > 0) {
        return isEven(number - 2);
    } else if (number != -1) {
        return isEven(number + 2);
    } else {
        return false
    }
}
console.log(isEven(14));