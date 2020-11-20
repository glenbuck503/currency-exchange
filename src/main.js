import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyConverter from './currency-service.js';

function getRateBGN(response) {
  let name = parseInt($("#userDollar").val());
  if (response.conversion_rates){
    $(".output").html(`The exchange rate from USD to BGN is ${response.conversion_rates.BGN * name} lev.`);
  } else {
    $(".output").html(`${response}`);
  }
}

function getRateNOK(response) {
  let norw = parseInt($("#userDollar2").val());
  if (response.conversion_rates){
    $(".output2").html(`The exchange rate from USD to NOK is ${response.conversion_rates.NOK * norw} Krone.`);
  } else {
    $(".output2").html(`${response}`);
  }
}

function getRateRUB(response) {
  let rub = parseInt($("#userDollar3").val());
  if (response.conversion_rates){
    $(".output3").html(`The exchange rate from USD to NOK is ${response.conversion_rates.RUB * rub} Krone.`);
  } else {
    $(".output3").html(`${response}`);
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

$(document).ready(function () {
  $("#exchange").click(function () {
    event.preventDefault();
    let userInput = parseInt($("#userDollar").val());
    $(".output").html(userInput);

    $("#convert-button1").click(function () {
      event.preventDefault();
      apiRateBGN();
    });
  });

  $("#exchange2").click(function () {
    event.preventDefault();
    let userInput2 = parseInt($("#userDollar2").val());
    $(".output2").html(userInput2);
    
    $("#convert-button2").click(function () {
      event.preventDefault();
      apiRateNOK();
    });
  });

  $("#exchange3").click(function () {
    event.preventDefault();
    let userInput3 = parseInt($("#userDollar3").val());
    $(".output3").html(userInput3);
    
    $("#convert-button3").click(function () {
      event.preventDefault();
      apiRateRUB();
    });
  });
});























































