import React, { useState } from "react";
import CartProvider from "../../store/CartProvider";

function HomePage() {
  const [cartIsShowCart, setCartIsShowCart] = useState(false);

  const showCartHandler = () => {
    setCartIsShowCart(true);
  };

  const hideCartHandler = () => {
    setCartIsShowCart(false);
  };

  return (
    <div>
      <CartProvider></CartProvider>
    </div>
  );
}

export default HomePage;
