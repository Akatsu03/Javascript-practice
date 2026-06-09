//console.log("Hello World");

//window.alert("Welcome to my website!");
//window.alert("I Like madam hai")

//document.getElementById("H1").textContent = `I'm  Josh and Welcom to my website!`;
//document.getElementById("fave food").textContent = `My Favorite Merienda is Siopao and C2`;

//Lesson 2 variables

/*let x = 10;
strings and numbers
console.log(x);

let age =22;
let name = "Josh";
let year = 2026;
let avg =88.5;
console.log(`Hello, I'm ${name} and I'm ${age} and i graduated in ${year} and my grade average is ${avg} `);
*/

/*let = available = true;
let Item = false;
let isemployed = true;

console.log(typeof available);
console.log("I am available: " + available);
console.log("Is the item available? " + Item);
console.log("Am I employed? " + isemployed);*/
/*
let fullname= "Marc-Josh";
let age = 22;
let isemployed = true;

document.getElementById("p1").textContent = `My name is ${fullname}`;
document.getElementById("p2").textContent = `I am ${age} years old`;
document.getElementById("p3").textContent = `Am I employed? ${isemployed}`;*/

/*
numerical operators
let employees = 50;
let office = 5;
employees = employees + 10;
let employeesPerOffice = employees / office;

console.log(`There are ${employeesPerOffice} employees per office.`); */

 //user inputs

 /*let username;

 username = window.prompt("What is your name?");

 console.log(`Hello, ${username}! Welcome to my website!`);*/
// DOM manipulation strings paragraphs
 /*let userInput;
 document.getElementById("btn1").onclick = function() {
    userInput = document.getElementById("input1").value;
    document.getElementById(`myh1`).textContent = `My In Game Name is  ${userInput}`;
}*/

//data conversion

/* let age = window.prompt("How old are you?");
age = Number(age);
let nextYearAge = age + 1;
console.log(`Next year, you will be ${nextYearAge} years old.`);*/

/*let x = 'siopao';
let y = 'c2';
let z = 'sauce';

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x);
console.log(y);
console.log(z);*/

/*const PI = 3.14159;
let radius;
let circumference;



circumference = 2 * PI * radius;

 document.getElementById("submit").onclick = function() {
    radius= document.getElementById("myinput").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("output").textContent = circumference;
}*/

//increment and decrement operators
/*const decreasebtn = document.getElementById("decreasebtn");
const increasebtn = document.getElementById("increasebtn");
const resetbtn = document.getElementById("resetbtn");
const countlabel = document.getElementById("countlabel");
let count = 0;

increasebtn.onclick = function() {
    count++;
    countlabel.textContent = count;
}
decreasebtn.onclick = function() {
    count--;
    countlabel.textContent = count;
}
resetbtn.onclick = function(){
    count = 0;
    countlabel.textContent = count;
}*/
//random number generator
/*const myButton = document.getElementById("roll");
const MyLabel = document.getElementById("number");
const min = 100000;
const max = 999999;
let randomNumber;

myButton.onclick = function() {
    randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    MyLabel.textContent = randomNumber;
}*/
// if else statements
/*const myButton = document.getElementById("submit");
const mygradesInput = document.getElementById("grades");
const result = document.getElementById("output");
const result2 = document.getElementById("output2");

myButton.onclick = function() {
   let mygrades = mygradesInput.value;
   mygrades = Number(mygrades);
   
   if (mygrades >= 75) {
       result.textContent = "Passed";
       if (mygrades >= 90) {
        result2.textContent = "Excellent Efforts!";
       }
        else if (mygrades >= 85 && mygrades < 90){
    result2.textContent = "You're so close keep improving!";
        }
     else if (mygrades >= 80 && mygrades < 85) {
        result2.textContent = "Not bad but you can do better!";
    }
   }
   
  
   else {
       result.textContent = "Failed";
       result2.textContent = "You're a Dumbass!";
   }
}*/

// check boxes
/*

const mycheckbox = document.getElementById("mycheckbox");
const mybtn1 = document.getElementById("option1");
const mybtn2 = document.getElementById("option2");
const mybtn3 = document.getElementById("option3");
const mysubmit = document.getElementById("submit");
const  result1 = document.getElementById("result");
const  result2 = document.getElementById("result2");

mysubmit.onclick = function() {
if (mycheckbox.checked) {
    result1.textContent = "You are legal to drive!";
} else {
    result1.textContent = "You are not legal to drive.";
}
if (mybtn1.checked) {
    result2.textContent = "You selected Honda. your options are a Civic or Accord.";
} else if (mybtn2.checked) {
    result2.textContent = "You selected Toyota. your options are a Camry or Corolla.";
} else if (mybtn3.checked) {
    result2.textContent = "You selected Mitsubishi. your options are a Lancer or Eclipse.";
}
else{
    result2.textContent = "Broke ass leave if you ain't gonna buy";
}
}*/

// ternary operators
/*
let price = 1000;
let discount = price >= 100? 10 : 0;

console.log(`your payment is ${price - price * (discount/100) }` );*/
/*
let inventory = 100;
let capacity = 1000;
let percent = (inventory/inventory)* 100;
let level;

switch(true){
    case (percent===100):
        level = 'full';
        break;
         case (percent>=75):
        level = 'optimal status';
        break;
         case (percent>=50):
        level = 'moderate status';
        break;
         case (percent>=25):
        level = 'low status';
        break;
        default:
            level ='empty'
}console.log(`the status is ${level} (${percent}%)`);*/
//logical operators && || !
/*
let grades = 89;

if (grades <=75 || grades >= 100){
    console.log(`I'm sorry try again next semester`);
}
else{
    console.log(`Congrats`)
}*/

//strict equality
/*
const pass = "password";
const password = document.getElementById("password");
const button = document.getElementById("submit");
const output = document.getElementById("output");

button.onclick = function(){

    if(password.value !== pass){
        output.textContent= "Your Password is Wrong";
    }
    else{
        output.textContent = "Your Password is Correct";
    }
}
*/

//while and do while
/*
let isloggedin = true;
let username;
let password;


while(!isloggedin){
    username = window.prompt(`Enter Username`)
     password = window.prompt(`Enter Password`)

    if(username === "Akatsu" && password === "Akachan"){
      isloggedin = true;
        console.log ("You Entered the right password welcome to the website");

    }
    else{
       alert("Wrong password dum dum") ;
    }
    
}*/
//for loops
/*
let i ="akatsu";
for( i = 0; i<=20; i++){
    console.log(i);
}*/
//number guessing game
/*
const minNum = 50;
const maxNum = 100;
const answer = Math.floor(Math.random()*(maxNum - minNum + 1)) + minNum;

let attemps = 0;
let guess;
let running = true;

while(running){
    guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`)
    guess = Number(guess);
   if(isNaN(guess)){
    window.alert("Please Enter a Number")
   }
   else if(guess <= minNum || guess >= maxNum){
    window.alert("Please enter a number within the range of 50 to 100")
   }else{
        attemps++;
        if(guess < answer){
            window.alert("Too low try again");
        }
        else if(guess > answer){
            window.alert("Too High Try again");
        }
        else{
           
            window.alert(`The answer you provided is Correct the attemps it took you is ${attemps} `);
             running = false;
        }
   }
   
}*/
// functions
/*
function add(x,y){
    return x + y;
}
function subtract(x,y){
    return x - y;

}
function multiply(x,y){
    return x * y;

}
function divide(x,y){
    return x / y;

}
function iseven(number){
    return number % 2 === 0? true : false;
}
function isEmailValid(email){
    if(email.includes("@")){
        return true;
    }
    else{
      return  false;
    }
}
 

console.log(isEmailValid("mjoshsorianogmail.com"));*/ 
const textbox = document.getElementById("textbox");
const toLbs = document.getElementById("ToLbs");
const toKg = document.getElementById("ToKg");
const result = document.getElementById("result");
let weight;

function convert(){
    if(toLbs.checked){
        weight = Number(textbox.value);
        weight = weight * 2.20462;
        result.textContent=`The Conversion from KG to LBS is ${Math.round(weight)}`
    }
    
    else if(toKg.checked){
      weight = Number(textbox.value);
        weight = weight / 2.20462;
        result.textContent=`The Conversion from LBS  to KG is ${Math.round(weight)}`
    }
    
    else{
        result.textContent ="Please Select a unit";
    }
}