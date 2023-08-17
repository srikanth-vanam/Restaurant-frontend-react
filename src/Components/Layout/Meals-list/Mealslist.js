import Button from "../../UI/Button";
import Card from "../../UI/Card";
import classes from "./Mealslist.module.css";
const Mealslist = (props) => {
  return (
    <Card className={classes.outer}>
      {props.list.map((item) => (
        <>
          <div className={classes.display}>
            <div className={classes.list}>
              <span className={classes.title}>{item.title}</span>
              <span>{<i>{item.description}</i>}</span>
              <span className={classes.price}>{item.price}</span>
            </div>
            <div>
              <form className={classes.quantity}>
                <label>Amount</label>
                <input type="number"></input>
              </form>
              <Button>+Add</Button>
            </div>
          </div>
          <hr></hr>
        </>
      ))}
    </Card>
  );
};

export default Mealslist;
