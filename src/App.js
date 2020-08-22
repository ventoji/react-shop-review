import React from "react";
import "./styles.css";
import HomePage from "./pages/homepage/homepage";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import ShopPage from "./pages/shop/shop";
import Header from "./components/header/header";
import SignInAndUpPage from "./components/sign-in-and-up/sign-in-and-up";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";

class App extends React.Component {
  constructor(){
    super();

/*     this.state = {
      currentUser: null
    } */
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    //  createUserProfileDocument(user)
     // this.setState({currentUser: user})

     if(userAuth){
       const userRef =  await createUserProfileDocument(userAuth);
       userRef.onSnapshot(snapShot => {
      //   console.log(snapShot.data());
         setCurrentUser({
           currentUser: {
             id: snapShot.id,
             ...snapShot.data()
           }
         }, () => {
         //  console.log(this.state)
         })
       });
       
     }else{
      setCurrentUser(userAuth)
     }
    })
  }

 componentWillUnmount(){
   this.unsubscribeFromAuth();
 }

 render( ){
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" render={() => this.props.currentUser ? (<Redirect to="/" />): <SignInAndUpPage /> }  />
      </Switch>
    </div>
  );
 }

}

const mapStateToProps = ({user }) => ({
  currentUser: user.currentUser
})
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps,mapDispatchToProps)(App);
