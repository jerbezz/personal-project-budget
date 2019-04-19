import React,{Component} from 'react'
import './Home.css'


class Home extends Component{
  
    render(){
        return(
            <div>
                <div className='home-pic'>
                <img className='home-img' src='https://images.unsplash.com/photo-1550565118-3a14e8d0386f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60' alt='money'/>
                </div>
                <div className='better-work'>
                <div className='box-for-three-info'>
                    <div className='three-info-boxes'>
                        <div className='info-box'><i className="fas fa-file-invoice-dollar fa-2x"></i> <h2>Track Expenses</h2><h4 className='home-h4'>Easily and conveniently track your expenses</h4></div>
                        <div className='info-box'><i className="fas fa-balance-scale fa-2x"></i> <h2>Budget Smart</h2><h4 className='home-h4'>Budget your finances and check your progress</h4></div>
                        <div className='info-box'><i className="far fa-chart-bar fa-2x"></i> <h2>Reports</h2><h4 className='home-h4'>Visualize expenses to improve your personal finances</h4></div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}
export default Home