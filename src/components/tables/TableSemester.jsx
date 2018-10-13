import React, { Component } from 'react';
import { Table } from 'react-bootstrap';


export default class TableSemester extends Component {
  constructor(props, context) {
    super();
  }

  render() {

    return (
      <Table striped bordered condensed hover>
        <thead>
          <tr>
            <th className="text-center">Curso</th>
            <th className="text-center">Professores</th>
            <th className="text-center">Matérias</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          
        </tbody>
      </Table>
    );
  }
}