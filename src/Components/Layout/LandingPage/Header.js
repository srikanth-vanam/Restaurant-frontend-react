import classes from "./Header.module.css";
import CartIcon from "../../assets/CartIcon";
const Header = () => {
  return (
    <>
      <header className={classes.outer}>
        <h1>ReactMeals</h1>
        <button>
          <span className={classes.icon}><CartIcon></CartIcon></span>
          <span>Your Cart</span>
          <span className={classes.count}>0</span>
        </button>
      </header>
      <div className={classes.img}></div>
    </>
  );
};

export default Header;