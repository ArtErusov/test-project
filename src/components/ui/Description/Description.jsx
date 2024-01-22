import styles from './style.module.scss';


const Description = ({ title, text }) => {
return(
<div className={styles.div}>
    <div className={styles.container + ' ' + styles.flex}>
        <h3 className={styles.title}>{title}</h3> 
        <p className={styles.text}>{text}</p>
    </div>
</div>
)   

}
export default Description;