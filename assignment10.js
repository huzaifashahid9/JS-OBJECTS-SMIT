//question1



//question2



//question3
// for ( i = 1; i <= 10 ; i++) {
//     document.write(`${i} <br>`);
// }


//question4
// var table = +prompt("Enter Your Table Number : ");
// var tableLength = +prompt("Enter Your Table Length : ");

// for(i=1; i<=tableLength; i++){
//     document.write(`${table} x ${i} = ${table*i} <br>`);
// }



//question5
// var fruits = ["Apple","Banana","Mango","Orange","Strawberry"];
// for(i=0 ; i<fruits.length ;i++){
//     document.write(`${fruits[i]} <br>`);
// }
// for(i=0 ; i<fruits.length ;i++){
//     document.write(`Element at Index ${i} is ${fruits[i]} <br>`);
// }



//question6
//counting
// for(i=1 ; i<=15 ; i++){
//     document.write(`${i} <br>`)
// }

// document.write("<br><br>");
// //reverse
// for(i=10 ; i>=1 ; i--){
//     document.write(`${i} <br>`)
// }

// document.write("<br><br>");
// //even
// for(i=0 ; i<=20 ; i++){
//     if(i%2==0){
//         document.write(`${i} <br>`);
//     }
    
// }

// document.write("<br><br>");
// //odd
// for(i=1 ; i<=19 ; i++){
//     if(i%2!=0){
//         document.write(`${i} <br>`);
//     }
    
// }


//question7
// var array = ["applpie","cake","cookies","chips","patties"];
// var userItem =  prompt("Welcome to ABC Bakery.What do you want to order sir/Madam");
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


//question8
// var array = [24,53,78,91,12];
// var max = array[0];
// for(i=0 ;i<array.length ; i++){
//     document.write(`  ${array[i]},`);
// }
// document.write("<br><br>")
// for(i=0 ; i<array.length ; i++){
//     if(max < array[i]){
//        max = array[i];
//     }
// }
// document.write(`The Largest Item  in Array is ${max}<br>`)


//question9
// var array = [24,53,78,91,12];
// var min = array[0];
// for(i=0 ;i<array.length ; i++){
//     document.write(`  ${array[i]},`);
// }
// document.write("<br><br>")
// for(i=0 ; i<array.length ; i++){
//     if(min > array[i]){
//        min = array[i];
//     }
// }
// document.write(`The Smallest Item  in Array is ${min}<br>`);