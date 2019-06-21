import React from 'react';
import './TreeCorral.scss';
import PropTypes from 'prop-types';
import Tree from '../Tree/Tree';
import treeShape from '../../helpers/propz/treeShape';

class TreeCorral extends React.Component {
  static propTypes = {
    trees: PropTypes.arrayOf(treeShape.treeShape),
  }

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
