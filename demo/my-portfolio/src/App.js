import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import Header from './components/Header.js';
import AboutMe from './components/AboutMe.js';
import Projects from './components/Projects.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function Home() {
  return (
    <div className="content-section bg-light rounded p-4 shadow-lg text-center" style={{ opacity: 0.9 }}>
      <h1 className="mb-3">Welcome to My Portfolio!</h1>
      <p className="lead">Explore my work, learn more about me, and check out my projects.</p>
    </div>
  );
}

function AppContent() {
  const [imageUrl, setImageUrl] = useState('');
  const location = useLocation();

  const fetchBackground = () => {
    fetch('https://api.unsplash.com/photos/random?query=background', {
      headers: {
        Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.urls?.regular) {
          console.log('Fetched image:', data.urls.regular);
          setImageUrl(data.urls.regular);
        } else {
          console.warn('No image found, using fallback.');
          setImageUrl('https://via.placeholder.com/1920x1080');
        }
      })
      .catch((err) => {
        console.error('Image fetch failed:', err);
        setImageUrl('https://via.placeholder.com/1920x1080');
      });
  };  

  useEffect(() => {
    fetchBackground();
  }, []);

  useEffect(() => {
    fetchBackground();
  }, [location]);

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
    <div className="main-wrapper">
      <Header />
      <div className="container-fluid p-0">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={AboutMe} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;