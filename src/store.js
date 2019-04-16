import {createStore, combineReducers, applyMiddleware} from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import authReducer from './ducks/authReducer'
import expReducer from './ducks/expReducer'
// import budgetReducer from './ducks/budgetReducer'
//budgetReducer,

const rootReducer = combineReducers({
    auth: authReducer,
    expense: expReducer
})


export default createStore( rootReducer, applyMiddleware(promiseMiddleware))