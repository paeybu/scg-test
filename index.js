const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const DOSCG = require('./controller/DOSCG.controller');
require('dotenv').config();
const NodeCache = require('node-cache');

const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
const myCache = new NodeCache();

app.get('/findbc', (req, res) => {
  const cached = myCache.get('findbc');
  if (!cached) {
    const result = DOSCG.findBC();
    myCache.set('findbc', result);
    res.send(result);
  } else {
    res.send(cached);
  }
});

app.get('/direction', async (req, res) => {
  const cached = myCache.get('direction');
  if (!cached) {
    try {
      const direction = await DOSCG.getDirection();
      myCache.set('direction', direction.data);
      res.send(direction.data);
    } catch (error) {
      console.log('Error getting direction');
    }
  } else {
    res.send(cached);
  }
});

app.post('/webhook', (req, res) => {
  DOSCG.reply(req, res);
});

app.listen(port, () => {
  console.log(`Running on ${port}`);
});
