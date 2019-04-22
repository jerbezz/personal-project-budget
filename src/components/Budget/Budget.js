import React,{Component} from 'react'
import './Budget.css'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getData} from './../../ducks/authReducer'
import {createBudget, getBudgetByUser} from './../../ducks/budgetReducer'

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

    componentDidMount(){
        this.props.getData()
        this.props.getBudgetByUser()
    }

    addBudget = async () => {
        let {budgetIncome, budgetExpenses} = this.state
        await createBudget(budgetIncome, budgetExpenses)
        await this.props.getBudgetByUser()
    }

    handleAddNewClick = () => {
        this.addBudget()
    }
    
    
    render(){
        // console.log(12345, this.props.getData())
        console.log(6776, this.props)
        console.log(999999, this.props.budget.budgets)

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
                    <button onClick={this.handleAddNewClick}>Create Budget</button>
                </div>
                <p>{this.props.budget.budgets.budget_income}</p>
            </div>
        )
    }
}

const mapState = (reduxState) => reduxState
export default connect(mapState, { getData, createBudget, getBudgetByUser })(Budget)