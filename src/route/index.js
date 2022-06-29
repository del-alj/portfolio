import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from '../components/pages/home';
import About from '../components/pages/about';
import Projects from '../components/pages/projects';
import Contact from '../components/contact';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/about" component={About}/>
        <Route path="/projects" component={Projects}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/" component={Home}/>
      </Switch>
    </Router>
  );
}

export default App;