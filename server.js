const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

// Middleware to parse JSON request body
app.use(bodyParser.json());

// Route to get sensor data (you will replace this with real sensor logic)
app.get('/api/sensor-data', (req, res) => {
  const sampleData = {
    moisture: 35,        // Sample moisture value
    temperature: 22.5,   // Sample temperature value
    humidity: 60,        // Sample humidity value
    conductivity: 450    // Sample conductivity value
  };
  res.json(sampleData);  // Send the sample sensor data as a response
});

// Route to send sensor data to Llama AI and get soil quality analysis
app.post('/api/soil-quality', async (req, res) => {
  const sensorData = req.body;

  // Ensure the necessary fields are present in the request body
  if (!sensorData.moisture || !sensorData.temperature || !sensorData.humidity || !sensorData.conductivity) {
    return res.status(400).json({ error: 'Missing sensor data' });
  }

  // Example payload for the AI API (adjust the structure as needed)
  const payload = {
    moisture: sensorData.moisture,
    temperature: sensorData.temperature,
    humidity: sensorData.humidity,
    conductivity: sensorData.conductivity
  };

  try {
    // Replace the URL with the actual Llama AI endpoint (or OpenAI API if needed)
    const llamaAIResponse = await axios.post('https://api.openai.com/v1/models/llama/dbd50c23f4e44a67b36f39602b24871c849702d149004115b580fbffd16e5abd/generate', payload, {
      headers: {
        'Authorization': 'Bearer YOUR_OPENAI_API_KEY',  // Replace with your API key
        'Content-Type': 'application/json'
      }
    });

    // Process the AI response (you may need to adjust based on Llama AI's response format)
    const soilQuality = llamaAIResponse.data.choices[0].text;  // Example structure (adjust according to your API response)

    // Send the AI-generated soil quality as a response
    res.json({ quality: soilQuality });
  } catch (error) {
    console.error('Error with Llama AI request:', error);
    res.status(500).send('Error with AI processing');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
