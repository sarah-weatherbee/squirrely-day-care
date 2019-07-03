import React from 'react';
import './Treez.scss';
import Tree from '../Tree/Tree';

class Treez extends React.Component {
  render() {
    const treeComponents = this.props.trees.map(tree => (
      <Tree key={tree.id} tree={tree}/>
    ));
    return (
      <div className="trees mt-4">
      <div className="Treez">
        <h1>Squirrel Sitters</h1>
          {treeComponents}
        </div>
      </div>
    );
  }
}

export default Treez;
