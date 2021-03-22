import axios from '../../utils/axios';
import {LOADING_STARTED, LOADING_FINISHED, LOADING_FAILED} from '../actionTypes';
import { newsApiKey } from '../../utils/constants';
import { extractSearchData } from '../../utils/extractSearchData';

export const loadNews = (params, page = 1) => {
    console.log(params, page)
    return dispatch => {
        dispatch(loadingStarted(params));
        return axios.get(`everything?${extractSearchData(params)}&page=${page}&${newsApiKey}`)
        .then(res => {
            dispatch(loadingFinished(res.data));
        })
        .catch(err => {
            dispatch(loadingFailed(err));
        });
    }
};

export const loadingStarted = params => ({
    type: LOADING_STARTED,
    payload: { params }
});

export const loadingFinished = news => ({
    type: LOADING_FINISHED,
    payload: { news }
});

export const loadingFailed = error => ({
    type: LOADING_FAILED,
    payload: { error }
});