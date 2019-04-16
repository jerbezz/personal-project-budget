import React,{Component} from 'react'
import {Link} from 'react-router-dom'

class Reports extends Component{
   

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
export default Reports