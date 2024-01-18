import { Fragment, useState } from 'react';
import styles from './style.module.scss';

const ReduxPracticOne = () =>{

const [counterOne, setCounterOne] = useState(0);

return(<Fragment>
<div className={styles.item}>
    <button onClick={() => setCounterOne(counterOne - 1)} className={styles.item__btn}>убавить -1</button>
    <p>{counterOne}</p>
    <button onClick={() => setCounterOne(counterOne + 1)} className={styles.item__btn}>добавить + 1</button>
</div>
</Fragment>)
}


export default ReduxPracticOne;