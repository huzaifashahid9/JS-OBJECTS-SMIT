//question1

// var firstName = prompt("Enter Your First Name : ");
// var LastName = prompt("Enter Your Last Name : ");
// var fullName = firstName + " " + LastName;
// alert(`Welcome ${fullName} to ABC Company`);

//question2
// var mobile = prompt("Enter Your Favourite Mobile Phone : ");
// document.write(`My Favourite Mobile Phone is : ${mobile} <br> Length of string is : ${mobile.length}`);

//question3
// var string = "Pakistani";
// var index = string.indexOf("n");


//question4
// var char = "Hello World";
// var index = char.lastIndexOf("l");
// document.write("String : " + char + "<br>");
// document.write(`Last Index of 'l' is : ${index}`);

//question5
// var char = "Pakistani";
// document.write(`Character at index 3 is : ${char[3]}`);

//question7
// var city = "Hyderabad";
// var replace = city.replace("Hyderabad","Islamabad");
// document.write(`City : ${city} <br> after Replacement : ${replace}`);

//question8
// var message = "Ali and Sami are best friends. They play cricket and football together."
// var replace = message.replaceAll("and","&");
// document.write(`Meesage : ${message} <br> after Replacement : ${replace}`);


//question9
// var value = "472";
// var num = parseInt(value) //+value //Number(value);
// document.write(`Value : ${value} <br> Type : ${typeof value} <br> Value : ${num} <br> Type : ${typeof num}`);

//question10
// var user = prompt("Enter any word : ");
// document.write(`User Input : ${user} <br> Upper Case : ${user.toUpperCase()}`);


//question11
// var user = prompt("Enter any word : ");
// var replace = user.charAt(0).toUpperCase() + user.slice(1);
// document.write(`User Input : ${user} <br> Title Case : ${replace}`);


//question12
// var num = 35.36;
// document.write(`Number : ${num} <br> Result : ${num.toString()}`);


//question13
// var special = [33,44,46,64]
// var userName = prompt("Enter Your User Name : ");
// for(i=0 ; i<userName.length ; i++){
//     if(special.includes(userName.charCodeAt(i))){
//         alert("Please enter valid username");
//         break;
//     }
// }


///question14
// var array = ["applpie","cake","cookies","chips","patties"];
// var userItem =  prompt("Welcome to ABC Bakery.What do you want to order sir/Madam").toLowerCase();
// for(i=0; i<=array.length ; i++){
//     if(userItem == array[i]){
//         document.write(`${array[i]} is Available at index ${i} in our Bakery <br>`);
//         break;
//     }
//     if(userItem != array[i]){
//         document.write(`We are Sorry, ${userItem} is Not Available in our Bakery`);
//         break;
//     }
// }


//question15


//question16
// var uni = "University of Karachi";
// for(i=0 ;i<uni.length ; i++){
//     document.write(`${uni[i]} <br>`);
// }


//question17
// var nationality = "Pakistani";
// document.write(`User Input : ${nationality} <br> Last character of Input : ${nationality.charAt(7)}`);


//question18
// var sentence = [1,2,3,3,4,5,]
// var found = 0;
// for(i=0 ; i<sentence.length ; i++){
//     if(sentence[i] == 3){
//         found++;
//         continue;
//     }
// }
// console.log(found);