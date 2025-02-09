import { useState } from "react"

const App = () => {
  const [username,usernametwo] = useState("Aitezaz")
  const change=()=>{
    usernametwo("Ahmed")
  }
  return (
    <div>
      <h1>user name is {username}</h1>
      <button onClick={change}>change username</button>
    </div>
  )
}

export default App