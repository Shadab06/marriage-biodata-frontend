import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./Home";
import Home2 from "./Home2";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path="/" exact component={Main} />
          <Route path="/:manual_id" exact component={Home} />
          <Route path="/user/:user_id" exact component={Home2} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

const Main = () => {
  return (
    <h1 style={{ textAlign: "center", marginTop: "100px" }}>Welcome to Marriage Biodata</h1>
  )
}
