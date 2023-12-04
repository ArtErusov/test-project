import styles from './todoList.module.scss';



const TodoTask = (props) =>{



return(<div key={props.id} className={styles.container}>
    <input type="checkbox" />
    <p>{props.value}</p>
    <button>удалить</button>

</div>)
}


export default TodoTask;