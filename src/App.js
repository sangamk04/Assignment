import React, { Component } from 'react';

import {BrowserRouter as Router, Route,} from 'react-router-dom';

// import Home from './components/Home';
import Navbar from './components/Navbar';
import Rent from './components/Rent';
import Second from './components/Second';

function App() {
  return (
    <div className="App">
       <Router>   
        <Navbar/>
        <Second/>
        <Rent/>
          {/* <Route path="/" exact component={Home} /> */}
      </Router>
    </div>
  );
}

export default App;
