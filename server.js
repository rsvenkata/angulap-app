const express = require('express');
const path = require('path');
const app = express();

  app.use(express.static(__dirname + './dist/dwp'));
  app.get('/*', (req, res) => res.sendFile(path.join(__dirname + './dist/apps/bpdweb/index.html')));

app.listen(process.env.PORT || 8080);
