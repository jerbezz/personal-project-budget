import React, { Component } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getData } from './../../ducks/authReducer'
import logo from './money-svgrepo-com.svg'
import logo1  from './money-svgrepo-com (1).svg'

class Header extends Component {

    componentDidMount() {
        this.props.getData()
    }

    render() {
        return !this.props.auth.user.email ? (
            <header>
                <div className='header-left'><Link to='/'><img className='header-logo' src={logo1} alt="budget-logo" /></Link></div>
                {/* <div className='header-left'> <Link to='/'> <i className="fas fa-money-bill-wave fa-5x"></i> </Link></div> */}
                <div className='header-mid'>TEGDUB</div>
                <div className='header-right'>
                    <div className='h-r-l'><Link to='/auth/register'><button className='header-button'>Register</button></Link></div>
                    <div className='h-r-r'><Link to='/auth/login'><button className='header-button'>Login</button></Link></div>


                </div>

            </header>
        ) : (
                <header>
                    <div className='header-left'><img className='header-logo' src={logo1} alt="bank logo" /></div>
                    {/* <div className='header-left'> <Link to='/'> <i className="fas fa-money-bill-wave fa-5x"></i> </Link></div> */}
                    <div className='header-mid'>TEGDUB</div>
                    <div className='header-right'>
                        <div className='h-r-l-l'>
                            <h2>Welcome: {this.props.auth.user.firstName} {this.props.auth.user.lastName}</h2>
                        </div>
                        <div className='h-r-r'>
                            <a href={process.env.REACT_APP_LOGOUT}>
                                <button className='header-button'>Logout</button>
                            </a>
                        </div>
                    </div>

                </header>
            )
    }
}

const mapState = (reduxState) => reduxState;

export default connect(mapState, { getData })(Header)