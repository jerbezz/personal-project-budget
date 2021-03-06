import React, {Component} from  'react'
import {connect} from 'react-redux'
import {getData} from './../../ducks/authReducer'
import {getExpByUser} from './../../ducks/expReducer'
import { Bar} from 'react-chartjs-2';
// import { Line, Bar, Radar, Doughnut, Pie, Polar, Bubble } from 'react-chartjs-2';


class BarExpsByUser extends Component {
   


    componentDidMount(){
        this.props.getData()
        // this.props.getExpByUser()
    }

    render(){
        let { expenses } = this.props.expense
        // let { budgets } = this.props.budget
        // console.log(2, this.props.budget.budgets)
        // console.log(123, this.props.expense.expenses)


        // let newBudget = budgets[0] ? (budgets[budgets.length - 1].budget_income) : ('Budget an Income Amount')
        // let newExpenses = budgets[0] ? (budgets[budgets.length - 1].budget_expenses) : ('Budget an Expense Amount')


        // console.log(555, this.props.expense.expenses)



        // let userExpTotal = expenses[0] ? (expenses.map(item => {
        //     return Number(item.exp_amount)
        // }).reduce((total, curr) => {
        //     return total += curr
        // })) : ('error')

        let miscTotal = expenses[0] ? (expenses.filter(item => {
            if (item.exp_category === 'Misc') {
                return item
            }
        }).map(item => {
            return Number(item.exp_amount)
        }).reduce((total, curr) => {
            return total += curr
        }, 0)) : ('loading')

        let mealsTotal = expenses[0] ? (expenses.filter(item => {
            if (item.exp_category === 'Meals') {
                return item
            }
        }).map(item => {
            return Number(item.exp_amount)
        }).reduce((total, curr) => {
            return total += curr
        }, 0)) : ('error')

        let shoppingTotal = expenses[0] ? (expenses.filter(item => {
            if (item.exp_category === 'Shopping') {
                return item
            }
        }).map(item => {
            return Number(item.exp_amount)
        }).reduce((total, curr) => {
            return total += curr
        }, 0)) : ('error')

        let transTotal = expenses[0] ? (expenses.filter(item => {
            if (item.exp_category === 'Transportation') {
                return item
            }
        }).map(item => {
            return Number(item.exp_amount)
        }).reduce((total, curr) => {
            return total += curr
        }, 0)) : ('error')

        let entTotal = expenses[0] ? (expenses.filter(item => {
            if (item.exp_category === 'Entertainment') {
                return item
            }
        }).map(item => {
            return Number(item.exp_amount)
        }).reduce((total, curr) => {
            return total += curr
        }, 0)) : ('error')

        let houseTotal = expenses[0] ? (expenses.filter(item => {
            if (item.exp_category === 'Housing') {
                return item
            }
        }).map(item => {
            return Number(item.exp_amount)
        }).reduce((total, curr) => {
            return total += curr
        }, 0)) : ('error')

        let utilTotal = expenses[0] ? (expenses.filter(item => {
            if (item.exp_category === 'Utilities') {
                return item
            }
        }).map(item => {
            return Number(item.exp_amount)
        }).reduce((total, curr) => {
            return total += curr
        }, 0)) : ('error')

        let insTotal = expenses[0] ? (expenses.filter(item => {
            if (item.exp_category === 'Insurance') {
                return item
            }
        }).map(item => {
            return Number(item.exp_amount)
        }).reduce((total, curr) => {
            return total += curr
        }, 0)) : ('error')

        let healthTotal = expenses[0] ? (expenses.filter(item => {
            if (item.exp_category === 'Health Care') {
                return item
            }
        }).map(item => {
            return Number(item.exp_amount)
        }).reduce((total, curr) => {
            return total += curr
        }, 0)) : ('error')

        let travelTotal = expenses[0] ? (expenses.filter(item => {
            if (item.exp_category === 'Travel') {
                return item
            }
        }).map(item => {
            return Number(item.exp_amount)
        }).reduce((total, curr) => {
            return total += curr
        }, 0)) : ('error')
        return(
            <div>
                <Bar
                data={{labels: ['Misc', 'Meals', 'Shopping', 'Transportation', 'Entertainment', 'Housing', 'Utilities', 'Insurance', 'Health Care', 'Travel'],
                datasets:[
                  {
                    label:'Total Expenses',
                    data:[
                      miscTotal,
                      mealsTotal,
                      shoppingTotal,
                      transTotal,
                      entTotal,
                      houseTotal,
                      utilTotal,
                      insTotal,
                      healthTotal,
                      travelTotal
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
                  text:'Total Expenses by Category',
                  fontSize:25,
                  fontColor: '#000'
                },
                legend:{
                  display:false,
                  position: 'left',
                  labels: {fontColor: '#000'}
                
                }
              }}
                />
            </div>

        )
    }
}
const mapState = (reduxState) => reduxState
export default connect(mapState, { getData, getExpByUser })(BarExpsByUser)