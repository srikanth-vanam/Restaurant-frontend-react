import Button from "../../UI/Button";
import Card from "../../UI/Card";
import classes from "./Mealslist.module.css";
import CartContext from "../../Store/Cart-context";
import { useContext } from "react";

const Mealslist = (props) => {
  const ctx = useContext(CartContext);
  const addItem = (item) => {
    const quantity = document.getElementById(item.id).value;
    ctx.addItems({ ...item, quantity: +quantity });
    // making its value to zero
    document.getElementById(item.id).value = 0;
  };
  return (
    <Card className={classes.outer}>
      {props.list.map((item) => (
        <>
          <div className={classes.display} key={item.id}>
            <div className={classes.list}>
              <span className={classes.title}>{item.title}</span>
              <span>{<i>{item.description}</i>}</span>
              <span className={classes.price}>{item.price}</span>
            </div>
            <div>
              <form className={classes.quantity}>
                <label>Amount</label>
                <input
                  type="number"
                  id={item.id}
                  min={1}
                  defaultValue={0}
                ></input>
              </form>
              <Button onClick={() => addItem(item)}>+Add</Button>
            </div>
          </div>
          <hr></hr>
        </>
      ))}
    </Card>
  );
};

export default Mealslist;
