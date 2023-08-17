
import CartContext from "./Cart-context";
import { useState } from 'react';

const CartProvider = (props) => {
    const [cartItems, setCartItems] = useState([]);

  const addItemsHandler = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };
  const removeItemsHandler = (id) => {};
  const cartContext = {
    items: cartItems,
    totalAmount: 0,
    addItems: addItemsHandler,
    removeItems: removeItemsHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
