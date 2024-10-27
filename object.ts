type MyObj = {
    a: number;
    b: number;
    c: string;
}

interface MyObject {
    readonly a: number;
    b: number;
    c?: string;  // why error?
    [key: string]: string | number;
}

const obj: MyObject = {a: 1, b: 2, c: 'asbd', d: 'dddd', sd: 33};

const obj1: object = {};


const obj2: MyObject = {
    a: 1,
    b: 2,
    //c: ''
};

obj2.b = 22;


interface IPerson {
    name: string;
}

interface IPerson {
    age: number;
}

interface IAccount {
    email: string;
    login: string;
    active: boolean;
}

interface IDeveloper extends IPerson, IAccount {
    skills: string[],
    level?: string;
}

const john: IDeveloper = {
    name: 'John',
    age: 33,
    email: '',
    login: '',
    active: false,
    skills: ['JavaScript', 'TypeScript']
}

/*
const john: IPerson = {
    name: 'John',
    age: 33
};

interface IAccount  {
    login: string;
};

const myAcc: IAccount = {
    login: 'michey'
};
*/