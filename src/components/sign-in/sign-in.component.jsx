import React, { Component } from "react";
import FormInput from "../form-input/form-input.component";
import './sign-in.styles.scss'
import CustomButton from "../custom-button/custom-button.component";

import { auth, signInWithGoogle } from '../../firebase/firebase.utils.js'


class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = this.state

    try {
      auth.signInWithEmailAndPassword(email, password)
    } catch (error) {
      console.log(error);
    }

    this.setState({ email: "", password: " " });
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    const { email, password } = this.state;
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your enail and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type='email'
            name='email'
            value={email}
            onChange={this.handleChange}
            label='Email'
            required
          />
          <FormInput
            type='password'
            name='password'
            value={password}
            handleChange={this.handleChange}
            label='Password'
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton isGoogleSignIn onClick={signInWithGoogle}>Sign in with Google </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
