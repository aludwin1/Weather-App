const http = require('http');
const api = require('./api.json');
const openWeatherKey = api.weatherAPI;
const openWeatherURL = `http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=${openWeatherKey}`;

const request = http.get(openWeatherURL, response => {
  if(response.statusCode === 200) {
    let body = '';

    response.on('data', data => {
      body += data.toString();
    });

    response.on('end', () => {
      try {
        const weather = JSON.parse(body);
        console.log(weather);
      } catch (error) {
        console.error(error.message);
      }

    });
  }

});
