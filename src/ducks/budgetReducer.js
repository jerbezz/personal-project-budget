import axios from 'axios'

const initialState = {
    budgetIncome: '',
    budgetExpenses: ''
}

const CREATE_BUDGET = 'CREATE_BUDGET'

export function createBudget (budgetIncome, budgetExpenses) {
    let data = axios.post('/api/budget', {budgetIncome, budgetExpenses}).then(res => res.data)
        return {
            type: CREATE_BUDGET,
            payload: data
        }
}

export default function reducer(state = initialState, action) {
    switch(action.type){
        case createBudget + '_FULFILLED':
            return{
                ...state,
                budgetIncome: action.payload,
                budgetExpenses: action.payload
            }

            default: 
            return state
    }
}