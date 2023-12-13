import React, { useState, useEffect } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";

function Test() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);


//------------------------------
  const loginHandler = (email, password) => {
    localStorage.setItem('isLiggedin', '1')
    setIsLoggedIn(true);
  };


useEffect(()=>{
  const storedLoginInfo = localStorage.getItem('isLiggedin');
  if (storedLoginInfo === '1') {
    setIsLoggedIn(true);
  };
}, []);

//------------------------------
  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
         {/* кнопка показывает приветствие простой элемент */}
      </main>
    </React.Fragment>
  );
}

export default Test;
