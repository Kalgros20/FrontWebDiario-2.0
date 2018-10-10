import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

export default class TableOcurrence extends Component {
  render() {
    return (
      <Table striped bordered condensed hover>
        <thead>
          <tr>
            <th className="text-center">Titulo</th>
            <th className="text-center">Ator</th>
            <th className="text-center">Relator</th>
            <th className="text-center">Data</th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.list.map(function (row) {
              console.log(row);
              var createdData = row.created_at;
              createdData = createdData.substring(0,10);
              createdData = createdData.replace(/-/g,'/');
              return (
                <tr key={row.id}>
                  <td className="text-center">{row.title}</td>
                  <td className="text-center">{row.responsible}</td>
                  <td className="text-center">{row.professor}</td>
                  <td className="text-center">{createdData}</td>
                </tr>
              );
            })
          }
        </tbody>
      </Table>
    );
  }
}