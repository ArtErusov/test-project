import styles from './addUser.module.scss';
import { useState } from 'react';
import InputUser from './InputUser';


const AddUser = (props) =>{

const [users, setUsers] = useState([]);

const saveUser = (e) =>(
   console.log(e.AddUser) 
);




const addNewUser = () =>{
        const taskUser ={
                id: Math.random(),
                status: false
            }
            let newUser = [taskUser, ...users] //добавляем к нашему массиву новый объект
            setUsers(newUser) 
            setUsers("")
 }   




return(<div className={styles.container}>
<InputUser onSaveUser={saveUser} addNewUser={addNewUser} />
</div>)

}


export default AddUser;