const api = require('./api.json');
const weather = require('./weather');

const openWeatherKey = api.weatherAPI;
let openWeatherURL = `&units=imperial&APPID=${openWeatherKey}`;
if(process.argv.length === 3) {
  openWeatherURL = `zip=${process.argv[2]},us` + openWeatherURL;
} else if (process.argv.length > 3) {
  let cityName = process.argv.slice(2, process.argv.length - 1).join(' ');
  let countryCode = process.argv[process.argv.length - 1];
  openWeatherURL = `q=${cityName},${countryCode}` + openWeatherURL;
}

weather.get(openWeatherURL);
