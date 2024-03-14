const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

const port = 3000;
app.use(cors());
var i=false;

app.use(bodyParser.json());

app.post('/api/led', (req, res) => {
  const { state } = req.body;
  console.log('Received request to toggle LED with state:', state);
  if(i){
    res.json({ message: `ON` });
  }else{
    res.json({ message: `OFF` });
  }

});
app.post('/api/led/off', (req, res) => {
  const { state } = req.body;
  i=false;
  console.log('Received request to toggle LED with state:', i);
  res.sendStatus(200);
});
app.post('/api/led/on', (req, res) => {
  const { state } = req.body;
  i=true;
  console.log('Received request to toggle LED with state:', i);
  res.sendStatus(200);
});
app.post('/',(req, res) => {
    console.log('Hello');
  });
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
