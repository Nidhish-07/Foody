import React, { useState } from "react";
import logo from "./logo.svg";
import styles from "./App.module.css";
import Header from "./components/Layout/Header";
import Menu from "./components/Menu/Menu";
import Cart from "./components/Cart/Cart";
import CartProvider from "./components/store/CartProvider";

function App() {
  const [cartVisibility, setCartVisibility] = useState(false);

  const visibleCartHandler = () => {
    setCartVisibility(true);
  };
  const invisibleCartHandler = () => {
    setCartVisibility(false);
  };

  return (
    // <div className="App">
    <CartProvider>
      {cartVisibility && <Cart onClose={invisibleCartHandler}></Cart>}
      <Header onVisibleCart={visibleCartHandler}></Header>
      <main>
        <Menu></Menu>
      </main>
    </CartProvider>
  );
}

export default App;
