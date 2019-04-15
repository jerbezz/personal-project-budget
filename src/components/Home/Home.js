import React,{Component} from 'react'
import {Link} from 'react-router-dom'

class Home extends Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div>
                <Link to='/auth/register'><button>Register</button></Link>
                <Link to='/auth/login'><button>Login</button></Link>
                Home
            </div>
        )
    }
}
export default Home