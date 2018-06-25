function printMessage(city, temperature) {
  console.log(`The temperature in ${city} is ${temperature}`);
};

function printError(error) {
  console.error(error.message);
};

module.exports = {
  printMessage: printMessage,
  printError: printError
};
