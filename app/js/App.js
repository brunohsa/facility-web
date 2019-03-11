import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import thunk from 'redux-thunk';
import Main from './containers/Main';
import Login from './containers/Login';
import Home from './containers/Home';
import NotFound from './containers/NotFound';
import '../styles/app.css';

class App extends Component {

render() {
    return (
      <div id="app">
        <Switch>
          <Route exact path='/' component={Main}/>
          <Route path='/login' component={Login}/>
          <Route path='/home' component={Home}/>
          <Route path='/404' component={NotFound}/>
          <Redirect to="/404" />
        </Switch>
      </div>
    );
  }
}

export default App;