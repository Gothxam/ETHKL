// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { data, Link } from 'react-router-dom';
import "./cards.css"
import { useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { motion } from "motion/react"


function Cards({id, name, price, image, showPrice=false, isSkeleton=false  }) {
const [imgLoaded, setImgLoaded] = useState(false);
 if (isSkeleton) {
    return (
      <Card className="card">
        <div className="img-skeleton"></div>
        <Card.Body>
          <Skeleton width={100} height={20} />
          <Skeleton width={60} height={20} />
        </Card.Body>
      </Card>
    );
  }  

  return (
    
    <Card className="card">
      <Link to={`detail/${id}`}>
        {!imgLoaded && <div className="img-skeleton"></div>}
        <Card.Img
          variant="top"
          src={image}
          onLoad={() => setImgLoaded(true)}
          className={`card-img-top ${imgLoaded ? "loaded" : ""}`}
        />
      </Link>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        {showPrice && <Card.Text>Price: ₹{price}</Card.Text>}
      </Card.Body>
    </Card>
    
  );
}

export default Cards;