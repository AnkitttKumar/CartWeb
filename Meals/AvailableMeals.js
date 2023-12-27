import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Mexican rice",
    description: "Finest rice and veggies",
    price: "130",
  },
  {
    id: "m2",
    name: "Taco Bowl",
    description: "Fullest protein, carbs balanced",
    price: "180",
  },
  {
    id: "m3",
    name: "Sweet Potato",
    description: "Soft and fresh sweet potato bowl",
    price: "120",
  },
  {
    id: "m4",
    name: "Black Bean",
    description: "Finest black bean with rice and veggies",
    price: "230",
  },
  {
    id: "m5",
    name: "Green Rice",
    description: "Lil rice with overloaded veggies",
    price: "150",
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};
export default AvailableMeals;
