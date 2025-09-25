import React, { useEffect, useReducer, useRef } from 'react'

const Useref = () => {
const userRef =useRef()
// const handleClick =()=>{
// userRef.current.focus()
// }\

useEffect(()=>{
  userRef.current.focus()
},[])


  return (
    <div>
      <input type="text" name="" id="" ref={userRef} />
      {/* <button onClick={handleClick}>Focus</button> */}

      
    </div>
  )
}

export default Useref