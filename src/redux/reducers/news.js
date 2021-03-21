import {LOADING_STARTED, LOADING_FINISHED, LOADING_FAILED} from '../actionTypes';

const initialState = {
    isLoading: false,
    newsList: [],
    errorMessage: ''
};

const news = (state = initialState, action) => {
    switch (action.type) {
        case LOADING_STARTED:
            return {
                ...state,
                newsList: [],
                isLoading: true
            };
        case LOADING_FINISHED:
            return {
                ...state,
                isLoading: false,
                newsList: action.payload
            }
        case LOADING_FAILED:
            return {
                ...state,
                isLoading: false,
                errorMessage: action.payload
            }
        default:
            return state;
    }
}

export default news;