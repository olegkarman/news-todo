import {LOADING_STARTED, LOADING_FINISHED, LOADING_FAILED, RESET_NEWS} from '../actionTypes';

const initialState = {
    isLoading: false,
    params: {
        q: '',
        from: '',
        to: '',
        language: '',
        sortBy: '',
    },
    newsList: [],
    totalResults: 0,
    errorMessage: null,
    page: 0
};

const news = (state = initialState, action) => {
    switch (action.type) {
        case LOADING_STARTED:
            return {
                ...initialState,
                isLoading: true,
                params: action.payload.params
            };
        case LOADING_FINISHED:
            return {
                ...state,
                isLoading: false,
                newsList: action.payload.news.articles,
                totalResults: action.payload.news.totalResults,
                page: action.payload.page
            };
        case LOADING_FAILED:
            return {
                ...state,
                isLoading: false,
                errorMessage: action.payload
            };
        case RESET_NEWS:
            return {
                ...initialState
            };
        default:
            return state;
    }
}

export default news;