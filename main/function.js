"use strict";
// Аннотация функций
const fn1 = (num) => {
    return String(num);
};
function fn2(cb) {
    if (cb === undefined) {
        cb = String;
    }
    cb(12);
}
// Параметры по умолчанию
function createPoint(x = 0, y = 0) {
    return [x, y];
}
createPoint(10);
// Непредсказуемое число параметров
function fn3(...nums) {
    return nums.join('-');
}
function printReport(obj) {
    console.log(obj.label);
}
const drink = {
    label: 'pepsi',
    price: 90,
};
const phone = {
    label: 'Huawei P10',
    price: 11000,
};
printReport(drink);
printReport(phone);
printReport({ label: '', price: 100 });
function pickCard(x) {
    if (typeof x === 'object') {
        let pickCard = Math.floor(Math.random() * x.length);
        return pickCard;
    }
    else if (typeof x === 'number') {
        return { suit: '', card: x % 13 };
    }
}
pickCard([{ suit: 'abc', card: 5 }]);
