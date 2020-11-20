import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyConverter from './currency-service.js';


function getRate(response) {
  if (response.conversion_rates){
    $("#currency-output").html(`The current exchange rate for BGN is ${response.conversion_rates.USD} lev.`);
  } else {
    $("#currency-output").html(`${response}`);
  }
  
}


async function apiRate() {
  const response = await CurrencyConverter.getUsdEur();
  getRate(response);
}

$(document).ready(function () {

  $("#convert-button").click(function () {
    event.preventDefault();
    apiRate();
  });
});



// function getRate(response) {
//   if (response.conversion_rates){
//     $("#currency-output").html(`The current exchange rate for BGN is ${response.conversion_rates.BGN} lev.`);
//   } else {
//     $("#currency-output").html(`${response}`);
//   }
  
// }












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