// списки
const arr: string[] = ['a', 'b', 'c'];
const arr1: number[] = [];
const arr2: Array<number> = [1, 3];

const arr3: string[][] = [];
arr3.push(['a', 'b'])

type MyType = (string | number)
const arr4: (string | number)[] = []
//const arr4: MyType[] = []