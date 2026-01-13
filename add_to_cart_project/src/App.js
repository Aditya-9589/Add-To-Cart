import React, { useState } from "react";
import "./App.css";
import Cart from './Components/Cart';
import Navbar from "./Components/Navbar";
import Shop from "./Components/Shop";
import "./List";

const App = () => {
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);
  const [show, setShow] = useState(true);


  const handleClick = (item) => {
    let isPresent = false;

    cart.forEach((product) => {
      if (item.id === product.id) {
        isPresent = true;
      }
    });

    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        document.querySelector(".warning").classList.add("hide");
        setTimeout(() => {
          setWarning(false);
        }, 500);
      }, 2000);
      return;
    }

    setCart([...cart, item]);
  };

  return (
    <>
      <div>
        <Navbar size={cart.length} setShow={setShow} />
        {
          show ? <Shop handleClick={handleClick} /> :
            <Cart cart={cart} setCart={setCart} />
        }

        {warning && (
          <div className={`warning ${!warning ? "hide" : ""}`}>
            Item is already present in your Cart
          </div>
        )}
      </div>
    </>
  );
};

export default App;
