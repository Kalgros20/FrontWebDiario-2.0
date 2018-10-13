import React, { Component } from 'react';
import { Grid, Row, Col, Form, FormControl, FormGroup, ControlLabel, Checkbox, Button } from 'react-bootstrap';
import {Link } from 'react-router-dom';
export default class Login extends Component {
  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={12} md={4} mdOffset={4}>
            <Form horizontal>
              <FormGroup controlId="formHorizontalEmail">
                <Col componentClass={ControlLabel} sm={2}>
                  Prontuário:
                </Col>
                <Col sm={10}>
                  <FormControl type="prontuario" placeholder="GU" />
                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalPassword">
                <Col componentClass={ControlLabel} sm={2}>
                  Senha
                                </Col>
                <Col sm={10}>
                  <FormControl type="password" placeholder="Senha" />
                </Col>
              </FormGroup>

              <FormGroup>
                <Col smOffset={2} sm={10}>
                  <Checkbox>Remember me</Checkbox>
                </Col>
              </FormGroup>

              <FormGroup>
                <Col smOffset={2} sm={10}>
                  <Link to="/Home"> <Button type="submit">Sign in</Button></Link>
                </Col>
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </Grid>
    );
  }
}
