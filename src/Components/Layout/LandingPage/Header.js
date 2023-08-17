import classes from "./Header.module.css";
import CartIcon from "../../assets/CartIcon";
import CartContext from "../../Store/Cart-context";
import { useContext } from "react";
const Header = (props) => {
  const CartCtxt = useContext(CartContext);
  const uniqueItemIds = new Set(CartCtxt.items.map((item) => item.id));
  const numberOfItems = uniqueItemIds.size;
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
