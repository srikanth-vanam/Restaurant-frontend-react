import classes from "./Header.module.css";
import CartIcon from "../../assets/CartIcon";
import CartContext from "../../Store/Cart-context";
import { useContext } from "react";
const Header = (props) => {
  const CartCtxt = useContext(CartContext);

  // to display the count of items quantity
  let numberOfItems = 0;
  CartCtxt.items.forEach((item) => {
    numberOfItems += item.quantity;
  });

  return (
    <>
      <header className={classes.outer}>
        <h1>ReactMeals</h1>
        <button onClick={props.onCartShow}>
          <span className={classes.icon}>
            <CartIcon></CartIcon>
          </span>
          <span>Your Cart</span>
          <span className={classes.count}>{numberOfItems}</span>
        </button>
      </header>
      <div className={classes.img}></div>
    </>
  );
};

export default Header;
