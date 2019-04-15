import {createStore, applyMiddleware} from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import expReducer from './ducks/expReducer'
import budgetReducer from './ducks/budgetReducer'

export default createStore(expReducer, budgetReducer, applyMiddleware(promiseMiddleware))