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

// Create a ScoreBoard 
let createScoreBoard = function (name, score) {
    if (name == undefined || score == undefined) {
        return scoreBoard
    }
    scoreBoard.name = name;
    scoreBoard.score = score;
    return scoreBoard
}
//Adds a new player to a ScoreBoard

let addPlayer = function (prevScore, name, score) {
    let result = {
        previouScore: (scoreBoard),
        CurrentScore: {
            'name': name,
            'score': score
        }
    };
    let s = `${Object.values(result.previouScore)} and ${(result.CurrentScore)}`;
    return s
}

console.log(player1);
console.log(player1)
console.log(createScoreBoard('ben', 322));
console.log(addPlayer(scoreBoard, 'Carlos', 123))