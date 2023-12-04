import styles from './todoList.module.scss';



const TodoInput = (props) =>{



return(<div className={styles.container}>
    <input type="text" placeholder='Введите задачу' value={props.todo}
    onChange={(e) => props.setTodo(e.target.value)}/>
    <button onClick={() => props.addTask()}>отправить</button>

</div>)
}


export default TodoInput;