import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Details = () => {
  const id = useParams()
  
  const [user, setUser]= useState([])
  useEffect(()=>{
    const myFun= async()=>{
      const res = await fetch("https://dummyjson.com/products")
      const data = await res.json()
      const product = data.products.filter((product)=>product.id == id.id)
      setUser(product)
    }
    myFun()
  },[])

  return (
    <div>
     {
        user.map((data)=>(
          <div key={data.id}>
            <img src={data.images} alt="" width={200} />
            <p>{data.brand}</p>
            <h1>{data.title}</h1>
            <button>${data.price}</button>
         
          </div>
        ))
      }
    </div>
  )
}

export default Details