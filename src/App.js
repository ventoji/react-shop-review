import React from "react";
import "./styles.css";
import HomePage from "./pages/homepage/homepage";
import { Route, Switch } from "react-router-dom";
// import RouterEx from "./RouterEx";
import ShopPage from "./pages/shop/shop";
import Header from "./components/header/header";
import SignInAndUpPage from "./components/sign-in-and-up/sign-in-and-up";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

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
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    //  createUserProfileDocument(user)
     // this.setState({currentUser: user})

     if(userAuth){
       const userRef =  await createUserProfileDocument(userAuth);
       userRef.onSnapshot(snapShot => {
      //   console.log(snapShot.data());
         this.setState({
           currentUser: {
             id: snapShot.id,
             ...snapShot.data()
           }
         }, () => {
         //  console.log(this.state)
         })
       });
       
     }else{
      this.setState({currentUser: userAuth})
     }
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
