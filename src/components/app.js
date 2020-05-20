import React from 'react';
import {
  BrowserRouter as Router, Route, NavLink, Switch,
} from 'react-router-dom';
import Cube from './cube';;
import '../style.scss';


const Nav = (props) => {
  return (
    <nav>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
      </ul>
    </nav>
  );
};

const Welcome = (props) => {
  return (
    <div>
      <Cube/>
    </div>
  );
};

const App = (props) => {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Welcome} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
