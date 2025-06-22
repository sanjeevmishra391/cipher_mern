import Button from 'react-bootstrap/Button';

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
            <Button
              onClick={() => { onDelete(index); }}
              variant="primary"
            >Delete</Button>
          </li>
        ))
      }
      </ul>
    </div>) : null
  );
}