import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyConverter from './currency-service.js';


function outputMars(response) {
  if (response.conversion_rates){
    $("#mars-output").html(`Median temperature on Mars is ${response.conversion_rates.EUR} degrees.`);
  } else {
    $("#mars-output").html(`${response}`);
  }
}


async function apiMarsWeather() {
  const response = await CurrencyConverter.getUsdEur();
  outputMars(response);
}

$(document).ready(function () {

  $("#mars-weather").click(function () {
    event.preventDefault();
    apiMarsWeather();
  });
});














// $(document).ready(function() {
//   $('#weatherLocation').click(function() {
//     let userInput = parseInt($("input#userDollar").val());
//     clearFields();
//     makeApiCall(city);
//   });
// });
























// $(document).ready(function() {
//   $('#weatherLocation').click(function() {
//     let city = $('#location').val();
//     clearFields();
//     let promise = WeatherService.getWeather(city);
//     promise.then(function(response) {
//       const body = JSON.parse(response);
//       $('.showHumidity').text(`The humidity in ${city} is ${body.main.humidity}%`);
//       $('.showTemp').text(`The temperature in Kelvins is ${body.main.temp} degrees.`);
//       $('.showWindSpeed').text(`The wind speed is ${body.wind.speed} mph.`);
//     }, function(error) {
//       $('.showErrors').text(`There was an error processing your request: ${error}`);
//     });
//   });


















//   $('#zipCode').click(function () {
//     $(this).data('clicked', true);
//     let zip = $('#zipcode').val();
//     clearFields();
//     let promise = WeatherServiceZip.getWeather(zip);
//     promise.then(function(response) {
//       const body = JSON.parse(response);
//       $('.showHumidity').text(`The humidity in ${zip} is ${body.main.humidity}%`);
//       $('.showTemp').text(`The temperature in Kelvins is ${body.main.temp} degrees.`);
//       $('.showWindSpeed').text(`The wind speed is ${body.wind.speed} mph.`);
//     }, function(error) {
//       $('.showErrors').text(`There was an error processing your request: ${error}`);
//     });
//   });
// });