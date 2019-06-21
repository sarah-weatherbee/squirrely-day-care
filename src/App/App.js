import React from 'react';
import mySquirrels from './squirrels';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

class App extends React.Component {
  // axios calls to get data - anything that modifies state
  state = {
    squirrels: [],
  }

  componentDidMount() {
    this.setState({ squirrels: mySquirrels });
  }

  render() {
    // const { squirrels } = this.state;

    return (
      <div className="App">
      <div>Squirrley Day Care</div>
      {/* <SquirrelCorral squirrels={squirrels}/> */}
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
