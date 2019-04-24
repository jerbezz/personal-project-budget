import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import DoughnutExpsByUser from './../Charts/DoughnutExpsByUser';
import DoughnutMonthExpsByUser from './../Charts/DoughnutMonthExpsByUser'



class Reports extends Component{
    
   

    render(){
        return(
            <div>
                <div className='nav-items'>
                <Link to='/expenses'>Expenses</Link>
                <Link to='/budget'>Budget</Link>
                <Link to='/reports'>Reports</Link>
                </div>
                <DoughnutExpsByUser/>
                <DoughnutMonthExpsByUser/>
            </div>
        )
    }
}
export default Reports