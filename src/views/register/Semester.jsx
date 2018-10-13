import React, { Component } from 'react';
import SideMenu from '../../components/sideMenu/SideMenu'
import { Grid, Row, PageHeader, Button, FormGroup, ControlLabel, FormControl, Form } from 'react-bootstrap';
import TableSemester from '../../components/tables/TableSemester';

export default class Semester extends Component {
  render() {
    return (
      <div>
        <SideMenu />
        <Grid>
          <Row>
            <PageHeader bsClass="text-center">
              Cadastro do Semestre
            </PageHeader>
            <center>
              <Form inline>
                <FormGroup>
                  <FormControl
                    type="text"
                    placeholder="Pesquisar.."
                  />{'   '}
                  <ControlLabel><Button type="submit">Pesquisar</Button>{' '}</ControlLabel>
                </FormGroup>
              </Form>
            </center>
          </Row>
          <br/>
          <Row>
            <TableSemester />
            <center><Button bsStyle="primary" bsSize="large">Cadastrar Semestre</Button></center>
          </Row>
        </Grid>
      </div>
    );
  }
}