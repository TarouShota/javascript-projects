let game = {
    gameBoard: ['', '', '', '', '', '', '', '', ''],
    counter: 1,
    gameStart: function (node) {
        if (this.gameBoard[node] !== "X" && this.gameBoard[node] !== "O") {
            this.gameBoard[node] = (this.counter % 2 == 0) ? "X" : "O";
            mainSection[node].textContent = this.gameBoard[node]
            this.counter++
        }
    }
}
for (i = 0; i < 3; i++) {
    for (y = 0; y < 3; y++) {
        console.log(game.gameBoard[i][y])
    }
}


let theButton = document.querySelector('button');
let mainSection = [...document.querySelectorAll('div')];
console.log(mainSection);

mainSection.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        game.gameStart(button.id);
    });
});

theButton.onclick = () => {
    if (game.counter % 2 == 0) {
        game.gameStart('X')
    } else {
        game.gameStart('O')
    }
};



console.log(game.gameBoard);
console.log(game.gameBoard[0][0]);