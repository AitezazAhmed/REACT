import { useState } from "react"

const App = () => {
  const [number, usernametwo] = useState(0)
  const increment = () => {
    usernametwo(number + 1)
  }
  const decrement = () => {
    usernametwo(number - 1)
  }
  return (
    <div>
      <h1> NUMBER IS {number}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}> Decrement</button>
    </div>
  )
}

export default App