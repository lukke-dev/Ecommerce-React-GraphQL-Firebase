import React from "react";
import CustomButton from "../CustomButton";
import { useSelector, useDispatch } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { useHistory } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import CartItem from "../CartItem";
import "./styles.scss";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

export default CartDropdown;
