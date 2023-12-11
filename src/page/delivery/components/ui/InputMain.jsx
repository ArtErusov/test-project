import styles from './ui.module.scss';


const InputMain = (props) => {
return( 
    <div className={styles.inputMain}>
     <label htmlFor={props.input.id}>{props.label}</label>
     <input {...props.input}/>    
    </div>
    );
};

export default InputMain;