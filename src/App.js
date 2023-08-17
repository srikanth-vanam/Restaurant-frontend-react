import Header from "./Components/Layout/LandingPage/Header";
import Mealslist from "./Components/Layout/Meals-list/Mealslist";
import Summary from "./Components/Layout/Summary/Summary";

function App() {
  const mealsArray = [
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
    {
      title: "Satvic roti",
      description: "Different from normal roti ",
      price: "$3",
    },
  ];
  return (
    <>
      <Header />
      <Summary />
      <Mealslist list={mealsArray} />
    </>
  );
}

export default App;
