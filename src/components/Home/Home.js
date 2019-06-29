import React from 'react';
import AllSquirrelz from '../AllSquirrelz/AllSquirrelz';
import Treez from '../Treez/Treez';
import './Home.scss';


class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <div className="row">
          <div className="col">
          <AllSquirrelz />
          </div>
          <div className="col">
          <Treez />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
