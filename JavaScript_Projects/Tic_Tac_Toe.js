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
    updateArray() {
        this.counter++
        game.gameboardString = game.gameBoard.filter(item => item != "X" && item != "O");
    },
    asignValue(node) {
        this.gameBoard[node] = (this.counter % 2 == 0) ? "X" : "O";
        mainSection[node].textContent = this.gameBoard[node];
    },
    gameState() {
        this.first = this.gameBoard.slice(0, 3);
        this.second = this.gameBoard.slice(3, 6)

        this.third = this.gameBoard.slice(6, 9);
        this.twoD = [this.first, this.second, this.third];


        return false
        console.log(this.twoD);
        //return this.twoD[0].join('');
        switch (this) {
            case this.gameBoard.slice():
        }
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
    gameStart: function (node) {

        if (this.gameBoard[node] < 'A') {
            if (this.gameState() == true) {
                return true
            }
            else if (this.gameState() == false && this.fullArray() == false) {
                this.asignValue(node);
                this.updateArray();

                if (this.fullArray() == true) {
                    this.asignValue(node);
                    return this.gameOver((this.counter % 2 == 0) ? "O" : "X");
                }
            }


        }
    }
}
game.gameboardString = 0;





//console.log(resulting);


let theButton = document.querySelector('button');
let mainSection = [...document.querySelectorAll('div')];
let mainDisplay = document.querySelector('main');

let body = document.querySelector('body');
let frontDisplay = body.firstElementChild;
let result = frontDisplay.querySelector('h2');


console.log(game.gameState());



//console.log(game.gameState())

mainSection.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        game.gameStart(button.id);
    });
});

