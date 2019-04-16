import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import createExp from './../../ducks/expReducer'
import {getData} from './../../ducks/authReducer'
import {connect} from 'react-redux'
import Expense from './../Expense/Expense'

class Expenses extends Component{
    constructor(){
        super()
        this.state = {
            exp_user_id: '',
            category: '',
            date: '',
            name: '',
            amount: '',
            memo: '',
            expenses: []
        }
    }

    componentDidMount(){
        this.props.getData()
    }
    
    createNewExp = () => {
        this.props.createExp()
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
            make: '',
            model: '',
            round: '',
            price: '',
            phone: '',
            image: ''
        })
    }
    
    render(){
        console.log(this.props)
        return(
            <div>
                <div className='nav-items'>
                    <Link to='/expenses'>Expenses</Link>
                    <Link to='/budget'>Budget</Link>
                    <Link to='/reports'>Reports</Link>
                </div>
                <div>
                    Category: <input name='category' onChange={this.handleChange}></input>
                    Date: <input  name='date' onChange={this.handleChange} type='date'></input>
                    Name: <input name='name' onChange={this.handleChange}></input>
                    Amount: <input name='amount' onChange={this.handleChange}></input>
                    Memo: <input name='memo' onChange={this.handleChange}></input>
                    <button onClick={this.createNewExp}>Add Expense</button>
                </div>
                <Expense/>
                
            </div>
        )
    }
}

const mapState = (reduxState) => reduxState
export default connect(mapState, {getData, createExp})(Expenses)