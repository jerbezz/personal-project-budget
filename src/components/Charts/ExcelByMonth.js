import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getData} from './../../ducks/authReducer'
import {getExpByUser, getMonthExpByUser} from './../../ducks/expReducer'
import ReactExport from 'react-export-excel'

class ExcelByMonth extends Component {
    constructor(){
        super()
    }

    componentDidMount(){
        this.props.getData()
    }

    render(){

let {monthExpenses} = this.props.expense

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

// const dataSet1 = [
//     monthExpenses
// ];

// console.log(12345, dataSet1)



        return (
            <ExcelFile element={<button>Download Month Expense Data</button>}>
            <ExcelSheet data={monthExpenses} name="Expenses by Month">
                <ExcelColumn label="Date" value='exp_date'/>
                <ExcelColumn label="Category" value='exp_category'/>
                <ExcelColumn label="Name" value='exp_name'/>
                <ExcelColumn label="Amount" value='exp_amount'/>
                <ExcelColumn label="Memo" value='exp_memo'/>
            </ExcelSheet>
            </ExcelFile>
        )
    }
}
const mapState = (reduxState) => reduxState
export default connect(mapState, { getData, getExpByUser, getMonthExpByUser })(ExcelByMonth)

