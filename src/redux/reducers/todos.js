import { ADD_TODOS } from '../actionTypes'

const initialState = {
    allIds: [],
    byIds: {},
}

const todos = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODOS: {
            const { title, description, status, date } = action.payload
            const id = Math.max(0, ...state.allIds) + 1;
            return {
                ...state,
                allIds: [...state.allIds, id],
                byIds: {
                    ...state.byIds,
                    [id]: {
                        id,
                        title,
                        description,
                        status,
                        date
                    },
                },
            }
        }
        default:
            return state
    }
};

export default todos;
