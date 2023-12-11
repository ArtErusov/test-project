import React from "react";
import styles from '../delivery.module.scss';
import sushiImage from '../../../assets/img/sushi.jpg';
import HeaderCartButton from "./HeaderCartButton";


const Header = (props) =>{
    return <React.Fragment>
        <header className={styles.header}>
            <h1>Япона Кухня</h1>
            <HeaderCartButton onShowModal={props.onShowModal}/>
        </header>
        <div className={styles.main__image}>
            <img src={sushiImage} alt="японская кухня"/>
        </div>
    </React.Fragment>
}

export default Header;