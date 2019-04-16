import {createStore, applyMiddleware} from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import authReducer from './ducks/authReducer'
// import expReducer from './ducks/expReducer'
// import budgetReducer from './ducks/budgetReducer'
// expReducer, budgetReducer,
export default createStore( authReducer, applyMiddleware(promiseMiddleware))