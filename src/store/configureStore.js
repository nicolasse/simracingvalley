import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import promise from 'redux-promise'

const configureStore = state => createStore( rootReducer, state, applyMiddleware(promise) )

export default configureStore
