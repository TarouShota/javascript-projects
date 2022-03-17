let game = {
    //gameboard array, set of winning moves
    gameBoard: ["", "", "", "", "", "", "", "", ""],
    winningMoves: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ],

    //counter to decide which element to place on a tile

    counter: 0,
    //asigning value to an array, assing a text content to a div-tile from array
    asignValue(node) {
        this.gameBoard[node] = this.counter % 2 == 0 ? "X" : "O";
        return (mainSection[node].textContent = this.gameBoard[node]);
    },
    showBoard() {
        let whoStarts = document.createElement("section");
        body.appendChild(whoStarts);

        let whoStartsText = document.createElement("h1");

        //shows which player starts, appers for 2 seconds, and dissappears

        let hideWhoStarts = () => {
            return whoStarts.classList.add("hide-display");
        };

        whoStarts.appendChild(whoStartsText);

        welcomeSection.classList.add("hide-display");
        mainDisplay.classList.add("display-grid");

        whoStartsText.textContent = `${this.player1} starts !`;

        //calls hidewhostarts function with a timeone 2 seconds
        return setTimeout(hideWhoStarts, 2000);
    },

    gameOver(value) {
        mainDisplay.classList.add("blur-effect");
        frontDisplay.classList.add("display-flex");

        return (result.textContent = `${value} wins!`);
    },
    //check if array is full
    fullArray() {
        return this.gameBoard.every(function (e) {
            return e > "A";
        });
    },
    //check if the there is a winning move
    winState() {
        game.winningMoves.forEach((element) => {
            let tempArray = [];
            element.forEach((element) => {
                return tempArray.push(game.gameBoard[element]);
            });

            let checkForX = tempArray.every(function (e) {
                return e == "X";
            });

            let checkForO = tempArray.every(function (e) {
                return e == "O";
            });

            if (checkForX == true) {
                this.winnerDeclared = true;
                return game.gameOver(this.player2);
            } else if (checkForO == true) {
                this.winnerDeclared = true;
                return game.gameOver(this.player1);
            } else {
                this.winnerDeclared = false;
                return console.log(this.fullArray());
            }
        });
        return game.gameBoard;
    },
    //press on a tile
    gameStart: function (node) {
        if (this.gameBoard[node] < "A") {
            this.counter++;

            this.asignValue(node);
            this.winState();

            // if (this.fullArray() == false) {

            if (this.fullArray() == true && this.winnerDeclared == false) {
                return this.gameOver("friendship");
            }
            return this.gameBoard;
        }
    },
};

//creating all of the neccessary html elements, using dom
let theButton = document.querySelector("button");
let mainDisplay = document.querySelector("main");

let body = document.querySelector("body");
let frontDisplay = body.firstElementChild;

let result = frontDisplay.querySelector("h2");
let welcomeSection = document.createElement("section");

let firstPlayer = document.createElement("form");
let secondPlayer = document.createElement("form");

let secondPlayerInp = document.createElement("input");
let submitButton = document.createElement("button");

submitButton.setAttribute("type", "submit");
submitButton.textContent = "Start";

firstPlayerInp = document.createElement("input");

//all atributes, which will be passed to firstPlayerINp
firstPlayerInp.setAttribute;
let inputValues = [
    "type",
    "text",
    "id",
    "player1",
    "placeholder",
    "Player - O",
    "class",
    "form-input",
];

for (i = 0; i < 4; i += 1) {
    firstPlayerInp.setAttribute(
        `${inputValues.shift()}`,
        `${inputValues.shift()}`
    );
}

//cloning firstPlayerInp to a second one
secondPlayerInp = firstPlayerInp.cloneNode(true);

//adding a diferentional values to a secondplayerinp
secondPlayerInp.setAttribute("id", "player2");
secondPlayerInp.setAttribute("placeholder", "Player - X");

//adding a style attribute
firstPlayerInp.setAttribute(
    "style",
    "color:white; background:black; width:10rem; height:3rem"
);
secondPlayerInp.setAttribute(
    "style",
    "color:white; background:black; width:10rem; height:3rem"
);

//apending inputs to a form
firstPlayer.appendChild(firstPlayerInp);
secondPlayer.appendChild(secondPlayerInp);

//appending form to a section
welcomeSection.append(firstPlayer, secondPlayer);
welcomeSection.appendChild(submitButton);

//appending section to a body
body.appendChild(welcomeSection);

// loop to create div elements
for (i = 0; i < 9; i++) {
    const div = document.createElement("div");
    div.setAttribute("id", `${i}`);

    mainDisplay.appendChild(div);
}

//event listener to a sumbit button

submitButton.addEventListener("click", (event) => {
    game.player1 = firstPlayerInp.value;
    game.player2 = secondPlayerInp.value;

    game.showBoard();
});

//select all divs

let mainSection = [...document.querySelectorAll("div")];

//every tile-div gets assigned a click event
//passes it's div id to gameStart function

mainSection.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener("click", () => {
        game.gameStart(button.id);
    });
});
