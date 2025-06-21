import React from 'react';
import ExpenseGroup from './components/ExpenseGroup';
import expenses from './utils/expenses';

function App() {
  return (
    <>
      {
        expenses.map((expense, index) => {
          return (
            <ExpenseGroup key={index} expense={expense} />
          )
        })
      }
    </>
  );
}

export default App;
