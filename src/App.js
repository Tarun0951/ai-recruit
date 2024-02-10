import React from 'react';
import './App.css';

import { Link } from 'react-router-dom';
import pglogo from './images/pg-agi.jpeg';
import bot from './images/ai-bot.png';



function App() {
  return (
    <div className="App">
      <header>
        <div className="header-content">
          <div className="logo">
            <h5>AI-RECRUITER</h5>
            <img src={pglogo} alt="AI-Recruiter" />
          </div>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="main-content">
        <div className="text-container" id="home">
          <h2>Revolutionizing Recruitment with AI</h2>
        </div>
        <p>AI-Recruiter leverages cutting-edge AI technology to streamline the hiring process,
          <br></br> 
          <br></br>saving time and resources for businesses of all sizes.</p>
          <br></br>
          <button  className="get-started-btn">Get Started</button>
        <div className="bot">
          <img src={bot} alt="AI-Recruiter" />
          <br />
          <br />
          <br />
        </div>
        <div className="landimg" id="about">
          <h2>About</h2>
          <p>Information about AI-Recruiter...</p>
          <br></br>
        </div>
        <div className="landimg" id="services">
          <h2>Services</h2>
          <p>Services provided by AI-Recruiter...</p>
          <br></br>
        </div>
        <div className="landimg" id="contact">
          <h2>Contact Us</h2>
          <br></br>
          <p>Contact information...</p>
        </div>
        <a href="#home" className="return-to-top">↑</a>
      </div>
    </div>
  );
}

export default App;
