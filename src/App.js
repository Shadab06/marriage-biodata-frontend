import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path="/" exact component={Main} />
          <Route path="/:manual_id" exact component={Home} />
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
