// Аннотация функций
const fn1 = (num: number): string => {
    return String(num);
};

// Необязательные параметры
type CallBack = (num: number) => string;

function fn2(cb?: CallBack) {
    if (cb === undefined) {
        cb = String;
    }
    cb(12);
}
// Параметры по умолчанию
function createPoint(x: number = 0, y: number = 0): [number, number] {
    return [x, y]
}

createPoint(10);


// Непредсказуемое число параметров
function fn3(...nums: number[]): string  {
    return nums.join('-');
}


// Интерфейсы и параметры функций
interface Printable {
    label: string;
}

function printReport(obj: Printable): void {
    console.log(obj.label);
}


const drink = {
    label: 'pepsi',
    price: 90,
}

const phone = {
    label: 'Huawei P10',
    price: 11000,
}

printReport(drink);
printReport(phone);
printReport({label: '', price: 100});


// Перегрузка функций
function pickCard(x: number): {suit: string; card: number };
function pickCard(x: {suit: string; card: number }[]): number;
function pickCard(x): any {
    if (typeof x === 'object') {
        let pickCard = Math.floor(Math.random() * x.length);
        return pickCard;
    }
    else if (typeof x === 'number') {
        return {suit: '', card: x % 13 };
    }
}

pickCard([{ suit: 'abc', card: 5 }]);