import React from 'react';
import './TreeCorral.scss';
import Tree from '../Tree/Tree';

class TreeCorral extends React.Component {
  render() {
    const { trees } = this.props;
    const makeTrees = trees.map(tree => (
      <Tree key={tree.id} tree={tree} />
    ));
    return (
      <div className="TreeCorral d-flex flex-wrap">
        { makeTrees }
      </div>
    );
  }
}

export default TreeCorral;
