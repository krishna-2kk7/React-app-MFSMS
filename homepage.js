// src/components/HomePage.js

import React from 'react';
import './HomePage.css'; // Import the CSS file for styling

function HomePage() {
  return (
    <div className="homepage-container">
      <header className="homepage-header">
        <h1>Welcome to Smart Agriculture Monitoring</h1>
        <p className="intro-text">
          This project aims to revolutionize the way small-scale farmers monitor and manage soil health and irrigation systems.
        </p>
      </header>

      <section className="project-info">
        <h2>About the Project</h2>
        <p>
          Our goal is to provide an automated solution for monitoring soil moisture, temperature, humidity, and other critical factors for plant growth. By utilizing real-time data from various sensors, our system helps farmers make informed decisions about irrigation, soil health, and overall plant care.
        </p>
        <h3>Key Features:</h3>
        <ul>
          <li>Real-time sensor data collection and visualization</li>
          <li>Automated irrigation system based on soil moisture</li>
          <li>AI-driven growth recommendations</li>
          <li>Easy-to-use web interface for monitoring and control</li>
        </ul>
      </section>

      <footer className="homepage-footer">
        <p>&copy; 2024 Smart Agriculture Project. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;
