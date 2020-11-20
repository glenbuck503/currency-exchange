import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyConverter from './currency-service.js';



function getRate(response) {
  
  if (response.conversion_rates){
    $(".output").html(`The current exchange rate for BGN is ${response.conversion_rates.BGN * 4} is  lev.`);
  } else {
    $(".output").html(`${response}`);
  }

  
}


async function apiRate() {
  const response = await CurrencyConverter.getUSD();
  getRate(response);
}

$(document).ready(function () {

  $("#exchange").click(function () {
    event.preventDefault();
    let userInput = parseInt($("#userDollar").val());
    
    $(".output").html(userInput);
    // apiRate();
   

    $("#convert-button2").click(function () {
      event.preventDefault();
      apiRate();
    });
  });
});


// $(document).ready(function() {
//   $('#weatherLocation').click(function() {
//     let userInput = parseInt($("input#userDollar").val());
//     clearFields();
//     makeApiCall(city);
//   });
// });




// function getRate(response) {
//   if (response.conversion_rates){
//     $("#currency-output").html(`The current exchange rate for BGN is ${response.conversion_rates.BGN} lev.`);
//   } else {
//     $("#currency-output").html(`${response}`);
//   }
  
// }





































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