import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Navbar from "../../src/componets/Navbar/Navbar.jsx";
import "./cart.css";
import { getCartItems, updateCartItem, removeCartItem, clearCart } from "../localStorageHelpers.jsx";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const items = getCartItems();
        setCartItems(items);
    }, []);

    const handleQuantityChange = (productId, quantity) => {
        if (quantity <= 0) {
            toast.error('Quantity must be at least 1', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return;
        }
        const newCartItems = updateCartItem(productId, quantity);
        setCartItems(newCartItems);
    };

    const handleRemoveItem = (productId) => {
        const newCartItems = removeCartItem(productId);
        setCartItems(newCartItems);
        toast.success('Item removed from cart', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

    const calculateTotal = () => {
        let totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
        return totalAmount;
    };

    const calculateTotalQuantity = () => {
        let totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
        return totalQuantity;
    };

    const handleProceedToPayment = () => {
        if (cartItems.length === 0) {
            toast.error('Your cart is empty.', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return;
        }

        let message = `Hello! YOUR BRAND I'd like to proceed with my order. Here are the details:\n`;
        cartItems.forEach(item => {
            message += `Product Name: ${item.name}\nDescription: ${item.describe}\nSize: ${item.size}\nQuantity: ${item.quantity}\nPrice: $${item.price * item.quantity}\n`;
        });
      
        message = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/9025630360/?text=${message}`;
        window.location.href = whatsappUrl;

        toast.success('Redirecting to WhatsApp...', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });

        clearCart();
        setCartItems([]);
        navigate("/");
    };

    if (cartItems.length === 0) {
        return (
            <>
                <Navbar />
                <br></br><br></br><br></br>
                <h3>Your cart is empty</h3>
            </>
        );
    }

    return (
        <>
            <Navbar />
            <div className="cart-container">
                <h1>Your Cart</h1>
                {cartItems.map(item => (
                    <div key={item._id} className="cart-item">
                        <img src={item.images[0]} alt={item.name} />
                        <div className="cart-item-info">
                            <h2>Name: {item.name}</h2>
                            <p>Price: ₹{item.price}</p>
                            <p>Size: {item.size}</p>
                            <div className="quantity-container">
                                <button onClick={() => handleQuantityChange(item._id, item.quantity - 1)}>-</button>
                                <span>{item.quantity}</span>
                                <button onClick={() => handleQuantityChange(item._id, item.quantity + 1)}>+</button>
                            </div>
                            <button className='remove' onClick={() => handleRemoveItem(item._id)}>Remove</button>
                        </div>
                    </div>
                ))}
                <div className="cart-summary">
                    <h2 className="total">Total: ${calculateTotal()}</h2>
                    <button className="process-btn" onClick={handleProceedToPayment}>Proceed to Payment</button>
                </div>
            </div>
        </>
    );
};

export default Cart;
