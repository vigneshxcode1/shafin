import React from "react";
import { Link } from "react-router-dom";

import c1 from "../../images/c1.jpg";
import c2 from '../../images/c2.jpg'
import c3 from "../../images/c3.jpg";
import c4 from "../../images/c4.jpg";
import c5 from "../../images/c5.jpg";
import c6 from "../../images/c6.jpg";
import c7 from "../../images/c7.jpg";
import c8 from "../../images/c8.jpg";
import "../Corosol.css";


const productsimg = [
  { id: 1, image: c1, name: "Anime collections", link: "/anioversized" },
  { id: 2, image: c2, name: "sports collection", link: "/sportoversized" },
  { id: 3, image: c3, name: "Car collection", link: "/caroversized" },
  { id: 4, image: c4, name: "bikeOversized", link: "/movieoversized" },
  { id: 5, image: c5, name: "music Oversized", link: "/music" },
  { id: 6, image: c6, name: "music Oversized", link: "/music" },
  { id: 7, image: c7, name: "music Oversized", link: "/music" },
  { id: 8, image: c8, name: "music Oversized", link: "/music" },

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
                {/* <h6 className="overlayname1">New Drop</h6>
                 <h6 className="overlayname">Buy Now</h6> */}
            </Link>
            {/* <p className="cor-name">{product.name}</p> */}

             
            
            {/* <p className="cor-name">{product.name}</p> */}

          </div>
        ))}
      </div>
    </div>
  );
};

export default Trendingshirt;
