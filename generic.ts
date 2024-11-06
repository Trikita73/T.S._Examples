// generic
const valueFactory = (x: number) => x;
const myValue = valueFactory(11);

type TypeFactory<X> = X;
type MyType = TypeFactory<string>;

interface valueContainer<Value> {
    value: Value;
}

type StringContainer = valueContainer<string>

const x: StringContainer = {
    value: 1, 
}

class ArrayOfNumbers {
    constructor(public collection: number[]) {}

    get(index: number): number {
        return this.collection[index];
    }
}

class ArrayOfString {
    constructor(public collection: string[]) {}

    get(index: number): string {
        return this.collection[index];
    }
}



// сокращенная версия
class ArrayOfAnything<T> {
    constructor(public collection: T[]) {}

    get(index: number): T {
        return this.collection[index];
    }
}

new ArrayOfAnything<string>(['1', '2', 's']);
new ArrayOfAnything<number>([0, 2, 3]);




function printString(arr: string[]): void {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}

function printNumbers(arr: number[]): void {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}

function printAnything<T>(arr: T[]): void {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}

printAnything<number>([1, 2, 34])




function fillArray<T>(len: number, elem: T): T{} {
    return new Array<T>(len).fill(elem);
}

const arr1 = fillArray<string>(10, '*');

// пример как использовать generic
interface Array<T> {
    concat(...items: Array<T[] | T>): T[];
    reduce<U>(
        callback: (state: U, element: T, index: number, array: T[]) => U,
        firstState?: U
    ): U;
}




interface Lenghtwise {
    length: number;
}


function printLenght<T extends Lenghtwise>(arg: T): number {
    return arg.length;
}
printLenght({a: 1, length: 1})




