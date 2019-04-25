import React, { Component } from 'react'
import './Register.css'
import axios from 'axios'



class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        }
    }

    async register() {
        const { firstName, lastName, email, password } = this.state;
        const res = await axios.post('/auth/register', { firstName, lastName, email, password })
        if (res.data.loggedIn) this.props.history.push('/expenses')
        else alert(res.data.message)
    }

    render() {
        return (
            <div className='register'>
                <div className='reg-big-box'>
                    <div className='reg-left-side'>
                        <div className='reg-left-email-box'>First Name:</div>
                        <div className='reg-left-email-box'>Last Name:</div>
                        <div className='reg-left-email-box'>Email:</div>
                        <div>Password: </div>
                    </div>
                    <div className='reg-right-side'>
                        <div className='reg-right-email-box'><input onChange={(e) => this.setState({ firstName: e.target.value })} value={this.state.firstName} type="text"></input></div>
                        <div className='reg-right-email-box'><input onChange={(e) => this.setState({ lastName: e.target.value })} value={this.state.lastName} type="text"></input></div>
                        <div className='reg-right-email-box'><input onChange={(e) => this.setState({ email: e.target.value })} value={this.state.email} type="text"></input></div>
                        <div><input onChange={(e) => this.setState({ password: e.target.value })} value={this.state.password} type="text"></input></div>
                    </div>
                </div>
                    <div><button className='reg-button' onClick={() => this.register()}>Register</button></div>
            </div>
        )
    }
}

export default Register