import axios from '../../utils/axios';
import {LOADING_STARTED, LOADING_FINISHED, LOADING_FAILED, RESET_NEWS} from '../actionTypes';
import { newsApiKey } from '../../utils/constants';
import { extractSearchData } from '../../utils/extractSearchData';
import { dateToSearchFormater, dateToSaveFormater } from '../../utils/dateFormater';

export const loadNews = (params, page = 1) => {
    return dispatch => {
        dispatch(loadingStarted(dateToSaveFormater(params, ['from', 'to'])));
        return axios.get(`everything?${extractSearchData(dateToSearchFormater(params, ['from', 'to']))}&page=${page}&${newsApiKey}`)
        .then(res => {
            dispatch(loadingFinished(res.data, page - 1));
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

export const loadingFinished = (news, page) => ({
    type: LOADING_FINISHED,
    payload: { news, page }
});

export const loadingFailed = error => ({
    type: LOADING_FAILED,
    payload: { error }
});

export const resetNews = () => ({
    type: RESET_NEWS
});