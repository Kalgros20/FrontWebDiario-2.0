import React, { Component } from 'react';

export default class Input extends Component {
  render() {
    return (
      <input type={this.props.type} value={this.props.value} id={this.props.id} className={this.props.className} placeholder={this.props.placeholder} onChange={this.props.onChange} />
    );
  }
}