import axios from 'axios'
// import { bindActionCreators } from '../../../../../Library/Caches/typescript/3.4.3/node_modules/redux';


const initialState = {
    category: '',
    date: '',
    name: '',
    amount: '',
    memo: '',
    expenses: [],
    updated: false,
    month: '',
    monthExpenses: []
}

const CREATE_EXP = 'CREATE_EXP'
const GET_EXP_BY_USER = 'GET_EXP_BY_USER'
const DELETE_EXP = 'DELETE_EXP'
const UPDATE_EXP = 'UPDATE_EXP'
const GET_MONTH_EXP_BY_USER = 'GET_MONTH_EXP_BY_USER'

export function createExp(category, date, name, amount, memo) {
    console.log(category, date, name, amount, memo)
    let data = axios.post('/api/expenses', { category, date, name, amount, memo }).then(res => res.data)
    return {
        type: CREATE_EXP,
        payload: data
    }
}

export function getExpByUser() {
    console.log(111)
    let data = axios.get('/api/expenses').then(res => res.data)
    console.log(data)
    return {
        type: GET_EXP_BY_USER,
        payload: data
    }
}

export function deleteExp(id) {
    let data = axios.delete(`/api/expenses/${id}`, id).then(res => res.data)
    return {
        type: DELETE_EXP,
        payload: data
    }
}

export function updateExp(id, category, date, name, amount, memo) {
    let data = axios.put(`/api/expenses/${id}`, {id, category, date, name, amount, memo }).then(res => res.data)
    return {
        type: UPDATE_EXP,
        payload: data
    }
}

export function getMonthExpByUser (month) {
   let data = axios.post('/api/month/expenses', {month}).then(res => res.data)
   console.log(4444, data)
   return {
       type: GET_MONTH_EXP_BY_USER,
       payload: data
   }
}



export default function reducer(state = initialState, action) {
    // console.log(898989, action)
    switch (action.type) {
        case CREATE_EXP + '_FULFILLED':
            return {
                ...state,
                category: action.payload,
                date: action.payload,
                name: action.payload,
                amount: action.payload,
                memo: action.payload,
            }

        case GET_EXP_BY_USER + '_FULFILLED':
            console.log(action.payload)
            return { ...state, expenses: action.payload 
            }

        case DELETE_EXP + '_FULFILLED':
            return { ...state, expenses: action.payload 
            }

        case UPDATE_EXP + '_FULFILLED':
        // console.log(55555, action.payload)
            return {...state,
                expenses: action.payload
            }
        
        case GET_MONTH_EXP_BY_USER + '_FULFILLED':
            console.log(6556, action.payload)
            return {
                ...state,
                month: action.payload,
                monthExpenses: action.payload
            }

        default:
            return state;
    }
}

