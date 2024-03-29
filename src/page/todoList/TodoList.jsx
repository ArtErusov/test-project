import styles from './todoList.module.scss';

import React, { useState } from "react";



const TodoList = () =>{
const [todos, setTodos] = useState([])
const [text, setText] = useState('')
 

//Добавляем в state новый объект который формируем из инпута
// text.trim().length убираем пробелы и проверяем есть ли буквы в строке
const addTodo = () => {
    if (text.trim().length){
    setTodos([
        ...todos,
        {
            id: new Date().toISOString(),
            text,
            compleated: false,
        }
    ])
    // Обнуляем данные в инпуте
    setText('') 
   } 
}
// удаляем наше туду с помощью проверки id При клике передаем id а дальше сверяем наше ID 
const removeTodo = (todoId) =>{
    setTodos(todos.filter(item => item.id !== todoId))
}

const toggleTodoCoomplete = (todoId) =>{
    setTodos(
        todos.map(
            item =>{
                if (item.id !==todoId) return item;
  
                return{
                    ...item,
                compleated: !item.compleated,
                
                }
            }
        )
    )
}
  
return(
    <div className={styles.container + ' ' + styles.todo}>
        <label>
            <input 
                placeholder='Добавьте задачу' 
                className={styles.todo__input} value={text} 
                onChange={(event) => setText(event.target.value)}
            />
            <button onClick={() => addTodo()} className={styles.todo__button}>Добавить</button>
        </label>
        <ul className={styles.todo__ul}>
            {
                todos.map(item =>
                    <li key={item.id} className={styles.todo__ul__li}>
                        <span className={styles.todo__ul__del} onClick={() => removeTodo(item.id)}>Удалить</span>
                        <input type="checkbox" checked={item.compleated} onChange={() => toggleTodoCoomplete(item.id)}/> 
                        <span className={styles.todo__ul__p}>{item.text}</span>
                        
                    </li>)
            }
        </ul>
        </div>

        )
    }


export default TodoList;