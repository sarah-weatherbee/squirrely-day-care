import React from 'react';

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
          {/* <SquirrelCorral squirrels = { squirrels } /> */}
          </div>
          <div className="col">
            {/* <TreeCorral trees = { trees }/> */}
            </div>
          </div>
        </div>
    );
  }
}

export default Home;
