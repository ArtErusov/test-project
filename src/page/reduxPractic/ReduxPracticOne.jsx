import { Fragment, useState } from 'react';
import styles from './style.module.scss';

const ReduxPracticOne = ({counterOne, setCounterOne}) =>{



return(<Fragment>
<div className={styles.item}>
    <button onClick={() => setCounterOne(counterOne - 1)} className={styles.item__btn}>- 1</button>
    <p>{counterOne}</p>
    <button onClick={() => setCounterOne(counterOne + 1)} className={styles.item__btn}>+ 1</button>
</div>
</Fragment>)
}


export default ReduxPracticOne;