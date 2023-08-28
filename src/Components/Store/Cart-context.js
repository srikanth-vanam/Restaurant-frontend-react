import React from "react";
const CartContext=React.createContext({
  items: [],
  totalAmount: 0,
  addItems: (item) => {},
  removeItems: (item) => {},
  placeOrder:()=>{}
});
export default CartContext