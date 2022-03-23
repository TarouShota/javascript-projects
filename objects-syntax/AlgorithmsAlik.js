let numbers = [];
let counter = 0;
let value = 4;
while (counter < 15) {
    if (value == 1) {
        numbers.push(value)
        counter++
    } else {
        numbers.push(value);
        value = value - 1;
        counter++;
    }
}

console.log(numbers);
numbers.reverse()
const shifting = function () {
    numbers.pop();
}
const Alik = function () {

    i = shifting();
    if (i == 1) {
        i = shifting();
    } else {
        Alik();
        Alik();
        console.log(i);
        i = shifting();
    }
    console.log(i);
}
Alik();

let listString = '';
let i = 8;
let c = 6

for (a = 1; a <= 8; a++) {
    for (b = 1; b <= 8; b++) {
        if (b <= i - a && b >= c - a) {
            listString += 'X '
        } else {
            listString += 'O '
        }
    } listString += `\n`
}

/*
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 0, 1, 2, 3, 4, 5, 6, 7, 8, 0, 1, 2, 3, 4, 5, 6, 7, 8, 0, 1, 2, 3, 4, 5, 6, 7, 8, 0]
let a = 0;
const Alik = function () {

    i = numbers[a];
    a++;
    if (i == 0) {
        i = numbers[a];
        a++;
    } else {
        if (i > 5) {
            i = numbers[a];
            a++;
            i = numbers[a];
            a++;
            Alik();
        } else {
            Alik();
            i = numbers[a];
            a++;
            i = numbers[a];
            a++;
        }
    } console.log(i)
}
Alik()
let listString = '';
let i = 8;
let c = 6

for (a = 1; a <= 8; a++) {
    for (b = 1; b <= 8; b++) {
        if (b <= i - a && b >= c - a) {
            listString += 'X '
        } else {
            listString += 'O '
        }
    } listString += `\n`

    Graph X and O!
} console.log(listString);
let listString = '';
for (a = 1; a <= 7; a++) {
    for (b = 1; b <= 8; b++) {
        if (a == 2 || a == 3 || b == a + 5) {
            listString += 'X '
        } else {
            listString += 'O '
        }
    } listString += `\n`
} console.log(listString);



b <= i - a && b >= c - a
let a = 3;
let b = 1;
while (a < 8) {
    while (b < 3) {
        c = a;
        while (c < a + 2) {
            if (c == 4) {
                a++;
                c++;
                console.log('F');
            } else {
                c++;
                console.log('F');
            }
        }
        b++
        console.log('G')

    }
    console.log('G');
    a++;
}
console.log('L')
*/