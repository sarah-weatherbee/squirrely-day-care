import React from 'react';
import './AllSquirrelz.scss';
import squirrelData from '../../helpers/data/squirrelData';
import Squirrel from '../Squirrel/Squirrel';

class Squirrelz extends React.Component {
state = {
  squirrels: [],
}

componentDidMount() {
  squirrelData.getSquirrels()
    .then(squirrels => this.setState({ squirrels }))
    .catch(err => console.error('could not get squirrels', err));
}


render() {
  const squirrelComponents = this.state.squirrels.map(squirrel => (
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
