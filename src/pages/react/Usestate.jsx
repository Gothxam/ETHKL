import React, { useContext, useState } from 'react'
import { UserContext } from './Usecontext'

const Usestate = () => {
  // const [count , setCount]= useState(0)
  // const [color , setColor]=useState("red")
  const [users, setusers]=useState([
    {name: "muneesh",
      age: 24,
      from: "himachal"
    },
    {name: "munna",
      age: 24,
      from: "bihar"
    },
    {name: "sahil",
      age: 26,
      from: "himachal"
    },
  ])

const user = useContext(UserContext)
console.log("user",user)
  return (
    <div>
      {/* <h1>{count}</h1>
      <button  onClick={()=>setCount(count + 1)} >inc++</button>
      <button  onClick={()=>setCount(count - 1)} >dic--</button> */}
      {/* <h1>my fav. color is {color}</h1>
      <button onClick={()=>setColor("blue")}>blue</button> */}

      {users.map((user)=>(
          <div> 
            {user.name}
          </div>
      ))}


    </div>
  )
}

export default Usestate