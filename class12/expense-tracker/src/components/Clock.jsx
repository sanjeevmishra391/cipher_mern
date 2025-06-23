import { useState } from "react";
import { useEffect } from "react";

export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // clean up - will be executed when component is removed from screen
    return () => {
      clearInterval(interval);
    }
  }, []);

  return (
    <div>
      <p>{time.toLocaleTimeString()}</p>
    </div>
  )
}