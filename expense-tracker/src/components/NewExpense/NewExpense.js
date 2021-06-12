import React from 'react'
import ExpenseForm from "./ExpenseForm"

import "./NewExpense.css"

const NewExpense = ({ onAddExpense }) => {
    const onSaveExpenseData = (data) => {
        const expenseData = { ...data, id: Math.random().toString() }
        onAddExpense(expenseData)
    }
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={onSaveExpenseData} />
        </div>
    )
}

export default NewExpense
