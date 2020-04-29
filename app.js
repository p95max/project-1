'use strict'; // без испраления ошибок (старий тип)


let person = {     // обьект 
    name: "John",
    age: 25,
    isMarried: false
};

console.log(person.name); // обращение к обьекту

//      #      0             1             3         
let arr = [`plum.png`, 'orange.jpg', 'apple.bmp']; // масив данных
console.log(arr[0]);

// alert("hello");  // вывод сообщения в окне

// confirm ("Are you here?"); // вывод вопроса с ответами

// let answer = confirm ("Are you here?"); // вывод ответа в консоль
// console.log(answer);

//let answer = +prompt ("Did you confirm 18 age?" , 'Yep'); // опрос

//console.log(typeof(answer)); // определить тип данных

//console.log("arr" + " " + "object");

let incr=10,
decr=10;


console.log(incr++); 
console.log(decr--);

console.log(5%2);
console.log("2" === 2);

let isChecked = true,
isClose = true;

console.log(isChecked && isClose);