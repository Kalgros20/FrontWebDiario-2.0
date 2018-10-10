import React from 'react';

const Stateless = props => {

  console.log(props);

  const {
    children,
    teste
  } = props;

  return (
    <div>
      <h3>Texto children: {teste}</h3>
      <p>{children}</p>
    </div>
  );

}

export default Stateless;
