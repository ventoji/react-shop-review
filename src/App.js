import React from "react";
import "./styles.css";
import HomePage from "./pages/homepage/homepage";
import { Route, Switch } from "react-router-dom";
// import RouterEx from "./RouterEx";
import ShopPage from "./pages/shop/shop";
import Header from "./components/header/header";
import SignInAndUpPage from "./components/sign-in-and-up/sign-in-and-up";

/* function HatsPage() {
  return <h1> hats page </h1>;
} */

export default function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SignInAndUpPage} />
      </Switch>
    </div>
  );
}
