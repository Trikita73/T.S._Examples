// Interface VS Type

/*
interface UserA {
    name: string;
    age: number;
}

type UserB = { 
    name: string;
    age: number;
}

const user: UserB = {
    name: 'User',
    age: 30
}
*/


/*
interface SumA {
    (a: number, b: number): number;
}

type SumB = (a: number, b: number) => number;

const sum: SumA = (a, b) => a + b;
*/


/*
type NameA = string[];

interface NameB {
    [key: number]: string;
}
*/


/*
// Tuple
type State = [number, (n: number) => void]

const s: State = [123, (n) => {}]
*/


/*
// Union
type A = {
    age: number;
}

type B = {
    name: string;
}

type C = A | B;

interface D extends A, B {}

const obj: C = {
    age: 22,
    name: 'S'
}
*/


/*
// Auto Merge
interface B {
    name: string;
}

interface B {
    age: number;
}

const user: B = {
    name: 'S',
    age: 2
}
*/

