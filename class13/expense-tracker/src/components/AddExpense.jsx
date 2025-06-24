import { useState } from "react";

function AddExpense({addExpense}) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

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

    addExpense(newExpense);
    setTitle('');
    setAmount('');
    setDate(new Date().toISOString().split('T')[0]);
  }

  return (
    <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
      <div className="mb-5">
        <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Expense Title</label>
        <input
          type="text"
          id="title"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Expense title"
          required
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </div>
      <div className="mb-5">
        <label htmlFor="amount" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Expense Amount</label>
        <input
          type="number"
          id="amount"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Expense amount"
          required
          value={amount}
          onChange={(e) => {
            setAmount(e.target.value);
          }}
        />
      </div>

      <div className="mb-5">
        <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Expense Date</label>
        <input
          type="date"
          id="date"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
      </div>
      <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Expense</button>
    </form>
  )
}

export default AddExpense;