import React from "react";
import styles from './delivery.module.scss';
import Header from "./components/Header";
import Meals from "./components/Meals";

const DeliveryPrototype = (props) => {
    
    return<React.Fragment>
        <Header onShowModal={props.onShowModal}/>
        <Meals />
    </React.Fragment>
}

export default DeliveryPrototype;