import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import BubblePage from "./components/BubblePage";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>BUBBLES</h1>
          <Link to='/login' >Login</Link>
        </header>
        <Switch>
          <PrivateRoute exact path="/colors" component={BubblePage} />
          <Route path="/login" render={(props)=> <Login {...props}/> } />
          <Route component={Login} />
        </Switch>

      </div>
    </Router>
  );
}

export default App;
