import React, { Component } from 'react';
import SideMenu from '../../components/sideMenu/SideMenu'
import { Grid, Row, PageHeader, Button, FormGroup, ControlLabel, FormControl, Form, ButtonGroup, Glyphicon, Modal } from 'react-bootstrap';
import TableSemester from '../../components/tables/TableSemester';
import PubSub from 'pubsub-js';

class SemesterModal extends Component {
  render() {
    return (
      <div></div>
    );
  }
}

class SemesterModalForm extends Component {
  constructor() {
    super();
    this.state = { show: false }
  }
  componentWillMount() {
    PubSub.subscribe("show-modal", function(topic, value){
      this.setState({ show: true });
    }.bind(this))

    
    PubSub.subscribe("close-modal", function(topic, value){
      this.setState({ show: false });
    }.bind(this))
    
  }
  render() {
    return (
      <div className="modal-container" style={{ height: 300, width: 600 }}>
        <Modal
          show={this.state.show}
          onHide={this.handleHide}
          container={this}
          aria-labelledby="contained-modal-title"
        >
          <Modal.Body>
            <form method="post" onSubmit={this.sendForm}>
              <FormGroup controlId="formControlsTextarea">
                <ControlLabel>Descrição:</ControlLabel>
                <FormControl componentClass="textarea" placeholder="textarea" onChange={this.setDescription} value={this.state.description} id="description" name="description" />
              </FormGroup>
              <Modal.Footer>
                <Button bsStyle="success" type="submit" ><Glyphicon glyph="ok" />Salvar</Button>
                <Button onClick={function(){PubSub.publish("close-modal")}}>Fechar</Button>
              </Modal.Footer>
            </form>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}
export default class Semester extends Component {
  constructor() {
    super();
    this.state = { show: '' }
  }
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
                  <ControlLabel>Período: {' '}</ControlLabel>
                  <FormControl
                    type="text"
                    placeholder="Cadastro Período.."
                  />{'   '}
                </FormGroup>{' '}
                Cadastrar:{' '}
                <ButtonGroup bsSize="small">
                  <Button><Glyphicon glyph="plus" /> {' '}Matéria</Button>
                  <Button><Glyphicon glyph="plus" /> {' '}Curso</Button>
                  <Button><Glyphicon glyph="plus" /> {' '}Professor</Button>
                </ButtonGroup>

              </Form>
            </center>
          </Row>
          <br />
          <Row>
            <TableSemester show={this.show} />
            <center>
              <Button bsStyle="success" bsSize="large"> {' '}Cadastar Semestre</Button>{' '}
              <Button bsStyle="primary" bsSize="large" onClick={function(){PubSub.publish("show-modal")}}><Glyphicon glyph="plus" /> {' '}Novo Semestre</Button>
            </center>
            <SemesterModalForm />
          </Row>
        </Grid>
      </div>
    );
  }
}