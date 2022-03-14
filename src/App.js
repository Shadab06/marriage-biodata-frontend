import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import UserDetails from "./userDetils/index"

function App() {

  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path="/user/:id" exact>
            <UserDetails />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;