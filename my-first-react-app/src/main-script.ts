

//database of players, can be sorted out

/**
 * Create an array of numbers from start to stop, incrementing by step.
 * @param start - The first number in the sequence.
 * @param stop - The value of the stop parameter is the first number that is not in the set.
 * @param step - The step value.
 */
const range = (start: number, stop: number, step: number) =>
    Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + (i * step))


/* A class that represents a hidden object in a game, with a name, position, and difficulty level. */
class Hidden {
    name: string;
    position: any;
    found: boolean;
    dificulty: string;
    constructor(name: string, position: any, found: any) {

        this.name = name;
        this.position = position;
        this.found = false
    }
    clicked() {
        this.found = true
        return true

    }
}

class EasyHidden extends Hidden {

    constructor() {
        super(...arguments);
        this.dificulty = 'easy'

    }
}
class NormalHidden extends Hidden {
    constructor() {
        super(...arguments);
        this.dificulty = 'normal'
    }
}
class HardHidden extends Hidden {
    constructor() {
        super(...arguments);
        this.dificulty = 'hard'
    }

}


/* Creating new instances of the class Hidden. */
let bowser = new EasyHidden("bowser", range(2350, 2500, 1));
let turnipHead = new NormalHidden("turniphead", range(2950, 3010, 1));
let tom = new HardHidden("tom", range(5600, 5650, 1));
let ryuk = new NormalHidden('ryuk', range(2710, 2790, 1));
let patrick = new HardHidden('patrick', range(4550, 4650, 1));



export const chars = {
    bowser: bowser,
    turniphead: turnipHead,
    ryuk: ryuk,
    patrick: patrick,
    tom: tom
};

export let playerBoard = [
    { name: "Bata55555", gameWon: false, patrick: false, bowser: true, turnipHead: true, tom: true },
    { name: "OkysanOlesin", gameWon: true, patrick: true, bowser: true, turnipHead: true, tom: false },
    { name: "NaiMan667", gameWon: true, patrick: true, bowser: true, turnipHead: true, tom: true },
    { name: "LidlHasbik", gameWon: false, patrick: true, bowser: false, turnipHead: false, tom: false }
]

export let playerBoardNames = []
playerBoard.forEach(element => {
    playerBoardNames.push(element.name)
});
export const playerBoardKeys = Object.keys(playerBoard[0])

// patrick.clicked()
// turnipHead.clicked()
// ryuk.clicked();

// let charsArray = [bowser, turnipHead, dio, ryuk, patrick];
// // dio.clicked();



