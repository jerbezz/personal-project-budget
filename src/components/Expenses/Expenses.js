import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { createExp, getExpByUser } from './../../ducks/expReducer'
import { getData } from './../../ducks/authReducer'
import { connect } from 'react-redux'
import Expense from './../Expense/Expense'
import './Expenses.css'

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
                                    <option defaultValue>Misc</option>
                                    <option>Meals</option>
                                    <option>Shopping</option>
                                    <option>Transportation</option>
                                    <option>Entertainment</option>
                                    <option>Housing</option>
                                    <option>Utilities</option>
                                    <option>Insurance</option>
                                    <option>Health Care</option>
                                    <option>Travel</option>
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


            </div>
        )
    }
}

const mapState = (reduxState) => reduxState
export default connect(mapState, { getData, createExp, getExpByUser })(Expenses)