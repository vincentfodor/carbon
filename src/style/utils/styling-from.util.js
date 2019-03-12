export const stylingFromProps = states => (props) => {
  const parsedStates = states(props);
  return Object.keys(parsedStates).reduce((acc, stateKey) => {
    if (props[stateKey]) return acc + parsedStates[stateKey];
    return acc;
  }, '');
};

export const stylingFromPropValue = prop => states => (props) => {
  const parsedStates = states(props);
  return parsedStates[props[prop]];
};
