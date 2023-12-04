import styles from './todoList.module.scss';
import TodoInput from './TodoInput';
import TodoTask from './TodoTask';
import React, { useState } from "react";



const TodoList = () =>{


const [todo, setTodo] = useState(''); // отрисовка импута
const [tasks, setTasks] = useState([]);

const addTask = () => {
//добавляем новый расход. взаимодействие с кнопкой
        const taskTodo ={
            id: Math.random(),
            value: todo,
            status: false
        }
        let newTask = [taskTodo, ...tasks]
        setTasks(newTask) 
        setTodo("")
};


console.log(tasks);

  
return(<div className={styles.container}>
    <div className={styles.todo}>
        <h1>todo list</h1>
        <TodoInput addTask={addTask} todo={todo} setTodo={setTodo}/>

      {tasks.map((item) => (
      <TodoTask  key ={item.id} value ={item.value} status ={item.status}/>
      ))}
 
    </div>
</div>)
}


export default TodoList;