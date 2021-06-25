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
          'forecast': 'Thunderstorm with heavy rain',
          'time': 'Thursday, June 24, 2021'
        },
        {
          'forecast': 'Thunderstorm with rain',
          'time': 'Friday, June 25, 2021'
        },
        {
          'forecast': 'Overcast clouds',
          'time': 'Saturday, June 26, 2021'
        },
        {
          'forecast': 'Broken clouds',
          'time': 'Sunday, June 27, 2021'
        },
        {
          'forecast': 'Scattered clouds',
          'time': 'Monday, June 28, 2021'
        },
        {
          'forecast': 'Overcast clouds',
          'time': 'Tuesday, June 29, 2021'
        },
        {
          'forecast': 'Scattered clouds',
          'time': 'Wednesday, June 30, 2021'
        },
        {
          'forecast': 'Scattered clouds',
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
          'forecast': 'Broken clouds',
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
          'forecast': 'Overcast clouds',
          'time': 'Wednesday, July 7, 2021'
        },
        {
          'forecast': 'Moderate rain',
          'time': 'Thursday, July 8, 2021'
        },
        {
          'forecast': 'Broken clouds',
          'time': 'Friday, July 9, 2021'
        }
      ];

      const data = await fakeRequest(app)
        .get('/weather?lat=35.7721&lon=-78.63861')
        .expect('Content-Type', /json/)
        .expect(200);

      expect(data.body).toEqual(expectation);
    });

    test('gets desired reviews object', async() => {

      const expectation = [
        {
          'name': 'Pike Place Chowder',
          'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/ZyQjV-wJQ2GHyX7l3jfbyg/o.jpg',
          'url': 'https://www.yelp.com/biz/pike-place-chowder-seattle?adjust_creative=tW0nRVYkkSvRLLp2cz8ykQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=tW0nRVYkkSvRLLp2cz8ykQ',
          'rating': 4.5,
          'price': '$$'
        },
        {
          'name': 'Piroshky Piroshky',
          'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/qGlIuj5yn6i82DK8kxw4Uw/o.jpg',
          'url': 'https://www.yelp.com/biz/piroshky-piroshky-seattle?adjust_creative=tW0nRVYkkSvRLLp2cz8ykQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=tW0nRVYkkSvRLLp2cz8ykQ',
          'rating': 4.5,
          'price': '$'
        },
        {
          'name': 'The Pink Door',
          'image_url': 'https://s3-media3.fl.yelpcdn.com/bphoto/SdnJM6TCUmlKlpN6bnP-Rg/o.jpg',
          'url': 'https://www.yelp.com/biz/the-pink-door-seattle-4?adjust_creative=tW0nRVYkkSvRLLp2cz8ykQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=tW0nRVYkkSvRLLp2cz8ykQ',
          'rating': 4.5,
          'price': '$$'
        },
        {
          'name': 'Ellenos Real Greek Yogurt',
          'image_url': 'https://s3-media4.fl.yelpcdn.com/bphoto/jsZkRaDQ6aEa6jwRGWDi5Q/o.jpg',
          'url': 'https://www.yelp.com/biz/ellenos-real-greek-yogurt-seattle?adjust_creative=tW0nRVYkkSvRLLp2cz8ykQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=tW0nRVYkkSvRLLp2cz8ykQ',
          'rating': 5,
          'price': '$'
        },
        {
          'name': 'Storyville Coffee Company',
          'image_url': 'https://s3-media3.fl.yelpcdn.com/bphoto/nJgiyjMZ7sglAtc5wyKSLQ/o.jpg',
          'url': 'https://www.yelp.com/biz/storyville-coffee-company-seattle-9?adjust_creative=tW0nRVYkkSvRLLp2cz8ykQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=tW0nRVYkkSvRLLp2cz8ykQ',
          'rating': 4.5,
          'price': '$$'
        },
        {
          'name': 'The Crumpet Shop',
          'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/nA5msGED9d3Bn5ldV2UgHA/o.jpg',
          'url': 'https://www.yelp.com/biz/the-crumpet-shop-seattle?adjust_creative=tW0nRVYkkSvRLLp2cz8ykQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=tW0nRVYkkSvRLLp2cz8ykQ',
          'rating': 4.5,
          'price': '$'
        },
        {
          'name': 'Beecher\'s Handmade Cheese',
          'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/hh5CwveJRABseaWt_UxtXA/o.jpg',
          'url': 'https://www.yelp.com/biz/beechers-handmade-cheese-seattle?adjust_creative=tW0nRVYkkSvRLLp2cz8ykQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=tW0nRVYkkSvRLLp2cz8ykQ',
          'rating': 4.5,
          'price': '$'
        },
        {
          'name': 'Le Panier French Bakery',
          'image_url': 'https://s3-media4.fl.yelpcdn.com/bphoto/5fmWSH9EoNSFLCRakj8tSw/o.jpg',
          'url': 'https://www.yelp.com/biz/le-panier-french-bakery-seattle?adjust_creative=tW0nRVYkkSvRLLp2cz8ykQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=tW0nRVYkkSvRLLp2cz8ykQ',
          'rating': 4.5,
          'price': '$'
        },
        {
          'name': 'Biscuit Bitch',
          'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/ZxGvVggINkZ_BI3u7OX4CA/o.jpg',
          'url': 'https://www.yelp.com/biz/biscuit-bitch-seattle?adjust_creative=tW0nRVYkkSvRLLp2cz8ykQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=tW0nRVYkkSvRLLp2cz8ykQ',
          'rating': 4,
          'price': '$'
        },
        {
          'name': 'Japonessa Sushi Cocina',
          'image_url': 'https://s3-media3.fl.yelpcdn.com/bphoto/vucCrknnlu1RRvRaKWwovQ/o.jpg',
          'url': 'https://www.yelp.com/biz/japonessa-sushi-cocina-seattle?adjust_creative=tW0nRVYkkSvRLLp2cz8ykQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=tW0nRVYkkSvRLLp2cz8ykQ',
          'rating': 4,
          'price': '$$'
        },
        {
          'name': 'Lola',
          'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/y37Xvo70cY1kh6-d1vDdfQ/o.jpg',
          'url': 'https://www.yelp.com/biz/lola-seattle?adjust_creative=tW0nRVYkkSvRLLp2cz8ykQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=tW0nRVYkkSvRLLp2cz8ykQ',
          'rating': 4,
          'price': '$$'
        },
        {
          'name': 'Serious Pie',
          'image_url': 'https://s3-media4.fl.yelpcdn.com/bphoto/mHyyfLAUge0LjN5t1hYfKw/o.jpg',
          'url': 'https://www.yelp.com/biz/serious-pie-seattle?adjust_creative=tW0nRVYkkSvRLLp2cz8ykQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=tW0nRVYkkSvRLLp2cz8ykQ',
          'rating': 4,
          'price': '$$'
        },
        {
          'name': 'Starbucks Reserve Roastery Seattle',
          'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/Pxq-GrSvmQCjHxPoCLgsfw/o.jpg',
          'url': 'https://www.yelp.com/biz/starbucks-reserve-roastery-seattle-seattle?adjust_creative=tW0nRVYkkSvRLLp2cz8ykQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=tW0nRVYkkSvRLLp2cz8ykQ',
          'rating': 4.5,
          'price': '$$'
        },
        {
          'name': 'Umi Sake House',
          'image_url': 'https://s3-media3.fl.yelpcdn.com/bphoto/7W0Uipcxv8q0iXjW1VpTMw/o.jpg',
          'url': 'https://www.yelp.com/biz/umi-sake-house-seattle?adjust_creative=tW0nRVYkkSvRLLp2cz8ykQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=tW0nRVYkkSvRLLp2cz8ykQ',
          'rating': 4,
          'price': '$$'
        },
        {
          'name': 'Chihuly Garden and Glass',
          'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/TcvYLHMYIdv5b1Rxy2eP3g/o.jpg',
          'url': 'https://www.yelp.com/biz/chihuly-garden-and-glass-seattle-2?adjust_creative=tW0nRVYkkSvRLLp2cz8ykQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=tW0nRVYkkSvRLLp2cz8ykQ',
          'rating': 4.5
        },
        {
          'name': 'Elliott\'s Oyster House',
          'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/naJ4Nkphiis5M36tGrGHJA/o.jpg',
          'url': 'https://www.yelp.com/biz/elliotts-oyster-house-seattle-2?adjust_creative=tW0nRVYkkSvRLLp2cz8ykQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=tW0nRVYkkSvRLLp2cz8ykQ',
          'rating': 4,
          'price': '$$$'
        },
        {
          'name': 'Shiro\'s',
          'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/yNhl9XVdVSaktZ0bzRCrKg/o.jpg',
          'url': 'https://www.yelp.com/biz/shiros-seattle?adjust_creative=tW0nRVYkkSvRLLp2cz8ykQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=tW0nRVYkkSvRLLp2cz8ykQ',
          'rating': 4.5,
          'price': '$$$'
        },
        {
          'name': 'Radiator Whiskey',
          'image_url': 'https://s3-media3.fl.yelpcdn.com/bphoto/W9DnG_PyGHOtApxbAoFOqA/o.jpg',
          'url': 'https://www.yelp.com/biz/radiator-whiskey-seattle?adjust_creative=tW0nRVYkkSvRLLp2cz8ykQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=tW0nRVYkkSvRLLp2cz8ykQ',
          'rating': 4.5,
          'price': '$$'
        },
        {
          'name': 'Sushi Kashiba',
          'image_url': 'https://s3-media3.fl.yelpcdn.com/bphoto/vJlqSjGVOEkfZP3ehtrOjQ/o.jpg',
          'url': 'https://www.yelp.com/biz/sushi-kashiba-seattle?adjust_creative=tW0nRVYkkSvRLLp2cz8ykQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=tW0nRVYkkSvRLLp2cz8ykQ',
          'rating': 4.5,
          'price': '$$$$'
        },
        {
          'name': 'Von\'s 1000 Spirits',
          'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/iUTo8Vc5is6j5dO358VWTg/o.jpg',
          'url': 'https://www.yelp.com/biz/vons-1000-spirits-seattle-4?adjust_creative=tW0nRVYkkSvRLLp2cz8ykQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=tW0nRVYkkSvRLLp2cz8ykQ',
          'rating': 4.5,
          'price': '$$'
        }
      ];

      const data = await fakeRequest(app)
        .get('/reviews?latitude=47.60939&longitude=-122.34112')
        .expect('Content-Type', /json/)
        .expect(200);

      expect(data.body).toEqual(expectation);
    });

  });
});
