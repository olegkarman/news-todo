import axios from '../../utils/axios';
import {LOADING_STARTED, LOADING_FINISHED, LOADING_FAILED} from '../actionTypes';
import { newsApiKey } from '../../utils/constants';
import { extractSearchData } from '../../utils/extractSearchData';

export const loadNews = params => {
    console.log(params)
    return dispatch => {
        dispatch(loadingStarted())
        axios.get(`everything?${extractSearchData(params)}&${newsApiKey}`)
        .then(res => {
            dispatch(loadingFinished(res.articles));
        })
        .catch(err => {
            dispatch(loadingFailed(err.message));
        });
    }
}

export const loadingStarted = () => ({
    type: LOADING_STARTED
});

export const loadingFinished = news => ({
    type: LOADING_FINISHED,
    payload: { news }
});

export const loadingFailed = error => ({
    type: LOADING_FAILED,
    payload: { error }
});