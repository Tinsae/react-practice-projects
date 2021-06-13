import React, { useState } from "react"
import Card from "../UI/Card"
import "./Expenses.css"
import ExpenseFilter from "./ExpensesFilter"
import ExpensesList from "./ExpensesList"
import ExpensesChart from "./ExpensesChart"
const Expenses = ({ expenses }) => {
    const [selectedYear, setSelectedYear] = useState("2020")
    const onYearSelected = (selectedYear) => {
        setSelectedYear(selectedYear)
    }
    const filteredExpenses = expenses.filter(expense => expense.date && new Date(expense.date).getFullYear().toString() === selectedYear)

    return (
        <div>
            <Card className="expenses" >
                <ExpenseFilter onYearSelected={onYearSelected} selectedYear={selectedYear} />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList expenses={filteredExpenses} />
            </Card>
        </div >
    )
}
export default Expenses
