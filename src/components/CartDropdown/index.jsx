import React from "react";
import "./styles.scss";
import CustomButton from "../CustomButton";

const CartDropdown = ({ hidden }) => (
  <>
    {!hidden && (
      <div className="cart-dropdown">
        <div className="cart-items"></div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
      </div>
    )}
  </>
);

export default CartDropdown;
