// тип сложносоставной и не определяется автоматически.
let myScore0: number | string = 10;

type Score = number | string;

const myScore1: Score = '10';

let x: number = JSON.parse('6');
let str: string = JSON.parse('strstr');

let isOdd: boolean;

if (x % 2 === 0) {
    isOdd = false; 
} else {
    isOdd = true;
}