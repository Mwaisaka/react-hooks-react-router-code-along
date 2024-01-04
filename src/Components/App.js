import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import About from "./About";
import Login from "./Login";
import Messages from "./Messages";
import Home from "./Home";
import SignUpForm from "./SignUpForm";

function App(){
return (
    <div>
        <NavBar/>
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/messages">
        <Messages />
      </Route>
      <Route path="/signup">
        <SignUpForm />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
    </div>
);
}

export default App;