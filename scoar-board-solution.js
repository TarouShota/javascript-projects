
//Intializing scoreBoard with default value

let scoreBoard = {
    ['The Best Ever']: 100000
};

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

