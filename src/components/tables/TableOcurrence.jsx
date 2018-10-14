import React, { Component } from 'react';
import { Table, Button, Glyphicon } from 'react-bootstrap';
import PubSub from 'pubsub-js';
import history from '../../history';

export default class TableOcurrence extends Component {
  constructor(props, context) {
    super();
    this.state = { isLoading: false };
  }

  render() {

    return (
      <Table striped bordered condensed hover>
        <thead>
          <tr>
            <th>Titulo</th>
            <th >Ator</th>
            <th >Relator</th>
            <th >Data</th>
            <th className="text-center">Ações</th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.list.map(function (row, handleClick) {
              console.log(row);
              var createdData = row.created_at;
              createdData = createdData.substring(0, 10);
              createdData = createdData.replace(/-/g, '/');
              return (
                <tr key={row.id}>
                  <td >{row.title}</td>
                  <td >{row.responsible}</td>
                  <td >{row.professor}</td>
                  <td >{createdData}</td>
                  <td className="text-center">
                    <Button bsSize="xsmall" onClick={function(){
                        history.push("/register/occurrence/" + row.id);
                    }}>
                    Editar{' '}
                      <Glyphicon glyph="edit" />
                    </Button>{' '}

                    <Button bsSize="xsmall" onClick={function () {
                      PubSub.publish("remove-item", row.id);
                      console.log("Disparando Evento para remover item");
                    }}>
                    Remover{' '}
                      <Glyphicon glyph="remove" />
                    </Button>
                  </td>
                </tr>
              );
            })
          }
        </tbody>
      </Table>
    );
  }
}