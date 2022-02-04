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
let testArray = [5, 2, 1];
console.log(arrayToList(...testArray))

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

let deepEqual = (a, b) => {
    let integerA = 0;
    if (typeof a && typeof b == 'object') {
        integerA = a.pop();
        integerB = b.pop();
        if (integerA == integerB) {
            return true
        } else {
            return false
        }

    }
    integer = a.pop();
    return a

    if (a === b && typeof a == typeof b) {
        return true
    } else {
        return false
    }
}
let array = [5];
console.log(deepEqual([0], [0]));
console.log(typeof array);