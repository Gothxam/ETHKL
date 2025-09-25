import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Useeffact = () => {
  const [user, setUser]= useState([])
  useEffect(()=>{
    const myFun= async()=>{
      const res = await fetch("https://dummyjson.com/products")
      const data = await res.json()
      setUser(data.products)
    }
    myFun()
  },[])

console.log("user",user);


  return (
    <div>
      {
        user.map((data)=>(
          <div key={data.id}>
            <Link to={`/detail/${data.id}`}>
            <img src={data.images} alt="" width={200} />
            </Link>
            <p>{data.brand}</p>
            <h1>{data.title}</h1>
            <button>${data.price}</button>
         
          </div>
        ))
      }

    </div>
  )
}

export default Useeffact