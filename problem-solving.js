function findEvenIndex(arr) {
    let sumLeft = 0;
    let sumRight = 0;
    let counter = 0;

    for (counter = 0; counter < arr.length; counter++) {
        sumLeft = sum(arr.slice(0, counter));
        sumRight = sum(arr.slice(counter + 1, arr.length));
        if (sumLeft == sumRight) {
            return arr[counter - 1];
        }
        console.log(`${sumLeft} and ${sumRight}`);
    } return -1

}
function sum(array) {
    let result = 0;
    for (i = 0; i < array.length; i++) {
        result = result + array[i];
    }
    return result;
}

//[1, 2, 3, 4, 5].forEach(l => console.log(l));
//[1, 2, 3, 4, 3, 2, 1]; 3
console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]));
console.log(findEvenIndex([1, 100, 50, -51, 1, 2]))

