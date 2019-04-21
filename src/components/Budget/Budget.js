import React,{Component} from 'react'
import './Budget.css'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getData} from './../../ducks/authReducer'
import {createBudget} from './../../ducks/budgetReducer'

class Budget extends Component{
    constructor(){
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


    render(){
        return(
            <div>
                <div className='nav-items'>
                <Link to='/expenses'>Expenses</Link>
                <Link to='/budget'>Budget</Link>
                <Link to='/reports'>Reports</Link>
                </div>
                <div>
                    <input name='budgetIncome' value={this.state.budgetIncome} onChange={this.handleChange}></input>
                    <input name='budgetExpenses' value={this.state.budgetExpenses} onChange={this.handleChange}></input>
                </div>
            </div>
        )
    }
}

function mapState(reduxState) {
    return { reduxState }
}
export default connect(mapState, {getData, createBudget })(Budget)