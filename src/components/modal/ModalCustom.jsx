import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
export default class ModalCustom extends Component {

  constructor(props, context) {
    super(props, context);
    this.handleHide = this.handleHide.bind(this);
    this.textHeader = this.props.textHeader;
    this.state = {
      show: false
    };
  }


  handleHide() {
    this.setState({ show: false });
  }
  render() {
    return (
      <div>
        <Modal
          show={this.state.show}
          onHide={this.handleHide}
          container={this}
          aria-labelledby="contained-modal-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">
              {this.textHeader}
            </Modal.Title>
          </Modal.Header>
          {this.props.children}
          <Modal.Footer>
            <Button onClick={this.handleHide}>Fechar</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}