import React from "react";
import logo from "./logo.svg";
import styles from "./App.module.css";
import Header from "./components/Layout/Header";
import Menu from "./components/Menu/Menu"

function App() {
  return (
    // <div className="App">
    <React.Fragment>
      <Header></Header>
      <main>
        <Menu></Menu>
      </main>
    </React.Fragment>
  );
}

export default App;
