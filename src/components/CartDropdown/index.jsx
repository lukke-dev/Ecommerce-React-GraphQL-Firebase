import React from "react";
import "./styles.scss";
import CustomButton from "../CustomButton";
import { connect } from "react-redux";
import CartItem from "../CartItem";

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({ cartItems });

export default connect(mapStateToProps)(CartDropdown);
