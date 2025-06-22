import React, { useState } from 'react';

export default function StateManagement() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Namit');
  const [items, setItems] = useState([140, 3, 4, 1]);
  const [user, setUser] = useState({name: 'Sahil', age: 23});

  const handleIncrement = () => {
    // first way
    setCount(count + 1); // 1
    setCount(count + 1); // 1
    // second way
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1); // makes sure update happens on latest state
  }

  const addItemAtEnd = () => {
    // first way
    // setItems([...items, items.length + 1]);
    // second way
    setItems((prevItems) => [...prevItems, prevItems.length + 1]);
  }

  const addItemAtBeginning = () => {
    setItems((prevItems) => [0, ...prevItems]);
  }

  const removeItembyIndex = () => {
    const index = items.length - 1;
    setItems((prevItems) => prevItems.filter((_, idx) => idx !== index));
  }

  // At a given index, update the value. use Map function

  // insert at a given index
  const insertItemAtIndex = () => {
    const index = 2;
    const newItem = 13;

    setItems((prevItems) => [...prevItems.slice(0, index), newItem, ...prevItems.slice(index)]);
  }

  // sort items
  const sortItems = () => {
    setItems((prevItems) => [...prevItems].sort((a, b) => b - a));
  }

  // change name
  const changeUser = () => {
    // {name: 'Sahil', age: 23}
    setUser((prevUser) => ({ ...prevUser, name: 'Namit', age: 24, gender: 'male' }));
  }

  // remove property from user object
  const removePropertyFromUser = () => {
    setUser((prevUser) => {
      const { gender, ...rest } = prevUser;
      return rest;
    });
  }

  // work with nested objects

  return (
    <>
      <p>{count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <p>{name}</p>
      <button onClick={() => setName('Prince Kumar')}>Change Name</button>
      <p>Items: {items.join(', ')}</p>
      <button onClick={addItemAtEnd}>Add Item</button>
      <p>{JSON.stringify(user)}</p>
      <button onClick={changeUser}>Change User</button>
      <button onClick={removePropertyFromUser}>Remove Property</button>
    </>
  )
}