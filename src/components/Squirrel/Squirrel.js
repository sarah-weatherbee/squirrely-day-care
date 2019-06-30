import React from 'react';
import squirrelShape from '../../helpers/propz/squirrelShape';
import './Squirrel.scss';

class Squirrel extends React.Component {
  static propTypes = {
    squirrel: squirrelShape.squirrelShape,
  }

  render() {
    const { squirrel } = this.props;
    return (
      <div className="Squirrel col">
        <div className="card m-3">
          <img src={squirrel.imageUrl} className="card-img-top image" alt="squirrel" />
          <div className="card-body">
            <h4 className="card-title"><strong>{squirrel.name}</strong></h4>
            <h4 className="card-text">Favorite food: {squirrel.favFood}</h4>
            <h4 className="card-text">Current mood: {squirrel.disposition}</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default Squirrel;
