import ReactDOM from "react-dom";
import Button from "./Button";
import Card from "./Card";
import classes from "./CartModal.module.css";
import CartContext from "../Store/Cart-context";
import { useContext } from "react";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm}></div>;
};

const Overlay = (props) => {
  const ctx = useContext(CartContext);
  let totalAmount=0;
  return (
    <Card className={classes.modal}>
      {ctx.items.map((item) => (
        <>
          <span>{item.title}</span>
          <div className={classes.amount}>
            <p>Individual Amount</p>
            <p>{item.price}</p>
            <p>quantity </p>
            <p>{item.quantity}</p>
          </div>
          {/* <div className={classes.amount}>
            
          </div> */}
          <hr></hr>
        </>
      ))}
          <div className={classes.amount}>
            <p>Total Amount</p>
            <p>{totalAmount}</p>
          </div>
          <div className={classes.buttons}>
            <Button onClick={props.onConfirm}>Close</Button>
            <Button>Order</Button>
          </div>
    </Card>
  );
};
const CardModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Overlay onConfirm={props.onConfirm} />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default CardModal;
