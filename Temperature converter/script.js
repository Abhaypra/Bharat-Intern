function temperatureConverter() {
  var celsius = document.getElementById("inputCelsius").value;
  var fahrenheit = (celsius * 9 / 5) + 32;
  var kelvin = celsius + 273.15;

  document.getElementById("outputFahrenheit").innerHTML = fahrenheit;
  document.getElementById("outputKelvin").innerHTML = kelvin;
}

  document.getElementById("convertButton").addEventListener("click", temperatureConverter);
  document.getElementById("resetButton").addEventListener("click", function() {
  document.getElementById("inputCelsius").value = "";
  document.getElementById("outputFahrenheit").innerHTML = "";
  document.getElementById("outputKelvin").innerHTML = "";
});
