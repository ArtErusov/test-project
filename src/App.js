import './scss/app.scss';
import Header from './header/header';
import IndependentPageOne from './page/IndependentPageOne';
import DeliveryPrototype from './page/DeliveryPrototype';
import TodoList from './page/todoList/TodoList';



import {BrowserRouter, Route, Routes} from "react-router-dom";




function App() {
  return (
    <div>
      <Header />
      <Routes>
         <Route  path='/independentone' element={<IndependentPageOne />} />
         <Route  path='/deliveryprototype' element={<DeliveryPrototype />} />
         <Route  path='/todo' element={<TodoList />} />
      </Routes>
    </div>
  );
}

export default App;
