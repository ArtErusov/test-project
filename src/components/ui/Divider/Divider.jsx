import styles from './style.module.scss';


const Divider = ({ title }) => {
 return(<div className={styles.div}>
 <p className={styles.title}>{title}</p>
</div>)   

}
export default Divider;