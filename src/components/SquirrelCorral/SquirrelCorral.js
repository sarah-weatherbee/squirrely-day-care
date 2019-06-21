import React from 'react';
import './SquirrelCorral.scss';
import Squirrel from '../Squirrel/Squirrel';


class SquirrelCorral extends React.Component {
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
