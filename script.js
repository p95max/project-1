let money, time; 
function start () {
   money = +prompt ("Yours month expences?", '');
   time = prompt("Enter date",'');

   while(isNaN(money) || money == "" || money == null ) {
      money = +prompt ("Yours month expences?", '');
   }
}

start ();

let appData = {
    budget: money,
    timeData: time,
    expences: {},
    optionalExpences: {},
    income: [],
    savings: true
     };

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt ("Enter your important buying", ""),
            b = prompt ("How much it will?", "");
    
        if ( typeof(a)==='string' 
         && typeof(a) != null && typeof(b) != null 
         && a != "" && b != "" && a.length < 50) {
            appData.expenses(a = b);
        } else {
            i--;
        }
    
    };
}
chooseExpenses();

appData.moneyPerDay = (appData.budget / 30).toFixed();

alert ("Daily budget:" + appData.moneyPerDay);


function detectLevel() {                                                // Расчет уровня достатка
    if (appData.moneyPerDay < 100) {
        console.log ("Its your minimal level of income");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log ("Its your avaragal level of income");
    } else if (appData.moneyPerDay > 2000) {
        console.log ("Its your max level of income");
    } else {
        console.log ("Something wrong");
    }
}
detectLevel();


function checkSavings() {
  if  (appData.savings == true) {
    let save = +prompt("How many savings do you have"),
        percent = +prompt("How big %");

    appData.monthIncome = save/100/12*percent;
    alert("Yours deposit month income: " + appData.
      monthIncome);
  }
}

checkSavings();