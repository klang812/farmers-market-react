import React from 'react';
import PropTypes from 'prop-types';

function Produce(props){
  return (
    <>
      <h3>{props.month}</h3>
      <p>{props.selection}</p>
    </>
  );
}

Produce.propTypes = {
  month: PropTypes.string.isRequired,
  selection: PropTypes.string.isRequired,
};

export default Produce;