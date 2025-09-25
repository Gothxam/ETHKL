import React from 'react'
import Component1 from './component1'

const Reactt = () => {
  const user ={
    name : "muneesh",
    age: 24,
    city :"chandigarh"
  }
  return (
    <div>
      <Component1 user={user}  />
    </div>
  )
}

export default Reactt