const express = require('express');
const compression = require('compression');
const path = require('path');
const app = express();

const port = process.env.PORT || 3000;

// compress response
app.use(compression());

// host static files
app.use(express.static(path.join(__dirname, '../dist')));
app.use('*', express.static(path.join(__dirname, '../dist')));

app.listen(port);
