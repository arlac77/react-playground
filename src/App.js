import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import './App.css';

import { Square } from './Square';
import { About } from './About';
import { NoMatch } from './NoMatch';

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light">
          <ul className="nav navbar-nav">
            <li>
              <Link to="/">Homes</Link>
            </li>
            <li>
              <Link to="/category">Category</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/" component={Square} />
          <Route path="/category" component={About} />
          <Route path="/products" component={NoMatch} />
        </Switch>
      </div>
    );
  }
}

export default App;
