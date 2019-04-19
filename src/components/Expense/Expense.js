import React, { Component } from 'react'
import './Expense.css'
// import { connect } from 'react-redux'
// import {deleteExp} from './../../ducks/expReducer'

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
        this.props.deleteAnExp(this.props.expense.exp_id)
    }

    // handleDelete = () => {
    //     this.props.deleteExp(this.props.expense.exp_id)
    // }

    handleEditClick = () => {
        this.setState({
            edit: true
        })
    }

    handleUpdateClick = () => {
        this.props.editAnExp()
        this.setState({
            edit: false
        })
    }

    render() {
        // console.log(22222, this.props.expense)
        return this.state.edit ? (
            <div>
                <div>
                    <input name='date' value={this.state.date} onChange={this.handleChange} />
                    <input name='category' value={this.state.category} onChange={this.handleChange} />
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
export default Expense
// const mapState = (reduxState) => reduxState
// export default connect(mapState, {deleteExp})(Expense)

// return this.state.edit ? (
//     <div className='each-gun'>
//       <div className='the-pic'>
//           <img src={this.props.gun.image} alt='' width='200'/>
//       </div>
//       <div>
//           <input name='make' value={this.state.make} onChange={this.handleChange}/>
//           <input name='model' value={this.state.model} onChange={this.handleChange}/>
//           <input name='round' value={this.state.round} onChange={this.handleChange}/>
//           <input name='price' value={this.state.price} onChange={this.handleChange}/>
//           <input name='phone' value={this.state.phone} onChange={this.handleChange}/>
//           <button className='confirm-button' onClick={this.handleUpdateClick}>Confirm</button>
//       </div>
//     </div>

// ) : (
//       <div className='gun-container'>
//       <div className='each-gun'>
//         <div className='the-pic'>
//           <img src={this.props.gun.image} alt='' height='200' width='200'/>
//         </div>
//         <div className='testing'>
//           <p><strong>Make:</strong> {this.props.gun.make}</p>
//           <p><strong>Model:</strong> {this.props.gun.model}</p>
//           <p><strong>Round:</strong> {this.props.gun.round}</p>
//           <p><strong>Price:</strong> $ {this.props.gun.price}</p>
//           <p><strong>Phone:</strong> {this.props.gun.phone}</p>
//           <button className='edit-button' onClick={this.handleEditClick}>Edit Gun</button>
//           <button className='delete-button' onClick={this.handleDeleteGun}>Sold / Delete Post</button>
//         </div>
//     </div>
//     </div>
// )
