import styles from './ui.module.scss';
import React from 'react';
import  ReactDOM  from 'react-dom';


const Backdrop = (props) => {
    return <div className={styles.backdrop} onClick={props.onHideModal}></div>
}

const ModalWindow = (props) => {
    return <div className={styles.modal}>
       <div className={styles.content}>{props.children}</div> 
    </div>
}
const portalElement = document.getElementById('overlays');
const Modal = (props) =>{
    return <React.Fragment>
        {ReactDOM.createPortal(<Backdrop onHideModal={props.onHideModal} />, portalElement)}
        {ReactDOM.createPortal(<ModalWindow>{props.children}</ModalWindow>, portalElement)}        
    </React.Fragment>
}

export default Modal;