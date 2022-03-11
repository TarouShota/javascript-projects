
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

    gameOver(value) {
        mainDisplay.classList.add('blur-effect');
        frontDisplay.classList.add('display-flex');
        return result.textContent = `${value} Wins!`


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
                return game.gameOver('X')
            } else if (checkForO == true) {
                this.winnerDeclared = true
                return game.gameOver('O')
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


            if (this.fullArray() == false) {
                this.counter++
                this.asignValue(node);
                this.winState();

                if (this.fullArray() == true && this.winnerDeclared == false) {
                    return (this.gameOver('friendship'))
                }
                return this.gameBoard

            }
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
let secondPlayerInp = document.createElement('form');

firstPlayer.setAttribute('class', 'form-input');
firstPlayerInp = document.createElement('input');


firstPlayerInp.setAttribute('placeholder', 'Player 1');
firstPlayerInp.setAttribute('type', 'text', 'id', 'name', 'placeholder', 'Enter your name');


welcomeSection.append(firstPlayer, secondPlayer)


firstPlayerInp.setAttribute('style', 'color:white; background:black; width:10rem; height:3rem');
secondPlayerInp.setAttribute('style', 'color:white; background:black; width:10rem; height:3rem');

firstPlayer.appendChild(firstPlayerInp);
body.appendChild(welcomeSection);
console.log(welcomeSection)

console.log(game.winState());
console.log(game.fullArray());



for (i = 0; i < 9; i++) {
    const div = document.createElement('div')
    div.setAttribute('id', `${i}`);
    mainDisplay.appendChild(div);
};

let mainSection = [...document.querySelectorAll('div')];



//console.log(resulting);









//console.log(game.gameState())

mainSection.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        game.gameStart(button.id);
    });
});

