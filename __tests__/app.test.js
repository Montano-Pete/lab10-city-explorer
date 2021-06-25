require('dotenv').config();

const fakeRequest = require('supertest');
const app = require('../lib/app');

describe('app routes', () => {
  describe('routes', () => {

    test('gets desired location object', async() => {

      const expectation = {
        'formatted_query': 'Seattle, King County, Washington, USA',
        'latitude': '47.6038321',
        'longitude': '-122.3300624',
      };

      const data = await fakeRequest(app)
        .get('/location?search=seattle')
        .expect('Content-Type', /json/)
        .expect(200);

      expect(data.body).toEqual(expectation);
    });

    test('gets desired weather object', async() => {

      const expectation = [
        {
          'forecast': 'Broken clouds',
          'time': 'Thursday, June 24, 2021'
        },
        {
          'forecast': 'Overcast clouds',
          'time': 'Friday, June 25, 2021'
        },
        {
          'forecast': 'Broken clouds',
          'time': 'Saturday, June 26, 2021'
        },
        {
          'forecast': 'Broken clouds',
          'time': 'Sunday, June 27, 2021'
        },
        {
          'forecast': 'Overcast clouds',
          'time': 'Monday, June 28, 2021'
        },
        {
          'forecast': 'Overcast clouds',
          'time': 'Tuesday, June 29, 2021'
        },
        {
          'forecast': 'Broken clouds',
          'time': 'Wednesday, June 30, 2021'
        },
        {
          'forecast': 'Overcast clouds',
          'time': 'Thursday, July 1, 2021'
        },
        {
          'forecast': 'Broken clouds',
          'time': 'Friday, July 2, 2021'
        },
        {
          'forecast': 'Overcast clouds',
          'time': 'Saturday, July 3, 2021'
        },
        {
          'forecast': 'Overcast clouds',
          'time': 'Sunday, July 4, 2021'
        },
        {
          'forecast': 'Overcast clouds',
          'time': 'Monday, July 5, 2021'
        },
        {
          'forecast': 'Overcast clouds',
          'time': 'Tuesday, July 6, 2021'
        },
        {
          'forecast': 'Broken clouds',
          'time': 'Wednesday, July 7, 2021'
        },
        {
          'forecast': 'Overcast clouds',
          'time': 'Thursday, July 8, 2021'
        },
        {
          'forecast': 'Thunderstorm with rain',
          'time': 'Friday, July 9, 2021'
        }
      ];

      const data = await fakeRequest(app)
        .get('/weather?lat=35.7721&lon=-78.63861')
        .expect('Content-Type', /json/)
        .expect(200);

      expect(data.body).toEqual(expectation);
    });

  });
});
