import { useState } from "react"

function StateCounter() {
  const [count, setcount] = useState(0);

  const incCount = () => {
    setcount(count + 1);
  }

  return (
    <>
      <h3>Count = {count}</h3>
      <button onClick={incCount}>Increase Count</button>
    </>
  )
}

export default StateCounter;