import React, { Component } from 'react';
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import { WindowScroller } from 'react-scroll-manager';
import './App.css';

import TitlePage from './pages/TitlePage';
import Home from './pages/Home';


class App extends Component {
  render() {
    return (
      <WindowScroller>
        <div id="mainContainer">
          <div id='appContainer'>
            <Switch>
              <Route exact path='/' component={TitlePage} />
              <Route path='/home' component={Home} />
              <Redirect to='/'/>
            </Switch>
          </div>
        </div>
      </WindowScroller>
    );
  }
}

export default App;
