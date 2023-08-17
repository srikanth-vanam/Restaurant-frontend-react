import ReactDOM from "react-dom";
import Button from "./Button";
import Card from "./Card";
import classes from "./CartModal.module.css";
const Backdrop = (props) => {
  return <div className={classes.backdrop}></div>;
};

const Overlay = (props) => {
  return (
    <Card className={classes.modal}>
      <span>{props.title}</span>
      <div className={classes.amount}>
        <p>Total Amount</p>
        <p>{props.total}</p>
      </div>
      <div className={classes.buttons}>
        <Button>Close</Button>
        <Button>Okay</Button>
      </div>
    </Card>
  );
};
const CardModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Overlay title="sushi" total="$30.5" />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default CardModal;
