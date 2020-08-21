import React from "react";
import "./styles.css";
import HomePage from "./pages/homepage/homepage";
import { Route, Switch } from "react-router-dom";
// import RouterEx from "./RouterEx";
import ShopPage from "./pages/shop/shop";
import Header from "./components/header/header";
import SignInAndUpPage from "./components/sign-in-and-up/sign-in-and-up";
import { auth } from "./firebase/firebase.utils";

/* function HatsPage() {
  return <h1> hats page </h1>;
} */

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user})
    })
  }

 componentWillUnmount(){
   this.unsubscribeFromAuth();
 }

 render( ){
  return (
    <div className="App">
      <Header currentUser={this.state.currentUser}/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SignInAndUpPage} />
      </Switch>
    </div>
  );
 }

}

export default App;
