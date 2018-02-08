import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types';
import Login from './Login';
import Main from './Main';
import '../../style/app.css';

class App extends Component {

checkAuthentication = () => {
  return localStorage.getItem('token') !== undefined;
}

render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Login}/>
          <Route path='/login' component={Login}/>
          <Route path='/home' render={() => ( this.checkAuthentication() ? <Main /> : <Redirect to='/login'/> )}/>
        </Switch>
      </div>
    );
  }
}

App.contextTypes = {
  store: PropTypes.object.isRequired
}

export default App;
