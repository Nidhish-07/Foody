import styles from "./MenuItem.module.css";
import MenuItemForm from "./MenuItemForm";
import { useContext } from "react";
import CartContext from "../store/cart-context";

const MenuItem = function (props) {
  const cartCtx = useContext(CartContext);

  const price = `₹${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{price}</div>
      </div>

      <div>
        <MenuItemForm
          id={props.id}
          onAddToCart={addToCartHandler}
        ></MenuItemForm>
      </div>
    </li>
  );
};

export default MenuItem;
