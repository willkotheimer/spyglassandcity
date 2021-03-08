import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import TheNavbar from '../components/TheNavbar';
import Routes from '../helpers/Routes';

class App extends React.Component {

  render() {

    return (
      <div className="App">
        <Router>
          <TheNavbar />
          <Routes />
        </Router>
      </div>
    );
  }
}

export default App;
