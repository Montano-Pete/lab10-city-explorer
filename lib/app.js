/* eslint-disable no-unused-vars */
const express = require('express');
const cors = require('cors');
const app = express();
const morgan = require('morgan');
const ensureAuth = require('./auth/ensure-auth');
const createAuthRoutes = require('./auth/create-auth-routes');
const request = require('superagent');
const { mungeLocation, mungeWeather, mungeReviews } = require('./munge-functions.js');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev')); // http logging

const authRoutes = createAuthRoutes();

// setup authentication routes to give user an auth token
// creates a /auth/signin and a /auth/signup POST route. 
// each requires a POST body with a .email and a .password
app.use('/auth', authRoutes);

// everything that starts with "/api" below here requires an auth token!
app.use('/api', ensureAuth);

// and now every request that has a token in the Authorization header will have a `req.userId` property for us to see who's talking
app.get('/api/test', (req, res) => {
  res.json({
    message: `in this proctected route, we get the user's id like so: ${req.userId}`
  });
});

app.get('/location', async(req, res) => {
  try{
    const city = req.query.search;

    const data = await request.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.LOCATION_KEY}=${city}&format=json`);

    const mungedLocationData = mungeLocation(data.body);
    res.json(mungedLocationData);
  } catch(e) {
    res.status(500).json({ message: e.message });
  }
});

app.get('/weather', async(req, res) => {
  try{
    const { latitude, longitude } = req.query;

    const data = await request.get(`https://api.weatherbit.io/v2.0/forecast/daily?lat=${latitude}&lon=${longitude}&key=${process.env.WEATHER_KEY}`);

    const mungedWeatherData = mungeWeather(data.body);

    res.json(mungedWeatherData);
  } catch(e) {
    res.status(500).json({ message: e.message });
  }
});

app.get('/reviews', async(req, res) => {
  try{
    const { latitude, longitude } = req.query;

    const data = await request.get(`https://api.yelp.com/v3/businesses/search?latitude=${latitude}&longitude=${longitude}`).set('Authorization', `Bearer ${process.env.REVIEWS_KEY}`);

    const mungedReviewData = mungeReviews(data.body);

    res.json(mungedReviewData);
  } catch(e) {
    res.status(500).json({ message: e.message });
  }
});

app.use(require('./middleware/error'));

module.exports = app;
