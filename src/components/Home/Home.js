import React from 'react';
import AllSquirrelz from '../AllSquirrelz/AllSquirrelz';
import Treez from '../Treez/Treez';
import hugData from '../../helpers/data/hugData';
import HugCorral from '../HugCorral/HugCorral';
import treeData from '../../helpers/data/treeData';
import squirrelData from '../../helpers/data/squirrelData';


import './Home.scss';


class Home extends React.Component {
  state = {
    hugs: [],
    squirrels: [],
    trees: [],
  }

  componentDidMount() {
    hugData.getHugs()
      .then(hugs => this.setState({ hugs }))
      .catch(err => console.error('no walks for you'));
    treeData.getTrees()
      .then(trees => this.setState({ trees }))
      .catch(err => console.error('could not get trees', err));
    squirrelData.getSquirrels()
      .then(squirrels => this.setState({ squirrels }))
      .catch(err => console.error('could not get squirrels', err));
  }


  render() {
    return (
      <div className="Home">
        <div className="row">
          <div className="col">
          <AllSquirrelz squirrels={this.state.squirrels}/>
          </div>
          <div className="col">
          <Treez trees={this.state.trees}/>
          </div>
          <div className="col">
              <HugCorral hugs={this.state.hugs} trees={this.state.trees} squirrels={this.state.squirrels}/>
                <button className="btn btn-success">Add a hug</button>
        </div>
      </div>
    </div>
    );
  }
}

export default Home;
