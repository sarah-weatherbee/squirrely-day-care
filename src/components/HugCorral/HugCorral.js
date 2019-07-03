import React from 'react';
import './HugCorral.scss';
import Hug from '../Hug/Hug';


class HugCorral extends React.Component {
  render() {
    const hugComponents = this.props.hugs.map((hug) => {
      const myTree = this.props.trees.find(x => x.id === hug.treeId);
      const mySquirrel = this.props.squirrels.find(x => x.id === hug.squirrelId);
      return <Hug key={hug.id} hug={hug} myTree={myTree} mySquirrel={mySquirrel}/>;
    });
    return (
      <div className="hugs mt-4">
      <div className="HugCorral">
        <h1>Hug Schedule</h1>
          {hugComponents}
        </div>
      </div>
    );
  }
}

export default HugCorral;
