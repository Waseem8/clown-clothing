
import './App.css';
import Homepage from './page/homepage/Homepage';
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div>
      <Switch>
        <Route  path='/' component={Homepage}/>
      </Switch>
      
    </div>
  );
}

export default App;
