// import { createSearchForm } from "./script.js";

// createSearchForm(document.body, 'start');
export const characters = ['Bowser', 'Turnip-Head', 'Shinigami Ryuk', 'Patrick', 'Dio']

class Hidden {
    constructor(name, position) {
        this.name = name;
        this.position = position;
    }
    clicked() {
        return `${this.name} was found D:`
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


let bowser = new EasyHidden("bowser", [123, 535]);
let luigi = new NormalHidden("luigi", [156, 123]);
let dio = new HardHidden("dio", [323, 23]);




console.log(bowser.clicked());
console.log(dio.clicked());

