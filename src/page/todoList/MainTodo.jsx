import Description from '../../components/ui/Description/Description';
import Divider from '../../components/ui/Divider/Divider';
import TodoList from './TodoList';
import styles from './todoList.module.scss';




const MainTodo = () =>{

  
return(<div>
    <Description 
    title={'TodoList'}
    text={'В этом разделе будет два TodoList один на UseState второй аналогичен но с ReduxToolkit'}/>

    <Divider title={'TodoList с UseState'}/>
    <TodoList/>

    <Divider title={'TodoList с Toolkit'}/>
    {/* <TodoListRedux/> */}
</div>


        )
    }


export default MainTodo;