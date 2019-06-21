import React from 'react';
import './Tree.scss';

class Tree extends React.Component {
  render() {
    const { tree } = this.props;
    return (
    <div className="Tree col-4">
      <div className="card">
        <img src={tree.imageUrl} className="card-img-top" alt="trees"/>
        <div className="card-body">
          <h5 className="card-title">{tree.name}</h5>
          <p className="card-text">{tree.funFact}</p>
        </div>
      </div>
    </div>
    );
  }
}

export default Tree;
