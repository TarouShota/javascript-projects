// import { createSearchForm } from "./script.js";

// import { useMap } from "react-use";

// createSearchForm(document.body, 'start');
export const characters = ['Bowser', 'Turnip-Head', 'Shinigami Ryuk', 'Patrick', 'Dio']

//database of players, can be sorted out

const range = (start, stop, step) =>
    Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + (i * step))


class Hidden {
    constructor(name, position, found) {
        this.name = name;
        this.position = position;
        this.found = false
    }
    clicked() {
        this.found = true
        return `${this.name} was found`

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


let bowser = new EasyHidden("bowser", range(2415, 2542, 1));
let turnipHead = new NormalHidden("turniphead", range(3000, 3076, 1));
let dio = new HardHidden("dio", range(5114, 5170, 1));
let ryuk = new NormalHidden('ryuk', range(2758, 2843, 1));
let patrick = new HardHidden('patrick', range(4616, 4668, 1));



export const chars = {
    bowser: bowser,
    turniphead: turnipHead,
    ryuk: ryuk,
    patrick: patrick,
    dio: dio
};

let charsArray = [bowser, turnipHead, dio, ryuk, patrick];
dio.clicked();

console.log(dio.position.includes(5171));
console.log(patrick.found)

console.log(chars.bowser.position.includes(2533));


console.log(chars.bowser.name);

for (const char in chars) {
    if (chars[`${char}`].found === false) {
        console.log(chars[`${char}`].name)
    }

}



