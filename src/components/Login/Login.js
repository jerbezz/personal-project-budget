import React, {Component} from 'react'
import './Login.css'


class Login extends Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div className='login'>
                <div>Email: <input></input></div>
                <div> Password: <input></input></div>
                <div><button>Login</button></div>
            </div>
        )
    }
}

export default Login