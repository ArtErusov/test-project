import styles from './todoList.module.scss';



const TodoTask = (props) =>{



return(<div key={props.id} className={styles.todo__task}>
     <p>{props.value}</p>
     
    <input className={styles.input} type="checkbox" name="выполнено" />
    <label htmlFor="выполнено">Выполнено</label>
    <button className={styles.btn}>удалить</button>
</div>)
}


export default TodoTask;