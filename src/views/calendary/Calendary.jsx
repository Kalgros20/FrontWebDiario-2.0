import React, { Component } from 'react';
import SideMenu from '../../components/sideMenu/SideMenu';
import { Grid, Row} from 'react-bootstrap';

export default class Calendary extends Component {
  render() {
    return (
      <Grid>
        <SideMenu />
        <Row>
        </Row>
      </Grid>
    );
  }
}