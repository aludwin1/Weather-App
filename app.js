const api = require('./api.json');
const weather = require('./weather');

const zipCode = process.argv[2];
const openWeatherKey = api.weatherAPI;
const openWeatherURL = `http://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&units=imperial&APPID=${openWeatherKey}`;

weather.get(openWeatherURL);


