

if (num < 49) {
    console.log ("Wrong")
} else if (num>100) {
    console.log("Too much")  // условие несокращенное
} else {
    console.log("correct")
}

(num == 50) ? console.log('Correct') : console.log ('Wrong'); // сокращенное условие


switch (num) {
        case num < 49:
           console.log("Wrong");
        break;
        case num > 100: 
           console.log("Too much");
        break;
        case num > 80:
           console.log("Too much");
        break;
        case 50:
           console.log("correct");
           break;

        default:
            console.log ("Something wrong");
            break;

}

let num = 50;
//while (num < 55) {
//console.log(num);
//num++;
//} 

do {
  console.log(num);
  num++;
}
while (num < 55);

for (let i =1; i < 8; i++) {
   if (i==6) {
      continue
   }
   console.log(i)
}