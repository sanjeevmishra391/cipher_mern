import ExpenseListItem from "./ExpenseListItem";

export default function ExpenseList({ expenses, onDelete }) {
  return (
    expenses.length>0 ? (
    <div className="expense-list">
      <h2>Expense List</h2>
      <ul>
      {
        expenses.map((expense, index) => (
          <ExpenseListItem expense={expense} index={index} onDelete={onDelete} key={index} />
        ))
      }
      </ul>
    </div>) : null
  );
}