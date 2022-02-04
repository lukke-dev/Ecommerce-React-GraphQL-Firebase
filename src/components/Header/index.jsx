import React from "react";
import { connect } from "react-redux";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../../components/CartIcon";
import CartDropdown from "../CartDropdown";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { signOutStart } from "../../redux/user/user.actions";
import * as S from "./styles";

const Header = ({ currentUser, hidden, signOutStart }) => (
  <S.HeaderContainer>
    <S.LogoContainer to="/">
      <Logo />
    </S.LogoContainer>
    <S.OptionsContainer>
      <S.OptionLink to="/shop">SHOP</S.OptionLink>
      <S.OptionLink to="/contact">CONTACT</S.OptionLink>
      {currentUser ? (
        <S.OptionLink as="div" aria-hidden="true" onClick={signOutStart}>
          SIGN OUT
        </S.OptionLink>
      ) : (
        <S.OptionLink to="/signin">SIGN IN</S.OptionLink>
      )}
      <CartIcon />
    </S.OptionsContainer>
    {hidden ? null : <CartDropdown />}
  </S.HeaderContainer>
);

const mapStateProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});
export default connect(mapStateProps, mapDispatchToProps)(Header);
