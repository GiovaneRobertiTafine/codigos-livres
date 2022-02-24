type Arrayish = { [n: number]: unknown; };
type A = keyof Arrayish;
//   ^ = type A = number
const testArrayish: Mapish = { ['2']: false };
const testArray: A = 1;

type Mapish = { [k: string]: unknown; };
type M = keyof Mapish;
//   ^ = type M = string | number
const testMapish: Mapish = { [2]: false };

type Point = { x: number; y: number; };
type P = keyof Point;
//   ^ = type P = keyof "x" || "y"
const testPoint: P = 'x';


type Language = 'EN' | 'ES';
const userLanguage: Language = 'EN';
const preferences = { language: userLanguage, theme: 'light' };

console.log(typeof preferences); // "object"
type Preferences = typeof preferences; // type '{language: 'EN''; theme: string; }'

type PreferenceKeys = keyof typeof preferences; // type '"language" | "theme"'


// extends keyof
// extends, neste caso, é usado para restringir o tipo de um parâmetro genérico . Exemplo:

// <T, K extends keyof T>

// Kpode, portanto, ser apenas um nome de propriedade pública de T. Não tem nada a ver com estender um tipo ou herança, ao contrário de estender interfaces .

// Um uso de extends keyofpode ser o seguinte:

interface Person {
    age: number;
    name: string;
}
type Optional<T> = {
    [K in keyof T]?: T[K]
};

const person: Optional<Person> = {
    name: "Tobias",
};
console.log(person);


// in keyof
// iné usado quando estamos definindo uma assinatura de índice que queremos digitar com uma união de strings, números ou literais de símbolo. Em combinação com keyof, podemos usá-lo para criar o chamado tipo mapeado , que mapeia novamente todas as propriedades do tipo original.

// Um uso de in keyofpode ser o seguinte:

function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

const p: Person = {
    age: 21,
    name: "Tobias",
};

// name is a property of person
// --> no error
const n = getProperty(person, "name");

// gender is not a property of person
// --> error
// const gender = getProperty(person, "gender");

// ---------------------------------------------

interface Produto {
    nome: string,
    preco: number,
    quantidade?: number;
}

type Product = {
    nome: string;
    preco: number;
    quantidade?: number;
};

const p1: Produto = { nome: 'p1', preco: 120, quantidade: 1 };
const p2: Product = { nome: 'p2', preco: 130 };

console.log("p1", p1);
console.log("p2", p2);

// ---------------------------------------------

interface ISetPoint {
    func?: (x: number) => boolean;
    message?: string;
}

type TSetPoint = {
    func: (x: number) => string;
    message: string;
};


const s1: ISetPoint = {
    message: 's1',
    func: (n1: number) => n1 > 10,
};
console.log("s1", s1);

const s2: TSetPoint = {
    message: 's2',
    func: (n1: number) => "" + n1
};
console.log("s2", s2);

interface SetPointAnonimo extends ISetPoint {
    points: string[];
}

//  A interface pode utilizar extends para outra interface. Tipos não podem.
const s3: SetPointAnonimo = { message: "", func: (n1: number) => n1 > 10, points: [''] };
console.log("s3", s3);

// Trabalhando com spread
type TScores = [string, ...number[]];
let typeGaneshScore: TScores = ["Ganesh", 10, 20, 30];
console.log("typeGaneshScore", typeGaneshScore);
interface IScores {
    scores: [string, ...number[]];
}
let interGaneshScore: TScores = ["Ganesh", 10, 20, 30];
console.log("interGaneshScore", interGaneshScore);

// Interface extendendo Tipo
interface ITotalScore extends TSetPoint {
    finalize: string;
}
let interTotalScore: ITotalScore = {
    finalize: 'final',
    func: (n1: number) => "" + n1,
    message: 'Respaw'
};

// ---------------------------------------------

// primitive
type Name = string;

// object
type PartialPointX = { x: number; };
type PartialPointY = { y: number; };

// union
type PartialPoint = PartialPointX | PartialPointY;

let partialPoint: PartialPoint = { x: 5, y: 6 };
console.log("partialPoint", partialPoint);


type ExtendOptionalPoint = PartialPoint | {
    z: number;
};
let extendOptionalPoint: ExtendOptionalPoint = { x: 5, y: 6, z: 7 };
console.log("ExtendOptionalPoint", extendOptionalPoint);

type ExtendStrictPoint = PartialPoint & {
    z: number;
};
let extendStrictPoint: ExtendStrictPoint = { x: 5, y: 6, z: 7 };
console.log("ExtendStrictPoint", extendStrictPoint);


// ---------------------------------------------

type IClock = {
    currentDate: Date;
    setDate(d: Date): void;
};

class Clock implements IClock {
    currentDate: Date;

    constructor() {
        // this.currentDate = new Date();
    }

    setDate(d: Date) {
        // this.currentDate = d;
        console.log(d);
    }
}

var myClock: Clock = new Clock();
var date: Date = myClock.currentDate;

console.log("Data", date);


// var m: Map<string, number>;