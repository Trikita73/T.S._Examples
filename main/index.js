"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const url = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1.default.get(url).then(response => {
    const todo = response.data;
    const id = todo.id;
    const title = todo.title;
    const finished = todo.completed;
    logTodo(id, title, finished);
});
function logTodo(id, title, completed) {
    console.log(`
        Todo ID: ${id}
        Todo title: ${title}
        IS todo finished: ${completed} 
    `);
}
