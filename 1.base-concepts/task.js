"use strict";

// задача №1

function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b, 2) - 4*a*c;
  if(d === 0) {
    arr.push ((-b + Math.sqrt(d)) / (2*a));
  } else if(d > 0) {
   arr.push ((-b + Math.sqrt(d)) / (2*a));
   arr.push ((-b - Math.sqrt(d)) / (2*a));
  }
  return arr;
}


  //задачи №2

  function calculateTotalMortgage(percent, contribution, amount, date) {
    let totalAmount;
    let bodyCredit;
    let countMunth;
    let monthlyPayment;
    let now = new Date();
    
    if(isNaN(Number(percent)) === true) {
      return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
    } else if ( isNaN(Number(contribution)) === true ) {
      return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
    } else if ( isNaN(Number(amount)) === true) {
      return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
    }

    bodyCredit = amount-contribution;
    countMunth = date.getMonth() - now.getMonth() + (12 * (date.getFullYear() - now.getFullYear()));
    percent = (percent/100)/12; 
    monthlyPayment = bodyCredit * (percent + (percent / ((Math.pow((1 + percent),countMunth)) - 1)));
    totalAmount = (monthlyPayment*countMunth).toFixed(2);
    return Number(totalAmount);
  }
