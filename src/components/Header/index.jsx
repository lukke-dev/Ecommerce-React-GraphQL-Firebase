import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../../components/CartIcon";
import CartDropdown from "../CartDropdown";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { signOutStart } from "../../redux/user/user.actions";
import * as S from "./styles";

const Header = () => {
  const currentUser = useSelector(selectCurrentUser);
  const hidden = useSelector(selectCartHidden);
  const dispatch = useDispatch();

  return (
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
            onClick={() => dispatch(signOutStart())}
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
};

export default Header;
