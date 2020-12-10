import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyConverter from './currency-service.js';

function getRateBGN(response) {
  let bgn = parseFloat($("#userDollar").val());
  if (response.conversion_rates){
    $(".output").html(`The exchange rate from USD to BGN is ${response.conversion_rates.BGN * bgn} lev.`);
  } else {
    $(".codeError").html(`This currency is not supported at this time. Error :${response['error-type']}`);
  }
}

function getRateNOK(response) {
  let norw = parseFloat($("#userDollar2").val());
  if (response.conversion_rates){
    $(".output2").html(`The exchange rate from USD to NOK is ${response.conversion_rates.NOK * norw} Krone.`);
  } else {
    $(".codeError2").html(`This currency is not supported at this time. Error :${response['error-type']}`);
    $(".fetchError2").html(`There was an error :${response}`);
  }
}

function getRateRUB(response) {
  let rub = parseFloat($("#userDollar3").val());
  if (response.conversion_rates){
    $(".output3").html(`The exchange rate from USD to RUB is ${response.conversion_rates.RUB * rub} Ruble.`);
  } else {
    $(".codeError3").html(`This currency is not supported at this time. Error :${response['error-type']}`);
    $(".fetchError3").html(`There was an error :${response}`);
    
  }
}

function getRateSEK(response) {
  let sek = parseFloat($("#userDollar4").val());
  if (response.conversion_rates){
    $(".output4").html(`The exchange rate from USD to SEK is ${response.conversion_rates.SEK * sek} Krona.`);
  } else {
    $(".codeError4").html(`This currency is not supported at this time. Error :${response['error-type']}`);
    $(".fetchError4").html(`There was an error :${response}`);
  }
}

function getRateZAR(response) {
  let zar = parseFloat($("#userDollar5").val());
  if (response.conversion_rates){
    $(".output5").html(`The exchange rate from USD to ZAR is ${response.conversion_rates.ZAR * zar} Rand.`);
  } else{
    $(".codeError5").html(`This currency is not supported at this time. Error :${response['error-type']}`);
    $(".fetchError5").html(`There was an error in the API call :${response}`);
  }
}

async function apiRateBGN() {
  const response = await CurrencyConverter.getUSD();
  if (response === typeof Error) {
  $(".fetchError").html(`There was an error :${response}`);
  }
  getRateBGN(response);
}

async function apiRateNOK() {
  const response = await CurrencyConverter.getUSD();
  getRateNOK(response);
}

async function apiRateRUB() {
  const response = await CurrencyConverter.getUSD();
  getRateRUB(response);
}

async function apiRateSEK() {
  const response = await CurrencyConverter.getUSD();
  getRateSEK(response);
}

async function apiRateZAR() {
  const response = await CurrencyConverter.getUSD();
  getRateZAR(response);
}

$(document).ready(function () {
  $("#exchange").click(function () {
    event.preventDefault();
   
    $("#convert-button1").click(function () {
      event.preventDefault();
      apiRateBGN();
    });
  });

  $("#exchange2").click(function () {
    event.preventDefault();
    $("#convert-button2").click(function () {
      event.preventDefault();
      apiRateNOK();
    });
  });

  $("#exchange3").click(function () {
    event.preventDefault();
    $("#convert-button3").click(function () {
      event.preventDefault();
      apiRateRUB();
    });
  });

  $("#exchange4").click(function () {
    event.preventDefault();
    $("#convert-button4").click(function () {
      event.preventDefault();
      apiRateSEK();
    });
  });

  $("#exchange5").click(function () {
    event.preventDefault();
    $("#convert-button5").click(function () {
      event.preventDefault();
      apiRateZAR();
      $(".codeError5").show();
      $(".fetchError5").show();
    });
  });
});
























