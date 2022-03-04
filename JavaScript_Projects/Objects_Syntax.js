function HighScore(name, score) {
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

let printList = (list) => {
    sumOfValues += list.value
    if (list.next != null) {
        printList(list.next);
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


let sumUp = function () {
    return function ();
}
console.log(sumUp(1)(1));