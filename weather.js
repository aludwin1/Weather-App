const http = require('http');
const print = require('./print');
//Utimate goal is to type in the zip code and get the weather for your city like - "The temperature in Hopewell Junction is 60.0F"

//Print out temp details
//Print out error message
function get(query) {
  const request = http.get(query, response => {
    if(response.statusCode === 200) {
      let body = '';
      //Read the data
      response.on('data', data => {
        body += data.toString();
      });

      response.on('end', () => {
        try {
          const weather = JSON.parse(body);
          print.printMessage(weather.name, weather.main.temp);
        } catch (error) {
          console.error(error.message);
        }
      });
    } else {
      console.error(`There was an error finding the temperature for your zip code (${http.STATUS_CODES[response.statusCode]})`);
    }
  });
};

module.exports.get = get;

