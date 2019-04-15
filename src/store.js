import {createStore, applyMiddleware} from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import expReducer from './ducks/expReducer'
import budgetReducer from './ducks/budgetReducer'
// expReducer, budgetReducer,
export default createStore( applyMiddleware(promiseMiddleware))