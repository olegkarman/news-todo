import { compose, createStore } from 'redux'
import persistState from 'redux-localstorage'
import rootReducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'

const enhancer = compose(composeWithDevTools(), persistState())

export default createStore(rootReducer, enhancer)
