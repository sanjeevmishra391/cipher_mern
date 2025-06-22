import React, { useState } from "react";
import AddExpense from "./AddExpense";
import ExpenseList from "./ExpenseList";

export default function ExpenseTracker() {
  const [expenseList, setExpenseList] = useState([]);

  const addExpense = (expense) => { 
    setExpenseList((prevList) => [...prevList, expense]);
  }

  const deleteExpense = (index) => {
    setExpenseList((prevExpenses) => prevExpenses.filter((_, idx) => idx !== index));
  }

  return (
    <div className="expense-tracker">
      <h1>Expense Tracker</h1>
      <AddExpense addExpense={addExpense} />
      <ExpenseList expenses={expenseList} onDelete={deleteExpense} />
    </div>
  )
};