// списки
const arr: string[] = ['a', 'b', 'c'];

let el = arr[0]
let el2 = arr.pop()
arr.push(3);  // error

const arr1: number[] = [];
const arr2: Array<number> = [1, 3];

const arr3: string[][] = [];
arr3.push(['a', 'b'])

type MyType = (string | number)
const arr4: (string | number)[] = []
//const arr4: MyType[] = []

// кортежи (tuple)
const tuple: [string, boolean, number] = ['abc', true, 0];
// csv 
type SimpleCsv = [string, string, number]
const example: SimpleCsv[] = [['str', 'st', 32]];

