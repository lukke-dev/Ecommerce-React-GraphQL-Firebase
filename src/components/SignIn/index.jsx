import React from "react";
import FormInput from "../FormInput";
import CustomButton from "../CustomButton";
import "./style.scss";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);

      this.setState({ email: "", password: "" });
    } catch (err) {
      console.log(err);
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            value={this.state.email}
            type="email"
            handleChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            name="password"
            value={this.state.password}
            type="password"
            handleChange={this.handleChange}
            label="Password"
            required
          />
          <div className="buttons">
            <CustomButton type="submit">sign in</CustomButton>
            <CustomButton
              onClick={signInWithGoogle}
              type="button"
              isGoogleSignIn
            >
              sign in with google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;