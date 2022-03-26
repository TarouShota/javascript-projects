let employeeNames = ['John', 'Jackd', 'Chrisz', 'Hank', 'John', 'Jack', 'Chris', 'Hank'];
let numbers = [12, 3, 4, 5, -23, 3, 6 - 51];

let reverseArr = [];
let i = 1;

while (employeeNames.length != 0) {
    reverseArr.push(employeeNames.pop())

}


console.log(reverseArr);

var twoPointer = function (arr) {
    let j = arr.length - 1;

    for (i = 0; i < 1; i++) {
        arr[i] = (arr[i]) - (arr[j])
        arr[j] = arr[i] + arr[j];
        arr[i] = -(arr[i]) + (arr[j]);

        console.log(arr);
    }
    return [arr];
}

console.log(twoPointer(numbers))
