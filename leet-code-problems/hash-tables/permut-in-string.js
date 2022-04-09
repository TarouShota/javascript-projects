/* Creating an array of the alphabet. */
const alphabet = [
    "A", "B", "C", "D", "E", "F", "G",
    "H", "I", "J", "K", "L", "M", "N",
    "O", "P", "Q", "R", "S", "T", "U",
    "V", "W", "X", "Y", "Z"];


class HashTable {
    constructor() {
        this.table = {};
        this.length = 0

    }

    addCharacters(char, key) {
        this.table[key] = char
        this.length++
        Object.assign(this.table, { a: 2, c: 3 });
    }

}

let charTable = new HashTable();


for (i = 0; i < alphabet.length; i++) {
    charTable.addCharacters(alphabet[i], i);
}

console.log(charTable);
console.log(charTable.table[0])