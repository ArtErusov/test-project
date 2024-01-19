import { Fragment, useState } from 'react';
import styles from './style.module.scss';

const ReduxPracticThree = () =>{

const [counterThree, setCounterThree] = useState(0);

return(<Fragment>
<div className={styles.item}>
    <button onClick={() => setCounterThree(counterThree - 1)} className={styles.item__btn}>- 1</button>
    <p>{counterThree}</p>
    <button onClick={() => setCounterThree(counterThree + 1)} className={styles.item__btn}>+ 1</button>
</div>
</Fragment>)
}


export default ReduxPracticThree;