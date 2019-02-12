import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home'
import Booking from './components/Booking'
import FAQ from './components/FAQ'
import Navbar from './components/CustomNavbar';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/Booking" component={Booking} />
          <Route exact path="/FAQ" component={FAQ} />
        </div>
      </Router>
    );
  }
}

export default App;
