import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import promise from 'redux-promise'
import thunk from 'redux-thunk'

const configureStore = state => createStore( rootReducer, state, applyMiddleware(promise, thunk) )

export default configureStore
