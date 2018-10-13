import React, { Component } from 'react';
import { Grid, Row, Jumbotron } from 'react-bootstrap';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import SideMenu from '../../components/sideMenu/SideMenu';
import Stateless from '../../components/stateLess/Stateless';
import StateFull from '../../components/stateFull/StateFull';

class Teste extends Component {

  state = {
    number: 0,
  }

  _changeNumber = action => {

    const {
      number,
    } = this.state;

    let newNumber = number + 1;
    if (action === 'min') newNumber = number - 1;

    this.setState({
      number: newNumber,
    });

  }

  render() {

    const {
      number,
    } = this.state;

    return (

      <div>
          
          <SideMenu />
          
          <Grid fluid={false}>
            <Row className="show-grid">
              <Jumbotron>
                <h1>Página de teste</h1>

                <h2>Stateless</h2> 
                <Stateless
                  teste={'teste'}
                  >
                  Qualquer coisa dentro como children
                </Stateless>

                <h2>StateFull</h2>
                <StateFull
                  teste={'aaaaa'}
                  clickButton={this._changeNumber}
                >
                  Qualquer coisa dentro como children
                </StateFull>

                <h1>Contador pela própria view</h1>

                Número atual: {number} <br />

                <span onClick={this._changeNumber}>
                  Mais número
                </span>

                <br />

                <span onClick={() => this._changeNumber('min')}>
                  Menos número
                </span>

              </Jumbotron>;
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Teste;
