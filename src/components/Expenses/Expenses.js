import React,{Component} from 'react'
import {Link} from 'react-router-dom'

class Expenses extends Component{
    constructor(){
        super()
        this.state = {
            category: '',
            date: '',
            name: '',
            amount: '',
            memo: ''
        }
    }

    handleChange = e => {
        let { name, value } = e.target
        this.setState({
            [name]: value
        })
     }

     handleClick = () => {
        let gun = this.state
        this.props.handleAddGun(gun)
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
                    <button>Add Expense</button>
                </div>
                
            </div>
        )
    }
}
export default Expenses