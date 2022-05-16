import React,{useState} from "react";
import logo from "./logo.svg";
import styles from "./App.module.css";
import Header from "./components/Layout/Header";
import Menu from "./components/Menu/Menu";
import Cart from "./components/Cart/Cart";

function App() {

const [cartVisibility,setCartVisibility]=useState(false)

const visibleCartHandler=()=>{
  setCartVisibility(true)
}
const invisibleCartHandler=()=>{
  setCartVisibility(false)
}
  
  return (
    // <div className="App">
    <React.Fragment>
      {cartVisibility&&<Cart onClose={invisibleCartHandler}></Cart>}
      <Header onVisibleCart={visibleCartHandler}></Header>
      <main>
        <Menu></Menu>
      </main>
    </React.Fragment>
  );
}

export default App;
