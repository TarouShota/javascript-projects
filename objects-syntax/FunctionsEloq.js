let power = (base, exponent) => {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
}

console.log(squre2(5));

function square(base, exponent) {
    return base * exponent;
}
const square2 = x => x * x;
function greet(who) {
    console.log("Hello " + who);
}
greet("Harry");
console.log("bye");
ew
