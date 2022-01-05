import DUMMY_MEALS from '../../data/DummyMeals'
import classes from './AvailableMeals.module.css'
import MealItem from './MealItem'

const AvailableMeals = props => {

    const mealsList = DUMMY_MEALS.map(meal =>
        <MealItem name={meal.name} description={meal.description} price={meal.price}></MealItem>
    )

    return(
        <div className={classes.meals}>
            <ul>
        {mealsList}
            </ul>
        </div>
    )
}

export default AvailableMeals;