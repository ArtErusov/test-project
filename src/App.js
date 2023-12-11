import './scss/app.scss';
import React, { useState } from 'react';
import Header from './header/header';
import IndependentPageOne from './page/IndependentPageOne';
import DeliveryPrototype from './page/delivery/DeliveryPrototype';
import TodoList from './page/todoList/TodoList';
import AddUser from './page/addUser/AddUser';
import Cart from './page/delivery/components/Cart';
import {BrowserRouter, Route, Routes} from "react-router-dom";




function App() {
  // ---показываем и скрываем модальное окно
  const [modalIsVisible, setModalIsVisible] = React.useState(false)
  const modalShowHandler = () => { setModalIsVisible(true); };
  const modalHideHandler = () => { setModalIsVisible(false); };
// -------------------
  return (
    <React.Fragment>
      <Header />
      {modalIsVisible && <Cart onHideModal={modalHideHandler}/>}
      <Routes>
         <Route  path='/independentone' element={<IndependentPageOne />} />
         <Route  path='/deliveryprototype' element={<DeliveryPrototype onShowModal={modalShowHandler} />} />
         <Route  path='/todo' element={<TodoList />} />
         <Route  path='/adduser' element={<AddUser />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
