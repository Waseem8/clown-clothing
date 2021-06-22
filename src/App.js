
import './App.css';
import Homepage from './page/homepage/Homepage';
import { Route, Switch } from 'react-router-dom'
import Shop from './page/shop/Shop';
import Header from './components/header/Header';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/shop' component={Shop}/>
      </Switch>
      
    </div>
  );
}

export default App;
