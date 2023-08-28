import CartContext from "./Cart-context";
import { useState } from "react";

const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);

  const addItemsHandler = (item) => {
    let itemExists = false;
    setCartItems((prevItems) => {
      let oldItems = [...prevItems];
      for (const key of oldItems) {
        // if item is already present increasing quantity
        if (key.id === item.id) {
          key.quantity += item.quantity;
          itemExists = true;
          break;
        }
      }
      // if item is not there in itemsList adding item to cartItems
      if (!itemExists && item.quantity !== 0) {
        oldItems.push(item);
      }
      return oldItems;
    });
  };

  const removeItemsHandler = (item) => {
    setCartItems((prevItems) => {
      let itemsArray = [...prevItems];
      for (const Originalitem of itemsArray) {
        // finding the item through it's id
        if (Originalitem.id === item.id) {
          // decreasing the quantity if it's not equal to zero
          if (Originalitem.quantity !== 0) {
            Originalitem.quantity -= item.quantity;
            break;
          }
        }
      }
      // to remove items if quantity is zero
      const newCartItems = itemsArray.filter((item) => {
        return item.quantity !== 0;
      });
      return newCartItems;
    });
  };

  const OrderHandler=()=>{
    if(cartItems.length===0){
      alert("Cart is empty, please purchase items to Place Order");
    }
    else{
      setCartItems([]);
      alert("Thank you for the purchase!!!");
    }
  }

  const cartContext = {
    items: cartItems,
    totalAmount: 0,
    addItems: addItemsHandler,
    removeItems: removeItemsHandler,
    placeOrder:OrderHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
