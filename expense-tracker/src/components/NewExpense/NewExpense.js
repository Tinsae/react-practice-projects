import React, { useState } from 'react'
import ExpenseForm from "./ExpenseForm"

import "./NewExpense.css"

const NewExpense = ({ onAddExpense }) => {
    const [isEditing, setIsEditing] = useState(false)
    const startEditingHandler = () => setIsEditing(true)
    const stopEditingHandler = () => setIsEditing(false)

    const onSaveExpenseData = (data) => {
        const expenseData = { ...data, id: Math.random().toString() }
        onAddExpense(expenseData)
        setIsEditing(false)
    }
    return (
        <div className="new-expense">
            {isEditing && <ExpenseForm onSaveExpenseData={onSaveExpenseData} onCancel={stopEditingHandler} />}
            {!isEditing && <button type="button" onClick={startEditingHandler}>Add Expense</button>}
        </div>
    )
}

export default NewExpense
