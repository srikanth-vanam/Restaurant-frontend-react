import { useState } from "react";
import Header from "./Components/Layout/Header/Header";
import Mealslist from "./Components/Layout/Meals-list/Mealslist";
import Summary from "./Components/Layout/Summary/Summary";
import CartModal from "./Components/Cart/CartModal";
import CartProvider from "./Components/Store/CartProvider";

function App() {
  const [cartShow, setCartShow] = useState(false);
  const cartShowHandler = () => {
    setCartShow(true);
  };
  const cartHideHandler = () => {
    setCartShow(false);
  };
  const mealsArray = [
    {
      id:"meal-1",
      title: "Sushi",
      description: "Fish dish famous in japan",
      price: "$30.0",
    },
    {
      id:"meal-2",
      title: "Salad",
      description: "Made with fresh leafy vegetables",
      price: "$20.0",
    },
    {
      id:"meal-3",
      title: "Chocolate cake",
      description: "Home-made chocolate cake ",
      price: "$15.5",
    },
    {
      id:"meal-4",
      title: "Satvic roti",
      description: "Different from normal roti ",
      price: "$3",
    },
  ];
  return (
    <CartProvider>
      {cartShow && <CartModal onConfirm={cartHideHandler} />}
      <Header onCartShow={cartShowHandler} />
      <Summary />
      <Mealslist list={mealsArray} />
    </CartProvider>
  );
}

export default App;
