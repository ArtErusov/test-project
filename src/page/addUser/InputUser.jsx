import styles from './addUser.module.scss';
import { useState } from 'react';


const InputUser = (props) =>{

const [addNewUser, setNameUser] = useState('')
const [ageUser, setAgeUser] = useState('')

const newUser = {
    name: addNewUser,
    age: ageUser
}

props.onSaveUser(newUser)

const nameInputHapdler = (event) =>{
    setNameUser(event.target.value);
};
const nameAgeHapdler = (event) =>{
    setAgeUser(event.target.value);
};


return(<div className={styles.user__input}>
    <input onChange={nameInputHapdler} type="text" placeholder='Имя контакта'/>
    <input onChange={nameAgeHapdler} type="number" placeholder='Возраст контакта'/>
    <p>Выберите должность</p>
    <button onClick={() => props.addNewUser()} className={styles.btn}>Добавить контакт</button>

</div>)
}


export default InputUser;