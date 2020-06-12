const http = require('http');
var express = require('express');
var path = require("path");
const assert = require("assert");

// path when server.js file is in the /src folder of the front end code
// const app = require('../backend/backend_server_mongoose');

const app = require('./backend_server_mongoose');

const port = process.env.PORT || 8080;

app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server running on port ${port}`)
});
