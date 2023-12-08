import React from "react";
import styles from '../delivery.module.scss';
import MealsPromoText from "./MealsPromoText";
import MealsList from "./Mealslist";



const Meals = (props) =>{
    return <React.Fragment>
        <MealsPromoText/> 
        <main>
            <MealsList /> 
        </main>

    </React.Fragment>
}

export default Meals;