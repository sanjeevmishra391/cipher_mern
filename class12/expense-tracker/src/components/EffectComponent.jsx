import { useState } from "react";
import { useEffect } from "react";

// useEffect
// Side effects - fetching data, listen to a service (WebSocket)
// manually modifying DOM
// Interval
// Clean up tasks

// Dependency argument
// 1. empty array [] - runs once when component is mounted on screen
// 2. some dependencies [someValue] - runs every time someValue changes
// 3. No dependencies - runs every render/update

export default function EffectComponent() {

  const [data, setData] = useState('');
  const [counter, setCounter] = useState(0);
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    console.log("use effect");
    async function fetchData() {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      const result = await res.json();
      setData(result);
    }

    fetchData();
  }, []);

  useEffect(() => {
    console.log("Use effect executed");
  }, [counter]);

  /* 
    // counter = 0, useEffect runs -> updates counter -> 1
    // counter becomes 1 -> useEffect will run again -> updates counter -> 2
    // .....
    useEffect(() => {
      console.log("Use effect executed");
      setCounter(counter + 1);
    }, [counter]);
  */

  useEffect(() => {
    console.log("Render every time");
  });

  return (
    <div>
      <p>{counter}</p>
      <p>{JSON.stringify(data)}</p>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <button onClick={() => setLogged(!logged)}>Auth Button</button>
    </div>
  )
}