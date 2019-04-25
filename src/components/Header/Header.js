import React, { Component } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getData } from './../../ducks/authReducer'


class Header extends Component {

    componentDidMount() {
        this.props.getData()
    }

    render() {
        console.log(1111, this.props.auth.user.loggedIn)
        return !this.props.auth.user.email ? (
            <header>
                <div className='header-left'> <Link to='/'> <i className="fas fa-money-bill-wave fa-5x"></i> </Link></div>
                <div className='header-mid'>TEGDUB</div>
                <div className='header-right'>
                    <div className='h-r-l'><Link to='/auth/register'><button className='header-button'>Register</button></Link></div>
                    <div className='h-r-r'><Link to='/auth/login'><button className='header-button'>Login</button></Link></div>


                </div>

            </header>
        ) : (
                <header>
                    <div className='header-left'> <Link to='/'> <i className="fas fa-money-bill-wave fa-5x"></i> </Link></div>
                    <div className='header-mid'>TEGDUB</div>
                    <div className='header-right'>
                        <div className='h-r-l'>
                            Welcome: {this.props.auth.user.firstName} {this.props.auth.user.lastName}
                        </div>
                        <div className='h-r-r'>
                            <a href='http://localhost:5550/logout'>
                                <button className='header-logout-btn'>Logout</button>
                            </a>
                        </div>
                    </div>

                </header>
            )
    }
}

const mapState = (reduxState) => reduxState;

export default connect(mapState, { getData })(Header)