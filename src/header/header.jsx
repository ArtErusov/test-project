import styles from './Header.module.scss';
import { Link } from "react-router-dom";
import { useState } from 'react';

const Header = () => {

    const [isOpen, setOpen] = useState(false); // состояние всплывающего меню

 return(<div className={styles.header}>
 <div className={styles.container}>
        <div className={styles.header__flex}>
            <nav>Мой учебный проект</nav>
            <nav>
                <ul className={styles.header__flex__right}>
                    <li>
                        <button onClick={() => setOpen(!isOpen)}>Самостоятельная работа</button>
                        <ul className={styles.drop + ' ' +  `${isOpen ? styles.drop_active : ""}`}>
                             {/* <= логика всплывающего меню */}
                            <li><a href="">todo list</a></li>
                            <li><a href="">add user</a></li>
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