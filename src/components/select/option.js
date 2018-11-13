import React from 'react';

const Option = props => {
  const {
    onMouseOver,
    onClick,
    hasFocus,
    children,
    value,
    visibleValue
  } = props;

  return (
    <div
      style={{ color: hasFocus ? 'red' : 'black' }}
      onClick={ () => onClick({ target: { value, visibleValue } }) }
      onMouseOver={ onMouseOver }
    >
      { children }
    </div>
  );
};

export default Option;
