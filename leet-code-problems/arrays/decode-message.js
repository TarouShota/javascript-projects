let testArray = [
    18, 12312, 171
    , 763, 98423,
    1208, 216, 11, 500,
    18, 241, 0, 32,
    20620, 27, 10];

const alphabet = [
    "", "A", "B", "C", "D", "E", "F", "G",
    "H", "I", "J", "K", "L", "M", "N",
    "O", "P", "Q", "R", "S", "T", "U",
    "V", "W", "X", "Y", "Z"];

const symbols = [
    "", "!", "?", ",", ".", " ", ";", '"', "'"
]
let result = [];


iterate = function (array) {
    while (array.length > 0) {
        let current = array.shift() % 27
        if (current !== 0) {
            result.push(alphabet[current]);
            continue
        }
        break
    }
    while (array.length > 0) {
        let current = array.shift() % 27
        if (current !== 0) {
            result.push(alphabet[current]);
            continue
        }
        break
    }
    while (array.length > 0) {
        let current = array.shift() % 9
        if (current != 0) {
            result.push(symbols[current]);
            continue
        }
        iterate(array)
    }
    return result

}

console.log(iterate(testArray))

