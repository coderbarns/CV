import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css';
import Display from './components/display'
import Header from './components/header'
import Achievements from './components/achievements'
import Education from './components/education'
import Skills from './components/skills'
import Video from './components/video'

var createReactClass = require('create-react-class');

var App = createReactClass({

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Display />
            <Route exact path="/" component={Header} />
            <Route path="/education" component={Education} />
            <Route path="/skills" component={Skills} />
            <Route path="/achievements" component={Achievements} />
            <Route path="/video" component={Video} />
          </div>
        </Router>
      </div> 
    );
  }
})

export default App;
