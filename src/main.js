
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyConverter from './currency-service.js';

function getRateBGN(response) {
  let name = parseFloat($("#userDollar").val());
  if (response.conversion_rates){
    $(".output").html(`The exchange rate from USD to BGN is ${response.conversion_rates.BGN * name} lev.`);
  } else {
    $(".outputErr").html(`There was an error: ${response.message}`);
  }
}

function getRateNOK(response) {
  let norw = parseFloat($("#userDollar2").val());
  if (response.conversion_rates){
    $(".output2").html(`The exchange rate from USD to NOK is ${response.conversion_rates.NOK * norw} Krone.`);
  } else {
    $(".output2").html(`${response.error}`);
  }
}

function getRateRUB(response) {
  let rub = parseFloat($("#userDollar3").val());
  if (response.conversion_rates){
    $(".output3").html(`The exchange rate from USD to RUB is ${response.conversion_rates.RUB * rub} Ruble.`);
  } else {
    $(".output3").html(`${response.error}`);
  }
}

function getRateSEK(response) {
  let sek = parseFloat($("#userDollar4").val());
  if (response.conversion_rates){
    $(".output4").html(`The exchange rate from USD to SEK is ${response.conversion_rates.SEK * sek} Krona.`);
  } else {
    $(".output4").html(`${response}`);
  }
}

function getRateZAR(response) {
  let zar = parseFloat($("#userDollar5").val());
  if (response.conversion_rates){
    $(".output5").html(`The exchange rate from USD to ZAR is ${response.conversion_rates.ZAR * zar} Rand.`);
  } else {
    $(".output5").html(`Error :${response.status}`);
  }
}

function getRateError(response) {
  let fail = parseFloat($("#userDollar6").val());
  if (response.conversion_rates && fail > 0){
    $(".output6").html(`Sorry, we do not convert Panamanian Balboa at this time. Your ${fail} dollars will not be converted as of now.`);
  } else {
    $(".showErrors").html(`There was an error: ${response.error}`);
  }
}



async function apiRateBGN() {
  const response = await CurrencyConverter.getUSD();
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

async function apiRateErr() {
  const response = await CurrencyConverter.getUSD();
  getRateError(response)
}

$(document).ready(function () {
  $("#exchange").click(function () {
    event.preventDefault();
    let userInput = parseFloat($("#userDollar").val());
    $(".output").html(userInput);

    $("#convert-button1").click(function () {
      event.preventDefault();
      apiRateBGN();
    });
  });

  $("#exchange2").click(function () {
    event.preventDefault();
    let userInput2 = parseFloat($("#userDollar2").val());
    $(".output2").html(userInput2);
    
    $("#convert-button2").click(function () {
      event.preventDefault();
      apiRateNOK();
    });
  });

  $("#exchange3").click(function () {
    event.preventDefault();
    let userInput3 = parseFloat($("#userDollar3").val());
    $(".output3").html(userInput3);
    
    $("#convert-button3").click(function () {
      event.preventDefault();
      apiRateRUB();
    });
  });

  $("#exchange4").click(function () {
    event.preventDefault();
    let userInput4 = parseFloat($("#userDollar4").val());
    $(".output4").html(userInput4);
    
    $("#convert-button4").click(function () {
      event.preventDefault();
      apiRateSEK();
    });
  });

  $("#exchange5").click(function () {
    event.preventDefault();
    let userInput5 = parseFloat($("#userDollar5").val());
    $(".output5").html(userInput5);
    
    $("#convert-button5").click(function () {
      event.preventDefault();
      apiRateZAR();
    });
  });

  $("#exchange6").click(function () {
    event.preventDefault();
    let userInput6 = parseFloat($("#userDollar6").val());
    $(".output6").html(userInput6);
    
    $("#convert-button6").click(function () {
      event.preventDefault();
      apiRateErr();
    });
  });
});













































