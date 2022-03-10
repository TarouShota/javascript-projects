let game = {
    gameBoard: ['', '', '', '', '', '', '', '', ''],
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
        this.twoD = [this.first, this.second, this.third]
        return this.twoD[0].join('');
        switch (this) {
            case this.gameBoard.slice():
        }
    },
    gameOver() {
        mainDisplay.classList.add('blur-effect')
        frontDisplay.classList.add('display-flex')

    },
    gameStart: function (node) {

        if (this.gameBoard[node] != "X" && this.gameBoard[node] != "O") {
            if (this.gameboardString.length != 1) {
                this.asignValue(node);
                this.updateArray()
            } else {
                this.asignValue(node);
                this.gameOver();
            }
        }
    }
}
game.gameboardString = 0;



let theButton = document.querySelector('button');
let mainSection = [...document.querySelectorAll('div')];
let mainDisplay = document.querySelector('main');

let body = document.querySelector('body');
let frontDisplay = body.firstElementChild;
let header = frontDisplay





//console.log(game.gameState())

mainSection.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        game.gameStart(button.id);
    });
});

