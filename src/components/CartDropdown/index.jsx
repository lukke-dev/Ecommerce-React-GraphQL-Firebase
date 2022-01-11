import React from "react";
import CustomButton from "../CustomButton";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import CartItem from "../CartItem";
import "./styles.scss";

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

const mapStateToProps = (state) => ({ cartItems: selectCartItems(state) });

export default connect(mapStateToProps)(CartDropdown);
