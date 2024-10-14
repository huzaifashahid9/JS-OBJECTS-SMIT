// var num1 = 5;
// var num2 = 3;
// var sum = num1+num2;
// var sub = num1-num2;
// var multi = num1*num2;
// var divide = num1/num2;
// document.write(`Sum of ${num1} and ${num2} is ${sum}`+ "<br>");
// document.write(`Substract of ${num1} and ${num2} is ${sub}`+ "<br>");
// document.write(`Multiplication of ${num1} and ${num2} is ${multi}`+ "<br>");
// document.write(`Division of ${num1} and ${num2} is ${divide}`+ "<br>");

// var exam;
// var examp1= 5;
// var examp2= 5+1;
// var examp3= 6+7;
// var examp4= 13-1;
// var examp5= 12%3;
// document.write(`Value after variable declation is ${exam} <br>  initail Value :${examp1} <br> value after increment is ${examp2} <br> value after addition is : ${examp3} <br> value after decrement is : ${examp4} <br> the remainder is : ${examp5} <br>`);
// var cost = 600;
// document.write(`Total cost to buy five tickets to a movie is ${cost*5} <br>`);

// var table = 4;
// document.write(`Table of ${table} <br>`);
// for( i=1;i<=10;i++){
//     document.write(`${table} x ${i} = ${table*i} <br>`);
// }
var tempCelsi=25;
var tempFahren=70;
var celsittofahren = (tempCelsi*9/5)+32;
var fahrentocelsi = (tempFahren-32)*5/9;
document.write(`${tempCelsi}C is ${celsittofahren}f <br> ${tempFahren}f is ${fahrentocelsi}c <br> <br>`); 

var item1 = 650;
var item2 = 100;
var quantity1 = 3;
var quantity2 = 7;
var shipcharge = 100;
document.write(`Price of 1 item is ${item1} <br> Quantity of item 1 is ${quantity1} <br> Price of item 2 is ${item2} <br> Quantity of item 2 is ${quantity2} <br> Shipping charges is ${shipcharge} <br> <br> Total cost of your order is ${item1*3 + item2*7 + shipcharge} <br><br><br>`);

var totalMarks= 1100;
var obtainedMarks= 880;
var percentage = (obtainedMarks/totalMarks)*100;
document.write(`Total Marks : ${totalMarks} <br> Obtained Marks : ${obtainedMarks} <br> Percentage : ${percentage} <br><br> `);

var dollar = 17;
var saudiRiyal = 50;
var dollartoPkr = (dollar*104.80);
var sauditoPkr = (saudiRiyal*28);
document.write(`Total currency From Dollar to Pkr is ${dollartoPkr} <br> Total currency From Saudi Riyal to Pkr is ${sauditoPkr} <br><br><br>  `);

var temporary = 5;
document.write(`${temporary+5} <br> ${temporary*10} <br> ${temporary/2} <br><br><br>`);
// console.log(temporary+5);
// var temporary;
// console.log(temporary*10);
// var temporary;
// console.log(temporary/2);


 var currentYear = 2024;
 var birthYear = 2006;
 var myAge = currentYear-birthYear;
 document.write(`My age is ${myAge} <br><br><br>`);


 var radius = 20;
 var circumference = 2*3.142*radius;
 var area = 3.142*radius*radius;
 document.write(`<h1>The Geometrizer</h1> <br><br><br>`);
 document.write(`Radius of a Circle is ${radius} <br> The circumference of a circle is ${circumference} <br> The area of circle is ${area}<br><br><br>`);

 document.write(`<h1>The Lifetime Supply Calculator</h1> <br><br><br>`);
var favouriteSnak = "Chips";
var currentAge = 18;
var maxAge = 70;
var perdaySnak = 5;
var needSnak = (maxAge*perdaySnak) - (perdaySnak*currentAge);
document.write(`Favourite Snack :  ${favouriteSnak} <br>  Current age : ${currentAge} <br> Estimated Maximum Age : ${maxAge} <br> Amount of Snack Per Day : ${perdaySnak}<br>`);
document.write(`You will need ${needSnak} Snaks to last you until the ripe old age of ${maxAge}`);


