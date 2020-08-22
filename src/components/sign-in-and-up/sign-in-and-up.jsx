import React from "react";

import SignIn from "../sign-in/sign-in";
import SignUp from "../sign-up/sign-up";

import "./sign-in-and-up.scss";

const SignInAndUpPage = () => (
  <div className="sign-in-and-up-page">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndUpPage;
