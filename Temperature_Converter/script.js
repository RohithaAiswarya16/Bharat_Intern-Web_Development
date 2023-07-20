function convertTemperature() {
    var temperatureInput = document.getElementById("temperature");
    var fromUnitInput = document.getElementById("fromUnit");
    var toUnitInput = document.getElementById("toUnit");
    var convertedOutput = document.getElementById("converted");
  
    var temperature = parseFloat(temperatureInput.value);
    var fromUnit = fromUnitInput.value;
    var toUnit = toUnitInput.value;
  
    if (isNaN(temperature)) {
      convertedOutput.value = "";
      return;
    }
  
    if (fromUnit === toUnit) {
      convertedOutput.value = temperature.toFixed(2);
      return;
    }
  
    var convertedTemperature = 0;
  
    if (fromUnit === "celsius") {
      if (toUnit === "fahrenheit") {
        convertedTemperature = convertCelsiusToFahrenheit(temperature);
      } else if (toUnit === "kelvin") {
        convertedTemperature = convertCelsiusToKelvin(temperature);
      }
    } else if (fromUnit === "fahrenheit") {
      if (toUnit === "celsius") {
        convertedTemperature = convertFahrenheitToCelsius(temperature);
      } else if (toUnit === "kelvin") {
        convertedTemperature = convertFahrenheitToKelvin(temperature);
      }
    } else if (fromUnit === "kelvin") {
      if (toUnit === "celsius") {
        convertedTemperature = convertKelvinToCelsius(temperature);
      } else if (toUnit === "fahrenheit") {
        convertedTemperature = convertKelvinToFahrenheit(temperature);
      }
    }
  
    convertedOutput.value = convertedTemperature.toFixed(2);
  }
  
  function convertCelsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  }
  
  function convertCelsiusToKelvin(celsius) {
    return celsius + 273.15;
  }
  
  function convertFahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
  }
  
  function convertFahrenheitToKelvin(fahrenheit) {
    return (fahrenheit + 459.67) * 5/9;
  }
  
  function convertKelvinToCelsius(kelvin) {
    return kelvin - 273.15;
  }
  
  function convertKelvinToFahrenheit(kelvin) {
    return (kelvin * 9/5) - 459.67;
  }
  