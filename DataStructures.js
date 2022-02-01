let range = (start, end, step) => {
    let rangeOfNumbers = [];
    if (step < 1) {
        while (start >= end) {
            rangeOfNumbers.push(start)
            start = start + (step);
        }
    } else {
        while (start <= end) {
            rangeOfNumbers.push(start);
            start = start + (step);
        }
    }
    return rangeOfNumbers
}

console.log(range(5, 2, -1));
console.log(range(1, 10, 2));
let sum = (...array) => {
    let result = 0;
    for (let theSum of array) {
        result = result + theSum;
        //console.log(result);
    }
    return result;
}
let numbers = range(1, 10, 3);
console.log(sum(...numbers));
