import CartIcon from "../Cart/CartIcon";
import styles from "./CartButton.module.css";
import { useContext } from "react";

import CartContext from "../store/cart-context";
const CartButton = function (props) {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce(
    (accum, item) => accum + item,
    0
  );

  return (
    <button className={styles.button} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon></CartIcon>
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default CartButton;
