import { fetch_addTodo, fetch_deleteTodo,fetch_fetchTodos,fetch_updateTodo } from "../../api";

export const fetchTodos = () => async (dispatch) => {
    try {
        const res = await fetch_fetchTodos();
        console.log(res.data)
        dispatch({ type: 'FETCH_TODOS_SUCCESS', payload: res.data });
    } catch (error) {
        console.error(error);
    }
};

export const addTodo = (todo) => async (dispatch) => {
    try {
        const res = await fetch_addTodo(todo);
        dispatch({ type: 'ADD_TODO_SUCCESS', payload: res.data });
    } catch (error) {
        console.error(error);
    }
};

export const deleteTodo = (id) => async (dispatch) => {
    try {
        await fetch_deleteTodo(id);
        dispatch({ type: 'DELETE_TODO_SUCCESS', payload: id });
    } catch (error) {
        console.error(error);
    }
};

export const updateTodo = (id, data) => async (dispatch) => {
    console.log(data)
    try {
        const res = await fetch_updateTodo(id, data);
        dispatch({ type: 'UPDATE_TODO_SUCCESS', payload: res.data });
    } catch (error) {
        console.error(error);
    }
};