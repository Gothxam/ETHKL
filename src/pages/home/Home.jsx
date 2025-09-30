import React, { useEffect, useState } from 'react'
import './home.css'
// import Cards from '../../components/cards/Cards'
// import Card from 'react-bootstrap/Card';
// import { data, Link } from 'react-router-dom';
import Cards from '../../components/cards/Cards';
import AOS from "aos";
import "aos/dist/aos.css";
import Card from 'react-bootstrap/Card';
import { data, Link, NavLink } from 'react-router-dom';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("women");
const [imgLoaded, setImgLoaded] = useState(false);
  useEffect(() => {
    AOS.init(
      {
        duration: 1000,
        easing: "ease-in-out",
        delay: 100
      }
    );

  }, []);


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("./data/products.json");
        const data = await res.json();

        const productCategory = data.categories.find(
          (cat) => cat.name.toLowerCase() === selectedCategory.toLowerCase()
        );

        setProducts(productCategory ? productCategory.products : []);
      } catch (error) {
        console.error("Error fetching JSON:", error);
      }
    };

    fetchProducts();
  }, [selectedCategory]);


  return (
    <div className='container-fluid mt-5'>
      <div className=' row justify-content-center text-center '>
        <div className=' col-12 mt-5'>
          <p className='headline'>
            Sustainable. Beautiful. Ethical.
          </p>
          <div>
            <button className='btn page-btn'>
              <Link as={NavLink} to="/Shop" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              Shop now
            </Link>
            </button>
          </div>
          <div className="preCollection row mt-5" style={{ overflowX: "hidden", position: "relative" }}>
            <div className="col-md-6 p-0 text-center mb-5" data-aos="fade-right">
               <Link as={NavLink} to="/Women" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                <div className="img-container">
                  <img className="img-fluid w-100" src="../collection/2.avif" alt="womens collection" />
                </div>
                <h4 className="img-shop">Shop Women &gt;</h4>
              </Link>
            </div>

            <div className="col-md-6 p-0 text-center" data-aos="fade-left">
              <Link as={NavLink} to="/Men" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                <div className="img-container">
                  <img className="img-fluid w-100" src="../collection/1.avif" alt="mens collection" />
                </div>
                <h4 className="img-shop">Shop Men &gt;</h4>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className='card-container row justify-content-center  ' >
        <div className='card3 ' data-aos="fade-right">
          <img className="img-fluid  mt-5 " src="../collection/5.avif" alt="" />
        </div>
        <div className='card1 ' data-aos="fade-down">
          <h2 className='mb-5 mt-4'><b>Ethically Made</b></h2>
          <p>
            I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.
          </p>
          <button className='mt-4 px-5 learn-btn p-2 '>Learn More</button>
        </div>
        <div className=' card2 ' data-aos="fade-up">
          <img className="img-fluid" src="../collection/3.avif" alt="" />
        </div>
      </div>

      <div className="container-fluid mb-5  " >
        <div className="row align-items-center">
          <div className="col-12 mt-5 justify-content-center text-center mb-5">
            <h1>
              <b>New Arrivals</b>
            </h1>
          </div>
        </div>

        <div className="d-flex justify-content-center gap-3 mb-4">
          <button
            className={`btn ${selectedCategory === "women" ? "btn-dark" : "btn-outline-dark"}`}
            onClick={() => setSelectedCategory("women")}
          >
            Women
          </button>
          <button
            className={`btn ${selectedCategory === "men" ? "btn-dark" : "btn-outline-dark"}`}
            onClick={() => setSelectedCategory("men")}
          >
            Men
          </button>
        </div>

        <div className="row g-4" >
          {products.slice(0, 4).map((item) => (
            <div key={item.id} className="col-12 col-sm-6 col-md-3" data-aos="flip-right">
              <Card className='card '>
                <Link to={`${selectedCategory}/detail/${item.id}`}>
                  <Card.Img variant="top" src={item.image} onLoad={() => setImgLoaded(true)}
                    className={`card-img-top ${imgLoaded ? "loaded" : ""}`} />
                </Link>
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                   <Card.Text>Price: ₹{item.price}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 d-flex justify-content-center" >
        <div className="position-relative w-100 hero-section">
          {/* Background image */}
          <img className="img-fluid bg-img" src="../collection/6.avif" alt="" />

          <div className="overlay-content text-center text-dark px-3"  data-aos="">
            <h2 className="fw-bold mb-4 ">Carefully crafted for people that care</h2>
            <p >
              Every detail is thoughtfully designed to bring you unmatched quality and elegance.
              Our creations are made for those who value craftsmanship and care, offering a perfect
              blend of style, comfort, and functionality. Discover products that resonate with your
              taste and elevate your everyday experiences.
            </p>
            <button className="btn page-btn mt-4">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home