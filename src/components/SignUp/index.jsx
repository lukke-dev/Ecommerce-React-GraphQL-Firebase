import React from "react";
import FormInput from "../FormInput";
import CustomButton from "../CustomButton";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import "./styles.scss";

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;
    console.log(this.state);
    if (password != confirmPassword) {
      alert("password don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <div className="sign-up">
        <h2 className="title">I do not have a account</h2>
        <span>Sign Up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            label="Display Name"
            value={this.state.displayName}
            handleChange={this.handleChange}
            name="displayName"
            type="text"
            required
          />
          <FormInput
            label="Email"
            value={this.state.email}
            handleChange={this.handleChange}
            name="email"
            type="email"
            required
          />
          <FormInput
            label="Password"
            value={this.state.password}
            handleChange={this.handleChange}
            name="password"
            type="password"
            required
          />
          <FormInput
            label="Confirm Password"
            value={this.state.confirmPassword}
            handleChange={this.handleChange}
            name="confirmPassword"
            type="password"
            required
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
