import { Todo } from "../todos/models/todo.model"

const Filters = {
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
    filter: Filters.All,
}

const initStore = () => {
    console.log(state)
    console.log('InitStore Aguacate');
}

const loadStore = () => {
    throw new Error('No implementado');
}

/**
 * 
 * @param {String} description 
 */
const addTodo = (description) => {
    throw new Error('No implementado');
}

const toggleTodo = (todoId) => {
    throw new Error('No implementado');
}

const deleteTodo = (todoId) => {
    throw new Error('No implementado');
}

const deleteCompleted = () => {
    throw new Error('No implementado');
}

const setFilter = (newFilter = Filters.All) => {
    throw new Error('No implementado');
}

const getCurrentFilter = () => {
    throw new Error('No implementado');
}

export default {
    addTodo,
    deleteCompleted,
    deleteTodo,
    getCurrentFilter,
    initStore,
    loadStore,
    setFilter,
    toggleTodo,
}