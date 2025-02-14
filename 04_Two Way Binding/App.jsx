import React, { useState } from 'react'
const App = () => {
  const [username,setusername]=useState("")
  const foamsumbitted=(e)=>{
    e.preventDefault()
    console.log(username)
    setusername("")
  }
  return (
    <div className='bg-red-100 h-50'>
      <form onSubmit={(e)=>{
          foamsumbitted(e)
        }}>
        <div><input 
        value={username}
        onChange={(e)=>{
          setusername(e.target.value)
        }
        }
        type="text" placeholder='Enter Your Name' className='border-2 m-5 rounded'/></div>
        <button className='text-xl  border-2 rounded ml-9 px-10 bg-green-500'>submit</button>
      </form>
    </div>
  )
}

export default App