import React,{Component} from 'react'
import './Budget.css'
import {Link} from 'react-router-dom'

class Budget extends Component{


    render(){
        return(
            <div>
                <div className='nav-items'>
                <Link to='/expenses'>Expenses</Link>
                <Link to='/budget'>Budget</Link>
                <Link to='/reports'>Reports</Link>
                </div>
            </div>
        )
    }
}
export default Budget