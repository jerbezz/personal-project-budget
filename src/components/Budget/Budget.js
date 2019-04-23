import React, { Component } from 'react'
import './Budget.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getData } from './../../ducks/authReducer'
import { getExpByUser } from './../../ducks/expReducer'
import { createBudget, getBudgetByUser } from './../../ducks/budgetReducer'
import { Line, Bar, Radar, Doughnut, Pie, Polar, Bubble } from 'react-chartjs-2';

class Budget extends Component {
    constructor() {
        super()
        this.state = {
            budgetIncome: '',
            budgetExpenses: ''
        }
    }

    handleChange = e => {
        let { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    componentDidMount() {
        this.props.getData()
        this.props.getBudgetByUser()
        this.props.getExpByUser()
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
        // console.log(2, this.props.budget.budgets)
        console.log(123, this.props.expense.expenses)


        let newBudget = budgets[0] ? (budgets[budgets.length - 1].budget_income) : ('Budget an Income Amount')
        let newExpenses = budgets[0] ? (budgets[budgets.length - 1].budget_expenses) : ('Budget an Expense Amount')


        console.log(555, this.props.expense.expenses)



        let userExpTotal = expenses[0] ? (expenses.map(item => {
            return Number(item.exp_amount)
        }).reduce((total, curr) => {
            return total += curr
        })) : ('error')

        let miscTotal = expenses[0] ? (expenses.filter(item => {
            if (item.exp_category === 'Misc') {
                return item
            }
        }).map(item => {
            return Number(item.exp_amount)
        }).reduce((total, curr) => {
            return total += curr
        }, 0)) : ('error')

        let mealsTotal = expenses[0] ? (expenses.filter(item => {
            if (item.exp_category === 'Meals') {
                return item
            }
        }).map(item => {
            return Number(item.exp_amount)
        }).reduce((total, curr) => {
            return total += curr
        }, 0)) : ('error')

        let shoppingTotal = expenses[0] ? (expenses.filter(item => {
            if (item.exp_category === 'Shopping') {
                return item
            }
        }).map(item => {
            return Number(item.exp_amount)
        }).reduce((total, curr) => {
            return total += curr
        }, 0)) : ('error')

        let transTotal = expenses[0] ? (expenses.filter(item => {
            if (item.exp_category === 'Transportation') {
                return item
            }
        }).map(item => {
            return Number(item.exp_amount)
        }).reduce((total, curr) => {
            return total += curr
        }, 0)) : ('error')

        let entTotal = expenses[0] ? (expenses.filter(item => {
            if (item.exp_category === 'Entertainment') {
                return item
            }
        }).map(item => {
            return Number(item.exp_amount)
        }).reduce((total, curr) => {
            return total += curr
        }, 0)) : ('error')

        let houseTotal = expenses[0] ? (expenses.filter(item => {
            if (item.exp_category === 'Housing') {
                return item
            }
        }).map(item => {
            return Number(item.exp_amount)
        }).reduce((total, curr) => {
            return total += curr
        }, 0)) : ('error')

        let utilTotal = expenses[0] ? (expenses.filter(item => {
            if (item.exp_category === 'Utilities') {
                return item
            }
        }).map(item => {
            return Number(item.exp_amount)
        }).reduce((total, curr) => {
            return total += curr
        }, 0)) : ('error')

        let insTotal = expenses[0] ? (expenses.filter(item => {
            if (item.exp_category === 'Insurance') {
                return item
            }
        }).map(item => {
            return Number(item.exp_amount)
        }).reduce((total, curr) => {
            return total += curr
        }, 0)) : ('error')

        let healthTotal = expenses[0] ? (expenses.filter(item => {
            if (item.exp_category === 'Health Care') {
                return item
            }
        }).map(item => {
            return Number(item.exp_amount)
        }).reduce((total, curr) => {
            return total += curr
        }, 0)) : ('error')

        let travelTotal = expenses[0] ? (expenses.filter(item => {
            if (item.exp_category === 'Travel') {
                return item
            }
        }).map(item => {
            return Number(item.exp_amount)
        }).reduce((total, curr) => {
            return total += curr
        }, 0)) : ('error')

        let newDifferences = newExpenses - userExpTotal
      

       
            

        return (
            <div>
                <div className='nav-items'>
                    <Link to='/expenses'>Expenses</Link>
                    <Link to='/budget'>Budget</Link>
                    <Link to='/reports'>Reports</Link>
                </div>
                <div>
                    <input type='number' name='budgetIncome' value={this.state.budgetIncome} onChange={this.handleChange}></input>
                    <input type='number' name='budgetExpenses' value={this.state.budgetExpenses} onChange={this.handleChange}></input>
                    <button onClick={this.handleAddNewClick}>Create Budget</button>
                </div>
                <p>{newBudget}</p>
                <p>{newExpenses}</p>
                <p>Total Expenses: {userExpTotal}</p>
                <p>Misc Total: {miscTotal}</p>
                <p>Meals Total: {mealsTotal}</p>
                <p>Shopping Total: {shoppingTotal}</p>
                <p>Transportation Total: {transTotal}</p>
                <p>Entertainment Total: {entTotal}</p>
                <p>Housing Total: {houseTotal}</p>
                <p>Utilities Total: {utilTotal}</p>
                <p>Insurance Total: {insTotal}</p>
                <p>Health Care Total: {healthTotal}</p>
                <p>Travel Total: {travelTotal}</p>
                <p>Difference of Budgeted vs. Actual Expenses: {newDifferences}</p>

                <Doughnut
                data={{labels: ['Misc', 'Meals', 'Shopping', 'Transportation', 'Entertainment', 'Housing', 'Utilities', 'Insurance', 'Health Care', 'Travel'],
                datasets:[
                  {
                    label:'Population',
                    data:[
                      miscTotal,
                      mealsTotal,
                      shoppingTotal,
                      transTotal,
                      entTotal,
                      houseTotal,
                      utilTotal,
                      insTotal,
                      healthTotal,
                      travelTotal
                    ],
                    backgroundColor:[
                      'rgba(255, 99, 132, 0.6)',
                      'rgba(54, 162, 235, 0.6)',
                      'rgba(255, 206, 86, 0.6)',
                      'rgba(75, 192, 192, 0.6)',
                      'rgba(153, 102, 255, 0.6)',
                      'rgba(255, 159, 64, 0.6)',
                      'rgba(255, 99, 132, 0.6)',
                      'rgba(54, 162, 235, 0.6)',
                      'rgba(255, 206, 86, 0.6)',
                      'rgba(75, 192, 192, 0.6)'
                    ]
                  }
                ]
              }}

              options={{
                title:{
                  display:true,
                  text:'Total Expenses by Category',
                  fontSize:25
                },
                legend:{
                  display:true,
                  position:'right'
                }
              }}
                />
            </div>
        )
    }
}

const mapState = (reduxState) => reduxState
export default connect(mapState, { getData, createBudget, getBudgetByUser, getExpByUser })(Budget)