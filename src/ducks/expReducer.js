import axios from 'axios'


const initialState = {
    exp_user_id: '',
    category: '',
    date: '',
    name: '',
    amount: '',
    memo: ''
}

const CREATE_EXP = 'CREATE_EXP'

export function createExp(){
    let data = axios.get('/api/expenses').then( res => res.data)
    return{
        type: GET_DATA,
        payload: data
    }
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case GET_DATA + '_FULFILLED':
            return {user: action.payload}

        default:
            return state;
    }
}