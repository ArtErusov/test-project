import styles from './todoList.module.scss';
import TodoInput from './TodoInput';
import TodoTask from './TodoTask';
import React, { useState } from "react";



const TodoList = () =>{


const [todo, setTodo] = useState(''); // передача значений
const [tasks, setTasks] = useState([]); // наш массив
const [inInputValid, setInInputValid] = useState(true);  // проверка ввода

const addTask = () => {
//добавляем новый расход. взаимодействие с кнопкой
if (todo.trim().length == 0) { // проверяем импут на отсутствие символов
    setInInputValid(false)
    return
    };
    setInInputValid(true)
    const taskTodo ={
            id: Math.random(),
            value: todo,
            status: false
        }
        let newTask = [taskTodo, ...tasks] //добавляем к нашему массиву новый объект
        setTasks(newTask) 
        setTodo("")
};


console.log(inInputValid);

  
return(<div className={styles.container}>
    <div className={styles.todo}>
        <h1 style={{color: !inInputValid ? 'red' : 'gray'}}>todo list</h1> {/* Проверка ввода */}
       
        <TodoInput addTask={addTask} todo={todo} setTodo={setTodo} inInputValid={inInputValid}/>

      {tasks.map((item) => (
      <TodoTask  key ={item.id} value ={item.value} status ={item.status}/>
      ))}
 
    </div>
</div>)
}


export default TodoList;