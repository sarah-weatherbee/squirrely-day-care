import React from 'react';
import './Treez.scss';
import treeData from '../../helpers/data/treeData';
import Tree from '../Tree/Tree';

class Treez extends React.Component {
  state = {
    trees: [],
  }

  componentDidMount() {
    treeData.getTrees()
      .then(trees => this.setState({ trees }))
      .catch(err => console.error('could not get trees', err));
  }

  render() {
    const treeComponents = this.state.trees.map(tree => (
      <Tree key={tree.id} tree={tree}/>
    ));
    return (
      <div className="trees">
      <div className="Treez">
        <h2>Squirrel Sitters</h2>
          {treeComponents}
        </div>
      </div>
    );
  }
}

export default Treez;
