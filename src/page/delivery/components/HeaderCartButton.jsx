import React from "react";
import styles from '../delivery.module.scss';
import CartIcon from '../../../assets/img/icon/CartIcon';



const HeaderCartButton = (props) =>{
    return <React.Fragment>
        <button className={styles.button}>
            <span className={styles.button__icon}><CartIcon /></span>
            <span>Корзина</span>
            <span className={styles.button__badge}>0</span>
        </button>
    </React.Fragment>
}

export default HeaderCartButton;