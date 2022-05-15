import React from "react";

import CartButton from "./CartButton";
import styles from "./Header.module.css";
import foodPlate from "../../assets/davide-cantelli-jpkfc5_d-DI-unsplash.jpg";
const Header = function () {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>Foody</h1>
        <CartButton></CartButton>
      </header>

      <div>
        <img
          src={foodPlate}
          alt="A Sushi Plate"
          className={styles.foodImage}
        ></img>
      </div>
    </React.Fragment>
  );
};

export default Header;
