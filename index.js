const { generateRandomPerson } = require('./src/controllers/user.controller');
const { generateRandomAddress } = require('./src/controllers/address.controller');

const cors = require('cors');
const express = require('express');
const app = express();
const PORT = 3003;

app.set(express.json());
app.set(cors());

app.route('/getPerson')
  .get((req, res) => {
    res.json(generateRandomPerson());
  });

app.route('/getAddress')
  .get((req, res) => {
    res.json(generateRandomAddress());
  });

app.listen(PORT, () => console.log('App is running in port: ' + PORT));