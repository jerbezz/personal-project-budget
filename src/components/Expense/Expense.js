import React from 'react'

function Expense (props){
    // console.log(22222, props.expense)
    return (
        
        <div>
            
           
           <p>{props.expense.exp_date}</p>
           <p>{props.expense.exp_category}</p>
           <p>{props.expense.exp_name}</p>
           <p>{props.expense.exp_amount}</p>
           <p>{props.expense.exp_memo}</p>
           <button onClick={props.deleteAnExp}>X</button>
        </div>
    )
}
export default Expense