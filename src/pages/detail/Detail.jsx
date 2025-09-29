import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./detail.css"
// import LoginPopup from '../../components/popup/LoginPopup'
import { add } from '../../redux/slice'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
const Detail = () => {
  const dispatch=useDispatch()
  const [popup, setPopup] = useState(false)
  const { id } = useParams()
  const { category } = useParams();
  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  // console.log("user===>", user);


  const [products, setProducts] = useState([])
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  useEffect(() => {

    const fetchProducts = async () => {
      try {
        const res = await fetch("/data/products.json")
        const data = await res.json()

        const productCategory = data.categories.find(
          (cat) => cat.name.toLowerCase() === category.toLowerCase()
        )
        if (productCategory) {
          const product = productCategory.products.filter((product) => product.id == id)
          setProducts(product)
        }

      } catch (error) {
        console.error("Error fetching JSON:", error)
      }

    }
    fetchProducts()
  }, [id])

  const addToCart=(data)=>{
    // dispatch an action 
    dispatch(add(data))
    toast.success("product added to  cart sucessfully")
  }

  // console.log("popup", popup);

  return (
    <div>
      <div className='container'>
        {
          products.map((data) => (
            <div key={data.id} className='product row '>

              <div className='col-md-6 d-flex justify-content-center '>
                <img src={data.image} alt="" className='product-img ' />
              </div>
              <div className='col-md-6 mt-4'>
                <div>
                  <h1>{data.name}</h1>
                </div>
                <div className='mt-4'>
                  <h4>{data.description}</h4>
                </div>
                <div className='mt-4'>
                  <p>Price: ₹{data.price}</p>
                </div>
                <div className='mt-4 d-flex gap-2'>
                  {data.colors.map((color) => (
                    <div className='colors' onClick={() => setSelectedColor(color)}
                      style={{ backgroundColor: color, cursor: "pointer", border: selectedColor === color ? "2px solid black" : "2px solid #ccc", }}></div>
                  ))}
                </div>
                <div className='mt-4 '>
                  {data.sizes.map((size) => (
                    <button className=' size-btn m-2 ' onClick={() => setSelectedSize(size)} style={{ border: selectedSize === size ? " 2px solid rgba(212, 177, 157)" : "2px solid rgb(126, 126, 126)", color: selectedSize === size ? "white" : "rgb(126, 126, 126)", backgroundColor: selectedSize === size ? "rgba(220, 177, 157)" : "rgb(254, 249, 242)" }}>{size} </button>
                  ))}
                </div>
                <div className='mt-4'>
                  <button className='cart-btn p-1 fs-5' onClick={()=>{addToCart(data)}}>Add to cart</button>
                </div>
                <div className='mt-4'>
                  <button className='buy-btn p-1 fs-5'>
                    Buy now
                  </button>
                </div>
              </div>
            </div>
          ))
        }
      </div>


    </div>


  )
}

export default Detail