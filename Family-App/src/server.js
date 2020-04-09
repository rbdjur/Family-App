const http = require('http');
var express = require('express');
var path = require("path");
const assert = require("assert");

// const app = require('../backend/backend_server');
const appMongoose = require('../backend/backend_server_mongoose');

const port = process.env.PORT || 8080;

const server = http.createServer(appMongoose);
// const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server running on port ${port}`)
});
