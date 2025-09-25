import { Button } from 'bootstrap'
import React, { useMemo, useState } from 'react'

const Usememo = () => {
  const [count , setCount ]=useState(0)
  const [nae , setName] =useState("")

const myfun = (num)=>{
  console.log("loading......")
  const val = 10
  return val + num
}

const result = useMemo(()=> myfun(count),[count]) 
  return (
    <div>
      <h1>{count} </h1>
      <h1>{result}</h1>
    <button onClick={()=>setCount(count + 1) } >Count</button>
    <input type="text" value={nae} onChange={(e)=>setName(e.target.value)}  />
    </div>
  )
}

export default Usememo