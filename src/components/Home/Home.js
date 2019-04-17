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
                        <div className='info-box'><i class="fas fa-file-invoice-dollar"></i> Track Expenses</div>
                        <div className='info-box'><i class="fas fa-balance-scale"></i> Budget Smart</div>
                        <div className='info-box'><i class="far fa-chart-bar"></i> Reports</div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}
export default Home