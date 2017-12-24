import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux';
import { error, login } from '../reducers/rootReducer'
import thunk from 'redux-thunk';
import Login from './Login';
import '../../style/app.css';

const store = createStore(
  error, 
  applyMiddleware(thunk)
);

class App extends Component {

render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' render={() => <Login store={store}/>}/>
          <Route path='/login' component={Login}/>
        </Switch>
      </div>
    );
  }
}

export default App;
