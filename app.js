const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

const port = process.env.PORT || 3000;
app.use(cors());
let isLedOn = false; // Variable to store LED state

app.use(bodyParser.json());

// Toggle LED state and send response
app.post('/api/led', (req, res) => {
  const { state } = req.body;
  
  // Check if state is valid (optional)
  if (state !== 'ON' && state !== 'OFF') {
    return res.status(400).json({ error: 'Invalid state' });
  }
  
  // Toggle LED state
  isLedOn = state === 'ON';
  
  console.log('Received request to toggle LED with state:', state);
  
  // Send LED state as response
  return res.json({ state: isLedOn ? 'ON' : 'OFF' });
});

// Turn LED off
app.post('/api/led/off', (req, res) => {
  isLedOn = false; // Set LED state to OFF
  console.log('Received request to turn LED off');
  return res.sendStatus(200);
});

// Turn LED on
app.post('/api/led/on', (req, res) => {
  isLedOn = true; // Set LED state to ON
  console.log('Received request to turn LED on');
  return res.sendStatus(200);
});

app.get('/', (req, res) => {
  console.log('Hello');
  return res.send('Hello');
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
