import React, { Component } from 'react';
import './App.css';
import { AuthProvider } from './AuthContext';
import NavBar from './NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Lander from './Lander.js';
import LoggedIn from './LoggedIn';
import ProtectedRoute from './ProtectedRoute';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <AuthProvider>
            <NavBar />
            <div className="Content">
              <Switch>
                <ProtectedRoute path="/logged-in" component={LoggedIn} />
                <Route path="/" component={Lander} />
              </Switch>
            </div>
          </AuthProvider>
        </Router>
      </div>
    );
  }
}

export default App;
