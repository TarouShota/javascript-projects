/*function HighScore(name, score) {
    this.name = name;
    this.score = score;
    this.delete = function () {
        this.name = null;
        this.score = 0;
    }
}
//Intializing scoreBoard with default value
let scoreBoard = {
    name: 'The Best Ever',
    score: 100000,
};

let player1 = new HighScore('ben', '10');
console.log(player1)

// Create a ScoreBoard 


//Adds a new player to a ScoreBoard

let createScoreBoard = function (name, score) {
    if (name == undefined || score == undefined) {
        return scoreBoard
    }
    scoreBoard[name] = score;
    return scoreBoard
}

// Adds a new player to a ScoreBoard, assigns prevScore to a scoreboard
let addPlayer = function (prevScore, names, score) {
    scoreBoard[names] = score;
    Object.assign(scoreBoard, prevScore);
    return scoreBoard
}

// Removes a player from an object

let removePlayer = function (existingScore, scoreToRemove) {
    delete scoreBoard[scoreToRemove];
}
// Updates existing value in o
let updateScore = function (player, newScore) {
    scoreBoard[player] += newScore;
}

// Adds 100 to a every value in an object 

let applyMondayBonus = function (theScoreBoard) {
    for (let value in theScoreBoard) {
        theScoreBoard[value] += 100;
    }

}
// Passes an object to a set function

let normalizeScore = function (objToNormal) {
    return objToNormal.normalizeScore(objToNormal.score)
}
let normalize = (score) => {
    return score + 100
}



const params = { score: 400, normalizeScore: normalize };
console.log(normalizeScore(params));

console.log(scoreBoard);



// Linked List

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

let sumOfValues = 0;

let printList = (givenList) => {
    sumOfValues += givenList.value
    if (givenList.next != null) {
        printList(givenList.next);
    }
    return sumOfValues
}

let printListLoop = (list) => {
    while (list.next != null) {
        sumOfValues += list.value
        list = list.next
    }
}



console.log(printList(list));
console.log(list.hasOwnProperty(''));
console.log(list.next);






*/

let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];

function byField(fieldName) {
    return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
}
console.log(users.sort(byField('age')));


console.log(users.sort((a, b) => a.name > b.name ? 1 : -1));
console.log(users.sort((a, b) => a.age > b.age ? 1 : -1));


function sum(a) {

    return function (b) {
        return a + b; // takes "a" from the outer lexical environment
    };

}
console.log('erutguier')
console.log(sum(1));
console.log(sum(1)(2)); // 3
console.log(sum(5)(-1)); // 4


let journal = [
    {
        events: ["work", "touched tree", "pizza",
            "running", "television"],
        squirrel: false
    },
    {
        events: ["work", "ice cream", "cauliflower",
            "lasagna", "touched tree", "brushed teeth"],
        squirrel: false
    },
    {
        events: ["weekend", "cycling", "break", "peanuts",
            "beer"],
        squirrel: true
    },
    /* and so on... */
];
console.log(journal[0].events)

let squirrel = true

let testObject = {
    firstDay: {
        events: [0, 2, 3, 4],
        squirrel: false
    },
    secondDay: {
        events: [0, 3, 4, 5],
        squirrel: true
    },
    gameStart: function () {
        return this.secondDay
    }
}


console.log(testObject.gameStart())


