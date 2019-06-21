import React from 'react';
import './SquirrelCorral.scss';

class SquirrelCorral extends React.Component {
  render() {
    const { squirrels } = this.props;
    const makeSquirrels = squirrels.map(squirrel => (
      <h2>{squirrel.name}</h2>
      // <Squirrel squirrel={squirrel} />
    ));
    return (
      <div>
        { makeSquirrels }
      </div>
    );
  }
}


export default SquirrelCorral;
