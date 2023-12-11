import styles from '../delivery.module.scss';
import InputMain from './ui/InputMain';

  
const MealItemForm =(props) =>{
return <form className={styles.form}>
<InputMain label='Количество' input={{
    id: props.id ,
    type: 'number',
    min: '1',
    step: '1',
    defaultValue: '1'
}} />
<button>Добавить</button>
</form>   
}

export default MealItemForm;