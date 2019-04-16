import React, { Component } from 'react';

import { Route, BrowserRouter as Router } from 'react-router-dom';

import { Header } from './components/Header';

import { Home } from './components/Home';

import { Characters } from './components/Characters/';

import { Episodes } from './components/Episodes';

import { Locations } from './components/Locations';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Route exact path="/" component={Home}/>
        <Route path="/characters" component={Characters} />
        <Route path="/episodes" component={Episodes} />
        <Route path="/locations" component={Locations} />
      </Router>
    );
  }
}

export default App;
