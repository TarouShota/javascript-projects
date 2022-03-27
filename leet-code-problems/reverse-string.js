/* Reversing the order of the array. */
let employeeNames = ['John', 'Jackd', 'Chrisz', 'Hank', 'John', 'Jack', 'Chris', 'Hank'];
let numbers = [12, 3, 4, 5, -23, 3, 6 - 51];

/* Reversing the order of the array. */
let reverseArr = [];
let i = 1;

while (employeeNames.length != 0) {
    reverseArr.push(employeeNames.pop())

}


console.log(reverseArr);

/* A JavaScript object. */
pyramid = {
    values: {
        [1]: ['', 1, 7, 3, 11],
        [2]: ['', 10, 4, 1],
        [3]: ['', 20, 22],
        [4]: ['', 10],
    },

    getValue(row, column) {

        return (this.values[row][column]);
    }
}
console.log(pyramid.getValue(4, 4))




/* A recursive function. */
let process = function (row, column) {
    if (row == 1) return pyramid.getValue(row, column);

    left = process(row - 1, column);
    right = process(row - 1, column + 1);
    result = pyramid.getValue(row, column) + Math.min(left, right);
    return result
}


console.log(process(4, 1));



