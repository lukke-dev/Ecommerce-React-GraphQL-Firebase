import React, { useState, ChangeEvent } from "react";
import FormInput from "../FormInput";
import CustomButton from "../CustomButton";
import { useDispatch } from "react-redux";
import { signUpStart } from "../../redux/user/user.actions";
import "./styles.scss";

const SignUp = () => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { displayName, email, password, confirmPassword } = userCredentials;
  const dispatch = useDispatch();

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password != confirmPassword) {
      alert("password don't match");
      return;
    }
    dispatch(signUpStart({ email, password, displayName }));
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have a account</h2>
      <span>Sign Up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          value={displayName}
          handleChange={handleChange}
          name="displayName"
          type="text"
          required
        />
        <FormInput
          label="Email"
          value={email}
          handleChange={handleChange}
          name="email"
          type="email"
          required
        />
        <FormInput
          label="Password"
          value={password}
          handleChange={handleChange}
          name="password"
          type="password"
          required
        />
        <FormInput
          label="Confirm Password"
          value={confirmPassword}
          handleChange={handleChange}
          name="confirmPassword"
          type="password"
          required
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
