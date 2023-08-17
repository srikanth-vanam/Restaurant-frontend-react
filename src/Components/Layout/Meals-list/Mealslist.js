import Card from "../../UI/Card";
import classes from "./Mealslist.module.css";
const Mealslist = (props) => {
  return (
    <Card className={classes.outer}>
      {props.list.map((item) => (
        <>
          <div className={classes.list}>
            <span className={classes.title}>{item.title}</span>
            <span className={classes.desc}>{<i>{item.description}</i>}</span>
            <span className={classes.price}>{item.price}</span>
          </div>
          <hr></hr>
        </>
      ))}
    </Card>
  );
};

export default Mealslist;
