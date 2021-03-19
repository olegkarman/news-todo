import { ADD_TODOS, REMOVE_TODOS } from '../actionTypes'

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
            const index = state.todosList.findIndex(todo => todo.id === id);
            let todosList = [...state.todosList];
            todosList.splice(index, 1);
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
