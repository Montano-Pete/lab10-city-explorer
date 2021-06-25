function mungeLocation(location) {

  const desiredLocation = location[0];

  return {
    formatted_query: desiredLocation.display_name,
    latitude: desiredLocation.lat,
    longitude: desiredLocation.lon
  };
}

function mungeWeather(weather) {

  const forecasts = weather.data;

  const desiredWeather = forecasts.map(forecast => {
    return {
      forecast: forecast.weather.description,
      time: new Date(forecast.ts * 1000).toLocaleDateString('en-US', { weekday:'long', year: 'numeric', month: 'long', day: 'numeric' })
    };
  });

  return desiredWeather;
}

module.exports = {
  mungeLocation,
  mungeWeather
};