import React, {Component} from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import getData from './../../ducks/authReducer'


class Header extends Component {
    

    render(){
    return(
        <header>
        <div>Logo</div>
        <div>TEGDUB</div>
        <Link to='/auth/register'><button>Register</button></Link>
        <Link to='/auth/login'><button>Login</button></Link>
        <a href='http://localhost:5550/logout'>
                                <button>Logout</button>
                            </a>
        

        
        </header>
    )
    }
}

const mapState = (reduxState) => reduxState;

export default connect(mapState, {getData})(Header)