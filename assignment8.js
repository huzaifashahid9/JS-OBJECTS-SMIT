//question1
// var num = prompt("Enter any character : ");
// var ascii = num.charCodeAt(0);
// if(ascii>=48 && ascii<=57){
//     document.write(`The Input is a number`);
// }else if(ascii>=65 && ascii<=90){
//     document.write(`The Input is an Uppercase`);
// }else if(ascii>=97 && ascii<=122){
//     document.write(`The Input is a Lowercase`);
// }else{
//     document.write(`Input is a Special Character`);
// }

//question2
// var num1 = +prompt("Enter Number 1 : ");
// var num2 = +prompt("Enter Number 2 : ");
// if(num1 > num2){
//     document.write(`${num1} is Greater than ${num2}`);
// }else if(num1 == num2){
//     document.write(`${num1} are Equal ${num2}`);
// }else{
//     document.write(`${num2} is Greater than ${num1}`);
// }

//question3
// var num =+prompt("Enter a Number :");
// if(num >= 0){
//     if(num == 0){
//         document.write(`${num} is Equal to Zero`);
//     }else{
//         document.write(`${num} is Positive`);
//     }
// }else if(num < 0){
//     document.write(`${num} is Negative`);
// }

//question4
// var char = prompt("Enter a Single character (a-z) : ");
// char = char.toLowerCase();
// if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
//     document.write(`${char} is Vowel Word`);
// }else{
//     document.write(`${char} is Consonant Word`);
// }


//question5
// var correctPass = "mypass123";
// var userPass = prompt("Enter Your Password : ");
// if(userPass === ""){
//     document.write("Please Enter Your Password");
// }else if(userPass === correctPass){
//     document.write("Correct!");
// }else{
//     document.write("Incorrect Password");
// }



//question6
// var greeting;
// var hour = 13;
// if(hour < 18){
//     greeting = "Good Day";
// }else{
//     greeting = "Good Evening!";
// }




//question7
// Take input from the user
// var time = prompt("Enter time in 24-hour format (e.g., 1900 for 7 PM):");

// // Extract hour and minute parts from the input
// var hour = Math.floor(time / 100);  // Get the hour part (e.g., 19 from 1900)
// var minute = time % 100;  // Get the minute part (e.g., 00 from 1900)

// // Variable to hold the period (AM/PM)
// var period = "AM";

// // Using if-else statements to convert the hour
// if (hour === 0) {
//     hour = 12;  // Midnight is 12:00 AM
//     period = "AM";
// } else if (hour >= 12) {
//     if (hour > 12) {
//         hour -= 12;  // Convert 13-23 to 1-11 for PM times
//     }
//     period = "PM";
// } else {
//     period = "AM";  // Keep AM for times between 1:00 and 11:59
// }

// // Output the result in 12-hour format
// console.log("The time in 12-hour format is: " + hour + ":" + (minute < 10 ? "0" + minute : minute) + " " + period);


























