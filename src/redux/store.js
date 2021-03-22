import { compose, createStore, applyMiddleware } from 'redux';
import persistState from 'redux-localstorage';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

const enhancer = compose(applyMiddleware(thunk), persistState());

export default createStore(rootReducer, enhancer);
