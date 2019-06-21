import React from 'react';

import './Squirrel.scss';

class Squirrel extends React.Component {
  render() {
    const { squirrel } = this.props;
    return (
      <div className="Squirrel col-3">
      <div className="card">
  <img src={squirrel.imageUrl} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{squirrel.name}</h5>
    <p className="card-text">{squirrel.favFood}</p>
    <p className="card-text">{squirrel.disposition}</p>
  </div>
</div>
</div>
    //  <h2>{squirrel.name}</h2>
    );
  }
}

export default Squirrel;
