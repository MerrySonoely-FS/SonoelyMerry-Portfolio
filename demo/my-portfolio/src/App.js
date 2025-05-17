import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header.js';
import AboutMe from './components/AboutMe.js';
import Projects from './components/Projects.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const cachedImage = localStorage.getItem('unsplash-image');
    if (cachedImage) {
      setImageUrl(cachedImage);
    } else {
      fetch(`https://api.unsplash.com/photos/random?query=background&client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`)
        .then(res => res.json())
        .then(data => {
          if (data?.urls?.regular) {
            setImageUrl(data.urls.regular);
            localStorage.setItem('unsplash-image', data.urls.regular);
          }
        })
        .catch(err => {
          console.error('Image fetch failed:', err);
          setImageUrl('https://via.placeholder.com/1920x1080');
        });
    }
  }, []);

  useEffect(() => {
    if (imageUrl) {
      document.body.style.backgroundImage = `url(${imageUrl})`;
      document.body.style.backgroundSize = 'cover';
      document.body.style.backgroundPosition = 'center';
      document.body.style.backgroundRepeat = 'no-repeat';
      document.body.style.backgroundAttachment = 'fixed';
    }
  }, [imageUrl]);

  return (
    <div className="content-section bg-light rounded p-4 shadow-lg text-center" style={{ opacity: 0.9 }}>
      <h1 className="mb-3">Welcome to My Portfolio!</h1>
      <p className="lead">Explore my work, learn more about me, and check out my projects.</p>

      {/* 🔁 Refresh Background Button */}
      <button
        className="btn btn-success mt-3"
        onClick={() => {
          localStorage.removeItem('unsplash-image');
          window.location.reload();
        }}
      >
        Refresh Background
      </button>
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
