import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const BASE_URL = "https://shafin-backend.onrender.com";

const Updateproducts = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [color, setColor] = useState("black");
  const [cutprice, setcutprice] = useState("");
  const [stock, setStock] = useState("");
  const [category, setCategory] = useState("");
  const [describe, setDescribe] = useState("");
  const [seller, setSeller] = useState("");
  const [rating, setRating] = useState("");
  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(`${BASE_URL}/api/v1/products/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const product = res.data.product;
        console.log(product.color);

        setName(product.name);
        setPrice(product.price);
        setColor(product.color);
        setcutprice(product.cutprice);
        setStock(product.stock);
        setCategory(product.category);
        setDescribe(product.describe);
        setSeller(product.seller);
        setRating(product.rating);

        toast.success("successfull created product..", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } catch (err) {
        console.error("Error fetching product:", err);
      }
    };

    fetchProduct();
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    axios
      .put(
        `${BASE_URL}/api/v1/products/update/${id}`,
        {
          name,
          price,
          color,
          cutprice,
          stock,
          category,
          describe,
          seller,
          rating,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((result) => {
        navigate("/showallproducts");
        console.log(result.data);
      })
      .catch((err) => console.log(err));

    axios
      .delete(`${BASE_URL}/api/v1/products/delete/${id}`)
      .then((result) => {
        navigate("/showallproducts");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex  justify-content-center align-items-center login">
      <div className="">
        <h3>Update Product</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Product Name</label>
            <input
              type="text"
              placeholder="Enter product name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label>Description</label>
            <input
              type="text"
              placeholder="Product description"
              className="form-control"
              value={describe}
              onChange={(e) => setDescribe(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>colors</label>
            <select
              className="form-control"
              required
              value={color}
              onChange={(e) => setColor(e.target.value)}
            >
               <option value="">Select color</option>

              <option value="black">black</option>
              <option value="white">white</option>
              <option value="green">green</option>
              <option value="beige">beige</option>

               <option value="black">black</option>
                <option value="white">white</option>
                <option value="green">green</option>
                <option value="beige">beige</option>
                  <option value="blue">blue</option>
                <option value="red">red</option>
                <option value="yellow">yellow</option>

            </select>
          </div>

          <div className="mb-3">
            <label>Price</label>
            <input
              type="text"
              placeholder="Price"
              className="form-control"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label>cutPrice</label>
            <input
              type="text"
              placeholder="cutPrice"
              className="form-control"
              value={cutprice}
              onChange={(e) => setcutprice(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label>Category</label>
            <select
              className="form-control"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="newarrival">newarrival</option>
              <option value="bestseller">bestseller</option>
              <option value="zcommuntity">zcommuntity</option>
              <option value="animi-oversizes-t-shirts">
                Anime Oversized T-shirts
              </option>
              <option value="caroversized">CarOversizes</option>
              <option value="music">music tees</option>
              <option value="bike">bike tess</option>
              <option value="sportoversized">sport tees</option>
            </select>
          </div>
          <div className="mb-3">
            <label>Seller</label>
            <input
              type="text"
              placeholder="Enter seller name"
              className="form-control"
              value={seller}
              onChange={(e) => setSeller(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label>Stock</label>
            <input
              type="text"
              placeholder="Stock"
              className="form-control"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label>Rating</label>
            <input
              type="text"
              placeholder="Rating"
              className="form-control"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
          </div>
          <button className="btn btn-success">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Updateproducts;
