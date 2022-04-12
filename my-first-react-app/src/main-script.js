// import { createSearchForm } from "./script.js";

import { useMap } from "react-use";

// createSearchForm(document.body, 'start');
export const characters = ['Bowser', 'Turnip-Head', 'Shinigami Ryuk', 'Patrick', 'Dio']

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
let turnipHead = new NormalHidden("turnip-head", range(3000, 3076));
let dio = new HardHidden("dio", range(5114, 5170));
let ryuk = new NormalHidden('ryuk', range(2758, 2843));
let patrick = new HardHidden('patrick', range(4616, 4668));



const chars = {
    bowser: bowser,
    turnipHead: turnipHead,
    ryuk: ryuk,
    patrick: patrick,
    dio: dio



};

let charsArray = [bowser, turnipHead, dio, ryuk, patrick];
dio.clicked();
let filtered = charsArray.filter(e => e.found == true);
console.log(filtered);

console.log(chars.bowser);
for (const char in charsArray) {
    console.log(char);
}
const mapped = charsArray.map(x => x.name);

console.log(mapped);

console.log(filtered);

console.log(bowser.clicked());
console.log(dio.clicked());



