import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header.js';
import AboutMe from './components/AboutMe.js';
import Projects from './components/Projects.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <div className="content-section bg-light rounded p-4 shadow-lg" style={{ opacity: 0.9 }}>
      <h1 className="text-success mb-3">Welcome to My Portfolio!</h1>
      <p className="lead text-dark">Explore my work, learn more about me, and check out my projects.</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="main-wrapper">
        <Header />
        <div className="container mt-5">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={AboutMe} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;