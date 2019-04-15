import React, {Component} from 'react'
import './Login.css'
import axios from 'axios'


class Login extends Component{
    constructor(props) {
        super(props);
        this.state = {
          email: '',
          password: ''
        }
      }

    async login() {
        const { email, password } = this.state;
        const res = await axios.post('/auth/login', { email, password })
        if (res.data.loggedIn) this.props.history.push('/expenses')

        else alert(res.data.message)
        console.log(res)
      }

    render(){
        return(
            <div className='login'>
                <div>Email: <input onChange={(e) => this.setState({ email: e.target.value })} value={this.state.email} type="text"></input></div>
                <div> Password: <input onChange={(e) => this.setState({ password: e.target.value })} value={this.state.password} type="text"></input></div>
                <div><button onClick={() => this.login()}>Login</button></div>
            </div>
        )
    }
}

export default Login