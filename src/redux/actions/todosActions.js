import { ADD_TODOS, REMOVE_TODOS, UPDATE_TODOS } from '../actionTypes';
import { todoStatus } from '../../utils/constants';

export const addTodos = todo => ({
    type: ADD_TODOS,
    payload: {
        title: todo.title,
        description: todo.description,
        status: todoStatus.ACTIVE,
        date: new Date().toDateString()
    }
});

export const removeTodos = id => ({
    type: REMOVE_TODOS,
    payload: {id}
});

export const updateTodos = todo => ({
    type: UPDATE_TODOS,
    payload: {
        id: todo.id,
        title: todo.title,
        description: todo.description,
        status: todo.status
    }
});
