var myVariable = "hello";
// "hello" is the data we are storing in our variable
//  name of the variable 
//  what is var? Variable

var anything = "hello"; // string
var anything1 = 1; // number
var anythingTrue = true; // boolean(true or false)

let anythingLet = "let" // let  means your variable can be changed later
const anythingConst = "const" // const means your variable cannot be changed later

anythingLet = "lettuce" // this is allowed
anythingConst = "consttt" // this is not allowed/you cannot change the value of a const variable
let thisVariable = "hello";
let camelCase = "hello";
let snake_case = "hello";
let OneTwoThree = "hello";
let thisIsExactlyWhatIWant = "hello";

console.log(myVariable); // console.log is a function that prints out the value of a variable
window.alert(myVariable); // window.alert is a function that creates a pop-up with the value of a variable
console.log(anything);
//use const first
//only use let when needed
//Industry stardard

console.log(anything1);

//Expressions & Operators
//Expressions are anything that evaluates to a single value
const addVariable = 1 + 1
const subtractVariable = 1 - 1
const multiplyVariable = 1 * 1
const divideVariable = 1 / 1

//Equal ===
//Not Equal !==
//And &&
//Or ||
// Activity: Create a function that takes an age variable and tells us
// which age group they belong to (such as "Teenager" "Young adult" "infant" etc)
// Infant
// Child
// Preteen
// Teenager
// Young Adult
// Middle-age
// Senior
const age = 5
function getAgeGroup(){
    if (age <= 3 && age >= 0){
        console.log("Infant")
    }
    if (age > 3 && age < 10){
        console.log("Child")
    }
    if (age >= 10 && age <= 12){
        console.log("Preteen")
    }
    if (age < 20 && age >= 13){
        console.log("Teenager")
    }
    if (age >= 20 && age <= 40){
        console.log("Young Adult")
    }
    if (age > 40 && age <= 60){
        console.log("Middle-aged Adult")
    }
    if (age > 60 && age <= 120) {
        console.log("Senior")
    }
}

getAgeGroup()
 




function checkLeapYear(year){
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
        console.log("Leap Year")
    } else {
        console.log("Not a Leap Year")
    }
}
checkLeapYear(2020)
checkLeapYear(2021)
checkLeapYear(2024)
checkLeapYear(1900)

function myFunction(){
    let i = 0
    while(i<10){
        console.log("Hello")
        i = i + 1 // 0+1; 1+1; 2+1; 3+1; 4+1; 5+1; 6+1; 7+1; 8+1; 9+1
    }
}
myFunction()