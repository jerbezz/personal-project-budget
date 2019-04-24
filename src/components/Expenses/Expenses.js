import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { createExp, getExpByUser } from './../../ducks/expReducer'
import { getData } from './../../ducks/authReducer'
import { connect } from 'react-redux'
import Expense from './../Expense/Expense'
import './Expenses.css'
import DoughtnutExpsByUser from './../Charts/DoughnutExpsByUser'

class Expenses extends Component {
    constructor() {
        super()
        this.state = {

            category: '',
            date: '',
            name: '',
            amount: '',
            memo: '',
            expenses: []
        }
    }

    componentDidMount() {
        console.log(123, this.props)
        this.props.getData()
        this.props.getExpByUser()
    }



    createNewExp = async () => {
        let { category, date, name, amount, memo } = this.state
        await this.props.createExp(category, date, name, amount, memo)
        await this.props.getExpByUser()
    }

    handleChange = e => {
        let { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleClick = () => {
        this.createNewExp()
        this.setState({
            category: '',
            date: '',
            name: '',
            amount: '',
            memo: ''
        })
    }

    render() {
        console.log(98876, this.props)
        // console.log(1111, this.props.expense.expenses)
        // console.log(9999999, this.props.expense)
        let { expenses } = this.props.expense

        let userExpTotal = expenses[0] ? (expenses.map(item => {
            return Number(item.exp_amount)
        }).reduce((total, curr) => {
            return total += curr
        })) : ('0.00')

        let miscTotal = expenses[0] ? (expenses.filter(item => {
            if (item.exp_category === 'Misc') {
                return item
            }
        }).map(item => {
            return Number(item.exp_amount)
        }).reduce((total, curr) => {
            return total += curr
        }, 0)) : ('0.00')

        let mealsTotal = expenses[0] ? (expenses.filter(item => {
            if (item.exp_category === 'Meals') {
                return item
            }
        }).map(item => {
            return Number(item.exp_amount)
        }).reduce((total, curr) => {
            return total += curr
        }, 0)) : ('0.00')

        let shoppingTotal = expenses[0] ? (expenses.filter(item => {
            if (item.exp_category === 'Shopping') {
                return item
            }
        }).map(item => {
            return Number(item.exp_amount)
        }).reduce((total, curr) => {
            return total += curr
        }, 0)) : ('0.00')

        let transTotal = expenses[0] ? (expenses.filter(item => {
            if (item.exp_category === 'Transportation') {
                return item
            }
        }).map(item => {
            return Number(item.exp_amount)
        }).reduce((total, curr) => {
            return total += curr
        }, 0)) : ('0.00')

        let entTotal = expenses[0] ? (expenses.filter(item => {
            if (item.exp_category === 'Entertainment') {
                return item
            }
        }).map(item => {
            return Number(item.exp_amount)
        }).reduce((total, curr) => {
            return total += curr
        }, 0)) : ('0.00')

        let houseTotal = expenses[0] ? (expenses.filter(item => {
            if (item.exp_category === 'Housing') {
                return item
            }
        }).map(item => {
            return Number(item.exp_amount)
        }).reduce((total, curr) => {
            return total += curr
        }, 0)) : ('0.00')

        let utilTotal = expenses[0] ? (expenses.filter(item => {
            if (item.exp_category === 'Utilities') {
                return item
            }
        }).map(item => {
            return Number(item.exp_amount)
        }).reduce((total, curr) => {
            return total += curr
        }, 0)) : ('0.00')

        let insTotal = expenses[0] ? (expenses.filter(item => {
            if (item.exp_category === 'Insurance') {
                return item
            }
        }).map(item => {
            return Number(item.exp_amount)
        }).reduce((total, curr) => {
            return total += curr
        }, 0)) : ('0.00')

        let healthTotal = expenses[0] ? (expenses.filter(item => {
            if (item.exp_category === 'Health Care') {
                return item
            }
        }).map(item => {
            return Number(item.exp_amount)
        }).reduce((total, curr) => {
            return total += curr
        }, 0)) : ('0.00')

        let travelTotal = expenses[0] ? (expenses.filter(item => {
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
                <nav className='nav-items'>
                    <Link to='/expenses'>Expenses</Link>
                    <Link to='/budget'>Budget</Link>
                    <Link to='/reports'>Reports</Link>
                </nav>
                <div className='exps-track-exp'>
                    <div className=''>
                        <h2>Track an Expense:</h2>
                        <div className='exp-create-info'>
                            <div className='exp-create-first-column'>
                                <div>Date: </div>
                                <div>Category: </div>
                                <div>Name: </div>
                            </div>
                            <div className='exp-create-second-column'>
                                <div><input name='date' value={this.state.date} onChange={this.handleChange} type='date'></input></div>
                                <div><select name='category' value={this.state.category} onChange={this.handleChange}>
                                    <option defaultValue value="Misc">Misc</option>
                                    <option value="Meals">Meals</option>
                                    <option value="Shopping">Shopping</option>
                                    <option value="Transportation">Transportation</option>
                                    <option value="Entertainment">Entertainment</option>
                                    <option value="Housing">Housing</option>
                                    <option value="Utilities">Utilities</option>
                                    <option value="Insurance">Insurance</option>
                                    <option value="Health Care">Health Care</option>
                                    <option value="Travel">Travel</option>
                                </select></div>
                                <div><input name='name' value={this.state.name} onChange={this.handleChange}></input></div>
                            </div>
                            <div className='exp-create-third-column'>
                                <div>Amount: </div>
                                <div>Memo: </div>
                            </div>
                            <div className='exp-create-fourth-column'>
                                <div><input name='amount' value={this.state.amount} onChange={this.handleChange}></input></div>
                                <div><input name='memo' value={this.state.memo} onChange={this.handleChange}></input></div>
                            </div>
                            <div className='exp-create-fifth-column'>
                                <div><button className='exp-create-button' onClick={this.createNewExp}>Add Expense</button></div>
                            </div>
                        </div>


                    </div>
                </div>
                <div className='expenses-left-right'>
                    <div className='map-border-box'>
                        <div className='exps-map-header'>
                            <h3>Date</h3>
                            <h3>Category</h3>
                            <h3>Name</h3>
                            <h3>Amount</h3>
                            <h3>Memo</h3>
                        </div>
                        {this.props.expense.expenses.map((item, i) => {
                            return <Expense
                                key={item.exp_id} index={i} expense={item} name={item.exp_name}
                                editAnExp={this.editAnExp}
                            />
                        })}
                    </div>
                    <div className='exps-rightside'>
                        <h1>Total Expenses for</h1>
                        <h1>{this.props.auth.user.firstName} {this.props.auth.user.lastName}</h1>
                        <div className='exps-tots-exp'>
                            <div className='exps-tots-exp-left'>
                                <p>Misc Total:</p>
                                <p>Meals Total:</p>
                                <p>Shopping Total:</p>
                                <p>Transportation Total:</p>
                                <p>Entertainment Total:</p>
                                <p>Housing Total:</p>
                                <p>Utilities Total:</p>
                                <p>Insurance Total:</p>
                                <p>Health Care Total:</p>
                                <p>Travel Total:</p>
                                <br></br>
                                <p>Total Expenses:</p>
                            </div>
                            <div className='exps-tots-exp-right'>
                                <p>${miscTotal}</p>
                                <p>${mealsTotal}</p>
                                <p>${shoppingTotal}</p>
                                <p>${transTotal}</p>
                                <p>${entTotal}</p>
                                <p>${houseTotal}</p>
                                <p>${utilTotal}</p>
                                <p>${insTotal}</p>
                                <p>${healthTotal}</p>
                                <p>${travelTotal}</p>
                                <br></br>
                                <p>${userExpTotal}</p>
                            </div>
                        </div>
                        <div className='exps-chart'>
                        <DoughtnutExpsByUser />
                        </div>
                    </div>

                </div>


            </div>
        )
    }
}

const mapState = (reduxState) => reduxState
export default connect(mapState, { getData, createExp, getExpByUser })(Expenses)