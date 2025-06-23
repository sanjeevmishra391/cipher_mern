export default function ExpenseList({ expenses, onDelete }) {
  return (
    expenses.length>0 ? (
    <div className="expense-list">
      <h2>Expense List</h2>
      <ul>
      {
        expenses.map((expense, index) => (
          <li key={index}>
            {expense.title} - Rs. {expense.amount} on {new Date(expense.date).toLocaleDateString()}
            <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={() => { onDelete(index); }}
            >Delete</button>
          </li>
        ))
      }
      </ul>
    </div>) : null
  );
}