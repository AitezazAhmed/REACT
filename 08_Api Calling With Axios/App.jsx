import axios from 'axios'
import React, { useEffect, useState } from 'react'

const App = () => {
  const [data,setData]=useState([])
  const getdata=async()=>{
  const response=await axios.get("https://picsum.photos/v2/list?page=2&limit=10")
   setData(response.data)
   console.log(data)
  }
  useEffect(() => {
    getdata()
  }, []);
  return (
    <div className='flex'> 
      {data.map((e,idx)=>{
        return <div key={idx} ><img className='w-30 h-20 flex' src={e.download_url} alt={e.url} />{e.author}</div>
      })}
    </div>
  )
}

export default App