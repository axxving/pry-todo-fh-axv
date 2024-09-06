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

const getTodos = (filter = Filters.All) => {
    switch (filter) {
        case Filters.All:
            // nuevo arreglo con cada uno de esos valores
            return [...state.todos];
        case Filters.Completed:
            // tambien retorna un nuevo arreglo
            return state.todos.filter(todo => todo.done);
        case Filters.Pending:
            // El donde esta en false
            return state.todos.filter(todo => !todo.done);
        default:
            throw new Error(`Opcion ${filter} is not valid`);
    }
}

/**
 * 
 * @param {String} description 
 */
const addTodo = (description) => {
    if (!description) throw new Error('La descripcion es requerida');

    state.todos.push(new Todo(description));
}

const toggleTodo = (todoId) => {
    state.todos = state.todos.map(todo => {
        if (todo.id === todoId) {
            todo.done = !todo.done;
        }
        
        return todo;
    });
}

const deleteTodo = (todoId) => {
    state.todos = state.todos.filter(todo => todo.id !== todoId);
}

const deleteCompleted = () => {
    state.todos = state.todos.filter(todo => todo.done);
}

/**
 * 
 * @param {Filters} newFilter 
 */
const setFilter = (newFilter = Filters.All) => {
    state.filter = newFilter;
}

const getCurrentFilter = () => {
    return state.filter;
}

export default {
    addTodo,
    deleteCompleted,
    deleteTodo,
    getCurrentFilter,
    getTodos,
    initStore,
    loadStore,
    setFilter,
    toggleTodo,
}