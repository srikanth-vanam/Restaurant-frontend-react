import Card from "../../UI/Card";
import classes from "./Summary.module.css";
const Summary = () => {
  return (
    <Card className={classes.summary}>
      <h2>Delicious Food, Delivered To You</h2>
      <p>
        Choose yout favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All our meals are cooked with high-quality ingredientsm just-in-time and
        of course by experienced chefs!
      </p>
    </Card>
  );
};

export default Summary;
