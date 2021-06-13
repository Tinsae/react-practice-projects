import React from 'react'
import ExpenseItem from "./ExpenseItem"
import "./ExpensesList.css"
const ExpensesList = ({ expenses }) => {

    if (expenses.length === 0) {
        return <h2 className="expenses-list__fallback">No expenses found</h2>
    }
    else {
        return <ul className="expenses-list">
            {expenses.map(({ id, title, amount, date }) =>
                <ExpenseItem title={title} amount={amount} date={date} key={id} />)}
        </ul>
    }
}
export default ExpensesList
