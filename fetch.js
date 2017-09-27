import fetch from './utils/fetchWrapper';

const fetchWeather = async () => {
  // Weather for Hamburg as JSON.
  const response = await fetch(
    'https://query.yahooapis.com/v1/public/yql?q=select%20item.condition.text%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Hamburg%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys'
  );
  return response.query.results.channel.item.condition.text;
};

export default fetchWeather;
