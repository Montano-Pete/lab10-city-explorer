require('dotenv').config();

const { mungeLocation, mungeWeather } = require('../lib/munge-functions.js');

describe('app routes', () => {
  describe('routes', () => {

    test('munges location data and returns desired object', async() => {

      const expectation = {
        'formatted_query': 'Seattle, King County, Washington, USA',
        'latitude': '47.6038321',
        'longitude': '-122.3300624',
      };

      const dataToMunge = [
        {
          'place_id': '235549103',
          'licence': 'https://locationiq.com/attribution',
          'osm_type': 'relation',
          'osm_id': '237385',
          'boundingbox': [
            '47.4810022',
            '47.7341357',
            '-122.459696',
            '-122.224433'
          ],
          'lat': '47.6038321',
          'lon': '-122.3300624',
          'display_name': 'Seattle, King County, Washington, USA',
          'class': 'place',
          'type': 'city',
          'importance': 0.772979173564379,
          'icon': 'https://locationiq.org/static/images/mapicons/poi_place_city.p.20.png'
        },
        {
          'place_id': '55417079',
          'licence': 'https://locationiq.com/attribution',
          'osm_type': 'node',
          'osm_id': '4836954932',
          'boundingbox': [
            '20.7199184',
            '20.7200184',
            '-103.3763786',
            '-103.3762786'
          ],
          'lat': '20.7199684',
          'lon': '-103.3763286',
          'display_name': 'Seattle, Villas de Guadalupe, Zapopan, Jalisco, 38901, Mexico',
          'class': 'place',
          'type': 'neighbourhood',
          'importance': 0.30000000000000004
        },
        {
          'place_id': '156976950',
          'licence': 'https://locationiq.com/attribution',
          'osm_type': 'way',
          'osm_id': '291707810',
          'boundingbox': [
            '25.1837689',
            '25.1845505',
            '121.4465868',
            '121.4474398'
          ],
          'lat': '25.18415975',
          'lon': '121.446939985985',
          'display_name': 'Seattle, Lanweibu, Beitou Village, Danhai, Tamsui District, New Taipei, Taiwan',
          'class': 'landuse',
          'type': 'residential',
          'importance': 0.30000000000000004
        },
        {
          'place_id': '84138175',
          'licence': 'https://locationiq.com/attribution',
          'osm_type': 'way',
          'osm_id': '10671266',
          'boundingbox': [
            '41.9611659',
            '41.9657274',
            '-121.9226362',
            '-121.9226043'
          ],
          'lat': '41.9641881',
          'lon': '-121.922629',
          'display_name': 'Seattle, Dorris, Siskiyou County, California, 96058, USA',
          'class': 'highway',
          'type': 'residential',
          'importance': 0.2
        },
        {
          'place_id': '90129562',
          'licence': 'https://locationiq.com/attribution',
          'osm_type': 'way',
          'osm_id': '22919051',
          'boundingbox': [
            '14.6180684',
            '14.6213139',
            '121.0429669',
            '121.0448923'
          ],
          'lat': '14.6195488',
          'lon': '121.0440164',
          'display_name': 'Seattle, Kaunlaran, Cubao, 4th District, Quezon City, Eastern Manila District, Metro Manila, 1111, Philippines',
          'class': 'highway',
          'type': 'residential',
          'importance': 0.2
        },
        {
          'place_id': '160325077',
          'licence': 'https://locationiq.com/attribution',
          'osm_type': 'way',
          'osm_id': '307770120',
          'boundingbox': [
            '28.8472264',
            '28.8487875',
            '-111.9789493',
            '-111.9780146'
          ],
          'lat': '28.8481394',
          'lon': '-111.9783605',
          'display_name': 'Seattle, Nuevo Kino, Bahía Kino, Hermosillo, Sonora, Mexico',
          'class': 'highway',
          'type': 'residential',
          'importance': 0.2
        },
        {
          'place_id': '95155603',
          'licence': 'https://locationiq.com/attribution',
          'osm_type': 'way',
          'osm_id': '29546551',
          'boundingbox': [
            '14.4191845',
            '14.4193677',
            '120.9180883',
            '120.9187908'
          ],
          'lat': '14.4192428',
          'lon': '120.918312',
          'display_name': 'Seattle, ACM Woodstock Homes Ph9, Alapan 1-A, Bayan Luma VI, Imus, Cavite, Calabarzon, 4103, Philippines',
          'class': 'highway',
          'type': 'residential',
          'importance': 0.2
        },
        {
          'place_id': '203034631',
          'licence': 'https://locationiq.com/attribution',
          'osm_type': 'way',
          'osm_id': '561843639',
          'boundingbox': [
            '47.4112544',
            '47.4112745',
            '-122.2621269',
            '-122.2608738'
          ],
          'lat': '47.4112602',
          'lon': '-122.260923',
          'display_name': 'Seattle, Kent, King County, Washington, 98032, USA',
          'class': 'highway',
          'type': 'service',
          'importance': 0.175
        },
        {
          'place_id': '312432792',
          'licence': 'https://locationiq.com/attribution',
          'osm_type': 'way',
          'osm_id': '165271257',
          'boundingbox': [
            '14.6696649',
            '14.6703081',
            '121.0988688',
            '121.0994135'
          ],
          'lat': '14.6703081',
          'lon': '121.0994135',
          'display_name': 'Seattle, Vista Real Classica, Batasan Hills, 2nd District, Quezon City, Eastern Manila District, Metro Manila, 1808, Philippines',
          'class': 'highway',
          'type': 'service',
          'importance': 0.175
        },
        {
          'place_id': '6534059',
          'licence': 'https://locationiq.com/attribution',
          'osm_type': 'node',
          'osm_id': '668442224',
          'boundingbox': [
            '47.6028456',
            '47.6029456',
            '-122.3398908',
            '-122.3397908'
          ],
          'lat': '47.6028956',
          'lon': '-122.3398408',
          'display_name': 'Seattle, Colman Dock, West Edge, Belltown, Seattle, King County, Washington, 98104, USA',
          'class': 'amenity',
          'type': 'ferry_terminal',
          'importance': 0.101
        }
      ];

      const data = mungeLocation(dataToMunge);

      expect(data).toEqual(expectation);
    });
  });

  test('munges weather data and returns desired object', async() => {

    const expectation = [
      { forecast: 'Thunderstorm with rain', time: 'Thursday, June 24, 2021' },
      { forecast: 'Overcast clouds', time: 'Friday, June 25, 2021' },
      { forecast: 'Broken clouds', time: 'Saturday, June 26, 2021' },
      { forecast: 'Broken clouds', time: 'Sunday, June 27, 2021' },
      { forecast: 'Overcast clouds', time: 'Monday, June 28, 2021' },
      { forecast: 'Overcast clouds', time: 'Tuesday, June 29, 2021' },
      { forecast: 'Broken clouds', time: 'Wednesday, June 30, 2021' },
      { forecast: 'Overcast clouds', time: 'Thursday, July 1, 2021' },
      { forecast: 'Broken clouds', time: 'Friday, July 2, 2021' },
      { forecast: 'Overcast clouds', time: 'Saturday, July 3, 2021' },
      { forecast: 'Overcast clouds', time: 'Sunday, July 4, 2021' },
      { forecast: 'Overcast clouds', time: 'Monday, July 5, 2021' },
      { forecast: 'Overcast clouds', time: 'Tuesday, July 6, 2021' },
      { forecast: 'Broken clouds', time: 'Wednesday, July 7, 2021' },
      { forecast: 'Overcast clouds', time: 'Thursday, July 8, 2021' },
      { forecast: 'Thunderstorm with rain', time: 'Friday, July 9, 2021' }
    ];

    const dataToMunge = {
      'data': [
        {
          'moonrise_ts': 1624668902,
          'wind_cdir': 'E',
          'rh': 83,
          'pres': 1012.8958,
          'high_temp': 26.8,
          'sunset_ts': 1624667698,
          'ozone': 313.03125,
          'moon_phase': 0.957461,
          'wind_gust_spd': 8.8984375,
          'snow_depth': 0,
          'clouds': 50,
          'ts': 1624593660,
          'sunrise_ts': 1624615109,
          'app_min_temp': 17.4,
          'wind_spd': 1.9082073,
          'pop': 75,
          'wind_cdir_full': 'east',
          'slp': 1022.9167,
          'moon_phase_lunation': 0.53,
          'valid_date': '2021-06-25',
          'app_max_temp': 28.2,
          'vis': 22.566668,
          'dewpt': 18,
          'snow': 0,
          'uv': 5.97527,
          'weather': {
            'icon': 't02d',
            'code': 201,
            'description': 'Thunderstorm with rain'
          },
          'wind_dir': 99,
          'max_dhi': null,
          'clouds_hi': 12,
          'precip': 8.3125,
          'low_temp': 18.3,
          'max_temp': 26.9,
          'moonset_ts': 1624621431,
          'datetime': '2021-06-25',
          'temp': 21.2,
          'min_temp': 17.4,
          'clouds_mid': 4,
          'clouds_low': 48
        },
        {
          'moonrise_ts': 1624758992,
          'wind_cdir': 'SE',
          'rh': 85,
          'pres': 1012.1875,
          'high_temp': 29.1,
          'sunset_ts': 1624754102,
          'ozone': 297.04166,
          'moon_phase': 0.896015,
          'wind_gust_spd': 7.8984375,
          'snow_depth': 0,
          'clouds': 79,
          'ts': 1624680060,
          'sunrise_ts': 1624701528,
          'app_min_temp': 22.6,
          'wind_spd': 2.4834888,
          'pop': 55,
          'wind_cdir_full': 'southeast',
          'slp': 1022.1458,
          'moon_phase_lunation': 0.56,
          'valid_date': '2021-06-26',
          'app_max_temp': 32.5,
          'vis': 23.591667,
          'dewpt': 21.9,
          'snow': 0,
          'uv': 6.265272,
          'weather': {
            'icon': 'c04d',
            'code': 804,
            'description': 'Overcast clouds'
          },
          'wind_dir': 130,
          'max_dhi': null,
          'clouds_hi': 23,
          'precip': 3.5625,
          'low_temp': 22.5,
          'max_temp': 29.9,
          'moonset_ts': 1624712028,
          'datetime': '2021-06-26',
          'temp': 24.8,
          'min_temp': 21.8,
          'clouds_mid': 7,
          'clouds_low': 65
        },
        {
          'moonrise_ts': 1624848473,
          'wind_cdir': 'SSE',
          'rh': 69,
          'pres': 1007.7917,
          'high_temp': 32.4,
          'sunset_ts': 1624840504,
          'ozone': 296.97916,
          'moon_phase': 0.814811,
          'wind_gust_spd': 9.6015625,
          'snow_depth': 0,
          'clouds': 58,
          'ts': 1624766460,
          'sunrise_ts': 1624787950,
          'app_min_temp': 21.2,
          'wind_spd': 2.6451886,
          'pop': 20,
          'wind_cdir_full': 'south-southeast',
          'slp': 1021.3958,
          'moon_phase_lunation': 0.59,
          'valid_date': '2021-06-27',
          'app_max_temp': 32.8,
          'vis': 24.128,
          'dewpt': 19.3,
          'snow': 0,
          'uv': 7.26223,
          'weather': {
            'icon': 'c03d',
            'code': 803,
            'description': 'Broken clouds'
          },
          'wind_dir': 155,
          'max_dhi': null,
          'clouds_hi': 56,
          'precip': 0.125,
          'low_temp': 21.1,
          'max_temp': 32.5,
          'moonset_ts': 1624802531,
          'datetime': '2021-06-27',
          'temp': 26.2,
          'min_temp': 20.5,
          'clouds_mid': 1,
          'clouds_low': 14
        },
        {
          'moonrise_ts': 1624937401,
          'wind_cdir': 'SSE',
          'rh': 66,
          'pres': 1009.25,
          'high_temp': 32.8,
          'sunset_ts': 1624926905,
          'ozone': 301.40625,
          'moon_phase': 0.72059,
          'wind_gust_spd': 10.09375,
          'snow_depth': 0,
          'clouds': 49,
          'ts': 1624852860,
          'sunrise_ts': 1624874372,
          'app_min_temp': 21.7,
          'wind_spd': 2.8004835,
          'pop': 0,
          'wind_cdir_full': 'south-southeast',
          'slp': 1022.7917,
          'moon_phase_lunation': 0.63,
          'valid_date': '2021-06-28',
          'app_max_temp': 33.3,
          'vis': 24.128,
          'dewpt': 19.2,
          'snow': 0,
          'uv': 6.076509,
          'weather': {
            'icon': 'c03d',
            'code': 803,
            'description': 'Broken clouds'
          },
          'wind_dir': 158,
          'max_dhi': null,
          'clouds_hi': 25,
          'precip': 0,
          'low_temp': 21,
          'max_temp': 32.9,
          'moonset_ts': 1624892840,
          'datetime': '2021-06-28',
          'temp': 26.8,
          'min_temp': 21,
          'clouds_mid': 27,
          'clouds_low': 10
        },
        {
          'moonrise_ts': 1624939500,
          'wind_cdir': 'S',
          'rh': 72,
          'pres': 1010.1111,
          'high_temp': 33.5,
          'sunset_ts': 1625013305,
          'ozone': 318.3889,
          'moon_phase': 0.619469,
          'wind_gust_spd': 9.40625,
          'snow_depth': 0,
          'clouds': 77,
          'ts': 1624939260,
          'sunrise_ts': 1624960796,
          'app_min_temp': 21.6,
          'wind_spd': 2.2561858,
          'pop': 0,
          'wind_cdir_full': 'south',
          'slp': 1023.6111,
          'moon_phase_lunation': 0.66,
          'valid_date': '2021-06-29',
          'app_max_temp': 33.1,
          'vis': 24.128,
          'dewpt': 19.6,
          'snow': 0,
          'uv': 3.401138,
          'weather': {
            'icon': 'c04d',
            'code': 804,
            'description': 'Overcast clouds'
          },
          'wind_dir': 188,
          'max_dhi': null,
          'clouds_hi': 77,
          'precip': 0,
          'low_temp': 21.8,
          'max_temp': 33,
          'moonset_ts': 1624982946,
          'datetime': '2021-06-29',
          'temp': 25.6,
          'min_temp': 21,
          'clouds_mid': 0,
          'clouds_low': 12
        },
        {
          'moonrise_ts': 1625027702,
          'wind_cdir': 'S',
          'rh': 62,
          'pres': 1007,
          'high_temp': 32.6,
          'sunset_ts': 1625099702,
          'ozone': 319.96875,
          'moon_phase': 0.516466,
          'wind_gust_spd': 10.8203125,
          'snow_depth': 0,
          'clouds': 78,
          'ts': 1625025660,
          'sunrise_ts': 1625047221,
          'app_min_temp': 22.5,
          'wind_spd': 3.011791,
          'pop': 0,
          'wind_cdir_full': 'south',
          'slp': 1020.5625,
          'moon_phase_lunation': 0.69,
          'valid_date': '2021-06-30',
          'app_max_temp': 33.4,
          'vis': 24.128,
          'dewpt': 18.6,
          'snow': 0,
          'uv': 5.2753544,
          'weather': {
            'icon': 'c04d',
            'code': 804,
            'description': 'Overcast clouds'
          },
          'wind_dir': 191,
          'max_dhi': null,
          'clouds_hi': 67,
          'precip': 0,
          'low_temp': 22,
          'max_temp': 33.5,
          'moonset_ts': 1625072892,
          'datetime': '2021-06-30',
          'temp': 27.3,
          'min_temp': 21.4,
          'clouds_mid': 19,
          'clouds_low': 16
        },
        {
          'moonrise_ts': 1625115718,
          'wind_cdir': 'S',
          'rh': 68,
          'pres': 1003.25,
          'high_temp': 32.7,
          'sunset_ts': 1625186098,
          'ozone': 320,
          'moon_phase': 0.415524,
          'wind_gust_spd': 11.9140625,
          'snow_depth': 0,
          'clouds': 64,
          'ts': 1625112060,
          'sunrise_ts': 1625133647,
          'app_min_temp': 22.6,
          'wind_spd': 3.429522,
          'pop': 15,
          'wind_cdir_full': 'south',
          'slp': 1016.6875,
          'moon_phase_lunation': 0.73,
          'valid_date': '2021-07-01',
          'app_max_temp': 33.9,
          'vis': 24.128,
          'dewpt': 19.8,
          'snow': 0,
          'uv': 7.5859604,
          'weather': {
            'icon': 'c03d',
            'code': 803,
            'description': 'Broken clouds'
          },
          'wind_dir': 190,
          'max_dhi': null,
          'clouds_hi': 38,
          'precip': 0.625,
          'low_temp': 21.4,
          'max_temp': 32.8,
          'moonset_ts': 1625162741,
          'datetime': '2021-07-01',
          'temp': 26.8,
          'min_temp': 21.6,
          'clouds_mid': 1,
          'clouds_low': 38
        },
        {
          'moonrise_ts': 1625203641,
          'wind_cdir': 'SSW',
          'rh': 68,
          'pres': 1002.9375,
          'high_temp': 33.7,
          'sunset_ts': 1625272492,
          'ozone': 309.0625,
          'moon_phase': 0.319771,
          'wind_gust_spd': 11.703125,
          'snow_depth': 0,
          'clouds': 89,
          'ts': 1625198460,
          'sunrise_ts': 1625220075,
          'app_min_temp': 22,
          'wind_spd': 3.770713,
          'pop': 15,
          'wind_cdir_full': 'south-southwest',
          'slp': 1016.5,
          'moon_phase_lunation': 0.76,
          'valid_date': '2021-07-02',
          'app_max_temp': 33.6,
          'vis': 24.128,
          'dewpt': 19.5,
          'snow': 0,
          'uv': 4.8870835,
          'weather': {
            'icon': 'c04d',
            'code': 804,
            'description': 'Overcast clouds'
          },
          'wind_dir': 197,
          'max_dhi': null,
          'clouds_hi': 59,
          'precip': 0.4375,
          'low_temp': 22.2,
          'max_temp': 32.7,
          'moonset_ts': 1625252553,
          'datetime': '2021-07-02',
          'temp': 26.4,
          'min_temp': 21.2,
          'clouds_mid': 0,
          'clouds_low': 39
        },
        {
          'moonrise_ts': 1625291549,
          'wind_cdir': 'S',
          'rh': 68,
          'pres': 1002.9375,
          'high_temp': 35.3,
          'sunset_ts': 1625358885,
          'ozone': 307.0625,
          'moon_phase': 0.231902,
          'wind_gust_spd': 9.609375,
          'snow_depth': 0,
          'clouds': 49,
          'ts': 1625284860,
          'sunrise_ts': 1625306504,
          'app_min_temp': 22.9,
          'wind_spd': 2.9957197,
          'pop': 20,
          'wind_cdir_full': 'south',
          'slp': 1016.375,
          'moon_phase_lunation': 0.8,
          'valid_date': '2021-07-03',
          'app_max_temp': 35.8,
          'vis': 24.126,
          'dewpt': 20.6,
          'snow': 0,
          'uv': 6.732844,
          'weather': {
            'icon': 'c03d',
            'code': 803,
            'description': 'Broken clouds'
          },
          'wind_dir': 182,
          'max_dhi': null,
          'clouds_hi': 21,
          'precip': 0.0625,
          'low_temp': 23.9,
          'max_temp': 34,
          'moonset_ts': 1625342377,
          'datetime': '2021-07-03',
          'temp': 27.6,
          'min_temp': 22.1,
          'clouds_mid': 1,
          'clouds_low': 39
        },
        {
          'moonrise_ts': 1625379516,
          'wind_cdir': 'SW',
          'rh': 64,
          'pres': 1001.5,
          'high_temp': 33.9,
          'sunset_ts': 1625445275,
          'ozone': 306.25,
          'moon_phase': 0.154485,
          'wind_gust_spd': 8.7109375,
          'snow_depth': 0,
          'clouds': 83,
          'ts': 1625371260,
          'sunrise_ts': 1625392933,
          'app_min_temp': 24.6,
          'wind_spd': 3.2013435,
          'pop': 20,
          'wind_cdir_full': 'southwest',
          'slp': 1015,
          'moon_phase_lunation': 0.83,
          'valid_date': '2021-07-04',
          'app_max_temp': 36.3,
          'vis': 24.128,
          'dewpt': 20.2,
          'snow': 0,
          'uv': 3.2554023,
          'weather': {
            'icon': 'c04d',
            'code': 804,
            'description': 'Overcast clouds'
          },
          'wind_dir': 218,
          'max_dhi': null,
          'clouds_hi': 82,
          'precip': 0.0625,
          'low_temp': 22,
          'max_temp': 35.4,
          'moonset_ts': 1625432237,
          'datetime': '2021-07-04',
          'temp': 28.6,
          'min_temp': 23.6,
          'clouds_mid': 2,
          'clouds_low': 39
        },
        {
          'moonrise_ts': 1625467615,
          'wind_cdir': 'SW',
          'rh': 53,
          'pres': 1001.25,
          'high_temp': 33.3,
          'sunset_ts': 1625531664,
          'ozone': 299,
          'moon_phase': 0.0901316,
          'wind_gust_spd': 11.3125,
          'snow_depth': 0,
          'clouds': 90,
          'ts': 1625457660,
          'sunrise_ts': 1625479364,
          'app_min_temp': 26.8,
          'wind_spd': 3.687979,
          'pop': 0,
          'wind_cdir_full': 'southwest',
          'slp': 1014.75,
          'moon_phase_lunation': 0.86,
          'valid_date': '2021-07-05',
          'app_max_temp': 36.4,
          'vis': 24.128,
          'dewpt': 19.2,
          'snow': 0,
          'uv': 3.2607503,
          'weather': {
            'icon': 'c04d',
            'code': 804,
            'description': 'Overcast clouds'
          },
          'wind_dir': 225,
          'max_dhi': null,
          'clouds_hi': 90,
          'precip': 0,
          'low_temp': 25.1,
          'max_temp': 34.4,
          'moonset_ts': 1625522123,
          'datetime': '2021-07-05',
          'temp': 30.4,
          'min_temp': 22.9,
          'clouds_mid': 2,
          'clouds_low': 36
        },
        {
          'moonrise_ts': 1625555921,
          'wind_cdir': 'SW',
          'rh': 66,
          'pres': 1002.25,
          'high_temp': 30.8,
          'sunset_ts': 1625618051,
          'ozone': 294.125,
          'moon_phase': 0.0414887,
          'wind_gust_spd': 11.09375,
          'snow_depth': 0,
          'clouds': 73,
          'ts': 1625544060,
          'sunrise_ts': 1625565796,
          'app_min_temp': 23.7,
          'wind_spd': 4.4529505,
          'pop': 45,
          'wind_cdir_full': 'southwest',
          'slp': 1015.5,
          'moon_phase_lunation': 0.9,
          'valid_date': '2021-07-06',
          'app_max_temp': 34.5,
          'vis': 24.128,
          'dewpt': 19.6,
          'snow': 0,
          'uv': 3.2599194,
          'weather': {
            'icon': 'c04d',
            'code': 804,
            'description': 'Overcast clouds'
          },
          'wind_dir': 229,
          'max_dhi': null,
          'clouds_hi': 67,
          'precip': 2.375,
          'low_temp': 22.3,
          'max_temp': 34,
          'moonset_ts': 1625611979,
          'datetime': '2021-07-06',
          'temp': 28.4,
          'min_temp': 22.9,
          'clouds_mid': 25,
          'clouds_low': 8
        },
        {
          'moonrise_ts': 1625644514,
          'wind_cdir': 'W',
          'rh': 67,
          'pres': 1005,
          'high_temp': 33.3,
          'sunset_ts': 1625704437,
          'ozone': 301.125,
          'moon_phase': 0.0110254,
          'wind_gust_spd': 13.03125,
          'snow_depth': 0,
          'clouds': 100,
          'ts': 1625630460,
          'sunrise_ts': 1625652230,
          'app_min_temp': 23.7,
          'wind_spd': 4.7301693,
          'pop': 10,
          'wind_cdir_full': 'west',
          'slp': 1018.5,
          'moon_phase_lunation': 0.93,
          'valid_date': '2021-07-07',
          'app_max_temp': 28.4,
          'vis': 24.128,
          'dewpt': 18.5,
          'snow': 0,
          'uv': 3.249201,
          'weather': {
            'icon': 'c04d',
            'code': 804,
            'description': 'Overcast clouds'
          },
          'wind_dir': 264,
          'max_dhi': null,
          'clouds_hi': 100,
          'precip': 0.375,
          'low_temp': 21.9,
          'max_temp': 28.1,
          'moonset_ts': 1625701713,
          'datetime': '2021-07-07',
          'temp': 25.5,
          'min_temp': 21.9,
          'clouds_mid': 97,
          'clouds_low': 3
        },
        {
          'moonrise_ts': 1625733460,
          'wind_cdir': 'WSW',
          'rh': 52,
          'pres': 1002.5,
          'high_temp': 33.3,
          'sunset_ts': 1625790821,
          'ozone': 311.25,
          'moon_phase': 0.000721845,
          'wind_gust_spd': 7.796875,
          'snow_depth': 0,
          'clouds': 70,
          'ts': 1625716860,
          'sunrise_ts': 1625738664,
          'app_min_temp': 21.9,
          'wind_spd': 3.0812862,
          'pop': 0,
          'wind_cdir_full': 'west-southwest',
          'slp': 1016,
          'moon_phase_lunation': 0.96,
          'valid_date': '2021-07-08',
          'app_max_temp': 34,
          'vis': 24.128,
          'dewpt': 16.3,
          'snow': 0,
          'uv': 3.8861957,
          'weather': {
            'icon': 'c03d',
            'code': 803,
            'description': 'Broken clouds'
          },
          'wind_dir': 251,
          'max_dhi': null,
          'clouds_hi': 59,
          'precip': 0,
          'low_temp': 22.1,
          'max_temp': 33.3,
          'moonset_ts': 1625791219,
          'datetime': '2021-07-08',
          'temp': 27.6,
          'min_temp': 22,
          'clouds_mid': 22,
          'clouds_low': 46
        },
        {
          'moonrise_ts': 1625822795,
          'wind_cdir': 'SW',
          'rh': 64,
          'pres': 1004,
          'high_temp': 31.5,
          'sunset_ts': 1625877203,
          'ozone': 313.875,
          'moon_phase': 0.000721845,
          'wind_gust_spd': 7.0976562,
          'snow_depth': 0,
          'clouds': 93,
          'ts': 1625803260,
          'sunrise_ts': 1625825099,
          'app_min_temp': 25.6,
          'wind_spd': 2.9850118,
          'pop': 15,
          'wind_cdir_full': 'southwest',
          'slp': 1017.5,
          'moon_phase_lunation': 1,
          'valid_date': '2021-07-09',
          'app_max_temp': 33.4,
          'vis': 17.272,
          'dewpt': 20.4,
          'snow': 0,
          'uv': 3.2372878,
          'weather': {
            'icon': 'c04d',
            'code': 804,
            'description': 'Overcast clouds'
          },
          'wind_dir': 222,
          'max_dhi': null,
          'clouds_hi': 93,
          'precip': 0.5625,
          'low_temp': 22.2,
          'max_temp': 31.5,
          'moonset_ts': 1625877619,
          'datetime': '2021-07-09',
          'temp': 28,
          'min_temp': 22.2,
          'clouds_mid': 52,
          'clouds_low': 38
        },
        {
          'moonrise_ts': 1625912497,
          'wind_cdir': 'SSW',
          'rh': 70,
          'pres': 1007.5,
          'high_temp': 33.3,
          'sunset_ts': 1625963583,
          'ozone': 306.25,
          'moon_phase': 0.0117799,
          'wind_gust_spd': 8,
          'snow_depth': 0,
          'clouds': 40,
          'ts': 1625889660,
          'sunrise_ts': 1625911535,
          'app_min_temp': 23,
          'wind_spd': 2.8500557,
          'pop': 70,
          'wind_cdir_full': 'south-southwest',
          'slp': 1021,
          'moon_phase_lunation': 0.03,
          'valid_date': '2021-07-10',
          'app_max_temp': 35.7,
          'vis': 24.128,
          'dewpt': 20.7,
          'snow': 0,
          'uv': 7.8572807,
          'weather': {
            'icon': 't02d',
            'code': 201,
            'description': 'Thunderstorm with rain'
          },
          'wind_dir': 197,
          'max_dhi': null,
          'clouds_hi': 22,
          'precip': 7.125,
          'low_temp': 23.1,
          'max_temp': 33.3,
          'moonset_ts': 1625966820,
          'datetime': '2021-07-10',
          'temp': 27.8,
          'min_temp': 22.3,
          'clouds_mid': 0,
          'clouds_low': 18
        }
      ],
      'city_name': 'Raleigh',
      'lon': '-78.63861',
      'timezone': 'America/New_York',
      'lat': '35.7721',
      'country_code': 'US',
      'state_code': 'NC'
    };
    
    const data = mungeWeather(dataToMunge);

    expect(data).toEqual(expectation);
  });
});
