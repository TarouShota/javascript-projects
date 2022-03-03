//scoar-board-solution
function HighScore(name, score) {
    this.name = name;
    this.score = score;
    this.delete = function () {
        this.name = null;
        this.score = 0;
    }
}
// Create a ScoreBoard 
let scoreBoard = {
    ['The Best Ever']: 100000
};
scoreBoard.chupapi = 123213;
console.log(scoreBoard)

let player1 = new HighScore('ben', '10');

//Adds a new player to a ScoreBoard

let createScoreBoard = function (name, score) {
    if (name == undefined || score == undefined) {
        return scoreBoard
    }
    scoreBoard[name] = score;
    return scoreBoard
}

//Adds a new player to a ScoreBoard, assigns prevScore to a scoreboard
let addPlayer = function (prevScore, names, score) {
    scoreBoard[names] = score;
    Object.assign(scoreBoard, prevScore);
    return scoreBoard
}
// Removes a player from an object
let removePlayer = function (existingScore, scoreToRemove) {
    delete scoreBoard[scoreToRemove];
}
//Updates existing value in o
let updateScore = function (player, newScore) {
    scoreBoard[player] += newScore;
}

//Adds 100 to a every value in an object 
let applyMondayBonus = function (theScoreBoard) {
    for (let value in theScoreBoard) {
        console.log(value);
        theScoreBoard[value] += 100;
    }
    console.log(theScoreBoard);
}
//Passes an object to a set function
let normalizeScore = function (objToNormal) {
    return objToNormal.normalizeScore(objToNormal.score)
}
let normalize = (score) => {
    return score + 100
}

console.log(createScoreBoard('ben', 322));
console.log(addPlayer({ 'Dave Thomas': 0 }, 'José Valim', 486373));
applyMondayBonus(scoreBoard);


const params = { score: 400, normalizeScore: normalize };
console.log(normalizeScore(params));
console.log(scoreBoard);