import styles from './todoList.module.scss';


const TodoInput = (props) =>{

const tasksInputHapdler = (event) =>{
    props.setTodo(event.target.value);
};

return(<div className={styles.todo__input  + ' ' +  `${props.inInputValid ? "" : styles.todo__input_red}`}>
    <input  type="text" placeholder='Введите задачу' value={props.todo}
    onChange={tasksInputHapdler}/>
    <button className={styles.btn} onClick={() => props.addTask()}>добавить</button>

</div>)
}


export default TodoInput;