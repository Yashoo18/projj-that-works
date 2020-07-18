import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import './App.css';
import Nav from './Nav';
import About from './Pages/About';
import Shop from './Pages/Shop';
import Projects from './Pages/Projects';
import Research from './Pages/Research';
import Home from './Pages/Home';
import Footer from './Pages/Footer';
import Xp from './Pages/Xp';

function App() {
  return (
    <Router>
      <div className='page-container'>
        <div className='content-wrap'>
          <Nav />
          <Switch>
            <Route path="/" exact component={Xp} />
            <Route path="/experience" component={Xp} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
            <Route path="/research" component={Research} />
          </Switch>
        </div>
      </div>
      <Footer />
    </Router>

  );

}

export default App;