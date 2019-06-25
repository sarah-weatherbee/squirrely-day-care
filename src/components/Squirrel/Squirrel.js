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
      <div className="Squirrel col-3 d-flex">
      <div className="card mx-2px">
  <img src={squirrel.imageUrl} className="card-img-top image" alt="squirrel" />
  <div className="card-body">
    <h5 className="card-title">{squirrel.name}</h5>
    <p className="card-text">Favorite food: {squirrel.favFood}</p>
    <p className="card-text">Disposition: {squirrel.disposition}</p>
  </div>
</div>
</div>
    //  <h2>{squirrel.name}</h2>
    );
  }
}

export default Squirrel;
