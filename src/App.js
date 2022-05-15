import React from "react";
import logo from "./logo.svg";
import styles from "./App.module.css";
import Header from "./components/Layout/Header";
import Menu from "./components/Menu/Menu";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    // <div className="App">
    <React.Fragment>
      <Cart></Cart>
      <Header></Header>
      <main>
        <Menu></Menu>
      </main>
    </React.Fragment>
  );
}

export default App;
