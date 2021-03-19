import { ADD_TODOS, REMOVE_TODOS } from '../actionTypes';
import { todoStatus } from '../../utils/constants';

export const addTodos = todo => ({
    type: ADD_TODOS,
    payload: {
        title: todo.title,
        description: todo.description,
        status: todoStatus.ACTIVE,
        date: new Date()
    }
});

export const removeTodos = id => ({
    type: REMOVE_TODOS,
    payload: {id}
});
