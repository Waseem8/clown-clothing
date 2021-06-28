
import './App.css';
import Homepage from './page/homepage/Homepage';
import { Route, Switch } from 'react-router-dom'
import Shop from './page/shop/Shop';
import Header from './components/header/Header';
import SignInAndSignUp from './page/sign-in and sign-up/SignInAndSignUp';
import { auth } from './firebase/firebase.util'
import React from 'react';


class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      currentUser: null,
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
  render(){  
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route exact path='/shop' component={Shop}/>
          <Route exact path='/sign-in' component={SignInAndSignUp}/>
        </Switch>
        
      </div>
    );}
}

export default App;
