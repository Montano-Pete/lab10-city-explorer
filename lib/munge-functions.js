function mungeLocation(location) {

  const desiredLocation = location[0];

  return {
    formatted_query: desiredLocation.display_name,
    latitude: desiredLocation.lat,
    longitude: desiredLocation.lon
  };
}

module.exports = {
  mungeLocation
};