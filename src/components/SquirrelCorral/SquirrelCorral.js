import React from 'react';
import './SquirrelCorral.scss';
import PropTypes from 'prop-types';
import Squirrel from '../Squirrel/Squirrel';
import squirrelShape from '../../helpers/propz/squirrelShape';

class SquirrelCorral extends React.Component {
  static propTypes = {
    squirrels: PropTypes.arrayOf(squirrelShape.squirrelShape),
  }

  render() {
    const { squirrels } = this.props;
    const makeSquirrels = squirrels.map(squirrel => (

      <Squirrel key={squirrel.id} squirrel={squirrel} />
    ));
    return (
      <div className="SquirrelCorral d-flex flex-wrap">
        { makeSquirrels }
      </div>
    );
  }
}


export default SquirrelCorral;
