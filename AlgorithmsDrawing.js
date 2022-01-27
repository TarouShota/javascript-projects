


let = gridString = '';
let size = 5;
for (a = 1; a <= size; a++) {
    for (b = 1; b <= size; b++) {
        if (a % 2 == 0) {
            if (b % 2 == 0) {
                gridString += ' ';
            } else {
                gridString += '#';
            }
        } else {
            if (b % 2 == 0) {
                gridString += '#';
            } else {
                gridString += ' ';
            }
        }
    } gridString += `\n`;
}
console.log(gridString);

/*Looping A Triangle
let stringOfValues = '';
for (i = 1; i <= 7; i++) {
    for (b = 1; b != i; b++) {
        stringOfValues += '#';
    } stringOfValues += `\n`;
}

console.log(stringOfValues);

FizzBuzz

for (i = 1; i <= 100; i++) {

    if (i % 3 == 0 && i % 5 == 0) {
        console.log(`FizzBuzz ${i}`)
    } else if (i % 5 == 0) {
        console.log(`${i}Buzz`);
    } else if (i % 3 == 0) {
        console.log(`${i}Fizz`);
    }
}
*/