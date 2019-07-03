import React from 'react';
import './AllSquirrelz.scss';
import Squirrel from '../Squirrel/Squirrel';

class Squirrelz extends React.Component {
  render() {
    const squirrelComponents = this.props.squirrels.map(squirrel => (
      <Squirrel key={squirrel.id} squirrel={squirrel} />
    ));
    return (
      <div className="squirrels mt-4">
        <div className="AllSquirrelz">
      <h1>Squirrels</h1>
        {squirrelComponents}
      </div>
    </div>
    );
  }
}

export default Squirrelz;
