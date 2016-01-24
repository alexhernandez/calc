// /*
// * Reckon v1.0.0
// * Copyright 2016, Alex Hernandez
// * https://github.com/alexhernandez/reckon
// *
// * Free to use under the MIT license.
// */

'use strict';

function ReckonInterface() {
  this.operator = 'hi';
}

// ReckonInterface.VERSION  = '1.0.0';

function getCalcDisplayTotal(){
  return document.getElementsByClassName("calc__total");
}
function getCalcTallyTotal(){
  return document.getElementsByClassName("calc__tally");
}

function joinCalcValue(value){
  var calcDisplay = getCalcDisplayTotal();
  var calcTally = getCalcTallyTotal();

  calcTally[0].innerHTML += value;
  return calcDisplay[0].innerHTML += value;
}

function setCalcDisplayTotal(value){
    if (value.target.className == 'calc__int') {
      return joinCalcValue(value.target.innerText);
    }
}

function clearDisplayTotal(value){
    if (value.target.className == 'calc__int') {
      return joinCalcValue(value.target.innerText);
    }
}




var test = new ReckonInterface();

document.getElementById("reckon").addEventListener("click", setCalcDisplayTotal);




