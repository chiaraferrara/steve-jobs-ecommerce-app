import { AppContext } from "@/ContextProvider";
import { useRouter } from "next/router";
import React, { useContext } from "react";

const Navbar = () => {

  const {cart} = useContext(AppContext);

  const router = useRouter();

  const goToCart = () => {
    router.push("/cart");
  };

  const goToSuccess = () => {
    router.push("/success");
  };

  const goToHome = () => {
    router.push("/");
  };

  return (
    <>
      <nav>
        <ul>
          <li>
            <button onClick={goToCart}>Go to Cart {cart.length}</button>
          </li>
          <li>
            <button onClick={goToSuccess}>Go to Success</button>
          </li>
          <li>
            <button onClick={goToHome}>Go to Home</button>
          </li>
        </ul>
      </nav>
      </>
  );
};

export default Navbar;
