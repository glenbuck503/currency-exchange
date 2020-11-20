import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyConverter from './currency-service.js';

// function clearFields() {
//   $('#location').val("");
//   $('.showErrors').text("");
//   $('.eurosFromDollars').text("");
 
// }

// function getElements(response) {
//   if (response.main) {
//     $('.eurosFromDollars').text(`Your inputted amount from USD to EUR is ${response.name} is ${response.conversion_rates.humidity}%`);
//   } else {
//     $('.showErrors').text(`There was an error: ${response}`);
//   }
// }

// async function makeApiCall() {
//   const response = await WeatherService.getWeather(city);
//   getElements(response);
// }


function outputUSD(response) {
  if (response.conversion_rates){
    $("#USDoutput").html(`Conversion ${response.conversion_rates.USD} degrees.`);
  } else {
    $("#USDoutput").html(`${response}`);
  }
}

async function apiCallConvert() {
  const response = await CurrencyConverter.getUsdEur();
  outputUSD(response);
}

$(document).ready(function() {
  // $('#USDtoEUR').click(function() {
  //   let euros = parseInt($("#dollarToEuro").val());
  //   clearFields();
  //   makeApiCall(city);
  // });
  $("#USDtoEUR").click(function () {
    event.preventDefault();
    apiCallConvert();
  });
});

























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