import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header.js';
import AboutMe from './components/AboutMe.js';
import Projects from './components/Projects.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';
import './App.css';

function Home() {
  return (
    <div className="content-section">
      <h1>Welcome to My Portfolio!</h1>
      <p>Explore my work, learn more about me, and check out my projects.</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="main-wrapper">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={AboutMe} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
