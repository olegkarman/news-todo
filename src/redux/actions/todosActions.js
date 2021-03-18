import { ADD_TODOS } from '../actionTypes';

export const addTodos = (todo) => ({
    type: ADD_TODOS,
    payload: {
        title: todo.title,
        description: todo.description,
        status: todo.status,
        date: new Date()
    },
});
