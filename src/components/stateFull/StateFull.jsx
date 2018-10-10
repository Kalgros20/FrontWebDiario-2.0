import React, { Component	 } from 'react';

class StateFull extends Component {

  componentWillMount = () => {
    console.log('componentWillMount');
  }

  componentDidMount = () => {
    console.log('componentDidMount');
  }

  componentWillReceiveProps = () => {
    console.log('componentWillReceiveProps');
  }

  componentWillUnmount = () => {
    console.log('componentWillUnmount');
  }

  render() {

    const {
      children,
      teste,
      clickButton,
    } = this.props;

    return (
      <div>
        <h3>StateFull children: {teste}</h3>
        <p>{children}</p>

        <span onClick={clickButton}>+</span> <br/>
        <span onClick={() => clickButton('min')}>-</span>

      </div>
    );
  }

}

export default StateFull;
