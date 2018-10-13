import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import history from './history';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import Routes from './Routes';



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
