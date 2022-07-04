/*
//........Normal function...........//
function sleep(name, time){
    console.log(name+" is sleeping from "+ time +"pm")
}
sleep("Leeon",12);
sleep("Adnan",11);


//.........Normal function..........//
//.........put return value into a variable & print.........//
function myFunction(a, b){
    return a*b;
}
let output = myFunction(5,6);
console.log(output);


//........Callback function........//
//........Normal function.........//
function calculator(num1, num2){
    return result = addition(num1,num2);
}

function addition(num1, num2){
    return num1+num2;
}
console.log(calculator(5,5));

//.....callback.....
function cal(num1, num2, cb){
    num3 = num1*num2; 
    return cb(num3, num3);
}
function adding(a,b){
    return a+b;
}
const display1 = cal(2,6,adding)
console.log(display1);

//or
const display2 = cal(3,7, function (a,b){
    return a*b;
}) 
console.log(display2);

*/ 



//print a string
const hello=(name)=>{
    return "Hello "+name;
}
console.log(hello("jahedul"))


// sum two numbers
const sum =  (a,b) => {
  return a+b;
}
console.log(sum(10,10));


//square function
const square = (a) => {
    return a * a;
}
console.log(square(3));

//temparature
const toCelsius = (fahrenheit)=>{
    return (5/9) * (fahrenheit-32);
  }
  console.log(toCelsius(40));


//find the highest value by decending sorting
let num = [5,1,9];
num.sort((a,b) => b - a );
console.log(num[0]);


//map and arrow 
const materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
  ];
console.log(materials.map(material => "Elements name are: "+material));

//map first name + last naem
const users = [{
    firstName: "Jahedul",
    lastName: "Hasan"
}];
const fullname = users.map(user => {
    return user.firstName+" "+user.lastName;
  });
  console.log(fullname);


//map & increase value +1
let n=[4,2,6];
const NumbersPlus = n.map((a)=>a+1);
console.log(NumbersPlus);


//using map find Length of every elemnts
let names = ['John', 'Mac', 'Peter'];
let lengths = names.map(name => name.length);
console.log(lengths);


// display sorting list of cars by year
const cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
  ];
  
cars.sort((a, b)=>{return a.year - b.year});
const displayCars = () => {
    return list = [
        cars[0].type + " " + cars[0].year,
        cars[1].type + " " + cars[1].year,
        cars[2].type + " " + cars[2].year
    ];
}
console.log(displayCars());


// Create a Map
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
  let text = "";  
  fruits.forEach((value, key)=>{ text += " "+ key +' = ' +value});
  console.log(text);

//filter
const filteredArray = [1,2,3,4].filter( num => num % 2 == 0);
console.log(filteredArray);


//filter
const persons= [
    {
      name: "Jahedul",
      age: 25,
    }];
const displayName = persons.filter(element => {return element.age == 25})
.map(name => { return name.name;
});
console.log(displayName);


//filter & map
let countries = [
    { "name": "Bangladesh"},
    { "name": "Brazil"}];
    const wordLengthCheck = countries.map(item => item.name).filter(item => item.length > 7);
    console.log(wordLengthCheck);



//set color by arrow function and object literal
let setColor = (color) => ({value: color });
let carColor = setColor("Silver");
console.log(carColor.value);

//hello gretting

  const greeter = greeting => name => `${greeting}, ${name}!`
  const myGreet = greeter('Good morning')
  console.log( myGreet('jahedul')) 


// try this keyword access in arrow
var person = {
    firstName: 'Jahedul',
    lastName:'Hasan',
    sayHello: () => {
        //this here this is a global object and not person object
        return 'Hello '+this.firstName+ ' '+this.lastName;    
    },
    sayHello1: function() {
        //because it is a method invocation
        return 'Hello '+this.firstName+ ' '+this.lastName;     
    }
};

console.log(person.sayHello());
console.log(person.sayHello1());


//event click
let clicked = () => {
   document.getElementById("paragraph").innerText = "Arrow function";
    } 
document.getElementById("btn").addEventListener("click", clicked);



// //sum of all elements by taking arguments
// const sumAll = () => {
//     let sum = 0;
//     for (let i = 0; i < arguments.length; i++) {
//       sum += arguments[i];
//     }
//     return sum;
//   }
// console.log( sumAll(2, 4, 6, 8, 100));



//IIFE

(function() { 
    console.log("Welcome to JavaScript!"); 
})();


(function(a,b) { 
    console.log(a+b); 
})(10,20);


(function(dt) {
    console.log(dt.toLocaleTimeString());
})(new Date());