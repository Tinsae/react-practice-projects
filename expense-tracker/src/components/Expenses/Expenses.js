import React, { useState } from "react"
import Card from "../UI/Card"
import ExpenseItem from "./ExpenseItem"
import "./Expenses.css"
import ExpenseFilter from "./ExpensesFilter"

const Expenses = ({ expenses }) => {
    const [filteredYear, setFilteredYear] = useState("2020")
    const onYearSelected = (selectedYear) => {
        setFilteredYear(selectedYear)
        console.log("expenses selected year: " + selectedYear)
    }
    return (
        <div>
            <Card className="expenses" >
                <ExpenseFilter onYearSelected={onYearSelected} selectedYear={filteredYear} />
                <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} />
                <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} />
                <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date} />
                <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date} />
            </Card>
        </div>
    )
}
export default Expenses
