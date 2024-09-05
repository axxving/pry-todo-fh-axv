import { Todo } from "../todos/models/todo.model"

const Filter = {
    All: 'all',
    Completed: 'Completed',
    Pending: 'Pending'
}

const state = {
    todos: [
        new Todo('Piedra del alma'),
        new Todo('Piedra del poder'),
        new Todo('Piedra del imaginaria'),
    ],
    filter: Filter.All,
}

const initStore = () => {
    console.log(state)
    console.log('InitStore Aguacate');
}

export default {
    initStore,
}