import React from 'react';
import treeShape from '../../helpers/propz/treeShape';
import './Tree.scss';

class Tree extends React.Component {
  static propTypes = {
    tree: treeShape.treeShape,
  }

  render() {
    const { tree } = this.props;
    return (
    <div className="Tree col">
      <div className="card m-3">
        <img src={tree.imageUrl} className="card-img-top" alt="trees"/>
        <div className="card-body">
          <h4 className="card-title"><strong>{tree.name}</strong></h4>
          <h4 className="card-text">Fun fact: {tree.funFact}</h4>
        </div>
      </div>
    </div>
    );
  }
}

export default Tree;
