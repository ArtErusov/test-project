import { Fragment, useState } from 'react';
import styles from './style.module.scss';

const ReduxPracticTwo = () =>{

const [counterTwo, setCounterTwo] = useState(0);

return(<Fragment>
<div className={styles.item}>
    <button onClick={() => setCounterTwo(counterTwo - 1)} className={styles.item__btn}>- 1</button>
    <p>{counterTwo}</p>
    <button onClick={() => setCounterTwo(counterTwo + 1)} className={styles.item__btn}>+ 1</button>
</div>
</Fragment>)
}


export default ReduxPracticTwo;