import { Fragment, useState } from 'react';
import styles from './style.module.scss';

const ReduxPracticThree = () =>{

const [counterThree, setCounterThree] = useState(0);



const counterPlus = () => {
    setCounterThree(counterThree + 1)
    console.log('+1 проверка Three')
}

const counterMinus = () => {
    setCounterThree(counterThree - 1)
    console.log('-1 проверка Three')
}


return(<Fragment>


<div className={styles.item}>
    <button onClick={() => counterMinus()} className={styles.item__btn}>- 1</button>
    <p>{counterThree}</p>
    <button onClick={() => counterPlus()} className={styles.item__btn}>+ 1</button>
</div>
</Fragment>)
}
export default ReduxPracticThree;