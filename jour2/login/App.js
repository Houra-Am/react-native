import React from "react";
import { NativeRouter as Router, Route } from "react-router-native";

import Home from "./components/Home";
import Login from "./components/Login";
import Logout from "./components/L";
import Signup from "./";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route path='/' exact component={Login} />
        <Route path='/home' component={Home} />
        <Route path='/logout' component={Logout} />
        <Route path='/signup' component={Signup} />
      </Router>
    );
  }
}

export default App;
