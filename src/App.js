import './assets/scss/app.scss';
import React, { useState } from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Header from './components/header/header';
import DeliveryPrototype from './page/delivery/DeliveryPrototype';
import MainTodo from './page/todoList/MainTodo';
import AddUser from './page/addUser/AddUser';
import Cart from './page/delivery/components/Cart';
import Test from './Test/Test'
import ReduxPractic from './page/reduxPractic/ReduxPractic'




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
         <Route  path='/deliveryprototype' element={<DeliveryPrototype onShowModal={modalShowHandler} />} />
         <Route  path='/todo' element={<MainTodo />} />
         <Route  path='/adduser' element={<AddUser />} />
         <Route  path='/testUse' element={<Test />} />
         <Route  path='/reduxpractic' element={<ReduxPractic />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
