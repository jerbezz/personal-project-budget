import React, {Component} from 'react'
import './Register.css'


class Register extends Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div className='register'>
                <div>First Name: <input></input></div>
                <div>Last Name: <input></input></div>
                <div>Email: <input></input></div>
                <div>Password: <input></input></div>
                <div> <button>Register</button></div>
            </div>
        )
    }
}

export default Register