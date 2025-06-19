import React from 'react';

function ExpenseEntryItem(item) {

  // Function to handle click event
  const handleClick = (e) => {    
    e.target.style.backgroundColor = 'lightblue';
    e.target.style.color = 'darkblue';
  };

  return (
    <div>
      <h4 onClick={handleClick} >Item: {item.entryItem}</h4>
      <p>Price: <i>{ item.cost.currency } {item.cost.totalCost}</i></p>
    </div>
  );
}

export default ExpenseEntryItem;