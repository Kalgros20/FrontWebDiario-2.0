import React, { Component } from 'react';
import { Grid, Row, Col, Jumbotron, Button } from 'react-bootstrap';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

import { Router } from 'react-router-dom';
import history from './history';

import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import Routes from './Routes';
import SideMenu from './components/sideMenu/SideMenu';


class App extends Component {

  render() {

    return (
      <div>
        <Router history={history}>
          <Routes />
        </Router>
      </div>

    );
  }
}

export default App;
