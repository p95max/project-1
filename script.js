let money = prompt ("Yours month expences?");
let time = prompt("Enter date");

let appData = {
    budget: money,
    timeData: time,
    expences: {},
    optionalExpences: {},
    income: [],
    savings: false
     };

let a1 = prompt ("Enter yours important expences stage in budget "),
    a2 =  prompt ("How many will it?"),
    a3 = prompt ("Enter yours important expences stage in budget "),
    a4 =  prompt ("How many will it?");

appData.expences [a1] = a2;
appData.expences [a3] = a4;

alert (appData.budget / 30);