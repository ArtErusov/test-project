
import styles from '../delivery.module.scss';
import Modal from './ui/Modal';

const Cart = (props) =>{

const cartItems = (
<ul className={styles['cart-items']}>
    {[{id:1}].map((item) => (
        <li>{item.name}</li>
    ))}
</ul>
);


return <Modal onHideModal={props.onHideModal}> 
    {cartItems}
    <div className={styles.cart__total}>
        <span>Итого</span>
        <span>49.99</span>
    </div>
    <div div className={styles.cart__actions}>
        <button onClick={props.onHideModal}>Закрыть</button>
        <button>Заказать</button>
    </div>
</Modal>
}

export default Cart;