const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes');

const app = express();

app.use(bodyParser.json({ type: '*/*' }));
routes(app);


const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/api-1');

app.listen(3001, () => {
  console.log('App is running on 3001!');
});
