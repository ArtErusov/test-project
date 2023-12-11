import styles from './ui.module.scss';


const Card = (props) =>{
    return <div className={styles.card}>{props.children}</div>
}

export default Card;