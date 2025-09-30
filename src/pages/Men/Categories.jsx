import React, { useEffect, useState } from "react";
import Cards from "../../components/cards/Cards";
import { useParams } from "react-router-dom";

const Categories = () => {
  const[products,setProducts]=useState([])
  const {category }= useParams();
  const [loading, setLoading] = useState(true);
// const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(()=>{
  
    const fetchProducts=async()=>{
      try {
        setLoading(true);
        const res=await fetch("./data/products.json")
        const data=await res.json()
        
        const productCategory = data.categories.find(
          (cat)=> cat.name.toLowerCase() === category.toLowerCase()         
        )
        
        setProducts(productCategory ? productCategory.products : []);  
      } catch (error) {
        console.error("Error fetching JSON:", error)
      }
      finally {
        setTimeout(() => {
          setLoading(false);          
        }, 800);
    }
      
    }
    
    fetchProducts()
  },[category])

  return (
      <div className="mt-5 container-fluid">
      <div className="col-12 mt-5 justify-content-center text-center mb-5">
        <h2 className="headline">{category}'s Section</h2>
      </div>

      <div className="row g-4">
        {loading
          ? Array(8).fill(0).map((_, i) => (
              <div key={i} className="col-12 col-sm-6 col-md-3">
                <Cards isSkeleton />
              </div>
            ))
          : products.map((item) => (
              <div key={item.id} className="col-12 col-sm-6 col-md-3">
                <Cards
                  name={item.name}
                  image={item.image}
                  price={item.price}
                  id={item.id}
                  showPrice
                />
              </div>
            ))}
        </div>
    </div>
  );
};
export default Categories;
