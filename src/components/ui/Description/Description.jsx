import styles from './style.module.scss';


const Description = ({ title, text }) => {
return(
<div className={styles.div}>
    <h3 className={styles.title}>{title}</h3> 
    <p className={styles.text}>{text}</p>
</div>
)   

}
export default Description;