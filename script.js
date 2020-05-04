
/*
let options = {
    width: 1024,
    height: 1024,
    name: "test"
};

console.log(options.name);
options.bool = false;
options.colors = {
    border: "black",
    bg: "red"
};

delete options.bool;

console.log(options);

for (let key in options) {
    console.log('Options ' + key +  ' means ' + 
    options[key]);
}
console.log(Object.keys(options).length);
 ------------------------------------------------------
//                      МАССИВЫ
 let arr = ["first", 2, 3, "fourth", 5];

arr.pop();          // удалить крайний элемент с массива
arr.push("5");      // добавить элемент в массив
arr.shift();        // удалить первый элемент с массива
arr.unshift("1");   // добавить элемент в массив

arr[99] = 99;       // присвоить элемент в массиве №99
console.log(arr.length);

for (let i = 0; i < arr.length; i++) { // вывести данние в строку
     console.log(arr[i]);
}

arr.forEach(function(item, i, mass) {
    console.log(i + ':' + item + "(massive: " + mass + ')');
});

console.log(arr);

let mass = [1, 3, 4, 6, 7];  // перебор данных массива

for (let key of mass) {
    console.log (key);
}


let ans = prompt("", ""), // получие данных от пользователя в консоль
    arr = [];

arr = ans.split(',');
console.log(arr);



let arr = ["aaw", "zzz", "pp", "rqa"],
  i = arr.join(',');

console.log(i);   // вывод строки через запятую



let arr = [1,15,4],
  i = arr.sort(сompareNum);   // вывод строки по алфавиту

function compareNum (a,b) { // вывод строки по счёту
    return a-b;
}

console.log(arr); 

-------------------------------------------------------
ОПП


let soldier = {
    health: 400,
    armor: 100
};


let john = {
    health: 100
};

john.__proto__ = soldier;

console.log(john);
console.log(john.armor);

'use strict';

let money, time;

function start() {
    money = +prompt ("Your month budget?", "");
    time = prompt ("Enter data - YYYY-MM-DD", "");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt ("Ваш бюджет на месяц?", ""); 
    }

}
start();

let appData = {
    budget: money,
    timeData: time,
    expences: {},
    optionalExpences: {},
    income: [],
    savings: true,
chooseExpences: function() {
            for (let i = 0; i < 2; i++) {
                let a = prompt ("Enter your important buying", ""),
                    b = prompt ("How much it will?", "");
            }
                if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
                appData.expenses(a = b);
                } else {
                    i--;
                }  
    },

detectDayBudget: function() {
         appData.moneyPerDay = (appData.budget / 30).toFixed();
         alert("Daily budget" + appData.moneyPerDay);
     },

detectLevel:  function() {
    function detectLevel() {                                              
        if (appData.moneyPerDay < 100) {
            console.log ("Its your minimal level of income");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log ("Its your avaragal level of income");
        } else if (appData.moneyPerDay > 2000) {
            console.log ("Its your max level of income");
        } else {
            console.log ("Something wrong");
        }}

},
checkSaving: function() {
    if  (appData.savings == true) {
        let save = +prompt("How many savings do you have"),
            percent = +prompt("How big %");
    
        appData.monthIncome = save/100/12*percent;
        alert("Yours deposit month income: " + appData.
          monthIncome);
      }
},

 chooseOptExpenses: function () {
        for (let i = 1; i <= 3; i++) {
            let questionOptExpenses = prompt("Статья необязательных расходов?");
            appData.optionalExpenses[i] = questionOptExpenses;
            console.log(appData.optionalExpenses);
        }
    }, 

chooseIncome: function() {
    let items = prompt('What is additionl exp? (write it', '');
    appData.income = items.split(',');
    appData.income.push(prompt('Any additional incomes?'));
    appData.income.sort();
}
}; 

*/