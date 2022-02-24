//scoar-board-solution
function HighScore(name, score) {
    this.name = name;
    this.score = score;
    this.delete = function () {
        this.name = null;
        this.score = 0;
    }
}
let scoreBoard = {
    ['The Best Ever']: 100000
};
scoreBoard.chupapi = 123213;
console.log(scoreBoard)

let player1 = new HighScore('ben', '10');


let createScoreBoard = function (name, score) {
    if (name == undefined || score == undefined) {
        return scoreBoard
    }
    scoreBoard[name] = score;
    return scoreBoard
}


let addPlayer = function (prevScore, names, score) {
    scoreBoard[names] = score;
    Object.assign(scoreBoard, prevScore);
    return scoreBoard
}

let removePlayer = function (existingScore, scoreToRemove) {
    delete scoreBoard[scoreToRemove];
}

let updateScore = function (player, newScore) {
    scoreBoard[player] += newScore;
}

let applyMondayBonus = function (theScoreBoard) {
    for (let value in theScoreBoard) {
        theScoreBoard[value] += 100;
    }
    console.log(theScoreBoard);
}
let normalizeScore = function (objToNormal) {
    return objToNormal.normalizeScore()
}
let normalize = (score) => {
    return 'huy'
}

console.log(createScoreBoard('ben', 322));
console.log(addPlayer({ 'Dave Thomas': 0 }, 'José Valim', 486373));
applyMondayBonus(scoreBoard);
const params = { score: 400, normalizeScore: normalize };
console.log(normalizeScore(params));
