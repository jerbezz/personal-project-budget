import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import './Reports.css'
// import DoughnutExpsByUser from './../Charts/DoughnutExpsByUser';
// import DoughnutMonthExpsByUser from './../Charts/DoughnutMonthExpsByUser'
import ExcelByMonth from './../Charts/ExcelByMonth'
import ExcelAllExps from './../Charts/ExcelAllExps'
import BarExpsByUser from './../Charts/BarExpsByUser'
import BarMonthExpsByUser from './../Charts/BarMonthExpsByUser'


class Reports extends Component{
    
   

    render(){
        return(
            <div className='reports'>
                <nav className='nav-items'>
                    <h1><Link className='nav-link' to='/expenses'>Expenses</Link></h1>
                    <h1><Link className='nav-link' to='/budget'>Budget</Link></h1>
                    <h1><Link className='nav-link' to='/reports'>Reports</Link></h1>
                </nav>
                <div className='report-charts'>
                <div className='c1'><BarExpsByUser/></div>
                <div className='c1'><ExcelAllExps/></div>
                <div className='c1'><BarMonthExpsByUser/></div>
                <div className='c1'><ExcelByMonth/></div>
                </div>
            </div>
        )
    }
}
export default Reports