type A = {
    id: string;
    name: string;
}

type B = {
    id: string;
    name: string;
    description?: string;
}

 const a: A = {
    id: '1',
    name: 'Test A'
}

 const b: B = a;

 const boolA: boolean = true;

 const stringB: string = "test string" + 'test string 2' + `test string 3 ${boolA}`; // "test stringtest string 2test string 3 true"

 
const test: symbol = Symbol('test symbol');


const array: Array<number> = [2, 3, 5, 7, 11];
const array2: number[] = [1, 4, 6, 8, 9, 10];

const selectUser = (type: string) => {
    switch (type) {
        case 'admin':
            return { id: 1, name: 'Admin User', role: 'admin' };
        case 'guest':
            return { id: 2, name: 'Guest User', role: 'guest' };
        default:
            throwWhenUserNotFound();
    }
}

const throwWhenUserNotFound = (): never => {
    throw new Error('User not found');
}

const infiniteLoop = (): void => {
    while (true) {
        // do something forever
    }
}

let aa: string = "test";
const bb: unknown = '1234';

aa = bb;


aa.toUpperCase();

const cc: string = new String('hello world').toString();

const gg: object = {};

type Animal = {
    id: UniqueId;
    species: string;
    name: string;
    advantages: string[];
}

interface Animal2 {
    id: UniqueId;
    species: string;
    name: string;
    advantages: string[];
}

type UniqueId = number | string;

const dog: Animal = {
    id: 1,
    name: 'Rex',
    species: 'Dog',
    advantages: ['loyal', 'friendly', 'good guard']
};

interface Shape {
    area(): number;
    kind?: string;
}

interface Circle extends Shape {
    radius: number;
    kind: 'circle';
}

const myCircle: Circle = {
    radius: 5,
    area(): number {
        return Math.PI * this.radius * this.radius;
    },
    kind: 'circle',
}


let myName = 'TypeScript Playground';
myName = 1234;

function greet(name: string) {
    return +name;
}

type Bird = {
    name: string;
    canFly: boolean;
}

type Fish = {
    name: string;
    canSwim: boolean;
}

function isFish(animal: Bird | Fish): boolean {
    if ('canSwim' in animal) {
        animal.canSwim

        return true;
    }
    animal.canFly;
    return false;
}

type ValueT<T> = {
    value: T;
    name: string;
}

const numberValue: ValueT<{ id: string; }> = {
    value: { id: '123' },
    name: 'The Answer'
}

const id = <T>(input: T): T => input;

id<number>(123);

function value<R>(v: R): R {
    return v;
}


const arrowFunction = () => (123)

function functionName() {

    return;
}

class Person {
    private name: string

    constructor(name: string) {
        this.name = name;
    }

    public sayHello(): string {
        return `Hello, my name is ${this.name}`;
    }
}