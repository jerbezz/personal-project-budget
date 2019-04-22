import axios from 'axios'

const initialState = {
    budgetIncome: '',
    budgetExpenses: '',
    budgets: []
}

const CREATE_BUDGET = 'CREATE_BUDGET'
const GET_BUDGET_BY_USER = 'GET_BUDGET_BY_USER'

export function createBudget (budgetIncome, budgetExpenses) {
    let data = axios.post('/api/budget', {budgetIncome, budgetExpenses}).then(res => res.data)
        return {
            type: CREATE_BUDGET,
            payload: data
        }
}

export function getBudgetByUser () {
    let data = axios.get('/api/budget').then(res => res.data)
        return {    
            type: GET_BUDGET_BY_USER,
            payload: data
        }
}

export default function reducer(state = initialState, action) {
    switch(action.type){
        case CREATE_BUDGET + '_FULFILLED':
            return{
                ...state,
                budgetIncome: action.payload,
                budgetExpenses: action.payload
            }

        case GET_BUDGET_BY_USER + '_FULFILLED':
            console.log(action.payload)
            return {
                ...state,
                budgets: action.payload
            }

            default: 
            return state
    }
}