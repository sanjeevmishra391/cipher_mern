import ExpenseEntryItem from "./ExpenseEntryItem";

function ExpenseGroup({expense}) {
  return (
    <>
      <div>
        <h2>{expense.title}</h2>
      </div>
      {
        expense.entries.map((entry, index) => {
          return (
            <ExpenseEntryItem key={index} entryItem={entry.entryItem} cost={entry.cost} />
          )
        })
      }
      
    </>);
}

export default ExpenseGroup;