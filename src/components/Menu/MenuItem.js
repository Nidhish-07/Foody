import styles from "./MenuItem.module.css";
import MenuItemForm from "./MenuItemForm";

const MenuItem = function (props) {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{price}</div>
      </div>

      <div>
        <MenuItemForm></MenuItemForm>
      </div>
    </li>
  );
};

export default MenuItem;
