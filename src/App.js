
import './App.css';
import Homepage from './page/homepage/Homepage';
import { Route, Switch, Redirect } from 'react-router-dom'
import Shop from './page/shop/Shop';
import Header from './components/header/Header';
import SignInAndSignUp from './page/sign-in and sign-up/SignInAndSignUp';
import { auth, createUserProfileDocument } from './firebase/firebase.util'
import React from 'react';
import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/user.actions'



class App extends React.Component {
  
  unsubscribeFromAuth = null;
  componentDidMount(){
    const { setCurrentUser } = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          setCurrentUser({
              id: snapshot.id,
              ...snapshot.data(),
          })
      })
      }
      setCurrentUser(userAuth)
    })
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){  
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route exact path='/shop' component={Shop}/>
          <Route exact path='/sign-in' render={()=> this.props.currentUser?(<Redirect to='/' />):(<SignInAndSignUp/>)}/>
        </Switch>
        
      </div>
    );}
}
const mapStateToProps = ({user}) =>({
  currentUser : user.currentUser
})
const mapDispatchToProps = dispatch =>({
  setCurrentUser : user => dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps,mapDispatchToProps)(App);
