const path = require('path');
const express = require('express');

const app = express();
const port = 3000;

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../dist');
const viewPatch = path.join(__dirname, '../views');

// Setup view engine and view engine location
app.set('view engine', 'pug');
app.set('views', viewPatch);

// Setup static directory
app.use(express.static(publicDirectoryPath));

app.get('/', (req, res) => {
  res.render('index', {
    pageTitle: 'Home',
  });
});

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help',
    name: 'Nicola',
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About',
    name: 'Nicola',
  });
});

app.get('/weather', (req, res) => {
  res.send({ forecast: 69, location: 'ngawi' });
});

app.listen(port, () =>
  console.log(`Server run on port : http://localhost:${port}`)
);
