"use strict";
// generic
const valueFactory = (x) => x;
const myValue = valueFactory(11);
const x = {
    value: 1,
};
class ArrayOfNumbers {
    constructor(collection) {
        this.collection = collection;
    }
    get(index) {
        return this.collection[index];
    }
}
class ArrayOfString {
    constructor(collection) {
        this.collection = collection;
    }
    get(index) {
        return this.collection[index];
    }
}
// сокращенная версия
class ArrayOfAnything {
    constructor(collection) {
        this.collection = collection;
    }
    get(index) {
        return this.collection[index];
    }
}
new ArrayOfAnything(['1', '2', 's']);
new ArrayOfAnything([0, 2, 3]);
function printString(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
function printNumbers(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
function printAnything(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
printAnything([1, 2, 34]);
function fillArray(len, elem) { }
{
    return new Array(len).fill(elem);
}
const arr1 = fillArray(10, '*');
function printLenght(arg) {
    return arg.length;
}
printLenght({ a: 1, length: 1 });
function getProperty(obj, key) {
    return obj[key];
}
const myObj = {
    a: 1,
    b: 2,
    c: 3,
};
// K === 'a' | 'b' | 'c'
getProperty(myObj, 'b');
