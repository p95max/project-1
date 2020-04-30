let money = +prompt ("Yours month expences?");
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


for (let i = 0; 1 < 2; i++) {
   let a = prompt ("Enter yours important expences stage in budget "),
       b =  prompt ("How many will it?");
   if (typeof(a)) ==='string' && (typeof(a)) !=null && (typeof(b)) !=null
   && a != '' && b != '' && a.length < 50) {
      console.log ("done");
      appData.expences[a] = b;
   }  else {

   }
};

appData.moneyPerDay = appData.budget / 30;
alert ("Daily budget:" + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
   console.log("Minimal budget");
} else if (appData.moneyPerDay) > 100 && appData.moneyPerDay < 2000) {
   console.log("Avaragal budget");
} else if (appData.moneyPerDay > 2000) {
   console.log("Large budget");
}else {
   console.log("Wrong data");
}