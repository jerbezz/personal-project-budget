import axios from 'axios'


const initialState = {
    category: '',
    date: '',
    name: '',
    amount: '',
    memo: '',
    expenses: []
}

const CREATE_EXP = 'CREATE_EXP'
const GET_EXP_BY_USER = 'GET_EXP_BY_USER'

export function createExp(category, date, name, amount, memo){
    let data = axios.post('/api/expenses', {category, date, name, amount, memo}).then( res => res.data)
    return{
        type: CREATE_EXP,
        payload: data
    }
}

export function getExpByUser (){
    let data = axios.get('/api/expenses').then( res => res.data)
    return{
        type: GET_EXP_BY_USER,
        payload: data
    }
}


export default function reducer(state = initialState, action) {
    switch(action.type) {
        case CREATE_EXP + '_FULFILLED':
            return {...state,
                    category: action.payload, 
                    date: action.payload, 
                    name: action.payload, 
                    amount: action.payload, 
                    memo: action.payload}

        case GET_EXP_BY_USER + '_FULFILLED':
                return {...state, expenses: action.payload}
        default:
            return state;
    }
}

