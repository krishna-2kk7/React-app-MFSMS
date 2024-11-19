import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './components/signin';
import SignUp from './components/signup';
import SensorData from './components/SensorData'; // Import SensorData component
import HomePage from './components/homepage'; // Ensure the HomePage component is correctly imported
import SensorDataPage from './components/SensorDataPage';
import './components/style2.css'; // Import the CSS file

function App() {
  return (
    <Router> {/* Wrap everything in the Router */}
      <div className="App">
        <h1>Multi Factor Soil Monitoring System</h1>

        {/* Set up Navigation Links with Button Style */}
        <nav className="nav-bar">
          <a href="/" className="nav-btn">Home</a>
          <a href="/signin" className="nav-btn">Sign In</a>
          <a href="/signup" className="nav-btn">Sign Up</a>
          <a href="/sensor" className="nav-btn">Sensor Data</a>
          <a href="/AI" className="nav-btn">AI Page</a>
        </nav>

        {/* Use Routes for navigation */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/sensor" element={<SensorData />} />
          <Route path="/AI" element={<SensorDataPage/> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


