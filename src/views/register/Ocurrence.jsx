import React, { Component } from 'react';
import SideMenu from '../../components/sideMenu/SideMenu';
import { Grid, Row, Col, FormControl, FormGroup, PageHeader, Button, Glyphicon, Modal, ControlLabel, Form } from 'react-bootstrap';
import Input from '../../components/input/Input';
import TableOcurrence from '../../components/tables/TableOcurrence';
import $ from 'jquery';
import PubSub from 'pubsub-js';

class Occurrence extends Component {
  constructor() {
    super();
    this.state = { list: [], show: false, title: '', actor: '', writer: '', description: '' }
    this.handleHide = this.handleHide.bind(this);
    this.setTitle = this.setTitle.bind(this);
    this.setActor = this.setActor.bind(this);
    this.setDescription = this.setDescription.bind(this);
    this.setWriter = this.setWriter.bind(this);
    this.sendForm = this.sendForm.bind(this);
  }
  handleHide() {
    this.setState({ show: false });
  }
  removeRow(event) {
    event.preventDefault();
    console.log("Eoq");
  }
  setTitle(evento) {
    this.setState({ title: evento.target.value });
  }
  setActor(evento) {
    this.setState({ actor: evento.target.value });
  }
  setDescription(evento) {
    this.setState({ description: evento.target.value });
  }
  setWriter(evento) {
    this.setState({ writer: evento.target.value });
  }

  sendForm(event) {
    event.preventDefault();

    $.ajax({
      url: "http://localhost:8000/api/occurrence",
      contentType: 'application/json',
      dataType: 'json',
      type: 'post',
      data: JSON.stringify({ title: this.state.title, description: this.state.description, professor: 2, responsible: 1 }),
      success: function (response) {
        console.log(response);
        PubSub.publish("update-list-occurrence", response);
        this.setState({ title: '', actor: '', writer: '', description: '' });
      }.bind(this),
      error: function (error) {
        console.log(error);
      }
    });
  }


  componentDidMount() {
    $.ajax({
      url: 'http://localhost:8000/api/occurrence',
      contentType: 'application/json',
      dataType: 'json',
      type: 'get',
      success: function (response) {
        this.setState({ list: response });
      }.bind(this),
      error: function () {

      }
    });

    PubSub.subscribe("remove-item", function (topic, rowId) {
      $.ajax({
        url: 'http://localhost:8000/api/occurrence/' + rowId,
        contentType: 'application/json',
        dataType: 'json',
        type: 'delete',
        success: function (response) {
          PubSub.publish("update-list-occurrence", response);
        },
        error: function () {

        }
      });
    });


    PubSub.subscribe("update-list-occurrence", function (topic, newList) {
      $.ajax({
        url: 'http://localhost:8000/api/occurrence',
        contentType: 'application/json',
        dataType: 'json',
        type: 'get',
        success: function (response) {
          console.log(response);
          this.setState({ list: response });
        }.bind(this),
        error: function () {

        }
      });

    }.bind(this));
  }

  render() {
    return (
      <Grid>
        <Row>
          <SideMenu />
          <PageHeader bsClass="text-center">
            Cadastro de Ocorrencia
          </PageHeader>
        </Row>
        <Row>
          <Col md={4} mdOffset={4}>
            <Form inline>
              <FormGroup controlId="formInlineName">
                <Input type="text" id="occurrence" className="form-control" placeholder="Pesquisar" onChange={this.setActor} />
              </FormGroup>{'   '}
              <Button bsSize="small" type="submit">
                <Glyphicon glyph="search" /> Pesquisa
              </Button>{'   '}
            </Form>
          </Col>
        </Row>
        <br />
        <Row>
          <TableOcurrence list={this.state.list} />
        </Row>
        <Row>
          <center>
            <Button
              Button bsStyle="primary" bsSize="large"
              onClick={() => this.setState({ show: true })}
              type="button"
            >
              Cadastrar Ocorrencia
            </Button>
          </center>
        </Row>
        <div className="modal-container" style={{ height: 200 }}>
          <Modal
            show={this.state.show}
            onHide={this.handleHide}
            container={this}
            aria-labelledby="contained-modal-title"
          >
            <Modal.Body>
              <form method="post" onSubmit={this.sendForm}>
                <FormGroup>
                  <ControlLabel>Titulo:</ControlLabel> <Input type="text" className="form-control" onChange={this.setTitle} value={this.state.title} id="title" name="title" />
                </FormGroup>
                <FormGroup>
                  <ControlLabel>Autor:</ControlLabel> <Input type="text" className="form-control" onChange={this.setActor} value={this.state.actor} id="actor" name="actor" />
                </FormGroup>
                <FormGroup>
                  <ControlLabel>Relator:</ControlLabel> <Input type="text" className="form-control" onChange={this.setWriter} value={this.state.writer} id="writer" name="writer" />
                </FormGroup>

                <FormGroup controlId="formControlsTextarea">
                  <ControlLabel>Descrição:</ControlLabel>
                  <FormControl componentClass="textarea" placeholder="textarea" onChange={this.setDescription} value={this.state.description} id="description" name="description" />
                </FormGroup>
                <Modal.Footer>
                  <Button bsStyle="success">Salvar</Button>
                  <Button onClick={this.handleHide}>Fechar</Button>
                </Modal.Footer>
              </form>
            </Modal.Body>
          </Modal>
        </div>
      </Grid>
    );
  }
}

export default Occurrence;