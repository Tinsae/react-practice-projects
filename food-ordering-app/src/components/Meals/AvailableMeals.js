import React from 'react';
import classes from "./AvailableMeals.module.css";
import DUMMY_MEALS from "./dummy-meals.js";
import Card from "../UI/Card"
import MealItem from "./MealItem/MealItem"
const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map(meal => <MealItem meal={meal} key={meal.id} />);
    return <Card className={classes.meals}>
        <ul>
            {mealsList}
        </ul>
    </Card>


};

export default AvailableMeals;
