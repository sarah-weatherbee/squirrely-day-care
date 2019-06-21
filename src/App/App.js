import React from 'react';
import mySquirrels from './squirrels';
import myTrees from './trees';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import SquirrelCorral from '../components/SquirrelCorral/SquirrelCorral';
import TreeCorral from '../components/TreeCorral/TreeCorral';

class App extends React.Component {
  // axios calls to get data - anything that modifies state
  state = {
    squirrels: [],
    trees: [],
  }

  componentDidMount() {
    this.setState({ squirrels: mySquirrels });
    this.setState({ trees: myTrees });
  }

  render() {
    const { squirrels } = this.state;
    const { trees } = this.state;

    return (
      <div className="App">
      <div>Squirrley Day Care</div>
      <SquirrelCorral squirrels = { squirrels }/>
      <TreeCorral trees = { trees }/>
      </div>
    );
  }
}


// function App() {
//   return (
//     <div className="App">
//       <button className='btn btn-danger'>Hello Squirrels</button>
//     </div>
//   );
// }

export default App;
