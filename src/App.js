import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import UserDetails from './pages/Home';

function App() {

  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path="/user/:id" exact component={UserDetails} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;