import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwtDecode from "jwt-decode";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Profile from "./components/Profile";

import { AuthProvider } from "./context/AuthContext";
import AuthRoute from "./util/AuthRoute";
import "./App.css";

const token = localStorage.FBIdToken;
let authenticated;

if (token) {
  const decodedToken = jwtDecode(token);
  console.log(decodedToken.exp);
  // Check if token is expired
  if (decodedToken.exp * 1000 < Date.now()) {
    window.location.href("/");
    authenticated = false;
  } else {
    authenticated = true;
  }
}

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <div className="container">
          <Router>
            <Navbar />
            <Switch>
              <AuthRoute
                exact
                path="/"
                component={Home}
                authenticated={authenticated}
              />
              <AuthRoute
                exact
                path="/profile"
                component={Profile}
                authenticated={authenticated}
              />
            </Switch>
          </Router>
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;
