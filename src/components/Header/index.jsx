import React from "react";
import { connect } from "react-redux";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../../components/CartIcon";
import CartDropdown from "../CartDropdown";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import * as S from "./styles";

const Header = ({ currentUser, hidden }) => (
  <S.HeaderContainer>
    <S.LogoContainer to="/">
      <Logo />
    </S.LogoContainer>
    <S.OptionsContainer>
      <S.OptionLink to="/shop">SHOP</S.OptionLink>
      <S.OptionLink to="/contact">CONTACT</S.OptionLink>
      {currentUser ? (
        <S.OptionLink
          as="div"
          aria-hidden="true"
          onClick={() => auth.signOut()}
        >
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

export default connect(mapStateProps)(Header);
