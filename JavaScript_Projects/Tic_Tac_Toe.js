
let game = {
    gameBoard: ['', '', '', '', '', '', '', '', ''],
    winningMoves:
        [[0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]],

    counter: 0,
    asignValue(node) {
        this.gameBoard[node] = (this.counter % 2 == 0) ? "X" : "O";
        return mainSection[node].textContent = this.gameBoard[node];
    },
    showBoard() {
        let whoStarts = document.createElement('section');
        body.appendChild(whoStarts);

        let whoStartsText = document.createElement('h1');
        // let hideWhoStarts = () => { return whoStarts.classList.add('hide-display') };

        whoStarts.appendChild(whoStartsText);

        welcomeSection.classList.add('hide-display');
        mainDisplay.classList.add('display-grid');

        whoStartsText.textContent = `${this.player1} starts !`;



        return setTimeout(this.hideWhoStarts, 1000,);
    },
    hideWhoStarts() { return whoStarts.classList.add('hide-display') },
    gameOver(value) {
        mainDisplay.classList.add('blur-effect');
        frontDisplay.classList.add('display-flex');
        return result.textContent = `${value} wins!`


    },
    fullArray() {
        return this.gameBoard.every(function (e) {
            return e > 'A';
        });

    },
    winState() {
        game.winningMoves.forEach(element => {
            let tempArray = [];
            element.forEach(element => {
                return tempArray.push(game.gameBoard[element]);
            });
            let checkForX = tempArray.every(function (e) {
                return e == 'X'
            })
            let checkForO = tempArray.every(function (e) {
                return e == 'O'
            })
            if (checkForX == true) {
                this.winnerDeclared = true
                return game.gameOver(this.player2);
            } else if (checkForO == true) {
                this.winnerDeclared = true
                return game.gameOver(this.player1);
            } else {
                this.winnerDeclared = false
                return console.log(this.fullArray());
            }


        }
        )
        return game.gameBoard


    },
    gameStart: function (node) {

        if (this.gameBoard[node] < 'A') {
            this.counter++
            this.asignValue(node);
            this.winState();

            // if (this.fullArray() == false) {


            if (this.fullArray() == true && this.winnerDeclared == false) {
                return (this.gameOver('friendship'))
            }
            return this.gameBoard


        }
    }

}

let theButton = document.querySelector('button');
let mainDisplay = document.querySelector('main');

let body = document.querySelector('body');
let frontDisplay = body.firstElementChild;

let result = frontDisplay.querySelector('h2');
let welcomeSection = document.createElement('section');

let firstPlayer = document.createElement('form');
let secondPlayer = document.createElement('form')
let secondPlayerInp = document.createElement('input');

let submitButton = document.createElement('button');

submitButton.setAttribute('type', 'submit');
submitButton.textContent = "Start";


firstPlayerInp = document.createElement('input');


firstPlayerInp.setAttribute
let inputValues = [
    'type', 'text', 'id', 'player1', 'placeholder', 'Player - O', 'class', 'form-input'
]
console.log(inputValues[7]);
//
let temp = 1;
for (i = 0; i < 4; i += 1) {
    firstPlayerInp.setAttribute(`${inputValues.shift()}`, `${inputValues.shift()}`);
}
secondPlayerInp = firstPlayerInp.cloneNode(true);
secondPlayerInp.setAttribute('id', 'player2');
secondPlayerInp.setAttribute('placeholder', 'Player - X');





firstPlayerInp.setAttribute('style', 'color:white; background:black; width:10rem; height:3rem');
secondPlayerInp.setAttribute('style', 'color:white; background:black; width:10rem; height:3rem');

firstPlayer.appendChild(firstPlayerInp);
secondPlayer.appendChild(secondPlayerInp);

welcomeSection.append(firstPlayer, secondPlayer);
welcomeSection.appendChild(submitButton);
welcomeSection.setAttribute('class', 'player-info');


body.appendChild(welcomeSection);


for (i = 0; i < 9; i++) {
    const div = document.createElement('div')
    div.setAttribute('id', `${i}`);
    mainDisplay.appendChild(div);
};
submitButton.addEventListener('click', (event) => {
    game.player1 = firstPlayerInp.value;
    game.player2 = secondPlayerInp.value;
    game.showBoard();


});

let mainSection = [...document.querySelectorAll('div')];



//console.log(resulting);









//console.log(game.gameState())

mainSection.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        game.gameStart(button.id);
    });
});

