import styles from '../delivery.module.scss';
import MealItemForm from './MealItemForm';


    

const MealItem = (props) =>{

const formattedPrice = `$${props.price.toFixed(2)}`;


    return( 
    <li className={styles.meal}>
        <div>
            <h3 className={styles.meal__name}>{props.name}</h3>
            <div className={styles.meal__description}>{props.description}</div>
            <div className={styles.meal__price}>{formattedPrice}</div>
        </div>
            <div>
            <MealItemForm id={props.id} />
            </div>
        </li>
    );
}

export default MealItem;