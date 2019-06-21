import React from 'react';
import './TreeCorral.scss';

class TreeCorral extends React.Component {
  render() {
    const { trees } = this.props;
    const makeTrees = trees.map(tree => (
      <h2>{tree.name}</h2>
    ));
    return (
      <div>
        { makeTrees }
      </div>
    );
  }
}

export default TreeCorral;
