import CartIcon from "../Cart/CartIcon";
import styles from "./CartButton.module.css";
const CartButton = function (props) {
  return (
    <button className={styles.button} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon></CartIcon>
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>2</span>
    </button>
  );
};

export default CartButton;
