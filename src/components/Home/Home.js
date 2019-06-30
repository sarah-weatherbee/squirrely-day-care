import React from 'react';
import AllSquirrelz from '../AllSquirrelz/AllSquirrelz';
import Treez from '../Treez/Treez';
import hugData from '../../helpers/data/hugData';
import Hug from '../Hug/Hug';

import './Home.scss';


class Home extends React.Component {
  state = {
    hugs: [],
  }

  componentDidMount() {
    hugData.getHugs()
      .then(hugs => this.setState({ hugs }))
      .catch(err => console.error('no walks for you'));
  }

  render() {
    const hugComponents = this.state.hugs.map(hug => (
      <Hug key={hug.id} hug={hug} />
    ));
    return (
      <div className="Home">
        <div className="row">
          <div className="col">
          <AllSquirrelz />
          </div>
          <div className="col">
          <Treez />
          </div>
          <div className="col">
            <div className="squirrels mt-4">
             <div className="AllSquirrelz">
              <h1>Hug Schedule</h1>
                {hugComponents}
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Home;
