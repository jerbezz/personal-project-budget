import React, {Component} from  'react'
import {connect} from 'react-redux'
import {getData} from './../../ducks/authReducer'
import {getMonthExpByUser} from './../../ducks/expReducer'
import { Doughnut} from 'react-chartjs-2';

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
        let{monthExpenses} = this.props.expense

        let miscMonth = monthExpenses[0] ? (monthExpenses.filter(item => {
            if (item.exp_category === 'Misc') {
                return item
            }
        }).map(item => {
            return Number(item.exp_amount)
        }).reduce((total, curr) => {
            return total += curr
        }, 0)) : ('error')

        let mealsMonth = monthExpenses[0] ? (monthExpenses.filter(item => {
            if (item.exp_category === 'Meals') {
                return item
            }
        }).map(item => {
            return Number(item.exp_amount)
        }).reduce((total, curr) => {
            return total += curr
        }, 0)) : ('error')

        let shoppingMonth = monthExpenses[0] ? (monthExpenses.filter(item => {
            if (item.exp_category === 'Shopping') {
                return item
            }
        }).map(item => {
            return Number(item.exp_amount)
        }).reduce((total, curr) => {
            return total += curr
        }, 0)) : ('error')

        let transMonth = monthExpenses[0] ? (monthExpenses.filter(item => {
            if (item.exp_category === 'Transportation') {
                return item
            }
        }).map(item => {
            return Number(item.exp_amount)
        }).reduce((total, curr) => {
            return total += curr
        }, 0)) : ('error')

        let entMonth = monthExpenses[0] ? (monthExpenses.filter(item => {
            if (item.exp_category === 'Entertainment') {
                return item
            }
        }).map(item => {
            return Number(item.exp_amount)
        }).reduce((total, curr) => {
            return total += curr
        }, 0)) : ('error')

        let houseMonth = monthExpenses[0] ? (monthExpenses.filter(item => {
            if (item.exp_category === 'Housing') {
                return item
            }
        }).map(item => {
            return Number(item.exp_amount)
        }).reduce((total, curr) => {
            return total += curr
        }, 0)) : ('error')

        let utilMonth = monthExpenses[0] ? (monthExpenses.filter(item => {
            if (item.exp_category === 'Utilities') {
                return item
            }
        }).map(item => {
            return Number(item.exp_amount)
        }).reduce((total, curr) => {
            return total += curr
        }, 0)) : ('error')

        let insMonth = monthExpenses[0] ? (monthExpenses.filter(item => {
            if (item.exp_category === 'Insurance') {
                return item
            }
        }).map(item => {
            return Number(item.exp_amount)
        }).reduce((total, curr) => {
            return total += curr
        }, 0)) : ('error')

        let healthMonth = monthExpenses[0] ? (monthExpenses.filter(item => {
            if (item.exp_category === 'Health Care') {
                return item
            }
        }).map(item => {
            return Number(item.exp_amount)
        }).reduce((total, curr) => {
            return total += curr
        }, 0)) : ('error')

        let travelMonth = monthExpenses[0] ? (monthExpenses.filter(item => {
            if (item.exp_category === 'Travel') {
                return item
            }
        }).map(item => {
            return Number(item.exp_amount)
        }).reduce((total, curr) => {
            return total += curr
        }, 0)) : ('error')
        console.log(5665, this.props)
        return(
            <div>
                {/* <select
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
                </select> */}
                <Doughnut
                data={{labels: ['Misc', 'Meals', 'Shopping', 'Transportation', 'Entertainment', 'Housing', 'Utilities', 'Insurance', 'Health Care', 'Travel'],
                datasets:[
                  {
                    label:'Expenses by Month',
                    data:[
                        miscMonth,
                        mealsMonth,
                        shoppingMonth,
                        transMonth,
                        entMonth,
                        houseMonth,
                        utilMonth,
                        insMonth,
                        healthMonth,
                        travelMonth
                    ],
                    backgroundColor:[
                      '#e4b031',
                      '#383689',
                      '#84d2f4',
                      '#d21f75',
                      '#f5c8af',
                      '#267278',
                      '#e57438',
                      '#4770b3',
                      '#cad93f',
                      '#9e9ea2'
                    ]
                  }
                ]
              }}

              options={{
                title:{
                  display:true,
                  text:'Expenses by Month',
                  fontSize:25,
                  fontColor: '#000'
                },
                legend:{
                  display:true,
                  position:'left',
                  labels: {fontColor: '#000'}
                }
              }}
                />
            </div>
        )
    }
}
const mapState = (reduxState) => reduxState
export default connect(mapState, { getData, getMonthExpByUser })(DoughnutMonthExpsByUser)

// 'rgba(255, 99, 132, 0.6)',
// 'rgba(54, 162, 235, 0.6)',
// 'rgba(255, 206, 86, 0.6)',
// 'rgba(75, 192, 192, 0.6)',
// 'rgba(153, 102, 255, 0.6)',
// 'rgba(255, 159, 64, 0.6)',
// 'rgba(255, 99, 132, 0.6)',
// 'rgba(54, 162, 235, 0.6)',
// 'rgba(255, 206, 86, 0.6)',
// 'rgba(75, 192, 192, 0.6)'
