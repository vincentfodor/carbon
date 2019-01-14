import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node,
  onSelect: PropTypes.func,
  onLazyLoad: PropTypes.func,
  keyNavigation: PropTypes.bool,
  maxHeight: PropTypes.string
};
export default propTypes;
