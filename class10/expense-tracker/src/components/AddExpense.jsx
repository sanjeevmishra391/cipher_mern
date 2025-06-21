import { useState } from "react";

// 1. Check if inputs are empty before storing the expense
// 2. Convert amount to a number
// 3. Make sure amount is a positive number

function AddExpense() {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [expenseList, setExpenseList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior which would refresh the page

    if (!title.trim() || !amount) {
      return alert("Please fill in both fields.");
    }

    const newExpense = {
      title: title,
      amount: parseFloat(amount),
      date: date
    }

    setExpenseList([...expenseList, newExpense]);
    setTitle('');
    setAmount('');
    setDate(new Date().toISOString().split('T')[0]);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          className=""
        />

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => {
            setAmount(e.target.value);
          }}
          className=""
        />

        <input
          type="date"
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
          }}
          className=""
        />

        <button type="submit">
          Add Expense
        </button>
      </form>

      <div>
        <h2>Expense List</h2>
        <ul>
          {expenseList.map((expense, index) => (
            <li key={index}>
              {expense.title} - ${expense.amount} on {new Date(expense.date).toLocaleDateString()}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default AddExpense;