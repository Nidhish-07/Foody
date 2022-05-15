import styles from "./MenuItemForm.module.css";
import Input from "../UI/Input";

const MenuItemForm = function (props) {
  return (
    <form className={styles.form}>
      <Input
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "20",
          max: "500",
          step: "5",
          defaultValue: "50",
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MenuItemForm;
