import React from "react";
import { SignInAndSignUpContainer } from "./styles";
import SignIn from "../../components/SignIn";
import SignUp from "../../components/SignUp";

const SignInAndSignUpPage = () => (
  <SignInAndSignUpContainer className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </SignInAndSignUpContainer>
);

export default SignInAndSignUpPage;
