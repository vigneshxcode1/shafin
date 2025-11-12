export const getCartItems = () => {
  return JSON.parse(localStorage.getItem('cart')) || [];
};

export const addCartItem = (product, quantity) => {
  const cartItems = getCartItems();
  const existingProductIndex = cartItems.findIndex(item => item._id === product._id);

  if (existingProductIndex > -1) {
      cartItems[existingProductIndex].quantity += quantity;
  } else {
      cartItems.push({ ...product, quantity });
  }

  localStorage.setItem('cart', JSON.stringify(cartItems));
};

export const updateCartItem = (productId, quantity) => {
  let cartItems = getCartItems();
  cartItems = cartItems.map(item => {
      if (item._id === productId) {
          return { ...item, quantity: Math.max(quantity, 1) }; 
      }
      return item;
  });

  localStorage.setItem('cart', JSON.stringify(cartItems));
  return cartItems;
};

export const removeCartItem = (productId) => {
  let cartItems = getCartItems();
  cartItems = cartItems.filter(item => item._id !== productId);

  localStorage.setItem('cart', JSON.stringify(cartItems));
  return cartItems;
};

export const clearCart = () => {
  localStorage.removeItem('cart');
};
