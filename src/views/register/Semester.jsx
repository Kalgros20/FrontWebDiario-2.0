import React, { Component } from 'react';
import SideMenu from '../../components/sideMenu/SideMenu'
import { Grid, Row, Col, Form, FormControl, FormGroup, PageHeader } from 'react-bootstrap';
import Input from '../../components/input/Input';

export default class Semester extends Component {
  render() {
    return (
      <div>
        <SideMenu />
        <Grid>
          <Row>
            <PageHeader bsClass="text-center">
              Cadastro do Semestre
          </PageHeader>;
          </Row>
        </Grid>
      </div>
    );
  }
}