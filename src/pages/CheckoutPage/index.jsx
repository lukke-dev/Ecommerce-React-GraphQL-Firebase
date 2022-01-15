import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CheckoutItem from "../../components/CheckoutItem";
import StripeButton from "../../components/StripeButton";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";
import * as S from "./styles";

const CheckoutPage = ({ cartItems, cartTotal }) => (
  <S.CheckoutContainer>
    <S.CheckoutHeader>
      <S.HeaderBlock>
        <span>Product</span>
      </S.HeaderBlock>
      <S.HeaderBlock>
        <span>Description</span>
      </S.HeaderBlock>
      <S.HeaderBlock>
        <span>Quantity</span>
      </S.HeaderBlock>
      <S.HeaderBlock>
        <span>Price</span>
      </S.HeaderBlock>
      <S.HeaderBlock>
        <span>Remove</span>
      </S.HeaderBlock>
    </S.CheckoutHeader>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <S.TotalContainer>
      <span>TOTAL: ${cartTotal}</span>
    </S.TotalContainer>
    <S.CardWarning>
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: 01/22 - CVV: 123
    </S.CardWarning>

    <StripeButton price={cartTotal} />
  </S.CheckoutContainer>
);

const mapPropsToState = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal,
});

export default connect(mapPropsToState)(CheckoutPage);
