import React, { useState } from 'react'

const App = () => {
  const [username,setusername]=useState("")
  const [password,setpassword]=useState("")
 const login=(e)=>{
  e.preventDefault()
    console.log('Username:', username)
    setusername("")
    console.log('Password:', password)
    setpassword("")
  }
  return (
    <div className='bg-purple-400 h-100 w-75  rounded-2xl border-2 border-solid border-purple-500'>
      <div className='text-3xl font-bold flex justify-center pt-10 '>Login</div>
      <div className='flex justify-center'><div className='flex relative top-8'><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
<path  fill="yellow" d="M 24 4 C 18.494917 4 14 8.494921 14 14 C 14 19.505079 18.494917 24 24 24 C 29.505083 24 34 19.505079 34 14 C 34 8.494921 29.505083 4 24 4 z M 24 7 C 27.883764 7 31 10.116238 31 14 C 31 17.883762 27.883764 21 24 21 C 20.116236 21 17 17.883762 17 14 C 17 10.116238 20.116236 7 24 7 z M 11.978516 28 C 9.7987044 28 8 29.798705 8 31.978516 L 8 33.5 C 8 37.104167 10.27927 39.892227 13.306641 41.5625 C 16.334011 43.232773 20.168103 44 24 44 C 27.831897 44 31.665989 43.232773 34.693359 41.5625 C 37.274641 40.138345 39.217335 37.862616 39.761719 35 L 40.001953 35 L 40.001953 31.978516 C 40.001953 29.798705 38.201295 28 36.021484 28 L 11.978516 28 z M 11.978516 31 L 36.021484 31 C 36.579674 31 37.001953 31.420326 37.001953 31.978516 L 37.001953 32 L 37 32 L 37 33.5 C 37 35.895833 35.65427 37.607773 33.244141 38.9375 C 30.834011 40.267227 27.418103 41 24 41 C 20.581897 41 17.165989 40.267227 14.755859 38.9375 C 12.34573 37.607773 11 35.895833 11 33.5 L 11 31.978516 C 11 31.420326 11.420326 31 11.978516 31 z"></path>
</svg></div><div className='flex '><input value={username} onChange={(e) => setusername(e.target.value)}
 className='rounded-sm p-2 border-2 border-solid border-black outline-none bg-white text-black w-60  mt-7' type="text" placeholder='Username' /></div>
      </div>
      <div className='flex justify-center'>
        <div className='flex relative top-8'><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
<path fill="yellow" d="M 25 3 C 18.363281 3 13 8.363281 13 15 L 13 20 L 9 20 C 7.355469 20 6 21.355469 6 23 L 6 47 C 6 48.644531 7.355469 50 9 50 L 41 50 C 42.644531 50 44 48.644531 44 47 L 44 23 C 44 21.355469 42.644531 20 41 20 L 37 20 L 37 15 C 37 8.363281 31.636719 3 25 3 Z M 25 5 C 30.566406 5 35 9.433594 35 15 L 35 20 L 15 20 L 15 15 C 15 9.433594 19.433594 5 25 5 Z M 9 22 L 41 22 C 41.554688 22 42 22.445313 42 23 L 42 47 C 42 47.554688 41.554688 48 41 48 L 9 48 C 8.445313 48 8 47.554688 8 47 L 8 23 C 8 22.445313 8.445313 22 9 22 Z M 25 30 C 23.300781 30 22 31.300781 22 33 C 22 33.898438 22.398438 34.6875 23 35.1875 L 23 38 C 23 39.101563 23.898438 40 25 40 C 26.101563 40 27 39.101563 27 38 L 27 35.1875 C 27.601563 34.6875 28 33.898438 28 33 C 28 31.300781 26.699219 30 25 30 Z"></path>
</svg></div><input value={password} onChange={(e)=>{setpassword(e.target.value)}} className='rounded-sm p-2 border-2 border-solid border-black outline-none bg-white text-black w-60  mt-7' type="text" placeholder='Password'/></div>
<div className='flex justify-center relative top-8'><button className='bg-yellow-400 w-40 h-10 rounded-2xl cursor-pointer' onClick={(e)=>{login(e)}} >Login</button></div>
      </div>
  )
}
export default App