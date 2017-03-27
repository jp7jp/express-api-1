const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const routes = require('./routes');
const config = require('./config');

const app = express();

app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));
routes(app);


module.exports = app;
