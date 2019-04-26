import React, { Component } from 'react'
import './Budget.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getData } from './../../ducks/authReducer'
import { getExpByUser, getMonthExpByUser } from './../../ducks/expReducer'
import { createBudget, getBudgetByUser } from './../../ducks/budgetReducer'
import DoughnutMonthExpsByUser from '../Charts/DoughnutMonthExpsByUser';

class Budget extends Component {
    constructor() {
        super()
        this.state = {
            budgetIncome: '',
            budgetExpenses: '',
            month: ''
        }
    }

    handleChange = e => {
        let { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleSelectChange = async (props, value) => {
        // console.log('kevin')
        // console.log(props, value)
        await this.setState({
            [props]: value
        })
        // console.log(this.state.month)
        this.getByMonth()
    }

    componentDidMount() {
        this.props.getData()
        this.props.getBudgetByUser()
        this.props.getExpByUser()
    }

    getByMonth = () => {
        let { month } = this.state
        this.props.getMonthExpByUser(month)

    }

    addBudget = async () => {
        let { budgetIncome, budgetExpenses } = this.state
        await createBudget(budgetIncome, budgetExpenses)
        await this.props.getBudgetByUser()
    }

    handleAddNewClick = () => {
        this.addBudget()
    }




    render() {
        let { expenses } = this.props.expense
        let { budgets } = this.props.budget
        let { monthExpenses } = this.props.expense
        // console.log(2, this.props.budget.budgets)
        // console.log(123, this.props.expense.expenses)


        let newBudget = budgets[0] ? (budgets[budgets.length - 1].budget_income) : ('Budget an Income Amount')
        let newExpenses = budgets[0] ? (budgets[budgets.length - 1].budget_expenses) : ('Budget an Expense Amount')


        console.log(555, this.props.expense.expenses)



        // let newDifferences = newExpenses - userExpTotal

        let userExpTotal = monthExpenses[0] ? (monthExpenses.map(item => {
            return Number(item.exp_amount)
        }).reduce((total, curr) => {
            return total += curr
        })) : ('0.00')

        let miscMonth = monthExpenses[0] ? (monthExpenses.filter(item => {
            if (item.exp_category === 'Misc') {
                return item
            }
        }).map(item => {
            return Number(item.exp_amount)
        }).reduce((total, curr) => {
            return total += curr
        }, 0)) : ('0.00')

        let mealsMonth = monthExpenses[0] ? (monthExpenses.filter(item => {
            if (item.exp_category === 'Meals') {
                return item
            }
        }).map(item => {
            return Number(item.exp_amount)
        }).reduce((total, curr) => {
            return total += curr
        }, 0)) : ('0.00')

        let shoppingMonth = monthExpenses[0] ? (monthExpenses.filter(item => {
            if (item.exp_category === 'Shopping') {
                return item
            }
        }).map(item => {
            return Number(item.exp_amount)
        }).reduce((total, curr) => {
            return total += curr
        }, 0)) : ('0.00')

        let transMonth = monthExpenses[0] ? (monthExpenses.filter(item => {
            if (item.exp_category === 'Transportation') {
                return item
            }
        }).map(item => {
            return Number(item.exp_amount)
        }).reduce((total, curr) => {
            return total += curr
        }, 0)) : ('0.00')

        let entMonth = monthExpenses[0] ? (monthExpenses.filter(item => {
            if (item.exp_category === 'Entertainment') {
                return item
            }
        }).map(item => {
            return Number(item.exp_amount)
        }).reduce((total, curr) => {
            return total += curr
        }, 0)) : ('0.00')

        let houseMonth = monthExpenses[0] ? (monthExpenses.filter(item => {
            if (item.exp_category === 'Housing') {
                return item
            }
        }).map(item => {
            return Number(item.exp_amount)
        }).reduce((total, curr) => {
            return total += curr
        }, 0)) : ('0.00')

        let utilMonth = monthExpenses[0] ? (monthExpenses.filter(item => {
            if (item.exp_category === 'Utilities') {
                return item
            }
        }).map(item => {
            return Number(item.exp_amount)
        }).reduce((total, curr) => {
            return total += curr
        }, 0)) : ('0.00')

        let insMonth = monthExpenses[0] ? (monthExpenses.filter(item => {
            if (item.exp_category === 'Insurance') {
                return item
            }
        }).map(item => {
            return Number(item.exp_amount)
        }).reduce((total, curr) => {
            return total += curr
        }, 0)) : ('0.00')

        let healthMonth = monthExpenses[0] ? (monthExpenses.filter(item => {
            if (item.exp_category === 'Health Care') {
                return item
            }
        }).map(item => {
            return Number(item.exp_amount)
        }).reduce((total, curr) => {
            return total += curr
        }, 0)) : ('0.00')

        let travelMonth = monthExpenses[0] ? (monthExpenses.filter(item => {
            if (item.exp_category === 'Travel') {
                return item
            }
        }).map(item => {
            return Number(item.exp_amount)
        }).reduce((total, curr) => {
            return total += curr
        }, 0)) : ('0.00')

        return (
            <div>
                <div className='nav-items'>
                    <Link to='/expenses'>Expenses</Link>
                    <Link to='/budget'>Budget</Link>
                    <Link to='/reports'>Reports</Link>
                </div>
                <div className='budget'>
                    <div className='bud-add-big-box'>
                        <div className='bud-left-top'>
                            <h2>Create Monthly Budget Amounts</h2>
                            <div className='bud-add-left-right'>
                                <div className='bud-add-left'>
                                    <h2>Monthly Income Budget:</h2>
                                    <h2>Monthly Expense Budget:</h2>
                                </div>
                                <div className='bud-add-right'>
                                    <div className='bud-add-right-first'>$<input type='number' name='budgetIncome' value={this.state.budgetIncome} onChange={this.handleChange}></input></div>
                                    <div className='bud-add-right-second'>$<input type='number' name='budgetExpenses' value={this.state.budgetExpenses} onChange={this.handleChange}></input></div>
                                </div>

                            </div>
                            <div><button className='budget-button' onClick={this.handleAddNewClick}>Create Budget</button></div>
                        </div>
                        <div className='bud-left-bottom'>
                            {newBudget}
                            {newExpenses}
                        </div>
                    </div>
                    <div className='bud-act'>
                        <div className='bud-act-big-box'>
                            <h1>Monthly Expense Amounts:</h1>
                            <select

                                onSelect={this.getByMonth}
                                value={this.state.month}
                                onChange={e => this.handleSelectChange('month', e.target.value)}>
                                <option value='01'>January</option>
                                <option value='02'>February</option>
                                <option value='03'>March</option>
                                <option value='04'>April</option>
                                <option value='05'>May</option>
                                <option value='06'>June</option>
                                <option value='07'>July</option>
                                <option value='08'>August</option>
                                <option value='09'>September</option>
                                <option value='10'>October</option>
                                <option value='11'>November</option>
                                <option value='12'>December</option>
                            </select>
                            <p>{newBudget}</p>
                            <p>{newExpenses}</p>
                            <p>Total Expenses: {userExpTotal}</p>
                            <p>Misc Total: {miscMonth}</p>
                            <p>Meals Total: {mealsMonth}</p>
                            <p>Shopping Total: {shoppingMonth}</p>
                            <p>Transportation Total: {transMonth}</p>
                            <p>Entertainment Total: {entMonth}</p>
                            <p>Housing Total: {houseMonth}</p>
                            <p>Utilities Total: {utilMonth}</p>
                            <p>Insurance Total: {insMonth}</p>
                            <p>Health Care Total: {healthMonth}</p>
                            <p>Travel Total: {travelMonth}</p>
                            {/* <p>Difference of Budgeted vs. Actual Expenses: {newDifferences}</p> */}
                        </div>
                    </div>

                    <div className='bud-chart'>

                        <DoughnutMonthExpsByUser />
                    </div>
                </div>
            </div>
        )
    }
}

const mapState = (reduxState) => reduxState
export default connect(mapState, { getData, createBudget, getBudgetByUser, getExpByUser, getMonthExpByUser })(Budget)