'use strict'

// let answer = prompt('How old you live?');
// console.log('You die in ' + (+answer + 5) + ' years old');

var money = +prompt("one mounth budget");
var time = prompt("please inpurdata YYYY-MM_DD ");
var firstQeustionItemExpenditure = prompt("Input item of expenditure ");
var firstAnswerItemExpenditure = +prompt("Input cost  " + firstQeustionItemExpenditure);
var secondQeustionItemExpenditure = prompt("Input item of expenditure ");
var secondAnswerItemExpenditure = +prompt("Input cost  " + secondQeustionItemExpenditure);

var expenses = {
    namefirstQeustionItemExpenditure : firstQeustionItemExpenditure,
    costfirstAnswerItemExpenditure : firstAnswerItemExpenditure,
    namesecondQeustionItemExpenditure : secondQeustionItemExpenditure,
    costsecondAnswerItemExpenditure : secondAnswerItemExpenditure
};
console.log('money for each day = ' + (money - expenses.costfirstAnswerItemExpenditure- expenses.costsecondAnswerItemExpenditure)/30);

   console.log(expenses.costfirstAnswerItemExpenditure);
let appData = {
 budget : money,
 timeData : time,
 expens : expenses, 
 optionalExpenses : null,
 income : null,
 saving : false
};

// console.log(leftBoresweWidth);

// var leftBoresweWidth = 1;

// let topBorder = 2;

// const pi = 3.14;
// console.log(leftBoresweWidth);
// console.log(topBorder);

//  let person = {
//      name : "Petya",
//      age : 25
//  };

//  console.log(person.age);
//  var massss = ["call", 'life'];
// console.log(massss[1]);


// console.log('prove', '2' == 2, '2'=== 2, 2 === 1);  
