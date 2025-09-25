import React, { createContext, useState } from 'react'
import Usestate from './Usestate'
export const UserContext = createContext()

const Usecontext = () => {
  const [user,setUser]=useState([{
    name :"muneesh",
    age: 24,
  }])
  return (
    <div>
      <UserContext.Provider value={user}>
      <Usestate />
</UserContext.Provider>
    </div>
  )
}

export default Usecontext