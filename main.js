console.log('Hello World');
//variables in JS are var, let, const. But dont use var anymore
let age;
age = 31;
console.log(age);

const age1=21; //cannot reassign a new value to a const data type variable. can only do that to 'let' variables.
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

//String properties and methods. A property doesnt have parenthesis. A mentho will have parenthesis
const s = 'Hello World';
console.log(s.length); // for getting length. It is a property.

console.log(s.toLowerCase());
console.log(s.substring(0,5));
console.log(s.split('')); 

// Arrays - variables that hold multiple values

/* this is a
multi line 
comment */

// creating an array using constructor - less used method
const numbers = new Array(1,2,3,4,5);
console.log(numbers);

//creating an array - normal way
/* In javascript arrays can have any data type values in the array. Also we dont have to specify the size of the array. 

*/
const fruits = ['apples', 'oranges', 'pears', 10, true];
console.log(fruits[0]);
fruits[3] = 'grapes'; // we can add new values to the array like this while array is defined as const. we cant redefine the array as fruits = []. that will give error
console.log(fruits);
fruits.push('mangoes'); //to add at the end of the array
fruits.unshift('strawberries'); // to add at the beginning of the array
console.log(fruits);
fruits.pop(); // to remove the last element in the array
console.log(fruits);

console.log(Array.isArray('hello'));
console.log(fruits.indexOf('oranges'));

