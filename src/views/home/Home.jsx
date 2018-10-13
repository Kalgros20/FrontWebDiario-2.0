import React from 'react';
import { Grid, Row, Jumbotron, Button } from 'react-bootstrap';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

import SideMenu from '../../components/sideMenu/SideMenu';

const Home = () => (
    <div>
        
        <SideMenu />
        
        <Grid fluid={false}>
          <Row className="show-grid">
            <Jumbotron>
              <h1>Bem vindo ao Sistema</h1>
              <p>
                No momento estamos no perído da tarde:
              </p>
              <p>
                <Button bsStyle="primary">Learn more</Button>
              </p>
            </Jumbotron>;
        </Row>
        </Grid>
    </div>
);

export default Home;
