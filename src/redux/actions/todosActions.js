import { ADD_TODOS } from '../actionTypes';
import { todoStatus } from '../../utils/constants';

export const addTodos = (todo) => ({
    type: ADD_TODOS,
    payload: {
        title: todo.title,
        description: todo.description,
        status: todoStatus.ACTIVE,
        date: new Date()
    },
});
