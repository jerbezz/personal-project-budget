import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import {createExp, getExpByUser, deleteExp} from './../../ducks/expReducer'
import {getData} from './../../ducks/authReducer'
import {connect} from 'react-redux'
import Expense from './../Expense/Expense'

class Expenses extends Component{
    constructor(){
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

    componentDidMount(){
        console.log(123,this.props)
        this.props.getData()
        this.props.getExpByUser()
    }
    
    createNewExp = () => {
        let {category, date, name, amount, memo} = this.state
        this.props.createExp(category, date, name, amount, memo)
    }

    deleteAnExp = () => {
        this.props.deleteExp()
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
    
    render(){
        // console.log(this.props)
        // console.log(1111, this.props.expense.expenses)
        return(
            <div>
                <nav className='nav-items'>
                    <Link to='/expenses'>Expenses</Link>
                    <Link to='/budget'>Budget</Link>
                    <Link to='/reports'>Reports</Link>
                </nav>
                <div>
                    Category: <input name='category' value={this.state.category} onChange={this.handleChange}></input>
                    Date: <input  name='date' value={this.state.date} onChange={this.handleChange} type='date'></input>
                    Name: <input name='name' value={this.state.name} onChange={this.handleChange}></input>
                    Amount: <input name='amount' value={this.state.amount} onChange={this.handleChange}></input>
                    Memo: <input name='memo' value={this.state.memo} onChange={this.handleChange}></input>
                    <button onClick={this.createNewExp}>Add Expense</button>
                </div>
                {this.props.expense.expenses.map((item, i) => {
                    return <Expense 
                    key={item.exp_id} expense={item} 
                    deleteAnExp={this.deleteAnExp}
                     />
                })}
                
                
            </div>
        )
    }
}

const mapState = (reduxState) => reduxState
export default connect(mapState, {getData, createExp, getExpByUser, deleteExp})(Expenses)