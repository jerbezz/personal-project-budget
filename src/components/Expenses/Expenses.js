import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import {createExp, getExpByUser, deleteExp, updateExp} from './../../ducks/expReducer'
import {getData} from './../../ducks/authReducer'
import {connect} from 'react-redux'
import Expense from './../Expense/Expense'
import './Expenses.css'

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
    
    createNewExp = async () => {
        let {category, date, name, amount, memo} = this.state
        await this.props.createExp(category, date, name, amount, memo)
        await this.props.getExpByUser()
    }
    
    deleteAnExp = (id) => {
        this.props.deleteExp(id)
    }

    editAnExp = (id, {category, date, name, amount, memo}) => {
        this.props.updateExp(id, {category, date, name, amount, memo})
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
        // console.log(98876, this.props)
        // console.log(1111, this.props.expense.expenses)
        // console.log(9999999, this.props.expense)
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
                <div className='map-border-box'>
                {this.props.expense.expenses.map((item, i) => {
                    return <Expense 
                    key={item.exp_id} expense={item} 
                    deleteAnExp={this.deleteAnExp}
                    editAnExp={this.editAnExp}
                     />
                })}
                </div>
                
                
            </div>
        )
    }
}

const mapState = (reduxState) => reduxState
export default connect(mapState, {getData, createExp, getExpByUser, deleteExp, updateExp})(Expenses)