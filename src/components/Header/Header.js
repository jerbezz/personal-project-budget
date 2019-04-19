import React, { Component } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import getData from './../../ducks/authReducer'


class Header extends Component {


    render() {
        return (
            <header>
                <div className='header-left'> <Link to='/'> <i className="fas fa-money-bill-wave fa-5x"></i> </Link></div>
                <div className='header-mid'>TEGDUB</div>
                <div className='header-right'>
                    <Link to='/auth/register'><button>Register</button></Link>
                    <Link to='/auth/login'><button>Login</button></Link>
                    <a href='http://localhost:5550/logout'>
                        <button className='header-logout-btn'>Logout</button>
                    </a>

                </div>

            </header>
        )
    }
}

const mapState = (reduxState) => reduxState;

export default connect(mapState, { getData })(Header)