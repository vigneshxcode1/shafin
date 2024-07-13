import React from "react";
import { Link } from "react-router-dom";
import animiimg from "../../images/oversized.jpg";
import carimg from "../../images/car.jpg";
import bikeimg from "../../images/bike.jpg";
import posterimg from "../../images/postercollection.png";
import '../Corosol.css'; 

const productsimg = [
  { id: 1, image: animiimg, name: "Animi collections", link: "/anioversized" },
  { id: 2, image: carimg, name: "Car collection", link: "/car" },
  { id: 3, image: bikeimg, name: "Bike collections", link: "/bike" },
  { id: 4, image: posterimg, name: "Poster", link: "/poster" },
];

const Trendingshirt = () => {
  return (
    <div>
      <div className="img-mains">
        {productsimg.map((product) => (
          <div className="products" key={product.id}>
            <Link to={product.link} className="product-link">
              {product.image ? (
                <img
                  className="stackimgs"
                  src={product.image}
                  alt={`Image ${product.id}`}
                />
              ) : (
                <p>No image available</p>
              )}
            </Link>
            <p className="cor-name">{product.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trendingshirt;
