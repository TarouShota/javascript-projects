let head = {
    glasses: 1
};

let table = {
    pen: 3,
    __proto__: head
};

let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table
};

let pockets = {
    money: 2000,
    __proto__: bed
};

console.log(head.glasses);


// hamsters

let hamster = {

    eat(food) {
        this.stomach = [food];
    }
};

let speedy = {
    stomach: [],
    __proto__: hamster
};

let lazy = {
    stomach: [],
    __proto__: hamster
};

// This one found the food
speedy.eat("apple");
lazy.eat('straw');

console.log(speedy.stomach);


// This one also has it, why? fix please.
console.log(lazy.stomach);

function Calculator() {

    this.read = function (a, b) {
        this.a = a;
        this.b = b;
    };

    this.sum = function () {
        return this.a + this.b;
    };

    this.mul = function () {
        return this.a * this.b;
    };
}

let calculator = new Calculator();
calculator.read(2, 3);


console.log("Sum=" + calculator.sum());
console.log("Mul=" + calculator.mul());

//Accumulator function 
const reducer = (accumulator, f) => accumulator + f;

function Accumulator(startValue) {
    this.sumArray = [startValue]
    this.read = function (...input) {
        this.sumArray.push(...input);
        return this.sumArray.reduce(reducer);

    }
}


let accumulator = new Accumulator(1); // initial value 1

console.log(accumulator.read(3)); // adds the user-entered value
accumulator.read(4, 5, 6, 7, 8);
console.log(accumulator.read()) // adds the user-entered value

alert(accumulator.value); 