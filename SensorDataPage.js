// src/components/SensorDataPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SensorDataPage.css';

function SensorDataPage() {
  const [sensorData, setSensorData] = useState({});
  const [soilQuality, setSoilQuality] = useState('');

  // Function to fetch sensor data
  const fetchSensorData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/sensor-data');
      setSensorData(response.data);
      // Send data to Llama AI and get soil quality
      const qualityResponse = await axios.post('http://localhost:5000/api/soil-quality', response.data);
      setSoilQuality(qualityResponse.data.quality);
    } catch (error) {
      console.error('Error fetching sensor data or getting soil quality:', error);
    }
  };

  useEffect(() => {
    fetchSensorData(); // Fetch data when the component mounts
  }, []);

  return (
    <div className="sensor-data-page">
      <h1>Sensor Data and Soil Quality</h1>
      <div className="sensor-data">
        <h2>Sensor Readings:</h2>
        <p>Soil Moisture: {sensorData.moisture}%</p>
        <p>Temperature: {sensorData.temperature}°C</p>
        <p>Humidity: {sensorData.humidity}%</p>
        <p>Soil Conductivity: {sensorData.conductivity} µS/cm</p>
        {/* Add more sensors as needed */}
      </div>
      <div className="soil-quality">
        <h2>Soil Quality (Based on AI Analysis):</h2>
        <p>{soilQuality || 'Loading quality...'} </p>
      </div>
    </div>
  );
}

export default SensorDataPage;
