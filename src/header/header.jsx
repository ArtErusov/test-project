import styles from './Header.module.scss';
import { Link } from "react-router-dom";

const Header = () => {
 return(<div className={styles.header}>
 <div className={styles.container}>
        <div className={styles.header__flex}>
            <nav>Мой учебный проект</nav>
            <nav>
                <ul className={styles.header__flex__right}>
                    <li><Link to="http://localhost:3000/independentone">Самостоятельная работа</Link></li>
                    <li><Link to="http://localhost:3000/deliveryprototype">Доставка суши</Link></li>
                </ul>
            </nav>
        </div>
    </div>
</div>)   

}
export default Header;