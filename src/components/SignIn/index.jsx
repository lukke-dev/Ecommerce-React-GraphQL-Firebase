import React from "react";
import "./style.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
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
          <label htmlFor="email">Email</label>
          <input
            name="email"
            value={this.state.email}
            type="email"
            onChange={this.handleChange}
            required
          />
          <label htmlFor="password">Password</label>
          <input
            name="password"
            value={this.state.password}
            type="password"
            onChange={this.handleChange}
            required
          />
          <input type="submit" value="Submit form" />
        </form>
      </div>
    );
  }
}

export default SignIn;
