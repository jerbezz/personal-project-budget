import React, {Component} from 'react'
import './Register.css'
import axios from 'axios'



class Register extends Component{
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
        else alert('Registration failed')
      }

    render(){
        return(
            <div className='register'>
                <div>First Name: <input onChange={(e) => this.setState({ firstName: e.target.value })} value={this.state.firstName} type="text"></input></div>
                <div>Last Name: <input onChange={(e) => this.setState({ lastName: e.target.value })} value={this.state.lastName} type="text"></input></div>
                <div>Email: <input onChange={(e) => this.setState({ email: e.target.value })} value={this.state.email} type="text"></input></div>
                <div>Password: <input onChange={(e) => this.setState({ password: e.target.value })} value={this.state.password} type="text"></input></div>
                <div> <button onClick={() => this.register()}>Register</button></div>
            </div>
        )
    }
}

export default Register