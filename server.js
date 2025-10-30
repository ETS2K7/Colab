// server.js (using Express.js)
const express = require('express');
const app = express();
const port = 3000;

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Welcome to the Express.js server!');
});

// Define another route
app.get('/about', (req, res) => {
  res.send('This is the about page.');
});

// Start the server
app.listen(port, () => {
  console.log(`Express server listening at http://localhost:${port}`);
});
