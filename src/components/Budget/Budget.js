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

        let newBudget = budgets[0] ? (Number(budgets[budgets.length - 1].budget_income).toFixed(2)) : ('Budget an Income Amount')
        let newExpenses = budgets[0] ? (budgets[budgets.length - 1].budget_expenses) : ('Budget an Expense Amount')


        console.log(555, this.props.expense.expenses)

        let userExpTotal = monthExpenses[0] ? (monthExpenses.map(item => {
            return Number(item.exp_amount)
        }).reduce((total, curr) => {
            return total += curr
        }).toFixed(2)) : ('0.00')

        let miscMonth = monthExpenses[0] ? (monthExpenses.filter(item => {
            if (item.exp_category === 'Misc') {
                return item
            }
        }).map(item => {
            return Number(item.exp_amount)
        }).reduce((total, curr) => {
            return total += curr
        }, 0).toFixed(2)) : ('0.00')

        let mealsMonth = monthExpenses[0] ? (monthExpenses.filter(item => {
            if (item.exp_category === 'Meals') {
                return item
            }
        }).map(item => {
            return Number(item.exp_amount)
        }).reduce((total, curr) => {
            return total += curr
        }, 0).toFixed(2)) : ('0.00')

        let shoppingMonth = monthExpenses[0] ? (monthExpenses.filter(item => {
            if (item.exp_category === 'Shopping') {
                return item
            }
        }).map(item => {
            return Number(item.exp_amount)
        }).reduce((total, curr) => {
            return total += curr
        }, 0).toFixed(2)) : ('0.00')

        let transMonth = monthExpenses[0] ? (monthExpenses.filter(item => {
            if (item.exp_category === 'Transportation') {
                return item
            }
        }).map(item => {
            return Number(item.exp_amount)
        }).reduce((total, curr) => {
            return total += curr
        }, 0).toFixed(2)) : ('0.00')

        let entMonth = monthExpenses[0] ? (monthExpenses.filter(item => {
            if (item.exp_category === 'Entertainment') {
                return item
            }
        }).map(item => {
            return Number(item.exp_amount)
        }).reduce((total, curr) => {
            return total += curr
        }, 0).toFixed(2)) : ('0.00')

        let houseMonth = monthExpenses[0] ? (monthExpenses.filter(item => {
            if (item.exp_category === 'Housing') {
                return item
            }
        }).map(item => {
            return Number(item.exp_amount)
        }).reduce((total, curr) => {
            return total += curr
        }, 0).toFixed(2)) : ('0.00')

        let utilMonth = monthExpenses[0] ? (monthExpenses.filter(item => {
            if (item.exp_category === 'Utilities') {
                return item
            }
        }).map(item => {
            return Number(item.exp_amount)
        }).reduce((total, curr) => {
            return total += curr
        }, 0).toFixed(2)) : ('0.00')

        let insMonth = monthExpenses[0] ? (monthExpenses.filter(item => {
            if (item.exp_category === 'Insurance') {
                return item
            }
        }).map(item => {
            return Number(item.exp_amount)
        }).reduce((total, curr) => {
            return total += curr
        }, 0).toFixed(2)) : ('0.00')

        let healthMonth = monthExpenses[0] ? (monthExpenses.filter(item => {
            if (item.exp_category === 'Health Care') {
                return item
            }
        }).map(item => {
            return Number(item.exp_amount)
        }).reduce((total, curr) => {
            return total += curr
        }, 0).toFixed(2)) : ('0.00')

        let travelMonth = monthExpenses[0] ? (monthExpenses.filter(item => {
            if (item.exp_category === 'Travel') {
                return item
            }
        }).map(item => {
            return Number(item.exp_amount)
        }).reduce((total, curr) => {
            return total += curr
        }, 0).toFixed(2)) : ('0.00')

        let newDifferences = Number(newBudget) - Number(userExpTotal)

        // two decimals
        newDifferences = newDifferences.toFixed(2)
        // newBudget = newBudget.toFixed(2)



        return (
            <div>
                <nav className='nav-items'>
                    <h1><Link className='nav-link' to='/expenses'>Expenses</Link></h1>
                    <h1><Link className='nav-link' to='/budget'>Budget</Link></h1>
                    <h1><Link className='nav-link' to='/reports'>Reports</Link></h1>
                </nav>
                <div className='budget'>
                    <div className='bud-add-big-box'>
                        <div className='bud-left-top'>
                            <h2>Create Monthly Budget Amounts</h2>
                            <div className='bud-add-left-right'>
                                <div className='bud-add-left'>
                                    <h3>Monthly Income Budget:</h3>
                                    <h3>Monthly Expense Budget:</h3>
                                </div>
                                <div className='bud-add-right'>
                                    <div className='bud-add-right-first'>$<input type='number' name='budgetIncome' value={this.state.budgetIncome} onChange={this.handleChange}></input></div>
                                    <div className='bud-add-right-second'>$<input type='number' name='budgetExpenses' value={this.state.budgetExpenses} onChange={this.handleChange}></input></div>
                                </div>

                            </div>
                            <div><button className='budget-button' onClick={this.handleAddNewClick}>Create Budget</button></div>
                        </div>
                        <div className='bud-left-bottom'>
                            <h2>Budget Information</h2>
                            <div className='bud-add-left-right'>
                                <div className='bud-add-left'>
                                    <h3>Budgeted Monthly Income:</h3>
                                    <h3>Acutal Monthly Expenses:</h3>
                                    <h3>Remaining:</h3>
                                </div>
                                <div className='bud-add-right'>
                                    <div className='bud-add-bottom-right-first'><h3>${newBudget}</h3></div>
                                    <div className='bud-add-bottom-right-second'><h3>${userExpTotal}</h3></div>
                                    <div className='bud-add-bottom-right-third'><h3>${newDifferences}</h3></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bud-act'>
                        <div className='bud-act-big-box'>
                            <h2>Monthly Expense Amounts:</h2>
                            <div className='bud-mid-select'>
                                <select

                                    onSelect={this.getByMonth}
                                    value={this.state.month}
                                    onChange={e => this.handleSelectChange('month', e.target.value)}
                                >
                                    <option>Select a Month</option>
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
                            </div>
                            <div className='bud-mid-l-r'>

                                <div className='bud-mid-left'>
                                    <div><p>Misc:</p></div>
                                    <div><p>Meals:</p></div>
                                    <div><p>Shopping:</p></div>
                                    <div><p>Transportation:</p></div>
                                    <div><p>Entertainment:</p></div>
                                    <div><p>Housing:</p></div>
                                    <div><p>Utilities:</p></div>
                                    <div><p>Insurance:</p></div>
                                    <div><p>Health Care:</p></div>
                                    <div><p>Travel:</p></div>
                                    <div><br></br></div>
                                    <div><p>Total Expenses:</p></div>
                                </div>
                                <div className='bud-mid-right'>
                                    <div><p>${miscMonth}</p></div>
                                    <div><p>${mealsMonth}</p></div>
                                    <div><p>${shoppingMonth}</p></div>
                                    <div><p>${transMonth}</p></div>
                                    <div><p>${entMonth}</p></div>
                                    <div><p>${houseMonth}</p></div>
                                    <div><p>${utilMonth}</p></div>
                                    <div><p>${insMonth}</p></div>
                                    <div><p>${healthMonth}</p></div>
                                    <div><p>${travelMonth}</p></div>
                                    <div><br></br></div>
                                    <div><p>${userExpTotal}</p></div>

                                </div>
                            </div>
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