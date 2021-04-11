import "./App.css";
import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import AppBar from "./components/AppBar";
import HomeView from "./views/HomeView";
import Phonebook from "./components/Phonebook/Phonebook";
import RegisterView from "./views/RegisterView";
import LoginView from "./views/LoginView";
import { authOperations } from "./redux/auth";
import { connect } from "react-redux";

class App extends Component {
  componentDidMount() {
    this.props.onGetCurretnUser();
  }

  render() {
    return (
      <>
        <AppBar />

        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route path="/register" component={RegisterView} />
          <Route path="/login" component={LoginView} />
          <Route path="/contacts" component={Phonebook} />
        </Switch>
      </>
    );
  }
}

const mapDispatchToProps = {
  onGetCurretnUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
