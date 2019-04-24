import React, {Component} from  'react'
import {connect} from 'react-redux'
import {getData} from './../../ducks/authReducer'
import {getMonthExpByUser} from './../../ducks/expReducer'
import { Line, Bar, Radar, Doughnut, Pie, Polar, Bubble } from 'react-chartjs-2';

class DoughnutMonthExpsByUser extends Component {
    constructor(){
        super()
        this.state = {
            month: ''
        }
    }

    componentDidMount(){
        this.props.getData()
        // this.props.getMonthExpByUser()
    }

    handleChange = async (props, value) => {
        console.log('kevin')
        console.log(props, value)
        await this.setState({
            [props]: value
        })
        console.log(this.state.month)
        this.getByMonth()
    }

    getByMonth = () => {
        let { month } = this.state
        this.props.getMonthExpByUser(month)

    }

    render(){

        console.log(5665, this.props)
        return(
            <div>
                <select
                // name='month'
                onSelect={this.getByMonth}
                value={this.state.month}
                onChange={e => this.handleChange('month', e.target.value)}>
                    <option defaultValue value='01'>January</option>
                    <option value='02'>February</option>
                    <option value='03'>March</option>
                    <option value='04'>April</option>
                    <option value='05'>May</option>
                    <option value='06'>June</option>
                    <option value='07'>July</option>
                    <option value='08'>August</option>
                    <option value='09'>September</option>
                    <option value='10'>October</option>
                    <option value='11'>November</option>
                    <option value='12'>December</option>
                </select>
                <Doughnut
                data={{labels: ['Misc', 'Meals', 'Shopping', 'Transportation', 'Entertainment', 'Housing', 'Utilities', 'Insurance', 'Health Care', 'Travel'],
                datasets:[
                  {
                    label:'Population',
                    data:[
                      1,
                      2,
                      3,
                      4,
                      5,
                      6,
                      7,
                      8,
                      9,
                      10
                    ],
                    backgroundColor:[
                      'rgba(255, 99, 132, 0.6)',
                      'rgba(54, 162, 235, 0.6)',
                      'rgba(255, 206, 86, 0.6)',
                      'rgba(75, 192, 192, 0.6)',
                      'rgba(153, 102, 255, 0.6)',
                      'rgba(255, 159, 64, 0.6)',
                      'rgba(255, 99, 132, 0.6)',
                      'rgba(54, 162, 235, 0.6)',
                      'rgba(255, 206, 86, 0.6)',
                      'rgba(75, 192, 192, 0.6)'
                    ]
                  }
                ]
              }}

              options={{
                title:{
                  display:true,
                  text:'Total Expenses by Category',
                  fontSize:25
                },
                legend:{
                  display:true,
                  position:'top'
                }
              }}
                />
            </div>
        )
    }
}
const mapState = (reduxState) => reduxState
export default connect(mapState, { getData, getMonthExpByUser })(DoughnutMonthExpsByUser)
