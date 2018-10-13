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
            <th className="text-center">Titulo</th>
            <th className="text-center">Ator</th>
            <th className="text-center">Relator</th>
            <th className="text-center">Data</th>
            <th></th>
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
                  <td className="text-center">{row.title}</td>
                  <td className="text-center">{row.responsible}</td>
                  <td className="text-center">{row.professor}</td>
                  <td className="text-center">{createdData}</td>
                  <td className="text-center">
                    <Button bsSize="xsmall" onClick={function(){
                        history.push("/register/occurrence/" + row.id);
                    }}>
                      <Glyphicon glyph="edit" />
                    </Button>{' '}

                    <Button bsSize="xsmall" onClick={function () {
                      PubSub.publish("remove-item", row.id);
                      console.log("Disparando Evento para remover item");
                    }}>
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