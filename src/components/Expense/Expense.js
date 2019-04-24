import React, { Component } from 'react'
import './Expense.css'
import { connect } from 'react-redux'
import { deleteExp, updateExp, getExpByUser } from './../../ducks/expReducer'

class Expense extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.expense.exp_id,
            category: this.props.expense.exp_category,
            date: this.props.expense.exp_date,
            name: this.props.expense.exp_name,
            amount: this.props.expense.exp_amount,
            memo: this.props.expense.exp_memo,
            edit: false
        }
    }


    handleChange = e => {
        let { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleDelete = () => {
        this.props.deleteExp(this.props.expense.exp_id)
    }

    editAnExp = () => {
        let { category, date, name, amount, memo } = this.state
        this.props.updateExp(this.props.expense.exp_id, category, date, name, amount, memo)
    }

    handleEditClick = () => {
        this.setState({
            edit: true
        })
    }

    handleUpdateClick = async () => {

        await this.editAnExp()
        this.setState({
            edit: false
        })
    }

    render() {
        // console.log(22222, this.props)
        // console.log(this.state.name)
        // if(this.props.expense.exp_id === 28) console.log(4545454, this.props.expense)
        return this.state.edit ? (
            <div>
                <div>
                    <input name='date' value={this.state.date} type='date' onChange={this.handleChange} />
                    <select name='category' value={this.state.category} onChange={this.handleChange}>
                        <option value="Misc">Misc</option>
                        <option value="Meals">Meals</option>
                        <option value="Shopping">Shopping</option>
                        <option value="Transportation">Transportation</option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Housing">Housing</option>
                        <option value="Utilities">Utilities</option>
                        <option value="Insurance">Insurance</option>
                        <option value="Health Care">Health Care</option>
                        <option value="Travel">Travel</option>
                    </select> />
                    <input name='name' value={this.state.name} onChange={this.handleChange} />
                    <input name='amount' value={this.state.amount} onChange={this.handleChange} />
                    <input name='memo' value={this.state.memo} onChange={this.handleChange} />
                </div>
                <button onClick={this.handleUpdateClick}>Confirm</button>
            </div>
        ) : (

                <div className='exp-border-box'>

                    <div className='each-exp'>
                        <div className='exp-info'>
                            <p>{this.props.expense.exp_date}</p>
                        </div>
                        <div className='exp-info'>
                            <p>{this.props.expense.exp_category}</p>
                        </div>
                        <div className='exp-info'>
                            <p>{this.props.expense.exp_name}</p>
                        </div>
                        <div className='exp-info'>
                            <p>{this.props.expense.exp_amount}</p>
                        </div>
                        <div className='exp-info'>
                            <p>{this.props.expense.exp_memo}</p>
                        </div>
                        <button onClick={this.handleDelete}>X</button>
                        <button onClick={this.handleEditClick}>Edit</button>

                    </div>
                </div>

            )
    }
}
function mapState(reduxState) {
    return { reduxState }
}
export default connect(mapState, { deleteExp, updateExp, getExpByUser })(Expense)


