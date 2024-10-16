const fahrenheitTemp = prompt(`Enter a Temperature in Fahrenheit for us to convert to Celcius`);
const feelsLike = describeTemperature(fahrenheitTemp);
const celsiusTemp = convertToCelsius(fahrenheitTemp);
function convertToCelsius(celsiusTemp){
  return (fahrenheitTemp-32)*(5/9)
};
function describeTemperature(feelsLike) {
  if (fahrenheitTemp < 32) {
    return `very cold`;
  } else if (fahrenheitTemp < 64) {
    return `cold`; 
  } else if (fahrenheitTemp < 86) {
    return `warm`; 
  } else if (fahrenheitTemp < 100) {
    return `hot`; 
  } else {
      return `very hot`;
    };
};

alert(`You entered ${fahrenheitTemp} which converts to ${celsiusTemp} which feels ${feelsLike}`);