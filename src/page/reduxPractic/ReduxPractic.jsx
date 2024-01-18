import { Fragment } from 'react';
import styles from './style.module.scss';

import ReduxPracticOne from './ReduxPracticOne';
import Divider from '../../components/ui/Divider/Divider';


const ReduxPractic = () =>{


return(<Fragment>
<Divider title={'Работа с нативным Redux'}/>
<ReduxPracticOne/>
<Divider title={'Работа с ReduxToolkit'}/>
</Fragment>)
}


export default ReduxPractic;