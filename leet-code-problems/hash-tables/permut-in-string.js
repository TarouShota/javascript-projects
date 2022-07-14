//SUBMISSION HAS BEEN ACCEPTED!!
//LES GOO

/* Creating an array of the alphabet. */
const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// const s1 = "ab"
// const s2 = "eidbaooo"

/* The HashTable class is a constructor function that creates an object with a table property that is
an empty object and a length property that is set to 0. 

The addCharacters method takes in a character and adds it to the table property of the object. If
the character is already in the table, the value of the character is incremented by 1. If the
character is not in the table, the value of the character is set to 1 and the length property is
incremented by 1. */

class HashTable {
  constructor() {
    this.table = {};
    this.length = 0;
  }

  addCharacters(char) {
    if (this.table[char] > 0) {
      this.table[char] += 1;
      this.length++;
      return;
    }
    this.table[char] = 1;
    this.length++;
    // Object.assign(this.table, { 0: this.test, c: 3 });
  }
}

const s1 = "hello";

const s2 = "ooolleoooleh";

// const s1 = 'adc'
// const s2 = 'dcda'
//damn m8

let firTable = new HashTable();

let secTable = new HashTable();

let testArray1 = [...s1];
let testArray2 = [...s2];

/**
 * It compares the two objects and returns true if the second object has all the properties of the
 * first object and the values of the second object are greater than or equal to the values of the
 * first object.
 * @returns true
 */
let compare = () => {
  for (const property in firTable.table) {
    console.log(secTable.table);
    console.log([property]);
    console.log(secTable.table.hasOwnProperty(property));
    if (!secTable.table.hasOwnProperty(property)) {
      return false;
    }

    if (firTable.table[property] > secTable.table[property]) {
      return false;
    }
    console.log(secTable.table[property]);
    console.log(firTable.table[property]);
    // for (const arr2 in firTable.table) {
    //     console.log(`${property} : ${secTable.table[property]} : ${arr2}}`)
    // }
  }
  return true;
};

testArray1.forEach((element) => {
  firTable.addCharacters(element);
});

let checkInclusion = () => {
  /* Comparing the two strings and adding the characters to the second hash table. */
  for (i = 0; i < testArray2.length; i++) {
    console.log(secTable.length);
    console.log(secTable.table);
    console.log(firTable.length);

    if (testArray1.includes(testArray2[i])) {
      secTable.addCharacters(testArray2[i]);
      if (secTable.length >= firTable.length) {
        if (!compare()) {
          // for (const key in secTable.table) {
          //     delete secTable.table[key];
          // }
          // secTable.length = 0;
        } else {
          return true;
        }
      }

      console.log(secTable.length);
      continue;
    } else {
      for (const key in secTable.table) {
        delete secTable.table[key];
      }
      secTable.length = 0;
    }
  }
  return false;
};

console.log(checkInclusion());

// console.log(compare());
//  console.log(testArray1.includes(testArray2[i]));
//console.log(testArray2[i])

console.log(firTable);
console.log(secTable);

// testArray2.forEach(element => {
//     secTable.addCharacters(element);
// })

console.log(firTable.table.b);

console.log(compare());

console.log(secTable.table);

console.log(firTable.table);

// console.log(firTable);
// // console.log(charTable.table[1]['char'])
// console.log(Object.values(firTable.table));
// console.log(Object.keys(firTable.table));

// console.log(secString);
