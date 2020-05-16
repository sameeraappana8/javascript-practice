const person = {
    firstName: 'Sam',
    lastName: 'Appana',
    age: 22,
    hobbies: ['music', 'books','movies'],
    address: {
        street: '3241 jefferson ave',
        city: 'Cincinnati',
        state: 'OH'
    }
}

console.log(person.firstName,person.lastName,person.address.city);
console.log(person.hobbies[1]);

//destructuring
const { firstName, lastName, address: { city } } = person; //its pulling values from the object person
console.log(firstName)

//we can add properties

person.email = 'sam@gmail.com';
console.log(person.email);

//add objects inside arrays

const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: false
    }
];

console.log(todos[1].text);

//JSON is very similar to object literals

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

// For loops
for(let i = 0; i < 10; i++){
    console.log(i);
}

//While loop
let i=0;
while(i<10){
    console.log(i);
    i++;
}

// for looping over arrays: use for of loops

for(let i of todos){
    console.log(i)
}

//forEach, map, filter

todos.forEach(function(todo){
    console.log(todo.text);
});

//map returns an array
const todoText = todos.map(function(todo){
    return todo.text;
})

console.log(todoText);

//filter returns only specific values of the array which we want

const todoCompleted = todos.filter(function (todo){
    return todo.isCompleted === true;
}).map(function(todo){
    return todo.text;
})

console.log(todoCompleted);

//Conditionals
//In JS, "==" checks only the values are equal or not. "===" checks if the data type and value both are same or not
const x=10;
if(x === 10){
    console.log('x is 10');
}
else{
    console.log('x is NOT 10');
}

//ternary operator

const x = 10;
const color = x > 10 ? 'red' : 'blue';





