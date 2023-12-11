
import styles from '../delivery.module.scss';

const Cart = () =>{

const cartItems = (
<ul className={styles['cart-items']}>
    {[{id:1}].map((item) => (
        <li>{item.name}</li>
    ))}
</ul>
);


return <div>
    {cartItems}
    <div className={styles.cart__total}>
        <span>Итого</span>
        <span>49.99</span>
    </div>
    <div div className={styles.cart__actions}>
        <button>Закрыть</button>
        <button>Заказать</button>
    </div>
</div>
}

export default Cart;