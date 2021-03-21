import { combineReducers } from 'redux';
import todos from './todos';
import news from './news';

export default combineReducers({ todos, news });
