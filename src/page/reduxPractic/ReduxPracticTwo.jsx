import { Fragment, useState } from 'react';
import styles from './style.module.scss';

const ReduxPracticTwo = () =>{

const [counterTwo, setCounterTwo] = useState(0);

const counterPlus = () => {
    setCounterTwo(counterTwo + 1)
    console.log('+1 проверка')
}

const counterMinus = () => {
    setCounterTwo(counterTwo - 1)
    console.log('-1 проверка')
}


return(<Fragment>


<div className={styles.item}>
    <button onClick={() => counterMinus()} className={styles.item__btn}>- 1</button>
    <p>{counterTwo}</p>
    <button onClick={() => counterPlus()} className={styles.item__btn}>+ 1</button>
</div>
</Fragment>)
}


export default ReduxPracticTwo;