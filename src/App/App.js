import React from 'react';
import firebase from 'firebase/app';
// import mySquirrels from './squirrels';
// import myTrees from './trees';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from '../components/MyNavbar/MyNavbar';
import './App.scss';
import Auth from '../components/Auth/Auth';
import Home from '../components/Home/Home';
import fbConnection from '../helpers/data/connection';


fbConnection();

class App extends React.Component {
  // axios calls to get data - anything that modifies state
  state = {
    authed: false,
  }

  // state = {
  //   squirrels: [],
  //   trees: [],
  // }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
    // this.setState({ squirrels: mySquirrels });
    // this.setState({ trees: myTrees });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { authed } = this.state;
    const loadComponent = () => {
      if (authed) {
        return <Home />;
      }
      return <Auth />;
    };
    return (
        <div className="App">
          <MyNavbar authed={authed} />
          {loadComponent()}
        </div>
    );
  }
}


export default App;
