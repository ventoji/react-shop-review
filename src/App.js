import React from "react";
import "./styles.css";
import Homepage from "./pages/homepage/homepage";
import { Route, Switch } from "react-router-dom";
// import RouterEx from "./RouterEx";

function HatsPage() {
  return <h1> hats page </h1>;
}

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}
