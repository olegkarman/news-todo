import { todoStatus } from '../../utils/constants';
import { ADD_TODOS, REMOVE_TODOS, UPDATE_TODOS, COMPLETE_TODOS } from '../actionTypes'

const initialState = {
    lastId: 0,
    todosList: [],
}

const todos = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODOS: {
            return {
                ...state,
                lastId: state.lastId + 1,
                todosList: [
                    ...state.todosList,
                    {
                        id: state.lastId,
                        ...action.payload
                    },
                ],
            }
        }
        case REMOVE_TODOS: {
            const { id } = action.payload;
            let todosList = [...state.todosList];
            const index = todosList.findIndex(todo => todo.id === id);
            todosList[index].status = todoStatus.DELETED;
            return {
                ...state,
                todosList
            }
        }
        case COMPLETE_TODOS:
            const { id } = action.payload;
            let todosList = [...state.todosList];
            const index = todosList.findIndex(todo => todo.id === id);
            todosList[index].status = todosList[index].status === todoStatus.COMPLETED ? todoStatus.ACTIVE : todoStatus.COMPLETED;
            return {
                ...state,
                todosList
            }
        case UPDATE_TODOS: {
            const { id } = action.payload;
            let todosList = [...state.todosList];
            const index = todosList.findIndex(todo => todo.id === id);
            todosList[index] = {
                ...todosList[index],
                ...action.payload
            }
            return {
                ...state,
                todosList
            }
        }
        default:
            return state;
    }
};

export default todos;
