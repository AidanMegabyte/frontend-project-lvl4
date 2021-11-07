import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Login from './components/Login.jsx';

const App = () => (
  <Router>
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route exact path="/">
        <h2>Chat</h2>
      </Route>
      <Route path="*">
        <h2>Not found!</h2>
      </Route>
    </Switch>
  </Router>
);

export default App;
