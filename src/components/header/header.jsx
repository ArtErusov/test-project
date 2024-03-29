import styles from './Header.module.scss';
import { Link } from "react-router-dom";
import { useState } from 'react';

const Header = () => {

    const [isOpen, setOpen] = useState(false); // состояние всплывающего меню

 return(<div className={styles.header}>
 <div className={styles.container}>
        <div className={styles.header__flex}>
            <nav><Link to="http://localhost:3000/">Мой учебный проект</Link></nav>
            <nav>
                <ul className={styles.header__flex__right}>
                    <li>
                        <button onClick={() => setOpen(!isOpen)}>Самостоятельная работа</button>
                        <ul className={styles.drop + ' ' +  `${isOpen ? styles.drop_active : ""}`}>
                             {/* <= логика всплывающего меню */}
                            <li onClick={() => setOpen(!isOpen)}><Link to="http://localhost:3000/todo">todo list</Link></li> 
                            <li onClick={() => setOpen(!isOpen)}><Link to="http://localhost:3000/reduxpractic">ReduxPractic</Link></li>
                            <li>-------------------</li>
                            <li onClick={() => setOpen(!isOpen)}><Link to="http://localhost:3000/adduser">add user OLD</Link></li>
                            <li onClick={() => setOpen(!isOpen)}><Link to="http://localhost:3000/testUse">testUse OLD</Link></li>
                        </ul>
                    </li>
                    <li><Link to="http://localhost:3000/deliveryprototype">Доставка суши</Link></li>
                </ul>
            </nav>
        </div>
    </div>
</div>)   

}
export default Header;