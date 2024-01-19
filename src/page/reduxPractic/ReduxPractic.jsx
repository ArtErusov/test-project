import { Fragment, useState } from 'react';
import styles from './style.module.scss';

import ReduxPracticOne from './ReduxPracticOne';
import ReduxPracticTwo from './ReduxPracticTwo';
import ReduxPracticThree from './ReduxPracticThree';
import Divider from '../../components/ui/Divider/Divider';

const ReduxPractic = () =>{
const [counterOne, setCounterOne] = useState(0);


return(<Fragment>
<Divider title={'Работа с нативным Redux'}/>
<ReduxPracticOne counterOne={counterOne} setCounterOne={setCounterOne}/>
<Divider title={'Работа с ReduxToolkit'}/>
<ReduxPracticTwo/>
<Divider title={'пустой шаблон'}/>
<ReduxPracticThree/>
</Fragment>)
}


export default ReduxPractic;