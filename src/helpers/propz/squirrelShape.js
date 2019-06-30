import PropTypes from 'prop-types';

const squirrelShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  disposition: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  favFood: PropTypes.string.isRequired,
});

export default { squirrelShape };
