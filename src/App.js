import { useState } from "react";
import Header from "./Components/Layout/LandingPage/Header";
import Mealslist from "./Components/Layout/Meals-list/Mealslist";
import Summary from "./Components/Layout/Summary/Summary";

function App() {
  const [mealsArray, setMealsArray] = useState([
    {
      title: "Sushi",
      description: "Fish dish famous in japan",
      price: "$30.0",
    },
    {
      title: "Salad",
      description: "Made with fresh leafy vegetables",
      price: "$20.0",
    },
    {
      title: "Chocolate cake",
      description: "Home-made chocolate cake ",
      price: "$15.5",
    },
  ]);
  return (
    <>
      <Header />
      <Summary />
      <Mealslist list={mealsArray}/>
    </>
  );
}

export default App;
