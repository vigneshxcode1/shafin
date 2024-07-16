import React, { useEffect, useState } from "react";
import axios from "axios";
import "../cart.css";

const BASE_URL = "https://server.zculture.in";

// const BASE_URL = "http://localhost:8000";

const ShippingPage = () => {
  const [name, setname] = useState("");
  const [address, setAddress] = useState("");
  const [email, setemail] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("india");
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

      const response = await axios.post(
        `${BASE_URL}/api/v1/order/new`,
        orderData
      );
      console.log(response.data);

      //email
      
      const emailresponsive = await axios
        .post(`${BASE_URL}/api/v1/sentmail`, orderData)
        .then(() => {
          alert("check your mail;");
        });
      console.log(emailresponsive.data);

      const message = `
Order placed successfully! Check your email and Here are the details:
Name: ${name};
Address: ${address};
email:${email}
City: ${city};
Country: ${country};
Phone: ${phone};
PIN: ${pin};

`;

      let cartItemsMessage = `\nHello! zculture-shopping I'd like to proceed with my order. Here are the details:\n`;
      if (cartData.length > 0) {
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
      } else {
        console.error("No items found in cartData:", cartData);
      }

      localStorage.removeItem("cart");

      const whatsappURL = `https://api.whatsapp.com/send?phone=7338821735&text=${encodeURIComponent(
        message + cartItemsMessage
      )}`;
      window.location.href = whatsappURL;

      // Clear form data after redirection
      setname("");
      setAddress("");
      setemail("");
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
      <h2>SHIPPING ADDRESS </h2>
      <form className="main-container" onSubmit={handleSubmit}>
        <div className="container">
          <input
            placeholder="name"
            type="text"
            name="name"
            value={name}
            className="inputs"
            onChange={(e) => setname(e.target.value)}
            required
          />
        </div>
        <div className="container">
          <input
            placeholder="email"
            type="email"
            name="city"
            className="inputs"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            required
          />
        </div>
        <div className="container">
          <input
            placeholder="address"
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
            placeholder="city"
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
            placeholder="country"
            name="country"
            className="inputs"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          />
        </div>
        <div className="container">
          <input
            placeholder="phone"
            type="text"
            name="phone"
            className="inputs"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="container">
          <input
            placeholder="pin"
            type="text"
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
