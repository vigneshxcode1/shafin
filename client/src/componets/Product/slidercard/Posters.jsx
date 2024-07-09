import React from "react";
import { Link } from "react-router-dom";
import animiimg from "../../images/animiposter.jpg";
import carimg from "../../images/carposter.jpg";
import bikeimg from "../../images/samurai.jpg";
import posterimg from "../../images/trendposter.png";
import '../Corosol.css'; 

const productsimg = [
  { id: 1, image: animiimg, name: "Animi collections", link: "/animiposters" },
  { id: 2, image: carimg, name: "Car collection", link: "/carposters" },
  { id: 3, image: bikeimg, name: "Bike collections", link: "/bikeposters" },
  { id: 4, image: posterimg, name: "Poster", link: "/movieposters" },
];

const Trendingshirt = () => {
  return (
    <div>
        <h1 className="headers">Poster collection &#8594;</h1>
      <div className="img-main">
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
            <p>{product.name}&#8594;</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trendingshirt;
