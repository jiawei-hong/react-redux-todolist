import {SET_TODOS, ADD_TODO, UPDATE_TODO_WITH_INDEX, DELETE_TODO_WITH_INDEX, SET_SEARCH_TEXT} from "./actionTypes";

export const addTodo = todo => ({type: ADD_TODO, todo});
export const updateTodo = (index, todo) => ({type: UPDATE_TODO_WITH_INDEX, index, todo});
export const deleteTodo = index => ({type: DELETE_TODO_WITH_INDEX, index});
export const setTodos = todos => ({type: SET_TODOS, todos});
export const setSearchText = text => ({type: SET_SEARCH_TEXT, text});