range = (start, end, step = 1) => {
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
/*
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


let reverseArray = (...array) => {
    let newArray = [];
    newArray = array;
    return newArray
}
console.log(...ReverseArray(range(1, 10)));
*/

/*let reverseArray = (...array) => {
    let counter = 1;
    let newArray = [];
    while (array.length >= counter) {
        newArray.push(array[array.length - counter]);
        counter++;
    } return newArray;
}
let testArray = range(1, 11);
//console.log(reverseArray(...testArray));
function remove(array, index) {
    return array.slice(0, index)
        .concat(array.slice(index + 1));
}

let reverseCounter = 1;
let reverseArrayInPlace = (...array) => {
    for (i = 0; i != Math.floor(array.length / 2); i++) {
        if (i > 16) {
            return array
        } else {
            let placeHolder = array[i];

            array[i] = array[array.length - reverseCounter];
            array[array.length - reverseCounter] = placeHolder;
            reverseCounter++;

            console.log(`${array} this is ${i}`);


        }
    } return array
}
console.log(reverseArrayInPlace(...testArray));
*/
let arrayToList = (...chain) => {

    for (i = 0; chain.length != i; i++) {

    }
    let list = {
        value: chain[0],
        rest: {
            value: chain[1],
            rest: {
                value: chain[2],
                rest: null
            }
        }
    }; return list
}
let testArray = [5, 3, 4];
let secondObject = arrayToList(...testArray);
console.log(secondObject);

let listToArray = (list) => {
    let array = [];
    array.push(list.value);
    array.push(list.rest.value);
    array.push(list.rest.rest.value);
    return array;

}
console.log(listToArray(arrayToList(...testArray)));

//comments
// Deep Comparison
let integerA = 0;
let integerB = 0;
let counter = 1;
let deepEqual = (a, b) => {

    switch (typeof a, typeof b) {
        case 'string':
            if (a === b) {
                return true;
            } else {
                return false;
            }
        case 'object':
            


        case 'integer':
            if (a === b) {
                return true;
            } else {
                return false;
            }
        default:
            return false;



    }

}

testArray = [2, 4, 3];
let array = [5, 4, 3];
let testObject = {
    value: 3,
    rest: {
        value: 4,
        rest: {
            value: 5,
            rest: null
        }
    }
}
// console.log(deepEqual(testObject, secondObject));
console.log(deepEqual(array, testArray))
//console.log(deepEqual(testObject, secondObject));
//console.log(Object.keys(secondObject));

/*
let deepEqual = (a, b) => {
    let integerA = {};
    let integerB = {};
    let integerA = a;
    let integerB = b;
    if (typeof a && typeof b == 'object') {
        for (const property in a) {
            integerA = integerA + property;
            console.log(integerA);
            integerA = a.pop();
            integerB = b.pop();
        }
*/

