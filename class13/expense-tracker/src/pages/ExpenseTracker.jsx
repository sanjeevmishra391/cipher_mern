import React, { useState } from "react";
import AddExpense from "../components/AddExpense";
import ExpenseList from "../components/ExpenseList";
import { useEffect } from "react";

export default function ExpenseTracker() {
  const [expenseList, setExpenseList] = useState([]);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenseList));
  }, [expenseList]);

  const addExpense = (expense) => { 
    setExpenseList((prevList) => [...prevList, expense]);
  }

  const deleteExpense = (index) => {
    setExpenseList((prevExpenses) => prevExpenses.filter((_, idx) => idx !== index));
  }

  return (
    <div className="expense-tracker">
      <h1 className="text-4xl">Expense Tracker</h1>
      <AddExpense addExpense={addExpense} />
      <ExpenseList expenses={expenseList} onDelete={deleteExpense} />
    </div>
  )
};