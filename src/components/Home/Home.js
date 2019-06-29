import React from 'react';
import AllSquirrelz from '../AllSquirrelz/AllSquirrelz';
import Treez from '../Treez/Treez';
import './Home.scss';
// import SquirrelCorral from '../SquirrelCorral/SquirrelCorral';
// import TreeCorral from '../TreeCorral/TreeCorral';

// const { squirrels } = this.state;
// const { trees } = this.state;

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <div className="row">
          <div className="col">
            <AllSquirrelz />
          {/* <SquirrelCorral squirrels = { squirrels } /> */}
          </div>
          <div className="col">
            <Treez />
            {/* <TreeCorral trees = { trees }/> */}
            </div>
          </div>
        </div>
    );
  }
}

export default Home;
