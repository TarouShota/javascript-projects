class Animal {

    constructor(name) {
        this.speed = 15;
        this.name = name;
    }

    // ...
}

class Rabbit extends Animal {

    constructor(name, earLength, speed) {
        super(name, speed)
        this.earLength = earLength;
    }

    // ...
}

// now fine
let rabbit = new Rabbit("White Rabbit", 10);
console.log(rabbit.name); // White Rabbit
console.log(rabbit.earLength); //
console.log(rabbit.speed);