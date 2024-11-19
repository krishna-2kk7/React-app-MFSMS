import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';  // Importing the Line chart for sensor data graphs
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import './sensor-data.css';

// Registering the required chart elements
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function SensorData() {
    const [sensorData, setSensorData] = useState({
        temperature: [],
        humidity: [],
        soilMoisture: [],
        soilConductivity: [],  // Changed from pH to soilConductivity
    });
    
    const [time, setTime] = useState([]);
    const [soilQuality, setSoilQuality] = useState(null); // State for soil quality

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch sensor data from your local server
                const response = await axios.get('http://192.168.29.242:3000/api/sensors');
                
                // Update the state with new sensor data
                setSensorData((prevData) => ({
                    temperature: [...prevData.temperature, response.data.temperature],
                    humidity: [...prevData.humidity, response.data.humidity],
                    soilMoisture: [...prevData.soilMoisture, response.data.soilMoisture],
                    soilConductivity: [...prevData.soilConductivity, response.data.soilConductivity],  // Updated here
                }));
                setTime((prevTime) => [...prevTime, new Date().toLocaleTimeString()]);
                
                // Send the sensor data to the server for AI-based soil quality analysis
                await fetchSoilQuality(response.data);
            } catch (error) {
                console.error("Error fetching sensor data:", error);
            }
        };

        fetchData();
        const interval = setInterval(fetchData, 5000);

        return () => clearInterval(interval);
    }, []);

    // Function to fetch soil quality prediction from the server
    const fetchSoilQuality = async (sensorData) => {
        try {
            const response = await axios.post('http://localhost:5000/api/soil-quality', sensorData);
            setSoilQuality(response.data.quality); // Set the soil quality from AI response
        } catch (error) {
            console.error("Error fetching soil quality:", error);
            setSoilQuality("Error fetching soil quality"); // Handle error if AI fails
        }
    };

    const data = {
        labels: time,
        datasets: [
            {
                label: 'Temperature (°C)',
                data: sensorData.temperature,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1,
                fill: false,
            },
            {
                label: 'Humidity (%)',
                data: sensorData.humidity,
                borderColor: 'rgb(255, 159, 64)',
                tension: 0.1,
                fill: false,
            },
            {
                label: 'Soil Moisture (%)',
                data: sensorData.soilMoisture,
                borderColor: 'rgb(153, 102, 255)',
                tension: 0.1,
                fill: false,
            },
            {
                label: 'Soil Conductivity',
                data: sensorData.soilConductivity,  // Updated here
                borderColor: 'rgb(255, 99, 132)',
                tension: 0.1,
                fill: false,
            },
        ],
    };

    return (
        <div className="sensor-data-container">
            <h2>Sensor Data</h2>
            <div className="chart-container">
                <Line data={data} />
            </div>

            <div className="sensor-readings">
                <div className="sensor-item">
                    <p><strong>Temperature:</strong> {sensorData.temperature.length > 0 ? sensorData.temperature[sensorData.temperature.length - 1] : 'N/A'} °C</p>
                </div>
                <div className="sensor-item">
                    <p><strong>Humidity:</strong> {sensorData.humidity.length > 0 ? sensorData.humidity[sensorData.humidity.length - 1] : 'N/A'} %</p>
                </div>
                <div className="sensor-item">
                    <p><strong>Soil Moisture:</strong> {sensorData.soilMoisture.length > 0 ? sensorData.soilMoisture[sensorData.soilMoisture.length - 1] : 'N/A'} %</p>
                </div>
                <div className="sensor-item">
                    <p><strong>Soil Conductivity:</strong> {sensorData.soilConductivity.length > 0 ? sensorData.soilConductivity[sensorData.soilConductivity.length - 1] : 'N/A'}</p>
                </div>
            </div>

            <div className="soil-quality">
                <h3>Soil Quality Analysis</h3>
                <p><strong>Soil Quality:</strong> {soilQuality ? soilQuality : 'Loading...'} </p>
            </div>
        </div>
    );
}

export default SensorData;
