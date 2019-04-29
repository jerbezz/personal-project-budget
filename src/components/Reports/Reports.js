import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import DoughnutExpsByUser from './../Charts/DoughnutExpsByUser';
import DoughnutMonthExpsByUser from './../Charts/DoughnutMonthExpsByUser'



class Reports extends Component{
    
   

    render(){
        return(
            <div>
                <nav className='nav-items'>
                    <h1><Link className='nav-link' to='/expenses'>Expenses</Link></h1>
                    <h1><Link className='nav-link' to='/budget'>Budget</Link></h1>
                    <h1><Link className='nav-link' to='/reports'>Reports</Link></h1>
                </nav>
                <DoughnutExpsByUser/>
                <DoughnutMonthExpsByUser/>
            </div>
        )
    }
}
export default Reports