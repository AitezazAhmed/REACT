import React from 'react'
const App = () => {
  const foamsumbitted=(e)=>{
    e.preventDefault()
    console.log("sumbited")
    console.log(e)
  }
  return (
    <div className='bg-red-100 h-50'>
      <form>
        <div><input type="text" placeholder='Enter Your Name' className='border-2 m-5 rounded'/></div>
        <button className='text-xl  border-2 rounded ml-9 px-10 bg-green-500' onClick={(e)=>{
          foamsumbitted(e)
        }} >submit</button>
      </form>
    </div>
  )
}

export default App