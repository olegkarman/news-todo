import { compose, createStore, applyMiddleware } from 'redux';
import persistState from 'redux-localstorage';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const enhancer = compose(composeWithDevTools(), persistState(), applyMiddleware(thunk))

export default createStore(rootReducer, enhancer);
