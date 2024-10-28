const fn1 = (num: number): string => {
    return String(num);
};


type CallBack = (num: number) => string;

function fn2(cb?: CallBack) {
    if (cb === undefined) {
        cb = String;
    }
    cb(12);
}

function createPoint(x: number = 0, y: number = 0): [number, number] {
    return [x, y]
}

createPoint(10);

