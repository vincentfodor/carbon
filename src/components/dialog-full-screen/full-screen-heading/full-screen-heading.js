import React from 'react';
import PropTypes from 'prop-types';
import AppWrapper from '../../app-wrapper';
import tagComponent from '../../../utils/helpers/tags';
import StyledFullScreenHeading from './full-screen-heading.style';

const FullScreenHeading = (props) => {
  const { children, ...otherProps } = props;

  return (
    <StyledFullScreenHeading
      { ...otherProps }
      { ...tagComponent('full-screen-heading', props) }
    >
      <AppWrapper>
        { children }
      </AppWrapper>
    </StyledFullScreenHeading>
  );
};

FullScreenHeading.propTypes = {
  children: PropTypes.node
};

export default FullScreenHeading;
