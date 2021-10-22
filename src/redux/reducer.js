import {SET_TODOS, ADD_TODO, UPDATE_TODO_WITH_INDEX, DELETE_TODO_WITH_INDEX, SET_SEARCH_TEXT} from "./actionTypes";

function setTodos(state, action) {
    return {...state, todos: action.todos};
}

function addTodo(state, action) {
    const todos = [...state.todos];

    todos.push(action.todo);

    return {...state, todos};
}

function updateTodo(state, action) {
    const todos = [...state.todos];

    todos[action.index] = action.todo;

    return {...state, todos};
}

function deleteTodo(state, action) {
    const todos = [...state.todos];

    todos.splice(action.index, 1);

    return {...state, todos};
}

function setSearchText(state, action) {
    return {...state, searchText: action.text};
}

export const reducer = (state, action) => {
    switch (action.type) {
        case SET_TODOS:
            return setTodos(state, action)
        case ADD_TODO:
            return addTodo(state, action)
        case UPDATE_TODO_WITH_INDEX:
            return updateTodo(state, action)
        case DELETE_TODO_WITH_INDEX:
            return deleteTodo(state, action)
        case SET_SEARCH_TEXT:
            return setSearchText(state, action)
        default:
            return state;
    }
}