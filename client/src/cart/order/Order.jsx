
import React, { useEffect, useState } from "react";
import axios from "axios";
import "../cart.css";


const BASE_URL = "https://server.zculture.in";

const ShippingPage = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("India");
  const [phone, setPhone] = useState("");
  const [pin, setPin] = useState("");
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const storedCartData = localStorage.getItem("cart");
    if (storedCartData) {
      try {
        const parsedCartData = JSON.parse(storedCartData);
        setCartData(parsedCartData);
        console.log("Cart data loaded from localStorage:", parsedCartData);
      } catch (error) {
        console.error("Error parsing cart data from localStorage:", error);
      }
    } else {
      console.log("No cart data found in localStorage");
    }
  }, []);

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const orderData = {
        name,
        address,
        email,
        city,
        country,
        phone,
        pin,
        cartData,
      };
      console.log("Submitting order data:", orderData);

      const response = await axios.post(`${BASE_URL}/api/v1/order/new`, orderData);
      console.log(response.data);
     

      const message = `
Order placed successfully! \n Here are the details:\n
Name: ${name}
Address: ${address}
Email: ${email}
City: ${city}
Country: ${country}
Phone: ${phone}
PIN: ${pin}
`;

      let cartItemsMessage = `\n Hello! z-culture I'd like to proceed with my order. Here are the details:\n`;
      cartData.forEach((item) => {
        cartItemsMessage += `
Product Name: ${item.name}
Quantity: ${item.quantity}
Price: Rs:${item.price}
Total: Rs${item.quantity * item.price}
Category: ${item.category}
Images: ${item.images[0]}
Description: ${item.describe}
\n`;
      });
      localStorage.removeItem("cart");
      setCartData([]);
      const whatsappURL = `https://api.whatsapp.com/send?phone=7338821735&text=${encodeURIComponent(
        message + cartItemsMessage
      )}`;
      window.location.href = whatsappURL;

   
      
      setName("");
      setAddress("");
      setEmail("");
      setCity("");
      setCountry("");
      setPhone("");
      setPin("");
    } catch (err) {
      console.error("Error placing order:", err);
      alert("Error placing order. Please try again.");
    }
  };

  return (
    <div className="shipping-form-container">
      <h2>SHIPPING ADDRESS</h2>
      <form className="main-container" onSubmit={handleSubmit}>
        <div className="container">
          <input
            placeholder="Name"
            type="text"
            name="name"
            value={name}
            className="inputs"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="container">
          <input
            placeholder="Email"
            type="email"
            name="email"
            value={email}
            className="inputs"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="container">
          <input
            placeholder="Address"
            type="text"
            name="address"
            value={address}
            className="inputs"
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div className="container">
          <input
            placeholder="City"
            type="text"
            name="city"
            className="inputs"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>
        <div className="container">
          <input
            type="text"
            placeholder="Country"
            name="country"
            className="inputs"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          />
        </div>
        <div className="container">
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            className="inputs"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="container">
          <input
            type="text"
            placeholder="PIN"
            name="pin"
            className="inputs"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            required
          />
        </div>
        <button className="placeorder" type="submit">
          Place Order
        </button>
      </form>
    </div>
  );
};

export default ShippingPage;
