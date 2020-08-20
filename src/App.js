import React from "react";
import "./styles.css";
import HomePage from "./pages/homepage/homepage";
import { Route, Switch } from "react-router-dom";
// import RouterEx from "./RouterEx";
import ShopPage from "./pages/shop/shop";

/* function HatsPage() {
  return <h1> hats page </h1>;
} */

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}
