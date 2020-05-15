console.log('Hello World');
//variables in JS are var, let, const. But dont use var anymore
let age = 30;
age = 31;
console.log(age);

const age1= 20; //cannot reassign a new value to a const data type variable. can only do that to let variables.
//always use const data type variables unless you want to reassign a value to the variable.

console.log(age1);


//datatypes in JS are Strings, Numbers, Boolean, Null, undefined, Symbol(ES6)

const name = 'Sam'; // can be double or single quotes. semi colon is not mandatory
const age2 = 22;
const isCool = true;
const rating = 4.5; //there's no decimal or float type. there is only number
const x = null;
const y = undefined;
let z;

console.log(typeof age2);
console.log(typeof isCool); 
console.log(typeof rating);
console.log(typeof x); // type of null is object. its not really an object but its null. its just wrong. they didnt change it yet
console.log(typeof z);

//Strings concatination
console.log('My name is ' + name + ' and I am ' + age2); //this is old method
// Template String
console.log(`My name is ${name} and I am ${age2}`);

const s = 'Hello World';
console.log(s.length);
